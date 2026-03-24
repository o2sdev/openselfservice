import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapSurveyjs } from './surveyjs.mapper';
import { SurveyjsBlock } from './surveyjs.model';
import { GetSurveyjsBlockQuery } from './surveyjs.request';

const H = HeaderName;

@Injectable()
export class SurveyjsService {
    constructor(private readonly cmsService: CMS.Service) {}

    getSurveyjsBlock(query: GetSurveyjsBlockQuery, headers: AppHeaders): Observable<SurveyjsBlock> {
        const cms = this.cmsService.getSurveyJsBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(map(([cms]) => mapSurveyjs(cms, headers[H.Locale])));
    }
}
