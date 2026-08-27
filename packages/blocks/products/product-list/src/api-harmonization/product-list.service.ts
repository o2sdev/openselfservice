import { Injectable } from '@nestjs/common';
import { CMS, Products } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapProductList } from './product-list.mapper';
import { ProductListBlock } from './product-list.model';
import { GetProductListBlockQuery } from './product-list.request';

const H = HeaderName;

const DEFAULT_LIMIT = 12;

/**
 * The page size the block renders with: an explicit query value, then the CMS config, then the default.
 */
const resolveLimit = (query: GetProductListBlockQuery, cmsLimit?: number): number =>
    Number(query.limit) || Number(cmsLimit) || DEFAULT_LIMIT;

/**
 * `offset` wins whenever it is given, `0` included; otherwise a 1-based `page` is resolved with the
 * page size above, which is why this lives here and not in the caller: only the API knows the CMS
 * pagination config.
 */
const resolveOffset = (query: GetProductListBlockQuery, limit: number): number => {
    // Supplied rather than positive: a caller asking for the first page as `offset=0` means it, and a
    // `page` further down the query string must not override it. A value that is not a usable offset
    // (empty, not a number, negative) is treated as absent, so `page` still gets its turn.
    const offset = Number(query.offset);
    const hasOffset = query.offset !== undefined && String(query.offset).trim() !== '';

    if (hasOffset && Number.isFinite(offset) && offset >= 0) {
        return offset;
    }

    // Only a whole number of pages resolves; a fraction or `Infinity` would become an offset no
    // backend can use, and asking for the first page is the safe reading of an unusable value.
    const page = Number(query.page);

    return Number.isSafeInteger(page) && page > 1 ? (page - 1) * limit : 0;
};

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
                const limit = resolveLimit(query, cms.pagination?.limit);

                return this.productsService
                    .getProductList(
                        {
                            ...productQuery,
                            limit,
                            offset: resolveOffset(query, limit),
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
