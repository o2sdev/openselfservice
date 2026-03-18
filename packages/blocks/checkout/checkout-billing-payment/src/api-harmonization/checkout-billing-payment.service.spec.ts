import { Test, TestingModule } from '@nestjs/testing';
import { CMS } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CheckoutBillingPaymentService } from './checkout-billing-payment.service';

describe('CheckoutBillingPaymentService', () => {
    let service: CheckoutBillingPaymentService;
    let cmsService: CMS.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CheckoutBillingPaymentService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getCheckoutBillingPaymentBlock: vi.fn().mockReturnValue({
                            title: 'Test Block',
                        }),
                    },
                },
            ],
        }).compile();

        service = module.get<CheckoutBillingPaymentService>(CheckoutBillingPaymentService);
        cmsService = module.get<CMS.Service>(CMS.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have cmsService injected', () => {
        expect(cmsService).toBeDefined();
    });
});
