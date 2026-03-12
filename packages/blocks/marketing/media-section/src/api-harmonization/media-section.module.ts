import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { MediaSectionController } from './media-section.controller';
import { MediaSectionService } from './media-section.service';

@Module({})
export class MediaSectionBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: MediaSectionBlockModule,
            providers: [
                MediaSectionService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [MediaSectionController],
            exports: [MediaSectionService],
        };
    }
}
