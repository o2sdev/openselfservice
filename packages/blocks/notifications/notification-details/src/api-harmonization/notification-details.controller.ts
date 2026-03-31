import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

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
    @Auth.Decorators.Permissions({ resource: 'notifications', actions: ['view'] })
    getNotificationDetailsBlock(
        @Headers() headers: AppHeaders,
        @Query() query: GetNotificationDetailsBlockQuery,
        @Param() params: GetNotificationDetailsBlockParams,
    ) {
        return this.service.getNotificationDetailsBlock(params, query, headers);
    }

    @Post()
    @Auth.Decorators.Permissions({ resource: 'notifications', actions: ['mark_read'] })
    markNotificationAs(@Headers() headers: AppHeaders, @Body() body: MarkNotificationAsBlockBody) {
        return this.service.markNotificationAs(body, headers);
    }
}
