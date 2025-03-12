import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Notifications } from '../../models';

import { NotificationListController } from './notification-list.controller';
import { NotificationListService } from './notification-list.service';

@Module({})
export class NotificationListBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: NotificationListBlockModule,
            providers: [NotificationListService, CMS.Service, Notifications.Service],
            controllers: [NotificationListController],
            exports: [NotificationListService],
        };
    }
}
