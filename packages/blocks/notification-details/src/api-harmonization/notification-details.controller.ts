import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

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
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getNotificationDetailsBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetNotificationDetailsBlockQuery,
        @Param() params: GetNotificationDetailsBlockParams,
    ) {
        return this.service.getNotificationDetailsBlock(params, query, headers);
    }

    @Post()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    markNotificationAs(@Body() body: MarkNotificationAsBlockBody) {
        return this.service.markNotificationAs(body);
    }
}
