import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapHeroSection } from './hero-section.mapper';
import { HeroSectionBlock } from './hero-section.model';
import { GetHeroSectionBlockQuery } from './hero-section.request';

const H = HeaderName;

@Injectable()
export class HeroSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getHeroSectionBlock(query: GetHeroSectionBlockQuery, headers: AppHeaders): Observable<HeroSectionBlock> {
        const cms = this.cmsService.getHeroSectionBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(map(([cms]) => mapHeroSection(cms, headers[H.Locale])));
    }
}
