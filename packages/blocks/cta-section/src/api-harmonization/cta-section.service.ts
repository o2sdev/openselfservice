import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapCtaSection } from './cta-section.mapper';
import { CtaSectionBlock } from './cta-section.model';
import { GetCtaSectionBlockQuery } from './cta-section.request';

@Injectable()
export class CtaSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCtaSectionBlock(
        query: GetCtaSectionBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<CtaSectionBlock> {
        const cms = this.cmsService.getBlockConfig<CMS.Model.CtaSectionBlock.CtaSectionBlock>({
            ...query,
            locale: headers['x-locale'],
            blockType: 'CtaSectionBlock',
        });

        return forkJoin([cms]).pipe(map(([cms]) => mapCtaSection(cms, headers['x-locale'])));
    }
}
