import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS, Products } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapProductDetails } from './product-details.mapper';
import * as Model from './product-details.model';
import * as Request from './product-details.request';

@Injectable()
export class ProductDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly productsService: Products.Service,
    ) {}

    getProductDetails(
        id: string,
        query: Request.GetProductDetailsBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<Model.ProductDetailsBlock> {
        const locale = query.locale || headers['x-locale'] || 'en';

        const cms = this.cmsService.getProductDetailsBlock({
            id: query.id,
            locale,
        });
        const product = this.productsService.getProduct({
            id,
            locale,
        });

        if (query.includePopularOffers) {
            const popularOffers = this.productsService.getProductList({
                limit: 4,
                offset: 0,
                locale,
            });

            return forkJoin([cms, product, popularOffers]).pipe(
                map(([cms, product, popularOffers]) => {
                    if (!product) {
                        throw new NotFoundException();
                    }

                    // Filter out current product from popular offers
                    const filteredOffers: Model.ProductSummary[] = popularOffers.data
                        .filter((offer) => offer.id !== id && offer.image)
                        .slice(0, 4)
                        .map((offer) => ({
                            id: offer.id,
                            name: offer.name,
                            description: offer.shortDescription,
                            image: offer.image!,
                            price: offer.price,
                            link: offer.link,
                            badges: offer.tags?.map((tag) => ({
                                label: tag.label,
                                variant: tag.variant as Model.Badge['variant'],
                            })),
                        }));

                    return mapProductDetails(product, filteredOffers, cms);
                }),
            );
        }

        return forkJoin([cms, product]).pipe(
            map(([cms, product]) => {
                if (!product) {
                    throw new NotFoundException();
                }

                return mapProductDetails(product, undefined, cms);
            }),
        );
    }
}
