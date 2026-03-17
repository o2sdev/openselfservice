import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { NotificationService } from './notifications.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

@Controller('/notifications')
@UseInterceptors(LoggerService)
export class NotificationsController {
    constructor(protected readonly notificationService: NotificationService) {}

    @Get(':id')
    getNotification(@Param() params: Request.GetNotificationParams, @Headers() headers: AppHeaders) {
        return this.notificationService.getNotification(params, headers[H.Authorization]);
    }

    @Get()
    getNotificationList(@Query() query: Request.GetNotificationListQuery, @Headers() headers: AppHeaders) {
        return this.notificationService.getNotificationList(query, headers[H.Authorization]);
    }

    @Post()
    markNotificationAs(@Body() request: Request.MarkNotificationAsRequest, @Headers() headers: AppHeaders) {
        return this.notificationService.markAs(request, headers[H.Authorization]);
    }
}
