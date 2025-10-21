import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ContentfulService } from './contentful.service';

@Global()
@Module({
    providers: [ContentfulService, ConfigService],
    exports: [ContentfulService],
})
export class ContentfulModule {}
