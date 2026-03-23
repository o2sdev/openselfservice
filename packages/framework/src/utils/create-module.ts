import { HttpModule } from '@nestjs/axios';
import { Abstract, DynamicModule, Module, Type } from '@nestjs/common';

export interface CustomModuleConfig {
    name: string;
    service: Abstract<unknown>;
    serviceImpl: Type;
    controller?: Type;
    imports?: Type[];
    providers?: Type[];
    global?: boolean;
}

export interface RegisterableModule {
    register(config: CustomModuleConfig): DynamicModule;
}

export function createModule(name: string): RegisterableModule {
    @Module({})
    class CustomModule {
        static register(config: CustomModuleConfig): DynamicModule {
            const provider = {
                provide: config.service,
                useClass: config.serviceImpl,
            };

            return {
                module: CustomModule,
                providers: [provider, ...(config.providers || [])],
                imports: [HttpModule, ...(config.imports || [])],
                controllers: config.controller ? [config.controller] : [],
                exports: [provider],
                global: config.global !== false,
            };
        }
    }

    Object.defineProperty(CustomModule, 'name', { value: `${name}Module` });

    return CustomModule;
}
