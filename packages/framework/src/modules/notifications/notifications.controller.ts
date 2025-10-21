import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { NotificationService } from './notifications.service';
import { AppHeaders } from '@/utils/models/headers';

@Controller('/notifications')
@UseInterceptors(LoggerService)
export class NotificationsController {
    constructor(protected readonly notificationService: NotificationService) {}

    @Get(':id')
    getNotification(@Param() params: Request.GetNotificationParams, @Headers() headers: AppHeaders) {
        return this.notificationService.getNotification(params, headers.authorization);
    }

    @Get()
    getNotificationList(@Query() query: Request.GetNotificationListQuery, @Headers() headers: AppHeaders) {
        return this.notificationService.getNotificationList(query, headers.authorization);
    }

    @Post()
    markNotificationAs(@Body() request: Request.MarkNotificationAsRequest, @Headers() headers: AppHeaders) {
        return this.notificationService.markAs(request, headers.authorization);
    }
}
