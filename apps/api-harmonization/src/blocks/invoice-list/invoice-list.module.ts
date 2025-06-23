import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS, Invoices } from '../../models';

import { InvoiceListController } from './invoice-list.controller';
import { InvoiceListService } from './invoice-list.service';

@Module({})
export class InvoiceListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: InvoiceListBlockModule,
            providers: [
                InvoiceListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Invoices.Service,
                    useExisting: Framework.Invoices.Service,
                },
            ],
            controllers: [InvoiceListController],
            exports: [InvoiceListService],
        };
    }
}
