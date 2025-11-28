import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapFeatureSection } from './feature-section.mapper';
import { FeatureSectionBlock } from './feature-section.model';
import { GetFeatureSectionBlockQuery } from './feature-section.request';

@Injectable()
export class FeatureSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getFeatureSectionBlock(
        query: GetFeatureSectionBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<FeatureSectionBlock> {
        const cms = this.cmsService.getFeatureSectionBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapFeatureSection(cms, headers['x-locale'])));
    }
}
