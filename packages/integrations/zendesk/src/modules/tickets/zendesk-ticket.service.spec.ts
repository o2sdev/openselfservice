import type { HttpService } from '@nestjs/axios';
import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { firstValueFrom, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Users } from '@o2s/framework/modules';

import type { TicketObject } from '@/generated/zendesk';
import {
    listSearchResults,
    listTicketComments,
    createTicket as sdkCreateTicket,
    searchUsers,
    showTicket,
    showUser,
} from '@/generated/zendesk';

import { ZendeskTicketService } from './zendesk-ticket.service';

// SDK response types require request/response; we only mock data in tests
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asMock = (v: object): any => v;

const TOPIC_FIELD_ID = 999;
const CONTACT_FORM_ID = 100;

const minimalTicket = {
    id: 1,
    requester_id: 10,
    subject: 'Test',
    description: 'Desc',
    status: 'open' as const,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z',
    custom_fields: [{ id: TOPIC_FIELD_ID, value: 'CONTACT_US' }],
};

const minimalUser = {
    id: 10,
    name: 'User',
    email: 'user@example.com',
};

/** Returns the first argument of the last listSearchResults call (the query object). */
function getLastListSearchCallArg(): { query: { query: string; page?: number; per_page?: number } } {
    const calls = vi.mocked(listSearchResults).mock.calls;
    expect(calls.length).toBeGreaterThan(0);
    return calls[calls.length - 1]![0] as { query: { query: string; page?: number; per_page?: number } };
}

vi.mock('@/generated/zendesk/client.gen', () => ({
    client: { setConfig: vi.fn() },
}));

vi.mock('@/generated/zendesk', () => ({
    showTicket: vi.fn(),
    showUser: vi.fn(),
    listTicketComments: vi.fn(),
    listSearchResults: vi.fn(),
    searchUsers: vi.fn(),
    createTicket: vi.fn(),
}));

describe('ZendeskTicketService', () => {
    let service: ZendeskTicketService;
    let mockUsersService: { getCurrentUser: ReturnType<typeof vi.fn> };
    let mockHttpService: { post: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        process.env.ZENDESK_API_URL = 'https://test.zendesk.com';
        process.env.ZENDESK_API_TOKEN = 'test-token';
        process.env.ZENDESK_TOPIC_FIELD_ID = String(TOPIC_FIELD_ID);
        process.env.ZENDESK_CONTACT_FORM_ID = String(CONTACT_FORM_ID);
        process.env.ZENDESK_COMPLAINT_FORM_ID = '101';
        process.env.ZENDESK_REQUEST_DEVICE_MAINTENANCE_FORM_ID = '102';

        mockUsersService = { getCurrentUser: vi.fn() };
        mockHttpService = {
            post: vi.fn().mockReturnValue(of({ data: { upload: { token: 'upload-token' } } })),
        };

        service = new ZendeskTicketService(
            mockUsersService as unknown as Users.Service,
            mockHttpService as unknown as HttpService,
        );
    });

    describe('getTicket', () => {
        it('should return mapped ticket when user email matches requester', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(showTicket).mockResolvedValue(asMock({ data: { ticket: minimalTicket } }));
            vi.mocked(showUser).mockResolvedValue(asMock({ data: { user: minimalUser } }));
            vi.mocked(listTicketComments).mockResolvedValue(asMock({ data: { comments: [] } }));

            const result = await firstValueFrom(service.getTicket({ id: '1' }, 'Bearer token'));

            expect(result).toBeDefined();
            expect(result?.topic).toBe('CONTACT_US');
            expect(result?.status).toBe('OPEN');
            expect(result?.id).toBe('1');
        });

        it('should throw NotFoundException when user has no email', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: undefined }));

            await expect(firstValueFrom(service.getTicket({ id: '1' }, 'Bearer token'))).rejects.toThrow(
                NotFoundException,
            );
        });

        it('should return undefined when requester email does not match user email', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(showTicket).mockResolvedValue(asMock({ data: { ticket: minimalTicket } }));
            vi.mocked(showUser).mockResolvedValue(
                asMock({
                    data: { user: { ...minimalUser, email: 'other@example.com' } },
                }),
            );
            vi.mocked(listTicketComments).mockResolvedValue(asMock({ data: { comments: [] } }));

            const result = await firstValueFrom(service.getTicket({ id: '1' }, 'Bearer token'));

            expect(result).toBeUndefined();
        });

        it('should return undefined when ticket has no requester_id', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(showTicket).mockResolvedValue(
                asMock({
                    data: {
                        ticket: { ...minimalTicket, requester_id: undefined } as unknown as TicketObject,
                    },
                }),
            );
            vi.mocked(listTicketComments).mockResolvedValue(asMock({ data: { comments: [] } }));

            const result = await firstValueFrom(service.getTicket({ id: '1' }, 'Bearer token'));

            expect(result).toBeUndefined();
        });

        it('should propagate error when showTicket fails', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(showTicket).mockRejectedValue({ status: 404 });

            await expect(firstValueFrom(service.getTicket({ id: '999' }, 'Bearer token'))).rejects.toThrow(
                /Failed to fetch ticket/,
            );
        });

        it('should map comments with authors when authorMap is built', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(showTicket).mockResolvedValue(asMock({ data: { ticket: minimalTicket } }));
            vi.mocked(showUser).mockResolvedValue(asMock({ data: { user: minimalUser } }));
            vi.mocked(listTicketComments).mockResolvedValue(
                asMock({
                    data: {
                        comments: [
                            {
                                author_id: 5,
                                body: 'Comment text',
                                created_at: '2024-01-02T10:00:00Z',
                            },
                        ],
                    },
                }),
            );
            vi.mocked(showUser)
                .mockResolvedValueOnce(asMock({ data: { user: minimalUser } }))
                .mockResolvedValueOnce(
                    asMock({
                        data: { user: { id: 5, name: 'Agent', email: 'agent@zendesk.com' } },
                    }),
                );

            const result = await firstValueFrom(service.getTicket({ id: '1' }, 'Bearer token'));

            expect(result?.comments).toHaveLength(1);
            const firstComment = result?.comments?.[0];
            expect(firstComment?.content).toBe('Comment text');
            expect(firstComment?.author.name).toBe('Agent');
        });
    });

    describe('getTicketList', () => {
        it('should return tickets and total when user has email', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(listSearchResults).mockResolvedValue(
                asMock({
                    data: {
                        results: [minimalTicket],
                        count: 1,
                    },
                }),
            );

            const result = await firstValueFrom(service.getTicketList({ limit: 10, offset: 0 }, 'Bearer token'));

            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
            expect(result.data[0]!.topic).toBe('CONTACT_US');
        });

        it('should throw NotFoundException when user has no email', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: undefined }));

            await expect(firstValueFrom(service.getTicketList({ limit: 10 }, 'Bearer token'))).rejects.toThrow(
                NotFoundException,
            );
        });

        it('should include status filter in search query for CLOSED', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(listSearchResults).mockClear();
            vi.mocked(listSearchResults).mockResolvedValue(asMock({ data: { results: [], count: 0 } }));

            await firstValueFrom(service.getTicketList({ limit: 10, offset: 0, status: 'CLOSED' }, 'Bearer token'));

            expect(getLastListSearchCallArg().query.query).toContain('status:solved');
        });

        it('should include topic in search query', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(listSearchResults).mockClear();
            vi.mocked(listSearchResults).mockResolvedValue(asMock({ data: { results: [], count: 0 } }));

            await firstValueFrom(service.getTicketList({ limit: 10, offset: 0, topic: 'BILLING' }, 'Bearer token'));

            expect(getLastListSearchCallArg().query.query).toContain('tags:billing');
        });

        it('should calculate page from offset and limit', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(listSearchResults).mockClear();
            vi.mocked(listSearchResults).mockResolvedValue(asMock({ data: { results: [], count: 0 } }));

            await firstValueFrom(service.getTicketList({ limit: 5, offset: 10 }, 'Bearer token'));

            const query = getLastListSearchCallArg().query;
            expect(query.page).toBe(3);
            expect(query.per_page).toBe(5);
        });

        it('should propagate error when listSearchResults fails', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(listSearchResults).mockRejectedValue(new Error('Network error'));

            await expect(firstValueFrom(service.getTicketList({ limit: 10 }, 'Bearer token'))).rejects.toThrow(
                /Failed to fetch tickets/,
            );
        });
    });

    describe('createTicket', () => {
        it('should return created ticket when description and type are valid', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(searchUsers).mockResolvedValue(asMock({ data: { users: [minimalUser] } }));
            vi.mocked(sdkCreateTicket).mockResolvedValue(
                asMock({
                    data: {
                        ticket: {
                            ...minimalTicket,
                            id: 99,
                            ticket_form_id: CONTACT_FORM_ID,
                        },
                    },
                }),
            );

            const result = await firstValueFrom(
                service.createTicket(
                    {
                        description: 'Issue description',
                        type: CONTACT_FORM_ID,
                    },
                    'Bearer token',
                ),
            );

            expect(result).toBeDefined();
            expect(result.id).toBe('99');
        });

        it('should throw BadRequestException when description is missing', async () => {
            await expect(
                firstValueFrom(service.createTicket({ description: '', type: CONTACT_FORM_ID }, 'Bearer token')),
            ).rejects.toThrow(BadRequestException);
        });

        it('should throw BadRequestException when type is missing', async () => {
            await expect(
                firstValueFrom(service.createTicket({ description: 'Desc', type: undefined }, 'Bearer token')),
            ).rejects.toThrow(BadRequestException);
        });

        it('should throw NotFoundException when user has no email', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: undefined }));

            await expect(
                firstValueFrom(service.createTicket({ description: 'Desc', type: CONTACT_FORM_ID }, 'Bearer token')),
            ).rejects.toThrow(NotFoundException);
        });

        it('should throw BadRequestException when type does not match configured form IDs', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));

            await expect(
                firstValueFrom(service.createTicket({ description: 'Desc', type: 999 }, 'Bearer token')),
            ).rejects.toThrow(BadRequestException);
        });

        it('should throw InternalServerErrorException when ZENDESK_TOPIC_FIELD_ID is not set', async () => {
            delete process.env.ZENDESK_TOPIC_FIELD_ID;
            service = new ZendeskTicketService(
                mockUsersService as unknown as Users.Service,
                mockHttpService as unknown as HttpService,
            );
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(searchUsers).mockResolvedValue(asMock({ data: { users: [minimalUser] } }));

            await expect(
                firstValueFrom(service.createTicket({ description: 'Desc', type: CONTACT_FORM_ID }, 'Bearer token')),
            ).rejects.toThrow(InternalServerErrorException);
        });

        it('should call HttpService.post for attachments and pass upload tokens to createTicket', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(searchUsers).mockResolvedValue(asMock({ data: { users: [minimalUser] } }));
            vi.mocked(sdkCreateTicket).mockResolvedValue(
                asMock({
                    data: {
                        ticket: {
                            ...minimalTicket,
                            id: 100,
                            ticket_form_id: CONTACT_FORM_ID,
                        },
                    },
                }),
            );

            await firstValueFrom(
                service.createTicket(
                    {
                        description: 'Desc',
                        type: CONTACT_FORM_ID,
                        attachments: [
                            {
                                filename: 'file.pdf',
                                content: Buffer.from('x'),
                                contentType: 'application/pdf',
                            },
                        ],
                    },
                    'Bearer token',
                ),
            );

            expect(mockHttpService.post).toHaveBeenCalled();
            expect(sdkCreateTicket).toHaveBeenCalledWith(
                expect.objectContaining({
                    body: expect.objectContaining({
                        ticket: expect.objectContaining({
                            comment: expect.objectContaining({
                                uploads: ['upload-token'],
                            }),
                        }),
                    }),
                }),
            );
        });

        it('should throw InternalServerErrorException when createTicket response has no ticket', async () => {
            mockUsersService.getCurrentUser.mockReturnValue(of({ email: 'user@example.com' }));
            vi.mocked(searchUsers).mockResolvedValue(asMock({ data: { users: [minimalUser] } }));
            vi.mocked(sdkCreateTicket).mockResolvedValue(asMock({ data: {} }));

            await expect(
                firstValueFrom(service.createTicket({ description: 'Desc', type: CONTACT_FORM_ID }, 'Bearer token')),
            ).rejects.toThrow(InternalServerErrorException);
        });
    });
});
