import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Tickets } from '@o2s/configs.integrations';

import { ApiConfig } from '@o2s/framework/modules';

import { TicketRecentController } from './ticket-recent.controller';
import { TicketRecentService } from './ticket-recent.service';

@Module({})
export class TicketRecentBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: TicketRecentBlockModule,
            providers: [TicketRecentService, CMS.Service, Tickets.Service],
            controllers: [TicketRecentController],
            exports: [TicketRecentService],
        };
    }
}
