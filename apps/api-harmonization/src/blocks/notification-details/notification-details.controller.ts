import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import {
    GetNotificationDetailsComponentParams,
    GetNotificationDetailsComponentQuery,
    MarkNotificationAsComponentBody,
} from './notification-details.request';
import { NotificationDetailsService } from './notification-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class NotificationDetailsController {
    constructor(protected readonly service: NotificationDetailsService) {}

    @Get(':id')
    getNotificationDetailsComponent(
        @Headers() headers: AppHeaders,
        @Query() query: GetNotificationDetailsComponentQuery,
        @Param() params: GetNotificationDetailsComponentParams,
    ) {
        return this.service.getNotificationDetailsComponent(params, query, headers);
    }

    @Post()
    markNotificationAs(@Body() body: MarkNotificationAsComponentBody) {
        return this.service.markNotificationAs(body);
    }
}
