import { Body, Controller, Get, Headers, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { NotificationService } from './notifications.service';
import { AppHeaders } from '@/utils/models/headers';

/**
 * HTTP controller for notifications. Base path: `/notifications`. All methods delegate to {@link NotificationService}.
 */
@Controller('/notifications')
@UseInterceptors(LoggerService)
@ApiTags('notifications')
export class NotificationsController {
    constructor(protected readonly notificationService: NotificationService) {}

    @Get(':id')
    @ApiOperation({ summary: 'Get notification by id' })
    @ApiParam({ name: 'id', type: String, description: 'Notification identifier.' })
    @ApiResponse({ status: 200, description: 'Returns notification details.' })
    getNotification(
        @Param() params: Request.GetNotificationParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<NotificationService['getNotification']> {
        return this.notificationService.getNotification(params, headers.authorization);
    }

    @Get()
    @ApiOperation({ summary: 'List notifications' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Notification list filters and pagination query.',
    })
    @ApiResponse({ status: 200, description: 'Returns notifications list.' })
    getNotificationList(
        @Query() query: Request.GetNotificationListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<NotificationService['getNotificationList']> {
        return this.notificationService.getNotificationList(query, headers.authorization);
    }

    @Post()
    @ApiOperation({ summary: 'Update notification status' })
    @ApiBody({ type: Request.MarkNotificationAsRequest, description: 'Notification status update payload.' })
    @ApiResponse({ status: 200, description: 'Notification status updated.' })
    markNotificationAs(
        @Body() request: Request.MarkNotificationAsRequest,
        @Headers() headers: AppHeaders,
    ): ReturnType<NotificationService['markAs']> {
        return this.notificationService.markAs(request, headers.authorization);
    }
}
