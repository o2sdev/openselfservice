import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapFaq } from './faq.mapper';
import { FaqComponent } from './faq.model';
import { GetFaqComponentQuery } from './faq.request';

@Injectable()
export class FaqService {
    constructor(private readonly cmsService: CMS.Service) {}

    getFaqComponent(query: GetFaqComponentQuery, headers: AppHeaders): Observable<FaqComponent> {
        const cms = this.cmsService.getFaqComponent({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapFaq(cms)));
    }
}
