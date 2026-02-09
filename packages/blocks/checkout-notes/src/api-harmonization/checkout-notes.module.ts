import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { CheckoutNotesController } from './checkout-notes.controller';
import { CheckoutNotesService } from './checkout-notes.service';

@Module({})
export class CheckoutNotesBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CheckoutNotesBlockModule,
            providers: [
                CheckoutNotesService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [CheckoutNotesController],
            exports: [CheckoutNotesService],
        };
    }
}
