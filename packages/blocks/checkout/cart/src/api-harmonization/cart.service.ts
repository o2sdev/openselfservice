import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapCart } from './cart.mapper';
import { CartBlock } from './cart.model';
import { GetCartBlockQuery } from './cart.request';

const H = HeaderName;

@Injectable()
export class CartService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCartBlock(query: GetCartBlockQuery, headers: AppHeaders): Observable<CartBlock> {
        return this.cmsService.getCartBlock({ ...query, locale: headers[H.Locale] }).pipe(map(mapCart));
    }
}
