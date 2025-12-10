import { Tickets } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Utils } from '@o2s/utils.api-harmonization';

import { mapTicket, mapTicketDetails } from './ticket-details.mapper';

vi.mock('@o2s/utils.api-harmonization', () => ({
    Utils: {
        Date: {
            formatDateRelative: vi.fn(),
        },
    },
}));

describe('ticket-details.mapper', () => {
    const createMockCms = (overrides = {}) => ({
        id: 'block-123',
        title: 'Ticket Details',
        commentsTitle: 'Comments',
        attachmentsTitle: 'Attachments',
        properties: {
            id: 'ID',
            topic: 'Topic',
            type: 'Type',
            status: 'Status',
            priority: 'Priority',
            department: 'Department',
        },
        fieldMapping: {
            id: {},
            topic: {},
            type: { INCIDENT: 'Incident', REQUEST: 'Service Request' },
            status: { OPEN: 'Open', CLOSED: 'Closed', IN_PROGRESS: 'In Progress' },
        },
        labels: {
            showMore: 'Show more',
            showLess: 'Show less',
            today: 'Today',
            yesterday: 'Yesterday',
        },
        ...overrides,
    });

    const createMockTicket = (overrides = {}): Tickets.Model.Ticket => ({
        id: 'ticket-001',
        topic: 'Network issue',
        type: 'INCIDENT',
        status: 'OPEN',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-20T14:30:00Z',
        properties: [
            { id: 'priority', value: 'HIGH' },
            { id: 'department', value: 'IT' },
        ],
        comments: [],
        attachments: [],
        ...overrides,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted-date');
    });

    describe('mapTicketDetails', () => {
        it('should set correct __typename and id from cms', () => {
            const result = mapTicketDetails(createMockTicket(), createMockCms(), 'en', 'UTC');

            expect(result.__typename).toBe('TicketDetailsBlock');
            expect(result.id).toBe('block-123');
        });
    });

    describe('field mapping', () => {
        it('should use CMS mapping when available', () => {
            const result = mapTicket(createMockTicket({ status: 'OPEN' }), createMockCms(), 'en', 'UTC');

            expect(result.status.label).toBe('Open');
            expect(result.status.value).toBe('OPEN');
            expect(result.status.title).toBe('Status');
        });

        it('should fallback to raw value when no mapping exists', () => {
            const cms = createMockCms({
                fieldMapping: { id: {}, topic: {}, type: {}, status: {} },
            });

            const result = mapTicket(createMockTicket({ status: 'CLOSED' }), cms, 'en', 'UTC');

            expect(result.status.label).toBe('CLOSED');
            expect(result.status.value).toBe('CLOSED');
        });
    });

    describe('properties filtering', () => {
        it('should include only properties defined in CMS and preserve order', () => {
            const cms = createMockCms({
                properties: {
                    id: 'ID',
                    topic: 'Topic',
                    type: 'Type',
                    status: 'Status',
                    priority: 'Priority',
                    category: 'Category',
                },
            });
            const ticket = createMockTicket({
                properties: [
                    { id: 'category', value: 'Network' },
                    { id: 'priority', value: 'HIGH' },
                    { id: 'secret', value: 'confidential' }, // not in CMS - should be filtered out
                ],
            });

            const result = mapTicket(ticket, cms, 'en', 'UTC');

            expect(result.properties.items).toHaveLength(2);
            expect(result.properties.items.map((p) => p.id)).toEqual(['category', 'priority']);
            expect(result.properties.items[0]).toEqual({
                id: 'category',
                value: 'Network',
                label: 'Category',
            });
        });

        it('should return empty array when no properties match CMS config', () => {
            const cms = createMockCms({
                properties: { id: 'ID', topic: 'Topic', type: 'Type', status: 'Status' },
            });
            const ticket = createMockTicket({
                properties: [{ id: 'unknown', value: 'value' }],
            });

            const result = mapTicket(ticket, cms, 'en', 'UTC');

            expect(result.properties.items).toEqual([]);
        });
    });

    describe('edge cases', () => {
        it('should handle undefined and empty comments/attachments', () => {
            const ticketWithUndefined = createMockTicket({ comments: undefined, attachments: undefined });
            const ticketWithEmpty = createMockTicket({ comments: [], attachments: [] });

            const resultUndefined = mapTicket(ticketWithUndefined, createMockCms(), 'en', 'UTC');
            const resultEmpty = mapTicket(ticketWithEmpty, createMockCms(), 'en', 'UTC');

            expect(resultUndefined.comments.items).toEqual([]);
            expect(resultUndefined.attachments.items).toEqual([]);
            expect(resultEmpty.comments.items).toEqual([]);
            expect(resultEmpty.attachments.items).toEqual([]);
        });
    });

    describe('date formatting', () => {
        it('should format main ticket dates', () => {
            vi.mocked(Utils.Date.formatDateRelative).mockReturnValueOnce('10/01/2024').mockReturnValueOnce('Yesterday');

            const result = mapTicket(createMockTicket(), createMockCms(), 'en', 'UTC');

            expect(result.createdAt).toBe('10/01/2024');
            expect(result.updatedAt).toBe('Yesterday');
        });

        it('should format dates in nested comments and attachments', () => {
            const ticket = createMockTicket({
                comments: [{ date: '2024-01-15T10:00:00Z', content: 'Test', author: { name: 'User' } }],
                attachments: [
                    {
                        name: 'file.pdf',
                        url: '/file.pdf',
                        size: 1024,
                        date: '2024-01-16T09:00:00Z',
                        author: { name: 'Admin' },
                        ariaLabel: 'Download',
                    },
                ],
            });

            vi.mocked(Utils.Date.formatDateRelative)
                .mockReturnValueOnce('created')
                .mockReturnValueOnce('updated')
                .mockReturnValueOnce('comment-date')
                .mockReturnValueOnce('attachment-date');

            const result = mapTicket(ticket, createMockCms(), 'en', 'UTC');

            expect(result.comments.items[0]?.date).toBe('comment-date');
            expect(result.attachments.items[0]?.date).toBe('attachment-date');
        });

        it('should pass correct arguments to formatDateRelative', () => {
            const ticket = createMockTicket({
                comments: [{ date: '2024-01-15T10:00:00Z', content: 'Test', author: { name: 'User' } }],
            });

            mapTicket(ticket, createMockCms(), 'de', 'America/New_York');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-15T10:00:00Z',
                'de',
                'Today',
                'Yesterday',
                'America/New_York',
            );
        });
    });
});
