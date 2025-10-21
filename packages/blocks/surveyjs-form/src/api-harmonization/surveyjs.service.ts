import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { mapSurveyjs } from './surveyjs.mapper';
import { SurveyjsBlock } from './surveyjs.model';
import { GetSurveyjsBlockQuery } from './surveyjs.request';

@Injectable()
export class SurveyjsService {
    constructor(private readonly cmsService: CMS.Service) {}

    getSurveyjsBlock(query: GetSurveyjsBlockQuery, headers: ApiModels.Headers.AppHeaders): Observable<SurveyjsBlock> {
        const cms = this.cmsService.getSurveyJsBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapSurveyjs(cms, headers['x-locale'])));
    }
}
