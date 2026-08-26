import { Test, TestingModule } from '@nestjs/testing';
import { CMS, Tickets } from '@o2s/configs.integrations';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { TicketListService } from './ticket-list.service';

const CMS_BLOCK = {
    id: 'ticket-list-1',
    pagination: { limit: 5 },
    table: { columns: [] },
    labels: {},
    noResults: {},
};

const HEADERS = { 'x-locale': 'en' } as unknown as AppHeaders;

describe('TicketListService', () => {
    let service: TicketListService;
    let ticketService: Tickets.Service;

    /** The query the tickets module was called with, i.e. what the block resolved the URL params into. */
    const getTicketQuery = () => vi.mocked(ticketService.getTicketList).mock.calls[0]?.[0];

    const call = (query: Parameters<TicketListService['getTicketListBlock']>[0]) =>
        new Promise((resolve) => service.getTicketListBlock(query, HEADERS).subscribe(resolve));

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TicketListService,
                {
                    provide: CMS.Service,
                    useValue: { getBlockConfig: vi.fn().mockReturnValue(of(CMS_BLOCK)) },
                },
                {
                    provide: Tickets.Service,
                    useValue: { getTicketList: vi.fn().mockReturnValue(of({ total: 0, data: [] })) },
                },
                { provide: Auth.Service, useValue: { canPerformActions: vi.fn().mockReturnValue({}) } },
            ],
        }).compile();

        service = module.get<TicketListService>(TicketListService);
        ticketService = module.get<Tickets.Service>(Tickets.Service);
    });

    it('takes the page size from the CMS block config', async () => {
        await call({ id: 'ticket-list-1' });

        expect(getTicketQuery()).toMatchObject({ limit: 5, offset: 0 });
    });

    it('resolves a 1-based page into an offset with that page size', async () => {
        await call({ id: 'ticket-list-1', page: 3 });

        expect(getTicketQuery()).toMatchObject({ limit: 5, offset: 10 });
    });

    it('resolves a page arriving as a query string', async () => {
        await call({ id: 'ticket-list-1', page: '2' as unknown as number });

        expect(getTicketQuery()).toMatchObject({ offset: 5 });
    });

    it('keeps the first page for page 1 and for a bogus page', async () => {
        await call({ id: 'ticket-list-1', page: 1 });

        expect(getTicketQuery()).toMatchObject({ offset: 0 });

        vi.mocked(ticketService.getTicketList).mockClear();

        await call({ id: 'ticket-list-1', page: 'nonsense' as unknown as number });

        expect(getTicketQuery()).toMatchObject({ offset: 0 });
    });

    it('prefers an explicit offset over page', async () => {
        await call({ id: 'ticket-list-1', offset: 7, page: 3 });

        expect(getTicketQuery()).toMatchObject({ offset: 7 });
    });

    it('does not leak page into the tickets query', async () => {
        await call({ id: 'ticket-list-1', page: 2 });

        expect(getTicketQuery()).not.toHaveProperty('page');
    });

    it('passes filters through, including a repeated status', async () => {
        await call({
            id: 'ticket-list-1',
            status: ['OPEN', 'CLOSED'],
            topic: 'CONTACT_US',
            sort: 'status_DESC',
        } as Parameters<TicketListService['getTicketListBlock']>[0]);

        expect(getTicketQuery()).toMatchObject({
            status: ['OPEN', 'CLOSED'],
            topic: 'CONTACT_US',
            sort: 'status_DESC',
        });
    });
});
