import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/framework/headers';

import { mapFaq } from './faq.mapper';
import { FaqBlock } from './faq.model';
import { GetFaqBlockQuery } from './faq.request';

@Injectable()
export class FaqService {
    constructor(private readonly cmsService: CMS.Service) {}

    getFaqBlock(query: GetFaqBlockQuery, headers: AppHeaders): Observable<FaqBlock> {
        const cms = this.cmsService.getFaqBlock({
            ...query,
            locale: headers['x-locale'],
        });

        return forkJoin([cms]).pipe(map(([cms]) => mapFaq(cms)));
    }
}
