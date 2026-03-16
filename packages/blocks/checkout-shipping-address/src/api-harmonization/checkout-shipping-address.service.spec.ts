import { Test, TestingModule } from '@nestjs/testing';
import { CMS } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CheckoutShippingAddressService } from './checkout-shipping-address.service';

describe('CheckoutShippingAddressService', () => {
    let service: CheckoutShippingAddressService;
    let cmsService: CMS.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CheckoutShippingAddressService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getCheckoutShippingAddressBlock: vi.fn().mockReturnValue({
                            title: 'Test Block',
                        }),
                    },
                },
            ],
        }).compile();

        service = module.get<CheckoutShippingAddressService>(CheckoutShippingAddressService);
        cmsService = module.get<CMS.Service>(CMS.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have cmsService injected', () => {
        expect(cmsService).toBeDefined();
    });
});
