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
        const integration = config.integrations.notifications;
        if (!integration?.service) {
            return { module: NotificationsModule };
        }

        const service = integration.service;
        const controller = integration.controller || NotificationsController;
        const imports = integration.imports || [];

        const provider = {
            provide: NotificationService,
            useClass: service as Type,
        };

        return {
            module: NotificationsModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
