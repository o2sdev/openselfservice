import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { AuthService } from './auth.service';
import { PermissionsService } from './permissions/permissions.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class AuthModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.auth.service;
        const imports = config.integrations.auth.imports || [];
        const authProvider = {
            provide: AuthService,
            useClass: service as Type,
        };

        const providers: Provider[] = [authProvider];
        const exports: Provider[] = [authProvider];

        // Register Permissions service if configured
        if (config.integrations.auth.permissions) {
            const permissionsService = config.integrations.auth.permissions.service;

            const permissionsServiceProvider = {
                provide: PermissionsService,
                useClass: permissionsService as Type,
            };

            providers.push(permissionsServiceProvider);
            exports.push(permissionsServiceProvider);
        }

        return {
            module: AuthModule,
            providers,
            imports: [HttpModule, ...imports],
            exports,
        };
    }
}
