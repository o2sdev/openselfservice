import { Body, Controller, Get, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { NotificationService } from './notifications.service';

@Controller('/notifications')
@UseInterceptors(LoggerService)
export class NotificationsController {
    constructor(protected readonly notificationService: NotificationService) {}

    @Get(':id')
    getNotification(@Param() params: Request.GetNotificationParams) {
        return this.notificationService.getNotification(params);
    }

    @Get()
    getNotificationList(@Query() query: Request.GetNotificationListQuery) {
        return this.notificationService.getNotificationList(query);
    }

    @Post()
    markNotificationAs(@Body() request: Request.MarkNotificationAsRequest) {
        return this.notificationService.markAs(request);
    }
}
