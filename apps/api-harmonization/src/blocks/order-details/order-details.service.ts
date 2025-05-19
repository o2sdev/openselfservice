import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';

import { Models } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Orders, Products } from '../../models';

import { mapOrderDetails } from './order-details.mapper';
import { OrderDetailsBlock } from './order-details.model';
import { GetOrderDetailsBlockParams, GetOrderDetailsBlockQuery } from './order-details.request';

@Injectable()
export class OrderDetailsService {
    private readonly defaultProductUnit: string;

    constructor(
        private readonly cmsService: CMS.Service,
        private readonly orderService: Orders.Service,
        private readonly productService: Products.Service,
        private readonly configService: ConfigService,
    ) {
        this.defaultProductUnit = this.configService.get('DEFAULT_PRODUCT_UNIT') || 'PCS';
    }

    getOrderDetailsBlock(
        params: GetOrderDetailsBlockParams,
        query: GetOrderDetailsBlockQuery,
        headers: AppHeaders,
    ): Observable<OrderDetailsBlock> {
        const cms = this.cmsService.getOrderDetailsBlock({ ...query, locale: headers['x-locale'] });
        const order = this.orderService.getOrder({ ...params }, headers['authorization']);

        return forkJoin([cms, order]).pipe(
            switchMap(([cms, order]) => {
                if (!order) {
                    throw new NotFoundException();
                }

                if (!order.items || order.items.length === 0) {
                    return of({ cms, order });
                }

                const productRequests = order.items.map((item) => {
                    if (item.product?.id) {
                        return of(item);
                    }

                    return this.productService
                        .getProduct({
                            id: item.productId,
                            locale: headers['x-locale'],
                        })
                        .pipe(
                            map((product) => ({
                                ...item,
                                product,
                            })),
                        );
                });

                return forkJoin(productRequests).pipe(
                    map((updatedItems) => {
                        let filteredItems = updatedItems;
                        const { offset = 0, limit = 5, sort = 'name_ASC' } = query;

                        if (sort) {
                            const [field, order] = sort.split('_');
                            const isAscending = order === 'ASC';

                            filteredItems = filteredItems.sort((a, b) => {
                                const aValue = a[field as keyof Orders.Model.OrderItem];
                                const bValue = b[field as keyof Orders.Model.OrderItem];

                                if (field === 'discountTotal' || field === 'total' || field === 'price') {
                                    if (!aValue || !bValue) return 0;

                                    const aValueNumber = (aValue as Models.Price.Price).value;
                                    const bValueNumber = (bValue as Models.Price.Price).value;
                                    return isAscending ? aValueNumber - bValueNumber : bValueNumber - aValueNumber;
                                } else if (field === 'name' || field === 'sku') {
                                    const aField = a.product?.[field] ?? '';
                                    const bField = b.product?.[field] ?? '';
                                    return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
                                } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                                    return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                                } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                                    return isAscending ? aValue - bValue : bValue - aValue;
                                }
                                return 0;
                            });
                        }
                        return {
                            ...order,
                            items: filteredItems.slice(Number(offset), Number(offset) + Number(limit)),
                            totalItems: updatedItems.length,
                        };
                    }),
                    map((updatedOrder) => ({ cms, order: updatedOrder })),
                );
            }),
            map(({ cms, order }) =>
                mapOrderDetails(
                    cms,
                    order as Orders.Model.Order & { totalItems: number },
                    headers['x-locale'],
                    headers['x-client-timezone'] || '',
                    this.defaultProductUnit,
                ),
            ),
        );
    }
}
