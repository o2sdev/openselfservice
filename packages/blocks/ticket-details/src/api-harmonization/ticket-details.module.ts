import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Tickets } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { TicketDetailsController } from './ticket-details.controller';
import { TicketDetailsService } from './ticket-details.service';

@Module({})
export class TicketDetailsBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: TicketDetailsBlockModule,
            providers: [
                TicketDetailsService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Tickets.Service,
                    useExisting: Framework.Tickets.Service,
                },
                {
                    provide: Auth.Permissions,
                    useExisting: Framework.Auth.Permissions.Service,
                },
            ],
            controllers: [TicketDetailsController],
            exports: [TicketDetailsService],
        };
    }
}
