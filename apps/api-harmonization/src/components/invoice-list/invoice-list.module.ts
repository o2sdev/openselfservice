import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Invoices } from '../../models';

import { InvoiceListController } from './invoice-list.controller';
import { InvoiceListService } from './invoice-list.service';

@Module({})
export class InvoiceListComponentModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: InvoiceListComponentModule,
            providers: [InvoiceListService, CMS.Service, Invoices.Service],
            controllers: [InvoiceListController],
            exports: [InvoiceListService],
        };
    }
}
