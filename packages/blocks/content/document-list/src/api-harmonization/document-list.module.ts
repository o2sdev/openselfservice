import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { DocumentListController } from './document-list.controller';
import { DocumentListService } from './document-list.service';

@Module({})
export class DocumentListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: DocumentListBlockModule,
            providers: [
                DocumentListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [DocumentListController],
            exports: [DocumentListService],
        };
    }
}
