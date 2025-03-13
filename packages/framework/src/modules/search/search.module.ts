import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { ApiConfig } from '@/api-config';

@Module({})
export class SearchModule {
    static register(config: ApiConfig): DynamicModule {
        const imports = config.integrations.search.imports || [];
        const controller = config.integrations.search.controller || SearchController;
        const service = config.integrations.search.service || SearchService;

        return {
            module: SearchModule,
            providers: [
                {
                    provide: SearchService,
                    useClass: service as Type,
                },
            ],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [SearchService],
        };
    }
}
