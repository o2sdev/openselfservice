import { Global, Module } from '@nestjs/common';

import { GraphqlService } from './graphql.service';

@Global()
@Module({
    providers: [GraphqlService],
    exports: [GraphqlService],
})
export class GraphqlModule {}
