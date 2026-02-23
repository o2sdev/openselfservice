import { Injectable } from '@nestjs/common';
import { CMS, Carts } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map, of } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapCart } from './cart.mapper';
import { CartBlock } from './cart.model';
import { GetCartBlockQuery } from './cart.request';

@Injectable()
export class CartService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly cartService: Carts.Service,
    ) {}

    getCartBlock(query: GetCartBlockQuery, headers: Models.Headers.AppHeaders): Observable<CartBlock> {
        const cms$ = this.cmsService.getCartBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms$]).pipe(
            concatMap(([cms]) => {
                if (!query.cartId) {
                    return of(mapCart(cms, undefined));
                }

                return this.cartService
                    .getCart({ id: query.cartId }, headers.authorization)
                    .pipe(map((cart) => mapCart(cms, cart)));
            }),
        );
    }
}
