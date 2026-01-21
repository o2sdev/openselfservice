import { Body, Controller, Get, Headers, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

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
    submitSurvey(@Body() body: SurveyJsSubmitPayload, @Headers() headers: ApiModels.Headers.AppHeaders) {
        return this.surveyjsService.submitSurvey(body, headers['authorization']);
    }
}
