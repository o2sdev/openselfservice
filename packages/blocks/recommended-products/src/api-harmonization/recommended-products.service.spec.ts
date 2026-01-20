import { Test, TestingModule } from '@nestjs/testing';
import { CMS, Products } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { RecommendedProductsService } from './recommended-products.service';

describe('RecommendedProductsService', () => {
    let service: RecommendedProductsService;
    let cmsService: CMS.Service;
    let productsService: Products.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RecommendedProductsService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getRecommendedProductsBlock: vi.fn().mockReturnValue({
                            title: 'Test Block',
                        }),
                    },
                },
                {
                    provide: Products.Service,
                    useValue: {
                        getProductList: vi.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<RecommendedProductsService>(RecommendedProductsService);
        cmsService = module.get<CMS.Service>(CMS.Service);
        productsService = module.get<Products.Service>(Products.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have cmsService injected', () => {
        expect(cmsService).toBeDefined();
    });

    it('should have productsService injected', () => {
        expect(productsService).toBeDefined();
    });
});
