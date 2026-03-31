import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS, Products } from '@o2s/configs.integrations';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapProductDetails } from './product-details.mapper';
import * as Model from './product-details.model';
import * as Request from './product-details.request';

const H = HeaderName;

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
        headers: AppHeaders,
    ): Observable<Model.ProductDetailsBlock> {
        const locale = query.locale || headers[H.Locale] || 'en';

        const cms = this.cmsService.getBlockConfig<CMS.Model.ProductDetailsBlock.ProductDetailsBlock>({
            id: query.id,
            locale,
            blockType: 'ProductDetailsBlock',
        });

        return cms.pipe(
            switchMap((cmsData) => {
                const product = this.productsService.getProduct(
                    {
                        id,
                        variantId: variantSlug,
                        locale,
                        basePath: cmsData.basePath,
                        variantOptionGroups: cmsData.variantOptionGroups,
                    },
                    headers[H.Authorization],
                );

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
