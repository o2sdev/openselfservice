import { Body, Controller, Get, Headers, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
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

    /**
     * Unified endpoint for submitting surveys.
     * Supports both JSON (application/json) and multipart/form-data submissions.
     *
     * @param files - Array of uploaded files from 'attachments' field (multipart only)
     * @param body - Survey payload (JSON) or form data (multipart)
     * @param headers - Request headers including authorization
     */
    @Post()
    @UseInterceptors(
        FileFieldsInterceptor([{ name: 'attachments', maxCount: 10 }], {
            limits: {
                fileSize: 10 * 1024 * 1024, // 10MB per file
            },
        }),
    )
    submitSurvey(
        @UploadedFiles() files: { attachments?: Express.Multer.File[] },
        @Body() body: SurveyJsSubmitPayload | (Record<string, string> & { code: string }),
        @Headers() headers: ApiModels.Headers.AppHeaders,
    ) {
        return this.surveyjsService.submitSurvey(body, headers['authorization'], files?.attachments);
    }
}
