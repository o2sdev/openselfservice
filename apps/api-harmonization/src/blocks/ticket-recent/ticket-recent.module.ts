import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Tickets } from '../../models';

import { TicketRecentController } from './ticket-recent.controller';
import { TicketRecentService } from './ticket-recent.service';

@Module({})
export class TicketRecentComponentModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: TicketRecentComponentModule,
            providers: [TicketRecentService, CMS.Service, Tickets.Service],
            controllers: [TicketRecentController],
            exports: [TicketRecentService],
        };
    }
}
