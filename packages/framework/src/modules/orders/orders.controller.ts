import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
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
    @ApiResponse({ status: 200, description: 'Returns order details.' })
    getOrder(
        @Param() params: Request.GetOrderParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrderService['getOrder']> {
        return this.orderService.getOrder(params, headers[H.Authorization]);
    }

    @Get()
    @ApiOperation({ summary: 'List orders' })
    @ApiQuery({ name: 'query', required: false, type: String, description: 'Order list filters and pagination query.' })
    @ApiResponse({ status: 200, description: 'Returns order list.' })
    getOrderList(
        @Query() query: Request.GetOrderListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrderService['getOrderList']> {
        return this.orderService.getOrderList(query, headers[H.Authorization]);
    }
}
