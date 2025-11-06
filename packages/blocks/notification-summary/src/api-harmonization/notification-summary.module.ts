import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { NotificationSummaryController } from './notification-summary.controller';
import { NotificationSummaryService } from './notification-summary.service';

@Module({})
export class NotificationSummaryBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: NotificationSummaryBlockModule,
            providers: [
                NotificationSummaryService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [NotificationSummaryController],
            exports: [NotificationSummaryService],
        };
    }
}
