import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { AuthService } from './auth.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class AuthModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.auth.service;
        const imports = config.integrations.auth.imports || [];
        const authProvider = {
            provide: AuthService,
            useClass: service as unknown as Type<AuthService>,
        };

        const providers: Provider[] = [authProvider];
        const exports: Provider[] = [authProvider];

        return {
            module: AuthModule,
            providers,
            imports: [HttpModule, ...imports],
            exports,
        };
    }
}
