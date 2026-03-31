import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapFeatureSectionGrid } from './feature-section-grid.mapper';
import { FeatureSectionGridBlock } from './feature-section-grid.model';
import { GetFeatureSectionGridBlockQuery } from './feature-section-grid.request';

const H = HeaderName;

@Injectable()
export class FeatureSectionGridService {
    constructor(private readonly cmsService: CMS.Service) {}

    getFeatureSectionGridBlock(
        query: GetFeatureSectionGridBlockQuery,
        headers: AppHeaders,
    ): Observable<FeatureSectionGridBlock> {
        const cms = this.cmsService.getBlockConfig<CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'FeatureSectionGridBlock',
        });

        return forkJoin([cms]).pipe(map(([cms]) => mapFeatureSectionGrid(cms, headers[H.Locale])));
    }
}
