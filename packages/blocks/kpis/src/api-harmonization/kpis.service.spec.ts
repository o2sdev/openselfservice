import { Test, TestingModule } from '@nestjs/testing';
import { CMS } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { KpisService } from './kpis.service';

describe('KpisService', () => {
    let service: KpisService;
    let cmsService: CMS.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                KpisService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getKpisBlock: vi.fn().mockReturnValue({
                            title: 'Test Block',
                        }),
                    },
                },
            ],
        }).compile();

        service = module.get<KpisService>(KpisService);
        cmsService = module.get<CMS.Service>(CMS.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have cmsService injected', () => {
        expect(cmsService).toBeDefined();
    });
});
