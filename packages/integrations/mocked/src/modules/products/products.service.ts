import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Products } from '@o2s/framework/modules';

import { mapProduct, mapProducts } from './products.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class ProductsService implements Products.Service {
    getProductList(query: Products.Request.GetProductListQuery): Observable<Products.Model.Products> {
        return of(mapProducts(query)).pipe(responseDelay());
    }

    getProduct(params: Products.Request.GetProductParams): Observable<Products.Model.Product> {
        return of(mapProduct(params.id)).pipe(responseDelay());
    }
}
