import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { NotificationsController } from './notifications.controller';
import { NotificationService } from './notifications.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class NotificationsModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.notifications.service;
        const controller = config.integrations.notifications.controller || NotificationsController;
        const imports = config.integrations.cms.imports || [];

        return {
            module: NotificationsModule,
            providers: [
                {
                    provide: NotificationService,
                    useClass: service as Type,
                },
            ],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [NotificationService],
        };
    }
}
