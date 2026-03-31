import { Observable } from 'rxjs';

import { Product, Products } from './products.model';
import { GetProductListQuery, GetProductParams, GetRelatedProductListParams } from './products.request';

/**
 * Abstract product service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class ProductService {
    protected constructor(..._services: unknown[]) {}

    /** Product list with pagination and filters. */
    abstract getProductList(query: GetProductListQuery, authorization?: string): Observable<Products>;
    /** Returns a single product by id. */
    abstract getProduct(params: GetProductParams, authorization?: string): Observable<Product>;
    /** Returns products related to a given product (e.g. cross-sell, upsell). */
    abstract getRelatedProductList(params: GetRelatedProductListParams, authorization?: string): Observable<Products>;
}
