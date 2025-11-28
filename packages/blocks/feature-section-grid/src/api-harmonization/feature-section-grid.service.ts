import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapFeatureSectionGrid } from './feature-section-grid.mapper';
import { FeatureSectionGridBlock } from './feature-section-grid.model';
import { GetFeatureSectionGridBlockQuery } from './feature-section-grid.request';

@Injectable()
export class FeatureSectionGridService {
    constructor(private readonly cmsService: CMS.Service) {}

    getFeatureSectionGridBlock(
        query: GetFeatureSectionGridBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<FeatureSectionGridBlock> {
        const cms = this.cmsService.getFeatureSectionGridBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapFeatureSectionGrid(cms, headers['x-locale'])));
    }
}
