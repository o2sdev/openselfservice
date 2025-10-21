import { Global, Module } from '@nestjs/common';

import { MedusaJsService } from './medusajs.service';

@Global()
@Module({
    providers: [MedusaJsService],
    exports: [MedusaJsService],
})
export class MedusaJsModule {}
