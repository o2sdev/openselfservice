import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { SurveyjsController } from './surveyjs.controller';
import { SurveyjsService } from './surveyjs.service';

@Module({})
export class SurveyjsBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: SurveyjsBlockModule,
            providers: [
                SurveyjsService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [SurveyjsController],
            exports: [SurveyjsService],
        };
    }
}
