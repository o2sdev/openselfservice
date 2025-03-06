import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { UserController } from './users.controller';
import { UserService } from './users.service';
import { ApiConfig } from '@/api-config';

@Module({})
export class UsersModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.users.service;
        const controller = config.integrations.users.controller || UserController;
        const imports = config.integrations.cms.imports || [];

        return {
            module: UsersModule,
            providers: [
                {
                    provide: UserService,
                    useClass: service as Type,
                },
            ],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [UserService],
        };
    }
}
