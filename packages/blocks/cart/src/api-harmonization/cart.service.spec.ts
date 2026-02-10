import { Test, TestingModule } from '@nestjs/testing';
import { CMS } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CartService } from './cart.service';

describe('CartService', () => {
    let service: CartService;
    let cmsService: CMS.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CartService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getCartBlock: vi.fn().mockReturnValue({
                            title: 'Test Block',
                        }),
                    },
                },
            ],
        }).compile();

        service = module.get<CartService>(CartService);
        cmsService = module.get<CMS.Service>(CMS.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have cmsService injected', () => {
        expect(cmsService).toBeDefined();
    });
});

