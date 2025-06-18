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
        const service = config.integrations.tickets.service;
        const controller = config.integrations.tickets.controller || TicketsController;
        const imports = config.integrations.tickets.imports || [];

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
