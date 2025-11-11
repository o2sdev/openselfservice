import { CMS, Products } from '@o2s/configs.integrations';
import { Models } from '@o2s/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, map, switchMap } from 'rxjs';

import { mapProductList } from './product-list.mapper';
import { ProductListBlock } from './product-list.model';
import { GetProductListBlockQuery } from './product-list.request';

@Injectable()
export class ProductListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly productsService: Products.Service,
    ) {}

    getProductListBlock(
        query: GetProductListBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<ProductListBlock> {
        const locale = headers['x-locale'];

        return this.cmsService.getProductListBlock({ id: query.id, locale }).pipe(
            switchMap((cms) => {
                const limit = query.limit ?? cms.pagination?.limit ?? 9;
                const offset = query.offset ?? 0;

                return this.productsService
                    .getProductList(
                        {
                            ...query,
                            limit,
                            offset,
                            locale,
                        },
                        headers.authorization,
                    )
                    .pipe(map((products) => mapProductList(products, cms, locale)));
            }),
        );
    }
}
