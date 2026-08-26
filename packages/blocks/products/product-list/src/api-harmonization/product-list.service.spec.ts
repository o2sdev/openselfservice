import { Test, TestingModule } from '@nestjs/testing';
import { CMS, Products } from '@o2s/configs.integrations';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { ProductListService } from './product-list.service';

const CMS_BLOCK = {
    id: 'product-list-1',
    pagination: { limit: 5 },
    fieldMapping: {},
    labels: {},
    noResults: {},
    table: { columns: [] },
};

const HEADERS = { 'x-locale': 'en' } as unknown as AppHeaders;

describe('ProductListService', () => {
    let service: ProductListService;
    let productsService: Products.Service;

    /** The query the products module was called with, i.e. what the block resolved the URL params into. */
    const getProductQuery = () => vi.mocked(productsService.getProductList).mock.calls[0]?.[0];

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductListService,
                {
                    provide: CMS.Service,
                    useValue: { getBlockConfig: vi.fn().mockReturnValue(of(CMS_BLOCK)) },
                },
                {
                    provide: Products.Service,
                    useValue: {
                        getProductList: vi.fn().mockReturnValue(of({ total: 0, data: [] })),
                    },
                },
                { provide: Auth.Service, useValue: {} },
            ],
        }).compile();

        service = module.get<ProductListService>(ProductListService);
        productsService = module.get<Products.Service>(Products.Service);
    });

    it('takes the page size from the CMS block config', async () => {
        await new Promise((resolve) =>
            service.getProductListBlock({ id: 'product-list-1' }, HEADERS).subscribe(resolve),
        );

        expect(getProductQuery()).toMatchObject({ limit: 5, offset: 0 });
    });

    it('resolves a 1-based page into an offset with that page size', async () => {
        await new Promise((resolve) =>
            service.getProductListBlock({ id: 'product-list-1', page: 3 }, HEADERS).subscribe(resolve),
        );

        expect(getProductQuery()).toMatchObject({ limit: 5, offset: 10 });
    });

    it('resolves a page arriving as a query string', async () => {
        await new Promise((resolve) =>
            service
                .getProductListBlock({ id: 'product-list-1', page: '2' as unknown as number }, HEADERS)
                .subscribe(resolve),
        );

        expect(getProductQuery()).toMatchObject({ offset: 5 });
    });

    it('keeps the first page for page 1 and for a bogus page', async () => {
        await new Promise((resolve) =>
            service.getProductListBlock({ id: 'product-list-1', page: 1 }, HEADERS).subscribe(resolve),
        );

        expect(getProductQuery()).toMatchObject({ offset: 0 });

        vi.mocked(productsService.getProductList).mockClear();

        await new Promise((resolve) =>
            service
                .getProductListBlock({ id: 'product-list-1', page: 'nonsense' as unknown as number }, HEADERS)
                .subscribe(resolve),
        );

        expect(getProductQuery()).toMatchObject({ offset: 0 });
    });

    it('prefers an explicit offset over page', async () => {
        await new Promise((resolve) =>
            service.getProductListBlock({ id: 'product-list-1', offset: 7, page: 3 }, HEADERS).subscribe(resolve),
        );

        expect(getProductQuery()).toMatchObject({ offset: 7 });
    });

    it('does not leak page into the products query', async () => {
        await new Promise((resolve) =>
            service.getProductListBlock({ id: 'product-list-1', page: 2 }, HEADERS).subscribe(resolve),
        );

        expect(getProductQuery()).not.toHaveProperty('page');
    });

    it('passes filters through', async () => {
        await new Promise((resolve) =>
            service
                .getProductListBlock({ id: 'product-list-1', category: 'tools', sort: 'price_asc' }, HEADERS)
                .subscribe(resolve),
        );

        expect(getProductQuery()).toMatchObject({ category: 'tools', sort: 'price_asc' });
    });
});
