import { Module } from '@nestjs/common';
import { Products } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { ProductDetailsController } from './product-details.controller';
import { ProductDetailsService } from './product-details.service';

@Module({
    controllers: [ProductDetailsController],
    providers: [
        ProductDetailsService,
        {
            provide: Products.Service,
            useExisting: Framework.Products.Service,
        },
    ],
    exports: [ProductDetailsService],
})
export class ProductDetailsModule {}
