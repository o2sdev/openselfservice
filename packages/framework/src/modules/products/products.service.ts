import { Observable } from 'rxjs';

import { Product, Products } from './products.model';
import { GetProductListQuery, GetProductParams } from './products.request';

export abstract class ProductService {
    protected constructor(..._services: unknown[]) {}

    abstract getProductList(query: GetProductListQuery): Observable<Products>;
    abstract getProduct(params: GetProductParams): Observable<Product>;
}
