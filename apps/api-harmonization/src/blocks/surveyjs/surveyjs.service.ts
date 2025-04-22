import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapSurveyjs } from './surveyjs.mapper';
import { SurveyjsBlock } from './surveyjs.model';
import { GetSurveyjsBlockQuery } from './surveyjs.request';

@Injectable()
export class SurveyjsService {
    constructor(private readonly cmsService: CMS.Service) {}

    getSurveyjsBlock(query: GetSurveyjsBlockQuery, headers: AppHeaders): Observable<SurveyjsBlock> {
        const cms = this.cmsService.getSurveyJsBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapSurveyjs(cms, headers['x-locale'])));
    }
}
