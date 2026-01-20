import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapBentoGrid } from './bento-grid.mapper';
import { BentoGridBlock } from './bento-grid.model';
import { GetBentoGridBlockQuery } from './bento-grid.request';

@Injectable()
export class BentoGridService {
    constructor(private readonly cmsService: CMS.Service) {}

    getBentoGridBlock(query: GetBentoGridBlockQuery, headers: Models.Headers.AppHeaders): Observable<BentoGridBlock> {
        const cms = this.cmsService.getBentoGridBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapBentoGrid(cms, headers['x-locale'])));
    }
}
