import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetNotificationListBlockQuery } from './notification-list.request';
import { NotificationListService } from './notification-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class NotificationListController {
    constructor(protected readonly service: NotificationListService) {}

    @Get()
    getNotificationListBlock(@Headers() headers: AppHeaders, @Query() query: GetNotificationListBlockQuery) {
        return this.service.getNotificationListBlock(query, headers);
    }
}
