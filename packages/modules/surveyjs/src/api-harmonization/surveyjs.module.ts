import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module, Type } from '@nestjs/common';

import { LoggerModule } from '@o2s/utils.logger';

import { ApiConfig, CMS, Tickets } from '@o2s/framework/modules';

import { SurveyjsController } from './surveyjs.controller';
import { SurveyjsService } from './surveyjs.service';

@Module({})
export class SurveyjsModule {
    static register(config: ApiConfig): DynamicModule {
        const cmsService = config.integrations.cms.service;
        const ticketsService = config.integrations.tickets?.service;

        // SurveyJS needs both CMS (core) and a tickets integration. Register as a no-op when
        // `tickets` is not configured, rather than crashing dependency resolution at boot.
        if (!ticketsService) {
            return { module: SurveyjsModule };
        }

        return {
            module: SurveyjsModule,
            imports: [LoggerModule, HttpModule],
            providers: [
                SurveyjsService,
                {
                    provide: CMS.Service,
                    useClass: cmsService as Type,
                },
                {
                    provide: Tickets.Service,
                    useClass: ticketsService as Type,
                },
            ],
            controllers: [SurveyjsController],
            exports: [SurveyjsService],
        };
    }
}
