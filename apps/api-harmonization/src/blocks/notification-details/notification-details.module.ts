import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS, Notifications } from '../../models';

import { NotificationDetailsController } from './notification-details.controller';
import { NotificationDetailsService } from './notification-details.service';

@Module({})
export class NotificationDetailsBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: NotificationDetailsBlockModule,
            providers: [
                NotificationDetailsService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Notifications.Service,
                    useExisting: Framework.Notifications.Service,
                },
            ],
            controllers: [NotificationDetailsController],
            exports: [NotificationDetailsService],
        };
    }
}
