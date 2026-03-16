import { Body, Controller, Get, Headers, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { URL } from './index';
import { SurveyJs } from './surveyjs.model';
import { SurveyJsQuery, SurveyJsSubmitPayload } from './surveyjs.request';
import { SurveyjsService } from './surveyjs.service';

const H = HeaderName;

@Controller(URL)
export class SurveyjsController {
    constructor(private readonly surveyjsService: SurveyjsService) {}

    @Get()
    getSurvey(@Query() query: SurveyJsQuery): Observable<SurveyJs> {
        return this.surveyjsService.getSurvey(query);
    }

    @Post()
    submitSurvey(@Body() body: SurveyJsSubmitPayload, @Headers() headers: AppHeaders) {
        return this.surveyjsService.submitSurvey(body, headers[H.Authorization]);
    }
}
