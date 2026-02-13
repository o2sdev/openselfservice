import { Injectable } from '@nestjs/common';
import { CMS, Products } from '@o2s/configs.integrations';
import { Observable, map, switchMap } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapRecommendedProducts } from './recommended-products.mapper';
import * as Model from './recommended-products.model';
import { GetRecommendedProductsBlockQuery } from './recommended-products.request';

@Injectable()
export class RecommendedProductsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly productsService: Products.Service,
    ) {}

    getRecommendedProductsBlock(
        query: GetRecommendedProductsBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<Model.RecommendedProductsBlock> {
        const locale = headers['x-locale'] || 'en';
        const cmsBlock$ = this.cmsService.getRecommendedProductsBlock({
            id: query.id,
            locale,
        });

        return cmsBlock$.pipe(
            switchMap((cmsBlock) => {
                if (!cmsBlock.basePath) {
                    throw new Error('basePath is required for RecommendedProductsBlock - must be provided by CMS');
                }

                return this.productsService
                    .getProductList({
                        basePath: cmsBlock.basePath,
                        offset: 0,
                        limit: 7, // Fetch 7 to have 6 after excluding current product
                        locale,
                    })
                    .pipe(
                        map((products) => {
                            // Filter out excluded product and products without images
                            const filteredProducts: Model.ProductSummary[] = products.data
                                .filter((product: Products.Model.Product) => {
                                    if (query.excludeProductId && product.id === query.excludeProductId) {
                                        return false;
                                    }
                                    return product.image;
                                })
                                .map((product: Products.Model.Product) => ({
                                    id: product.id,
                                    name: product.name,
                                    description: product.shortDescription,
                                    image: product.image!,
                                    price: product.price,
                                    link: product.link,
                                    badges: product.tags?.map((tag: Products.Model.Product['tags'][number]) => ({
                                        label: tag.label,
                                        variant: tag.variant as Model.Badge['variant'],
                                    })),
                                }));

                            return mapRecommendedProducts(cmsBlock, filteredProducts, locale);
                        }),
                    );
            }),
        );
    }
}
