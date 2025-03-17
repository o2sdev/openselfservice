import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module, Type } from '@nestjs/common';
import { LoggerModule } from '@o2s/utils.logger';

import { ApiConfig, CMS } from '@o2s/framework/modules';

import { SurveyjsController } from './surveyjs.controller';
import { SurveyjsService } from './surveyjs.service';

@Module({})
export class SurveyjsModule {
    static register(config: ApiConfig): DynamicModule {
        const cmsService = config.integrations.cms.service;
        return {
            module: SurveyjsModule,
            imports: [LoggerModule, HttpModule],
            controllers: [SurveyjsController],
            providers: [
                SurveyjsService,
                {
                    provide: CMS.Service,
                    useClass: cmsService as Type,
                },
            ],
            exports: [SurveyjsService],
        };
    }
}
