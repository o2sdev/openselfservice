import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Notifications } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { NotificationListController } from './notification-list.controller';
import { NotificationListService } from './notification-list.service';

@Module({})
export class NotificationListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: NotificationListBlockModule,
            providers: [
                NotificationListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Notifications.Service,
                    useExisting: Framework.Notifications.Service,
                },
                {
                    provide: Auth.Permissions,
                    useExisting: Framework.Auth.Permissions.Service,
                },
            ],
            controllers: [NotificationListController],
            exports: [NotificationListService],
        };
    }
}
