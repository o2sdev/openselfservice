import Medusa from '@medusajs/js-sdk';
import { HttpTypes, OrderStatus } from '@medusajs/types';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, from, map } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Auth, Orders } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../utils/handle-http-error';

import { mapOrder, mapOrders } from './orders.mapper';

/**
 * Medusa.js implementation of the Orders service.
 *
 * Uses Medusa Store API for order retrieval and listing.
 * Store API automatically scopes orders to the authenticated customer.
 * Requires a custom Medusa auth plugin to validate SSO tokens passed via the authorization header.
 */
@Injectable()
export class OrdersService extends Orders.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    private readonly additionalOrderListFields =
        '+total,+subtotal,+tax_total,+discount_total,+shipping_total,+shipping_subtotal,+tax_total,+items.product.*';
    private readonly additionalOrderDetailsFields = 'items.product.*';

    constructor(
        private readonly config: ConfigService,
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly medusaJsService: MedusaJsService,
        private readonly authService: Auth.Service,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
        this.defaultCurrency = this.config.get('DEFAULT_CURRENCY') || '';

        if (!this.defaultCurrency) {
            throw new Error('DEFAULT_CURRENCY is not defined');
        }
    }

    /**
     * Retrieves an order by ID using Medusa Store API.
     * Store API automatically verifies the order belongs to the authenticated customer.
     *
     * @requires Medusa auth plugin must be configured to accept SSO tokens.
     */
    getOrder(
        params: Orders.Request.GetOrderParams,
        authorization: string | undefined,
    ): Observable<Orders.Model.Order | undefined> {
        if (!authorization) {
            this.logger.debug('Authorization token not found');
            throw new UnauthorizedException('Unauthorized');
        }

        const query: HttpTypes.SelectParams = {
            fields: this.additionalOrderDetailsFields,
        };

        return from(
            this.sdk.store.order.retrieve(params.id, query, this.medusaJsService.getStoreApiHeaders(authorization)),
        ).pipe(
            map((response: { order: HttpTypes.StoreOrder }) => mapOrder(response.order, this.defaultCurrency)),
            catchError((error) => {
                return handleHttpError(error);
            }),
        );
    }

    /**
     * Retrieves a paginated list of orders using Medusa Store API.
     * Store API automatically filters orders by the authenticated customer (no customer_id filter needed).
     *
     * @requires Medusa auth plugin must be configured to accept SSO tokens.
     */
    getOrderList(
        query: Orders.Request.GetOrderListQuery,
        authorization: string | undefined,
    ): Observable<Orders.Model.Orders> {
        if (!authorization) {
            this.logger.debug('Authorization token not found');
            throw new UnauthorizedException('Unauthorized');
        }

        // Store API filters use StoreOrderFilters which supports status, id, limit, offset, and order filters.
        // Customer scoping is handled automatically by Store API based on the authorization token.
        // Note: created_at date filtering is not available in Store API (unlike Admin API).
        const params: HttpTypes.StoreOrderFilters = {
            limit: query.limit,
            offset: query.offset,
            status: query.status ? this.getMedusaStatus(query.status) : undefined,
            order: query.sort ? query.sort : undefined,
            fields: this.additionalOrderListFields,
        };

        return from(this.sdk.store.order.list(params, this.medusaJsService.getStoreApiHeaders(authorization))).pipe(
            map((orders: HttpTypes.StoreOrderListResponse) => mapOrders(orders, this.defaultCurrency)),
            catchError((error) => {
                return handleHttpError(error);
            }),
        );
    }

    private getMedusaStatus(status: string): OrderStatus | undefined {
        switch (status) {
            case 'PENDING':
                return 'pending';
            case 'COMPLETED':
                return 'completed';
            case 'ARCHIVED':
                return 'archived';
            case 'CANCELLED':
                return 'canceled';
            case 'REQUIRES_ACTION':
                return 'requires_action';
            default:
                return undefined;
        }
    }
}
