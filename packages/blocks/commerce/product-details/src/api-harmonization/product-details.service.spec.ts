import { Test, TestingModule } from '@nestjs/testing';
import { CMS, Products } from '@o2s/configs.integrations';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ProductDetailsService } from './product-details.service';

describe('ProductDetailsService', () => {
    let service: ProductDetailsService;
    let cmsService: CMS.Service;
    let productsService: Products.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductDetailsService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getProductDetailsBlock: vi.fn().mockReturnValue(
                            of({
                                id: 'product-details-1',
                                labels: {
                                    actionButtonLabel: 'Request Quote',
                                    specificationsTitle: 'Specifications',
                                    descriptionTitle: 'Description',
                                    downloadLabel: 'Download Brochure',
                                    priceLabel: 'Price',
                                    offerLabel: 'Offer',
                                },
                            }),
                        ),
                    },
                },
                {
                    provide: Products.Service,
                    useValue: {
                        getProduct: vi.fn(),
                        getProductList: vi.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<ProductDetailsService>(ProductDetailsService);
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
