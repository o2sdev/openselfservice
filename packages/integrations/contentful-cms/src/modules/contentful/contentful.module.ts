import { Global, Module } from '@nestjs/common';

import { ContentfulService } from './contentful.service';

@Global()
@Module({
    providers: [ContentfulService],
    exports: [ContentfulService],
})
export class ContentfulModule {}
