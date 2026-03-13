import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapCart } from './cart.mapper';
import { CartBlock } from './cart.model';
import { GetCartBlockQuery } from './cart.request';

@Injectable()
export class CartService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCartBlock(query: GetCartBlockQuery, headers: Models.Headers.AppHeaders): Observable<CartBlock> {
        return this.cmsService
            .getEntry({ ...query, locale: headers['x-locale'] })
            .pipe(map((cms) => mapCart(cms as CMS.Model.CartBlock.CartBlock)));
    }
}
