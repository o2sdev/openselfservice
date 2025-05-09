import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { SurveyjsController } from './surveyjs.controller';
import { SurveyjsService } from './surveyjs.service';

@Module({})
export class SurveyjsBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: SurveyjsBlockModule,
            providers: [SurveyjsService, CMS.Service],
            controllers: [SurveyjsController],
            exports: [SurveyjsService],
        };
    }
}
