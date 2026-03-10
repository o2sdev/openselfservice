import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ZendeskArticleService } from './zendesk-article.service';

@Module({
    imports: [HttpModule],
    providers: [ZendeskArticleService],
    exports: [ZendeskArticleService],
})
export class ZendeskArticleModule {}
