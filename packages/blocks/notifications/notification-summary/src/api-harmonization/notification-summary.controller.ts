import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetNotificationSummaryBlockQuery } from './notification-summary.request';
import { NotificationSummaryService } from './notification-summary.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class NotificationSummaryController {
    constructor(protected readonly service: NotificationSummaryService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'notifications', actions: ['view'] })
    getNotificationSummaryBlock(
        @Headers() headers: Models.Headers.AppHeaders,
        @Query() query: GetNotificationSummaryBlockQuery,
    ) {
        return this.service.getNotificationSummaryBlock(query, headers);
    }
}
