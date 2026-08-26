import { Test, TestingModule } from '@nestjs/testing';
import { CMS, Invoices } from '@o2s/configs.integrations';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { InvoiceListService } from './invoice-list.service';

const CMS_BLOCK = {
    id: 'invoice-list-1',
    pagination: { limit: 5 },
    table: { columns: [] },
    labels: {},
    noResults: {},
};

const HEADERS = { 'x-locale': 'en' } as unknown as AppHeaders;

describe('InvoiceListService', () => {
    let service: InvoiceListService;
    let domainService: Invoices.Service;

    /** The query the domain module was called with, i.e. what the block resolved the URL params into. */
    const getDomainQuery = () => vi.mocked(domainService.getInvoiceList).mock.calls[0]?.[0];

    const call = (query: Parameters<InvoiceListService['getInvoiceListBlock']>[0]) =>
        new Promise((resolve) => service.getInvoiceListBlock(query, HEADERS).subscribe(resolve));

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                InvoiceListService,
                {
                    provide: CMS.Service,
                    useValue: { getBlockConfig: vi.fn().mockReturnValue(of(CMS_BLOCK)) },
                },
                {
                    provide: Invoices.Service,
                    useValue: { getInvoiceList: vi.fn().mockReturnValue(of({ total: 0, data: [] })) },
                },
                { provide: Auth.Service, useValue: { canPerformActions: vi.fn().mockReturnValue({}) } },
            ],
        }).compile();

        service = module.get<InvoiceListService>(InvoiceListService);
        domainService = module.get<Invoices.Service>(Invoices.Service);
    });

    it('takes the page size from the CMS block config', async () => {
        await call({ id: 'invoice-list-1' });

        expect(getDomainQuery()).toMatchObject({ limit: 5, offset: 0 });
    });

    it('resolves a 1-based page into an offset with that page size', async () => {
        await call({ id: 'invoice-list-1', page: 3 });

        expect(getDomainQuery()).toMatchObject({ limit: 5, offset: 10 });
    });

    it('resolves a page arriving as a query string', async () => {
        await call({ id: 'invoice-list-1', page: '2' as unknown as number });

        expect(getDomainQuery()).toMatchObject({ offset: 5 });
    });

    it('keeps the first page for page 1 and for a bogus page', async () => {
        await call({ id: 'invoice-list-1', page: 1 });

        expect(getDomainQuery()).toMatchObject({ offset: 0 });

        vi.mocked(domainService.getInvoiceList).mockClear();

        await call({ id: 'invoice-list-1', page: 'nonsense' as unknown as number });

        expect(getDomainQuery()).toMatchObject({ offset: 0 });
    });

    it('prefers an explicit offset over page', async () => {
        await call({ id: 'invoice-list-1', offset: 7, page: 3 });

        expect(getDomainQuery()).toMatchObject({ offset: 7 });
    });

    it('does not leak page into the domain query', async () => {
        await call({ id: 'invoice-list-1', page: 2 });

        expect(getDomainQuery()).not.toHaveProperty('page');
    });

    it('passes filters through', async () => {
        await call({ id: 'invoice-list-1', paymentStatus: 'PAID', sort: 'issuedDate_DESC' } as Parameters<
            InvoiceListService['getInvoiceListBlock']
        >[0]);

        expect(getDomainQuery()).toMatchObject({ paymentStatus: 'PAID', sort: 'issuedDate_DESC' });
    });
});
