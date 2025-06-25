import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS } from '../../models';

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
