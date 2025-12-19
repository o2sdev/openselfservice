import { CMS, Tickets } from '@o2s/configs.integrations';
import format from 'string-template';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Utils } from '@o2s/utils.api-harmonization';

import { mapTicket, mapTicketList } from './ticket-list.mapper';

vi.mock('@o2s/utils.api-harmonization', () => ({
    Utils: {
        Date: {
            formatDateRelative: vi.fn(),
        },
    },
}));

vi.mock('string-template', () => ({
    default: vi.fn(),
}));

describe('ticket-list.mapper', () => {
    const createMockCms = (overrides = {}): CMS.Model.TicketListBlock.TicketListBlock => ({
        id: 'block-123',
        title: 'Tickets',
        subtitle: 'All tickets',
        table: {
            columns: [],
        },
        pagination: undefined,
        filters: undefined,
        noResults: {
            title: 'No tickets found',
        },
        forms: undefined,
        labels: {
            today: 'Today',
            yesterday: 'Yesterday',
            showMore: 'Show more',
            clickToSelect: 'Click to select',
        },
        initialFilters: undefined,
        meta: undefined,
        fieldMapping: {
            topic: { NETWORK: 'Network Issue', BILLING: 'Billing Question' },
            type: { INCIDENT: 'Incident', REQUEST: 'Service Request' },
            status: { OPEN: 'Open', CLOSED: 'Closed', IN_PROGRESS: 'In Progress' },
        },
        detailsUrl: '/tickets/{id}',
        ...overrides,
    });

    const createMockTicket = (overrides = {}): Tickets.Model.Ticket => ({
        id: 'ticket-001',
        topic: 'NETWORK',
        type: 'INCIDENT',
        status: 'OPEN',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-20T14:30:00Z',
        properties: [],
        ...overrides,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted-date');
        (vi.mocked(format) as ReturnType<typeof vi.fn>).mockImplementation(
            (template: string, values: Record<string, unknown>) => {
                return template.replace(/{(\w+)}/g, (_: string, key: string) => String(values[key] || ''));
            },
        );
    });

    describe('field mapping with fallbacks', () => {
        it('should use CMS mapping when available for topic, type, and status', () => {
            const ticket = createMockTicket({ topic: 'NETWORK', type: 'INCIDENT', status: 'OPEN' });
            const cms = createMockCms({
                fieldMapping: {
                    topic: { NETWORK: 'Network Problem' },
                    type: { INCIDENT: 'Incident Report' },
                    status: { OPEN: 'Open Ticket' },
                },
            });

            const result = mapTicket(ticket, cms, 'en', 'UTC');

            expect(result.topic.label).toBe('Network Problem');
            expect(result.topic.value).toBe('NETWORK');
            expect(result.type.label).toBe('Incident Report');
            expect(result.type.value).toBe('INCIDENT');
            expect(result.status.label).toBe('Open Ticket');
            expect(result.status.value).toBe('OPEN');
        });

        it('should fallback to raw value when no mapping exists', () => {
            const ticket = createMockTicket({ topic: 'UNKNOWN_TOPIC', type: 'UNKNOWN_TYPE', status: 'UNKNOWN_STATUS' });
            const cms = createMockCms({
                fieldMapping: {
                    topic: {},
                    type: {},
                    status: {},
                },
            });

            const result = mapTicket(ticket, cms, 'en', 'UTC');

            expect(result.topic.label).toBe('UNKNOWN_TOPIC');
            expect(result.type.label).toBe('UNKNOWN_TYPE');
            expect(result.status.label).toBe('UNKNOWN_STATUS');
        });
    });

    describe('date formatting', () => {
        it('should format createdAt and updatedAt using formatDateRelative', () => {
            const ticket = createMockTicket({
                createdAt: '2024-01-15T10:00:00Z',
                updatedAt: '2024-01-20T14:30:00Z',
            });
            vi.mocked(Utils.Date.formatDateRelative)
                .mockReturnValueOnce('Jan 15, 2024')
                .mockReturnValueOnce('Jan 20, 2024');

            const result = mapTicket(ticket, createMockCms(), 'en', 'UTC');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-15T10:00:00Z',
                'en',
                'Today',
                'Yesterday',
                'UTC',
            );
            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-20T14:30:00Z',
                'en',
                'Today',
                'Yesterday',
                'UTC',
            );
            expect(result.createdAt).toBe('Jan 15, 2024');
            expect(result.updatedAt).toBe('Jan 20, 2024');
        });

        it('should pass correct arguments to formatDateRelative', () => {
            const ticket = createMockTicket();
            const cms = createMockCms({
                labels: {
                    today: 'Dzisiaj',
                    yesterday: 'Wczoraj',
                },
            });

            mapTicket(ticket, cms, 'pl', 'Europe/Warsaw');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                expect.any(String),
                'pl',
                'Dzisiaj',
                'Wczoraj',
                'Europe/Warsaw',
            );
        });
    });

    describe('string template formatting', () => {
        it('should format detailsUrl with ticket id', () => {
            const ticket = createMockTicket({ id: 'ticket-123' });

            const result = mapTicket(ticket, createMockCms(), 'en', 'UTC');

            expect(format).toHaveBeenCalledWith('/tickets/{id}', { id: 'ticket-123' });
            expect(result.detailsUrl).toBe('/tickets/ticket-123');
        });
    });

    describe('mapTicketList', () => {
        it('should map all tickets in the list', () => {
            const tickets = {
                total: 2,
                data: [createMockTicket({ id: 'ticket-1' }), createMockTicket({ id: 'ticket-2' })],
            };

            const result = mapTicketList(tickets, createMockCms(), 'en', 'UTC');

            expect(result.tickets.data).toHaveLength(2);
            expect(result.tickets.total).toBe(2);
        });

        it('should preserve CMS configuration', () => {
            const tickets = {
                total: 0,
                data: [],
            };
            const cms = createMockCms({
                title: 'My Tickets',
                subtitle: 'All my tickets',
            });

            const result = mapTicketList(tickets, cms, 'en', 'UTC');

            expect(result.title).toBe('My Tickets');
            expect(result.subtitle).toBe('All my tickets');
            expect(result.__typename).toBe('TicketListBlock');
            expect(result.id).toBe('block-123');
        });
    });
});
