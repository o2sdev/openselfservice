import { Test, TestingModule } from '@nestjs/testing';
import { CMS } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ProductDetailsService } from './product-details.service';

describe('ProductDetailsService', () => {
    let service: ProductDetailsService;
    let cmsService: CMS.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductDetailsService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getProductDetailsBlock: vi.fn().mockReturnValue({
                            title: 'Test Block',
                        }),
                    },
                },
            ],
        }).compile();

        service = module.get<ProductDetailsService>(ProductDetailsService);
        cmsService = module.get<CMS.Service>(CMS.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have cmsService injected', () => {
        expect(cmsService).toBeDefined();
    });
});
