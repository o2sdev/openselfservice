import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetSurveyjsBlockQuery } from './surveyjs.request';
import { SurveyjsService } from './surveyjs.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class SurveyjsController {
    constructor(protected readonly service: SurveyjsService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getSurveyJSBlock(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: GetSurveyjsBlockQuery) {
        return this.service.getSurveyjsBlock(query, headers);
    }
}
