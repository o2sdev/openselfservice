import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';

import { ApiConfig } from '@o2s/framework/modules';

import { TicketDetailsController } from './ticket-details.controller';
import { TicketDetailsService } from './ticket-details.service';

@Module({})
export class TicketDetailsBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: TicketDetailsBlockModule,
            providers: [TicketDetailsService, CMS.Service, Tickets.Service],
            controllers: [TicketDetailsController],
            exports: [TicketDetailsService],
        };
    }
}
