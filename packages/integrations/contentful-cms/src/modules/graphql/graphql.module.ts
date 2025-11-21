import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

import { GraphqlService } from './graphql.service';

@Global()
@Module({
    imports: [HttpModule],
    providers: [GraphqlService],
    exports: [GraphqlService],
})
export class GraphqlModule {}
