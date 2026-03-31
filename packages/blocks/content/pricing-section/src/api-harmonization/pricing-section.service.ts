import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapPricingSection } from './pricing-section.mapper';
import { PricingSectionBlock } from './pricing-section.model';
import { GetPricingSectionBlockQuery } from './pricing-section.request';

const H = HeaderName;

@Injectable()
export class PricingSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getPricingSectionBlock(query: GetPricingSectionBlockQuery, headers: AppHeaders): Observable<PricingSectionBlock> {
        const cms = this.cmsService.getBlockConfig<CMS.Model.PricingSectionBlock.PricingSectionBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'PricingSectionBlock',
        });

        return forkJoin([cms]).pipe(map(([cms]) => mapPricingSection(cms, headers[H.Locale])));
    }
}
