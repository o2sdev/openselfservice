import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type { TicketObject } from '@/generated/zendesk';

import { mapTicketToModel } from './zendesk-ticket.mapper';

// Minimal shapes matching Zendesk API types used by the mapper
const TOPIC_FIELD_ID = 999;

function createTicket(overrides: Partial<TicketObject> = {}): TicketObject {
    return {
        id: 123,
        requester_id: 1,
        subject: 'Test subject',
        description: 'Test description',
        status: 'open',
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-02T00:00:00Z',
        custom_fields: [{ id: TOPIC_FIELD_ID, value: 'contact_us' }],
        ticket_form_id: undefined,
        ...overrides,
    } as TicketObject;
}

function createComment(overrides: Record<string, unknown> = {}) {
    return {
        author_id: 1,
        body: 'Comment body',
        created_at: '2024-01-02T10:00:00Z',
        attachments: undefined,
        ...overrides,
    };
}

describe('zendesk-ticket.mapper', () => {
    beforeEach(() => {
        process.env.ZENDESK_TOPIC_FIELD_ID = String(TOPIC_FIELD_ID);
    });

    afterEach(() => {
        delete process.env.ZENDESK_TOPIC_FIELD_ID;
        delete process.env.ZENDESK_CONTACT_FORM_ID;
        delete process.env.ZENDESK_TERMS_ACCEPTANCE_FIELD_ID;
    });

    describe('mapTicketToModel', () => {
        it('should map complete ticket with all fields to framework model', () => {
            const ticket = createTicket();
            const result = mapTicketToModel(ticket);

            expect(result.id).toBe('123');
            expect(result.createdAt).toBe('2024-01-01T00:00:00Z');
            expect(result.updatedAt).toBe('2024-01-02T00:00:00Z');
            expect(result.topic).toBe('CONTACT_US');
            expect(result.status).toBe('OPEN');
            expect(result.properties).toContainEqual({ id: 'subject', value: 'Test subject' });
            expect(result.properties).toContainEqual({ id: 'description', value: 'Test description' });
        });

        it('should map closed and solved status to CLOSED', () => {
            expect(mapTicketToModel(createTicket({ status: 'closed' })).status).toBe('CLOSED');
            expect(mapTicketToModel(createTicket({ status: 'solved' })).status).toBe('CLOSED');
        });

        it('should map pending and hold status to IN_PROGRESS', () => {
            expect(mapTicketToModel(createTicket({ status: 'pending' })).status).toBe('IN_PROGRESS');
            expect(mapTicketToModel(createTicket({ status: 'hold' })).status).toBe('IN_PROGRESS');
        });

        it('should map new and open status to OPEN', () => {
            expect(mapTicketToModel(createTicket({ status: 'new' })).status).toBe('OPEN');
            expect(mapTicketToModel(createTicket({ status: 'open' })).status).toBe('OPEN');
        });

        it('should map unknown status to OPEN', () => {
            const ticket = createTicket();
            (ticket as { status: string }).status = 'unknown';
            const result = mapTicketToModel(ticket);
            expect(result.status).toBe('OPEN');
        });

        it('should throw Error when topic field is missing', () => {
            const ticket = createTicket({ custom_fields: [] });

            expect(() => mapTicketToModel(ticket)).toThrow(/Topic field not found or empty for ticket 123/);
        });

        it('should throw Error when topic field has empty value', () => {
            const ticket = createTicket({
                custom_fields: [{ id: TOPIC_FIELD_ID, value: '' }],
            });

            expect(() => mapTicketToModel(ticket)).toThrow(/Topic field not found or empty for ticket 123/);
        });

        it('should throw Error when ZENDESK_TOPIC_FIELD_ID is not set', () => {
            delete process.env.ZENDESK_TOPIC_FIELD_ID;
            const ticket = createTicket();

            expect(() => mapTicketToModel(ticket)).toThrow(/Topic field not found or empty for ticket 123/);
        });

        it('should map comments with author from authorMap', () => {
            process.env.ZENDESK_CONTACT_FORM_ID = '1';
            const ticket = createTicket();
            const comments = [createComment({ author_id: 10, body: 'First', created_at: '2024-01-02T10:00:00Z' })];
            const authorMap = new Map([
                [
                    10,
                    {
                        id: 10,
                        name: 'Agent One',
                        email: 'agent@example.com',
                    },
                ],
            ]);

            const result = mapTicketToModel(ticket, comments, authorMap);

            expect(result.comments).toHaveLength(1);
            expect(result.comments![0]).toEqual({
                author: { name: 'Agent One', email: 'agent@example.com' },
                date: '2024-01-02T10:00:00Z',
                content: 'First',
            });
        });

        it('should use fallback when author not in authorMap', () => {
            const ticket = createTicket();
            const comments = [createComment({ author_id: 99, body: 'No author' })];

            const result = mapTicketToModel(ticket, comments);

            expect(result.comments).toHaveLength(1);
            const comment = result.comments?.[0];
            expect(comment).toBeDefined();
            expect(comment!.author.name).toBe('99');
            expect(comment!.author.email).toBe('');
            expect(comment!.content).toBe('No author');
        });

        it('should map attachments from comments', () => {
            const ticket = createTicket();
            const comments = [
                createComment({
                    author_id: 1,
                    attachments: [
                        {
                            file_name: 'doc.pdf',
                            content_url: 'https://example.com/doc.pdf',
                            size: 1024,
                        },
                    ],
                }),
            ];
            const authorMap = new Map([[1, { id: 1, name: 'User', email: 'u@ex.com' }]]);

            const result = mapTicketToModel(ticket, comments, authorMap);

            expect(result.attachments).toHaveLength(1);
            expect(result.attachments![0]).toMatchObject({
                name: 'doc.pdf',
                url: 'https://example.com/doc.pdf',
                size: 1024,
                author: { name: 'User', email: 'u@ex.com' },
                ariaLabel: 'doc.pdf',
            });
        });

        it('should have undefined comments and attachments when none provided', () => {
            const ticket = createTicket();
            const result = mapTicketToModel(ticket, []);

            expect(result.comments).toBeUndefined();
            expect(result.attachments).toBeUndefined();
        });

        it('should include consent field false for CONTACT_US form', () => {
            process.env.ZENDESK_CONTACT_FORM_ID = '100';
            process.env.ZENDESK_TERMS_ACCEPTANCE_FIELD_ID = '888';
            const ticket = createTicket({
                ticket_form_id: 100,
                custom_fields: [
                    { id: TOPIC_FIELD_ID, value: 'CONTACT_US' },
                    { id: 888, value: false },
                ] as TicketObject['custom_fields'],
            });

            const result = mapTicketToModel(ticket);

            const termsProp = result.properties?.find((p) => p.id === 'termsAcceptance');
            expect(termsProp).toBeDefined();
            expect(termsProp?.value).toBe('false');
        });
    });
});
