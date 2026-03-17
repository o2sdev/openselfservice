import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapCtaSection } from './cta-section.mapper';
import { CtaSectionBlock } from './cta-section.model';
import { GetCtaSectionBlockQuery } from './cta-section.request';

const H = HeaderName;

@Injectable()
export class CtaSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCtaSectionBlock(query: GetCtaSectionBlockQuery, headers: AppHeaders): Observable<CtaSectionBlock> {
        const cms = this.cmsService.getCtaSectionBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(map(([cms]) => mapCtaSection(cms, headers[H.Locale])));
    }
}
