import { Injectable } from '@nestjs/common';
import { CMS, Products } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapProductList } from './product-list.mapper';
import { ProductListBlock } from './product-list.model';
import { GetProductListBlockQuery } from './product-list.request';

const H = HeaderName;

@Injectable()
export class ProductListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly productsService: Products.Service,
        private readonly authService: Auth.Service,
    ) {}

    getProductListBlock(query: GetProductListBlockQuery, headers: AppHeaders): Observable<ProductListBlock> {
        const cms = this.cmsService.getProductListBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.productsService
                    .getProductList(
                        {
                            ...query,
                            limit: query.limit || cms.pagination?.limit || 12,
                            offset: query.offset || 0,
                            type: 'PHYSICAL' as Products.Model.ProductType,
                            category: query.category,
                            locale: headers[H.Locale],
                            basePath: cms.basePath,
                        },
                        headers[H.Authorization],
                    )
                    .pipe(map((products) => mapProductList(products, cms, headers[H.Locale])));
            }),
        );
    }
}
