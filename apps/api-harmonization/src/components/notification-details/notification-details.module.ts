import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Notifications } from '../../models';

import { NotificationDetailsController } from './notification-details.controller';
import { NotificationDetailsService } from './notification-details.service';

@Module({})
export class NotificationDetailsComponentModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: NotificationDetailsComponentModule,
            providers: [NotificationDetailsService, CMS.Service, Notifications.Service],
            controllers: [NotificationDetailsController],
            exports: [NotificationDetailsService],
        };
    }
}
