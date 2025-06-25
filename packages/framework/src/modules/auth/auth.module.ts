import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { AuthService } from './auth.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class AuthModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.auth.service;
        const imports = config.integrations.auth.imports || [];
        const provider = {
            provide: AuthService,
            useClass: service as Type,
        };

        return {
            module: AuthModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            exports: [provider],
        };
    }
}
