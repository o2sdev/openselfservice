import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapFeatureSection } from './feature-section.mapper';
import { FeatureSectionBlock } from './feature-section.model';
import { GetFeatureSectionBlockQuery } from './feature-section.request';

const H = HeaderName;

@Injectable()
export class FeatureSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getFeatureSectionBlock(query: GetFeatureSectionBlockQuery, headers: AppHeaders): Observable<FeatureSectionBlock> {
        const cms = this.cmsService.getFeatureSectionBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(map(([cms]) => mapFeatureSection(cms, headers[H.Locale])));
    }
}
