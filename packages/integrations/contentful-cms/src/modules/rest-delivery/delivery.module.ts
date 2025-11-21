import { Global, Module } from '@nestjs/common';

import { RestDeliveryService } from './delivery.service';

@Global()
@Module({
    providers: [RestDeliveryService],
    exports: [RestDeliveryService],
})
export class RestDeliveryModule {}
