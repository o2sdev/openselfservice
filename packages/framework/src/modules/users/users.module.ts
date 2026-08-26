import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { UserController } from './users.controller';
import { UserService } from './users.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class UsersModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.users;
        if (!integration?.service) {
            return { module: UsersModule };
        }

        const service = integration.service;
        const controller = integration.controller || UserController;
        const imports = integration.imports || [];

        const provider = {
            provide: UserService,
            useClass: service as Type,
        };
        const providers = integration.providers || [];

        return {
            module: UsersModule,
            providers: [provider, ...providers],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
