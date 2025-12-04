import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapMediaSection } from './media-section.mapper';
import { MediaSectionBlock } from './media-section.model';
import { GetMediaSectionBlockQuery } from './media-section.request';

@Injectable()
export class MediaSectionService {
    constructor(private readonly cmsService: CMS.Service) {}

    getMediaSectionBlock(
        query: GetMediaSectionBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<MediaSectionBlock> {
        const cms = this.cmsService.getMediaSectionBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapMediaSection(cms, headers['x-locale'])));
    }
}
