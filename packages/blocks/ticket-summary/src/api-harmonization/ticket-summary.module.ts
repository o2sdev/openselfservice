import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { TicketSummaryController } from './ticket-summary.controller';
import { TicketSummaryService } from './ticket-summary.service';

@Module({})
export class TicketSummaryBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: TicketSummaryBlockModule,
            providers: [
                TicketSummaryService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [TicketSummaryController],
            exports: [TicketSummaryService],
        };
    }
}
