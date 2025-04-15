import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetNotificationListBlockQuery } from './notification-list.request';
import { NotificationListService } from './notification-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class NotificationListController {
    constructor(protected readonly service: NotificationListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getNotificationListBlock(@Headers() headers: AppHeaders, @Query() query: GetNotificationListBlockQuery) {
        return this.service.getNotificationListBlock(query, headers);
    }
}
