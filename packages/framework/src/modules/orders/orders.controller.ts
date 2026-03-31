import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { Order, PaginatedOrders } from './orders.model';
import { OrderService } from './orders.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for orders. Base path: `/orders`. All methods delegate to {@link OrderService}.
 */
@Controller('/orders')
@UseInterceptors(LoggerService)
@ApiTags('orders')
export class OrdersController {
    constructor(private readonly orderService: OrderService) {}

    @Get(':id')
    @ApiOperation({ summary: 'Get order by id' })
    @ApiParam({ name: 'id', type: String, description: 'Order identifier.' })
    @ApiOkResponse({ description: 'Returns order details.', type: Order })
    getOrder(
        @Param() params: Request.GetOrderParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrderService['getOrder']> {
        return this.orderService.getOrder(params, headers[H.Authorization]);
    }

    @Get()
    @ApiOperation({ summary: 'List orders' })
    @ApiQuery({ name: 'query', required: false, type: String, description: 'Order list filters and pagination query.' })
    @ApiOkResponse({ description: 'Returns order list.', type: PaginatedOrders })
    getOrderList(
        @Query() query: Request.GetOrderListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrderService['getOrderList']> {
        return this.orderService.getOrderList(query, headers[H.Authorization]);
    }
}
