import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import {
    GetNotificationDetailsBlockParams,
    GetNotificationDetailsBlockQuery,
    MarkNotificationAsBlockBody,
} from './notification-details.request';
import { NotificationDetailsService } from './notification-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class NotificationDetailsController {
    constructor(protected readonly service: NotificationDetailsService) {}

    @Get(':id')
    getNotificationDetailsBlock(
        @Headers() headers: AppHeaders,
        @Query() query: GetNotificationDetailsBlockQuery,
        @Param() params: GetNotificationDetailsBlockParams,
    ) {
        return this.service.getNotificationDetailsBlock(params, query, headers);
    }

    @Post()
    markNotificationAs(@Body() body: MarkNotificationAsBlockBody) {
        return this.service.markNotificationAs(body);
    }
}
