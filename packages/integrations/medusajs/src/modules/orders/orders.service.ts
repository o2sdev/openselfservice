import Medusa from '@medusajs/js-sdk';
import { HttpTypes, OrderStatus } from '@medusajs/types';
import { HttpService } from '@nestjs/axios';
import {
    ForbiddenException,
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@o2s/utils.logger';
import { Observable, catchError, from, throwError } from 'rxjs';

import { Auth, Orders } from '@o2s/framework/modules';

import { mapOrder, mapOrders } from './orders.mapper';

@Injectable()
export class OrdersService extends Orders.Service {
    private readonly logLevel: string;
    private readonly medusaBaseUrl: string;
    private readonly medusaPublishableApiKey: string;
    private readonly medusaAdminApiKey: string;
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    private readonly additionalOrderListFields =
        '+total,+subtotal,+tax_total,+discount_total,+shipping_total,+shipping_subtotal,+tax_total,+items.product.*';
    private readonly additionalOrderDetailsFields = 'items.product.*';
    constructor(
        private readonly config: ConfigService,
        protected httpClient: HttpService,
        @Inject(LoggerService) protected readonly logger: LoggerService,
    ) {
        super();
        this.medusaBaseUrl = this.config.get('MEDUSAJS_BASE_URL') || '';
        this.medusaPublishableApiKey = this.config.get('MEDUSAJS_PUBLISHABLE_API_KEY') || '';
        this.medusaAdminApiKey = this.config.get('MEDUSAJS_ADMIN_API_KEY') || '';
        this.logLevel = this.config.get('LOG_LEVEL') || '';
        this.defaultCurrency = this.config.get('DEFAULT_CURRENCY') || '';

        if (!this.medusaBaseUrl) {
            throw new Error('MEDUSAJS_BASE_URL is not defined');
        }
        if (!this.medusaPublishableApiKey) {
            throw new Error('MEDUSAJS_PUBLISHABLE_API_KEY is not defined');
        }
        if (!this.medusaAdminApiKey) {
            throw new Error('MEDUSAJS_ADMIN_API_KEY is not defined');
        }
        if (!this.defaultCurrency) {
            throw new Error('DEFAULT_CURRENCY is not defined');
        }

        this.sdk = new Medusa({
            baseUrl: this.medusaBaseUrl,
            debug: this.logLevel === 'debug',
            publishableKey: this.medusaPublishableApiKey,
            apiKey: this.medusaAdminApiKey,
        });
    }

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
            this.sdk.admin.order
                .retrieve(params.id, query)
                .then((order) => {
                    return mapOrder(order.order, this.defaultCurrency);
                })
                .catch((error) => {
                    throw error;
                }),
        ).pipe(
            catchError((error) => {
                return this.handleHttpError(error);
            }),
        );
    }

    getOrderList(
        query: Orders.Request.GetOrderListQuery,
        authorization: string | undefined,
    ): Observable<Orders.Model.Orders> {
        if (!authorization) {
            this.logger.debug('Authorization token not found');
            throw new UnauthorizedException('Unauthorized');
        }

        const customerId = Auth.Utils.decodeAuthorizationToken(authorization)?.customer?.id;

        if (!customerId) {
            this.logger.debug('Customer ID not found in authorization token');
            throw new UnauthorizedException('Unauthorized');
        }

        const params: HttpTypes.AdminOrderFilters = {
            id: query.id,
            limit: query.limit,
            offset: query.offset,
            status: query.status ? this.getMedusaStatus(query.status) : undefined,
            created_at: this.createMedusaDateFilter(query.dateFrom, query.dateTo),
            customer_id: customerId,
            order: query.sort ? query.sort : undefined,
            fields: this.additionalOrderListFields,
        };

        return from(
            this.sdk.admin.order
                .list(params)
                .then((orders) => {
                    return mapOrders(orders, this.defaultCurrency);
                })
                .catch((error) => {
                    throw error;
                }),
        ).pipe(
            catchError((error) => {
                return this.handleHttpError(error);
            }),
        );
    }

    private createMedusaDateFilter(
        dateFrom: Date | undefined,
        dateTo: Date | undefined,
    ): HttpTypes.AdminOrderFilters['created_at'] {
        if (!dateFrom || !dateTo) {
            return {
                $gte: dateFrom ? new Date(dateFrom).toISOString() : undefined,
                $lte: dateTo ? new Date(dateTo).toISOString() : undefined,
            };
        }
        return undefined;
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private handleHttpError(error: any) {
        if (error.status === 404) {
            throw new NotFoundException(`Orders not found`);
        } else if (error.status === 403) {
            throw new ForbiddenException('Forbidden');
        } else if (error.status === 401) {
            throw new UnauthorizedException('Unauthorized');
        }
        return throwError(() => new InternalServerErrorException(error.message));
    }
}
