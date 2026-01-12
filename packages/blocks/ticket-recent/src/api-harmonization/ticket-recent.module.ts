import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Tickets } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { TicketRecentController } from './ticket-recent.controller';
import { TicketRecentService } from './ticket-recent.service';

@Module({})
export class TicketRecentBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: TicketRecentBlockModule,
            providers: [
                TicketRecentService,
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
            controllers: [TicketRecentController],
            exports: [TicketRecentService],
        };
    }
}
