import { Injectable } from '@nestjs/common';
import { CMS, Products } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth, Models } from '@o2s/framework/modules';

import { mapProductList } from './product-list.mapper';
import { ProductListBlock } from './product-list.model';
import { GetProductListBlockQuery } from './product-list.request';

const H = HeaderName;

const DEFAULT_LIMIT = 12;

@Injectable()
export class ProductListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly productsService: Products.Service,
        private readonly authService: Auth.Service,
    ) {}

    getProductListBlock(query: GetProductListBlockQuery, headers: AppHeaders): Observable<ProductListBlock> {
        const cms = this.cmsService.getBlockConfig<CMS.Model.ProductListBlock.ProductListBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'ProductListBlock',
        });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                // `page` is a URL concern and is consumed here, so it never reaches the products module.
                const { page: _page, ...productQuery } = query;
                const { limit, offset } = Models.Pagination.resolvePagination(query, {
                    cmsLimit: cms.pagination?.limit,
                    defaultLimit: DEFAULT_LIMIT,
                });

                return this.productsService
                    .getProductList(
                        {
                            ...productQuery,
                            limit,
                            offset,
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
