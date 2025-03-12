import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Tickets } from '../../models';

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
