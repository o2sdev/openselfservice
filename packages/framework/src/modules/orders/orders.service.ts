import { Observable } from 'rxjs';

import * as Orders from './';

/**
 * Abstract order service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class OrderService {
    protected constructor(..._services: unknown[]) {}

    abstract getOrder(
        params: Orders.Request.GetOrderParams,
        authorization?: string,
    ): Observable<Orders.Model.Order | undefined>;
    abstract getOrderList(
        query: Orders.Request.GetOrderListQuery,
        authorization?: string,
    ): Observable<Orders.Model.Orders>;
}
