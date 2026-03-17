import { Test, TestingModule } from '@nestjs/testing';
import { CMS, Orders } from '@o2s/configs.integrations';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { OrderConfirmationService } from './order-confirmation.service';

describe('OrderConfirmationService', () => {
    let service: OrderConfirmationService;
    let cmsService: CMS.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                OrderConfirmationService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getOrderConfirmationBlock: vi.fn().mockReturnValue(of({ title: 'Test Block' })),
                    },
                },
                {
                    provide: Orders.Service,
                    useValue: {
                        getOrder: vi.fn().mockReturnValue(of(undefined)),
                    },
                },
            ],
        }).compile();

        service = module.get<OrderConfirmationService>(OrderConfirmationService);
        cmsService = module.get<CMS.Service>(CMS.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have cmsService injected', () => {
        expect(cmsService).toBeDefined();
    });
});
