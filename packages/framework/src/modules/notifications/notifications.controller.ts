import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { NotificationService } from './notifications.service';
import { AppHeaders } from '@/utils/models/headers';

/**
 * HTTP controller for notifications. Base path: `/notifications`. All methods delegate to {@link NotificationService}.
 */
@Controller('/notifications')
@UseInterceptors(LoggerService)
export class NotificationsController {
    constructor(protected readonly notificationService: NotificationService) {}

    @Get(':id')
    getNotification(
        @Param() params: Request.GetNotificationParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<NotificationService['getNotification']> {
        return this.notificationService.getNotification(params, headers.authorization);
    }

    @Get()
    getNotificationList(
        @Query() query: Request.GetNotificationListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<NotificationService['getNotificationList']> {
        return this.notificationService.getNotificationList(query, headers.authorization);
    }

    @Post()
    markNotificationAs(
        @Body() request: Request.MarkNotificationAsRequest,
        @Headers() headers: AppHeaders,
    ): ReturnType<NotificationService['markAs']> {
        return this.notificationService.markAs(request, headers.authorization);
    }
}
