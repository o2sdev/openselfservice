import { Injectable, NotFoundException } from '@nestjs/common';
import { Products } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Request } from './product-details.client';
import { mapProductDetails } from './product-details.mapper';
import { Model } from './product-details.model';

@Injectable()
export class ProductDetailsService {
    constructor(private readonly productsService: Products.Service) {}

    getProductDetails(
        id: string,
        query: Request.GetProductDetailsBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<Model.ProductDetailsBlock> {
        const locale = query.locale || headers['x-locale'] || 'en';

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

            return forkJoin([product, popularOffers]).pipe(
                map(([product, popularOffers]) => {
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

                    return mapProductDetails(product, filteredOffers, locale);
                }),
            );
        }

        return product.pipe(
            map((product) => {
                if (!product) {
                    throw new NotFoundException();
                }

                return mapProductDetails(product, undefined, locale);
            }),
        );
    }
}
