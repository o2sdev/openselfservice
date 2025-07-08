import { DynamicModule, Module } from '@nestjs/common';

import { LoggerModule } from '@o2s/utils.logger';

import { ApiConfig, CMS } from '@o2s/framework/modules';

import { PageModule } from '../page/page.module';

import { RoutesController } from './routes.controller';
import { SitemapService } from './routes.service';

@Module({})
export class RoutesModule {
    static register(config: ApiConfig): DynamicModule {
        return {
            module: RoutesModule,
            imports: [LoggerModule, CMS.Module.register(config), PageModule.register(config)],
            controllers: [RoutesController],
            providers: [SitemapService],
            exports: [SitemapService],
        };
    }
}
