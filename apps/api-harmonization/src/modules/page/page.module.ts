import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { TicketDetailsBlockModule } from '@o2s/api-harmonization/blocks/ticket-details/ticket-details.module';

import { CMS } from '../../models';

import { PageController } from './page.controller';
import { PageService } from './page.service';

@Module({})
export class PageModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: PageModule,
            imports: [TicketDetailsBlockModule],
            providers: [PageService, CMS.Service],
            controllers: [PageController],
            exports: [PageService],
        };
    }
}
