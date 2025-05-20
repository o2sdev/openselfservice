import { Body, Controller, Get, Headers, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './index';
import { SurveyJs } from './surveyjs.model';
import { SurveyJsQuery, SurveyJsSubmitPayload } from './surveyjs.request';
import { SurveyjsService } from './surveyjs.service';

@Controller(URL)
export class SurveyjsController {
    constructor(private readonly surveyjsService: SurveyjsService) {}

    @Get()
    getSurvey(@Query() query: SurveyJsQuery): Observable<SurveyJs> {
        return this.surveyjsService.getSurvey(query);
    }

    @Post()
    submitSurvey(@Body() payload: SurveyJsSubmitPayload, @Headers() headers: AppHeaders) {
        return this.surveyjsService.submitSurvey(payload, headers['authorization']);
    }
}
