import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapNotificationSummary } from './notification-summary.mapper';
import { NotificationSummaryBlock } from './notification-summary.model';
import { GetNotificationSummaryBlockQuery } from './notification-summary.request';

@Injectable()
export class NotificationSummaryService {
    constructor(private readonly cmsService: CMS.Service) {}

    getNotificationSummaryBlock(
        query: GetNotificationSummaryBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<NotificationSummaryBlock> {
        const cms = this.cmsService.getNotificationSummaryBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapNotificationSummary(cms, headers['x-locale'])));
    }
}
