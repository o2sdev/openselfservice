import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Invoices } from '../../models';

import { InvoiceListController } from './invoice-list.controller';
import { InvoiceListService } from './invoice-list.service';

@Module({})
export class InvoiceListBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: InvoiceListBlockModule,
            providers: [InvoiceListService, CMS.Service, Invoices.Service],
            controllers: [InvoiceListController],
            exports: [InvoiceListService],
        };
    }
}
