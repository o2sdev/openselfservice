import { Observable } from 'rxjs';

import { Product, Products } from './products.model';
import { GetProductListQuery, GetProductParams, GetRelatedProductListParams } from './products.request';

export abstract class ProductService {
    protected constructor(..._services: unknown[]) {}

    abstract getProductList(query: GetProductListQuery, authorization?: string): Observable<Products>;
    abstract getProduct(params: GetProductParams, authorization?: string): Observable<Product>;
    abstract getRelatedProductList(params: GetRelatedProductListParams, authorization?: string): Observable<Products>;
}
