import { Test, TestingModule } from '@nestjs/testing';
import { CMS } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CheckoutCompanyDataService } from './checkout-company-data.service';

describe('CheckoutCompanyDataService', () => {
    let service: CheckoutCompanyDataService;
    let cmsService: CMS.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CheckoutCompanyDataService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getCheckoutCompanyDataBlock: vi.fn().mockReturnValue({
                            title: 'Test Block',
                        }),
                    },
                },
            ],
        }).compile();

        service = module.get<CheckoutCompanyDataService>(CheckoutCompanyDataService);
        cmsService = module.get<CMS.Service>(CMS.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have cmsService injected', () => {
        expect(cmsService).toBeDefined();
    });
});
