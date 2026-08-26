import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { TicketsController } from './tickets.controller';
import { TicketService } from './tickets.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class TicketsModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.tickets;
        if (!integration?.service) {
            return { module: TicketsModule };
        }

        const service = integration.service;
        const controller = integration.controller || TicketsController;
        const imports = integration.imports || [];

        const provider = {
            provide: TicketService,
            useClass: service as Type,
        };

        return {
            module: TicketsModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
