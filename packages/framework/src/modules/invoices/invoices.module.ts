import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { InvoiceController } from './invoices.controller';
import { InvoiceService } from './invoices.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class InvoiceModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.invoices.service;
        const controller = config.integrations.invoices.controller || InvoiceController;
        const imports = config.integrations.invoices.imports || [];

        const provider = {
            provide: InvoiceService,
            useClass: service as Type,
        };

        return {
            module: InvoiceModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
