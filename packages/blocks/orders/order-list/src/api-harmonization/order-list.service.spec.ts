import { Test, TestingModule } from '@nestjs/testing';
import { CMS, Orders } from '@o2s/configs.integrations';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { OrderListService } from './order-list.service';

const CMS_BLOCK = {
    id: 'order-list-1',
    pagination: { limit: 5 },
    table: { columns: [] },
    labels: {},
    noResults: {},
};

const HEADERS = { 'x-locale': 'en' } as unknown as AppHeaders;

describe('OrderListService', () => {
    let service: OrderListService;
    let domainService: Orders.Service;

    /** The query the domain module was called with, i.e. what the block resolved the URL params into. */
    const getDomainQuery = () => vi.mocked(domainService.getOrderList).mock.calls[0]?.[0];

    const call = (query: Parameters<OrderListService['getOrderListBlock']>[0]) =>
        new Promise((resolve) => service.getOrderListBlock(query, HEADERS).subscribe(resolve));

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                OrderListService,
                {
                    provide: CMS.Service,
                    useValue: { getBlockConfig: vi.fn().mockReturnValue(of(CMS_BLOCK)) },
                },
                {
                    provide: Orders.Service,
                    useValue: { getOrderList: vi.fn().mockReturnValue(of({ total: 0, data: [] })) },
                },
                { provide: Auth.Service, useValue: { canPerformActions: vi.fn().mockReturnValue({}) } },
            ],
        }).compile();

        service = module.get<OrderListService>(OrderListService);
        domainService = module.get<Orders.Service>(Orders.Service);
    });

    it('takes the page size from the CMS block config', async () => {
        await call({ id: 'order-list-1' });

        expect(getDomainQuery()).toMatchObject({ limit: 5, offset: 0 });
    });

    it('resolves a 1-based page into an offset with that page size', async () => {
        await call({ id: 'order-list-1', page: 3 });

        expect(getDomainQuery()).toMatchObject({ limit: 5, offset: 10 });
    });

    it('resolves a page arriving as a query string', async () => {
        await call({ id: 'order-list-1', page: '2' as unknown as number });

        expect(getDomainQuery()).toMatchObject({ offset: 5 });
    });

    it('keeps the first page for page 1 and for any page that is not a whole one', async () => {
        await call({ id: 'order-list-1', page: 1 });

        expect(getDomainQuery()).toMatchObject({ offset: 0 });

        for (const page of ['nonsense' as unknown as number, 2.5, Infinity, Number.MAX_VALUE]) {
            vi.mocked(domainService.getOrderList).mockClear();

            await call({ id: 'order-list-1', page });

            expect(getDomainQuery(), `page ${page}`).toMatchObject({ offset: 0 });
        }
    });

    it('prefers an explicit offset over page', async () => {
        await call({ id: 'order-list-1', offset: 7, page: 3 });

        expect(getDomainQuery()).toMatchObject({ offset: 7 });
    });

    it('prefers an explicit offset of 0 over page', async () => {
        await call({ id: 'order-list-1', offset: 0, page: 3 });

        expect(getDomainQuery()).toMatchObject({ offset: 0 });
    });

    it('falls back to page when the offset is not a usable one', async () => {
        await call({ id: 'order-list-1', offset: '' as unknown as number, page: 3 });

        expect(getDomainQuery()).toMatchObject({ offset: 10 });

        vi.mocked(domainService.getOrderList).mockClear();

        await call({ id: 'order-list-1', offset: -5, page: 3 });

        expect(getDomainQuery()).toMatchObject({ offset: 10 });
    });

    it('does not leak page into the domain query', async () => {
        await call({ id: 'order-list-1', page: 2 });

        expect(getDomainQuery()).not.toHaveProperty('page');
    });

    it('passes filters through', async () => {
        await call({ id: 'order-list-1', status: 'DELIVERED', sort: 'createdAt_DESC' } as Parameters<
            OrderListService['getOrderListBlock']
        >[0]);

        expect(getDomainQuery()).toMatchObject({ status: 'DELIVERED', sort: 'createdAt_DESC' });
    });
});
