import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapFaq } from './faq.mapper';
import { FaqBlock } from './faq.model';
import { GetFaqBlockQuery } from './faq.request';

@Injectable()
export class FaqService {
    constructor(private readonly cmsService: CMS.Service) {}

    getFaqBlock(query: GetFaqBlockQuery, headers: AppHeaders): Observable<FaqBlock> {
        const cms = this.cmsService.getFaqBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapFaq(cms)));
    }
}
