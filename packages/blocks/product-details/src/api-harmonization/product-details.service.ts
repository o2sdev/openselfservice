import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS, Products } from '@o2s/configs.integrations';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';

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
        variantSlug: string | undefined,
        query: Request.GetProductDetailsBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<Model.ProductDetailsBlock> {
        const locale = query.locale || headers['x-locale'] || 'en';

        const cms = this.cmsService.getProductDetailsBlock({
            id: query.id,
            locale,
        });

        return cms.pipe(
            switchMap((cmsData) => {
                const product = this.productsService.getProduct({
                    id,
                    variantId: variantSlug,
                    locale,
                    basePath: cmsData.basePath,
                    specFieldsMapping: cmsData.specFieldsMapping,
                });

                return forkJoin([of(cmsData), product]).pipe(
                    map(([cms, product]) => {
                        if (!product) {
                            throw new NotFoundException();
                        }

                        return mapProductDetails(product, cms);
                    }),
                );
            }),
        );
    }
}
