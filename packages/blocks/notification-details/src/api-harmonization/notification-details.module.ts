import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Notifications } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

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
                {
                    provide: Auth.Service,
                    useExisting: Framework.Auth.Service,
                },
            ],
            controllers: [NotificationDetailsController],
            exports: [NotificationDetailsService],
        };
    }
}
