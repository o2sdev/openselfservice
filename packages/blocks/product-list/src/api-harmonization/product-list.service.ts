import { Injectable } from '@nestjs/common';
import { CMS, Products } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapProductList } from './product-list.mapper';
import { ProductListBlock } from './product-list.model';
import { GetProductListBlockQuery } from './product-list.request';

@Injectable()
export class ProductListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly productsService: Products.Service,
        private readonly authService: Auth.Service,
    ) {}

    getProductListBlock(
        query: GetProductListBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<ProductListBlock> {
        const cms = this.cmsService.getProductListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.productsService
                    .getProductList({
                        ...query,
                        limit: query.limit || cms.pagination?.limit || 12,
                        offset: query.offset || 0,
                        type: query.type as Products.Model.ProductType,
                        category: query.category,
                        locale: headers['x-locale'],
                    })
                    .pipe(
                        map((products) => {
                            const result = mapProductList(products, cms, headers['x-locale']);

                            // Extract permissions using ACL service
                            if (headers.authorization) {
                                const permissions = this.authService.canPerformActions(
                                    headers.authorization,
                                    'products',
                                    ['view'],
                                );

                                result.permissions = {
                                    view: permissions.view ?? false,
                                };
                            } else {
                                // Default to allowing view if no authorization token
                                result.permissions = {
                                    view: true,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }
}
