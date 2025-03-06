import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetNotificationListComponentQuery } from './notification-list.request';
import { NotificationListService } from './notification-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class NotificationListController {
    constructor(protected readonly service: NotificationListService) {}

    @Get()
    getNotificationListComponent(@Headers() headers: AppHeaders, @Query() query: GetNotificationListComponentQuery) {
        return this.service.getNotificationListComponent(query, headers);
    }
}
