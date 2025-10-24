import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { StrapiService } from './strapi.service';

@Global()
@Module({
    providers: [StrapiService, ConfigService],
    exports: [StrapiService],
})
export class StrapiModule {}
