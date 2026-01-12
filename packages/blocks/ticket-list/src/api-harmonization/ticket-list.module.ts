import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Tickets } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { TicketListController } from './ticket-list.controller';
import { TicketListService } from './ticket-list.service';

@Module({})
export class TicketListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: TicketListBlockModule,
            providers: [
                TicketListService,
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
            controllers: [TicketListController],
            exports: [TicketListService],
        };
    }
}
