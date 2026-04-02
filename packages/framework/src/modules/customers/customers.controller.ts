import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CustomerAddress, PaginatedCustomerAddresses } from './customers.model';
import { CustomerService } from './customers.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for customer addresses. Base path: `/customers/addresses`. All methods delegate to {@link CustomerService}.
 */
@Controller('/customers/addresses')
@UseInterceptors(LoggerService)
@ApiTags('customers')
export class CustomersController {
    constructor(protected readonly customerService: CustomerService) {}

    @Get()
    @ApiOperation({ summary: 'List customer addresses' })
    @ApiOkResponse({ description: 'Returns customer addresses list.', type: PaginatedCustomerAddresses })
    getAddresses(@Headers() headers: AppHeaders): ReturnType<CustomerService['getAddresses']> {
        return this.customerService.getAddresses(headers[H.Authorization]);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get customer address by id' })
    @ApiParam({ name: 'id', type: String, description: 'Customer address identifier.' })
    @ApiOkResponse({ description: 'Returns customer address details.', type: CustomerAddress })
    getAddress(
        @Param() params: Request.GetAddressParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['getAddress']> {
        return this.customerService.getAddress(params, headers[H.Authorization]);
    }

    @Post()
    @ApiOperation({ summary: 'Create customer address' })
    @ApiBody({ type: Request.CreateAddressBody, description: 'Customer address payload to create.' })
    @ApiCreatedResponse({ description: 'Customer address created.', type: CustomerAddress })
    createAddress(
        @Body() body: Request.CreateAddressBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['createAddress']> {
        return this.customerService.createAddress(body, headers[H.Authorization]);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update customer address' })
    @ApiParam({ name: 'id', type: String, description: 'Customer address identifier.' })
    @ApiBody({ type: Request.UpdateAddressBody, description: 'Customer address payload to update.' })
    @ApiOkResponse({ description: 'Customer address updated.', type: CustomerAddress })
    updateAddress(
        @Param() params: Request.UpdateAddressParams,
        @Body() body: Request.UpdateAddressBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['updateAddress']> {
        return this.customerService.updateAddress(params, body, headers[H.Authorization]);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete customer address' })
    @ApiParam({ name: 'id', type: String, description: 'Customer address identifier.' })
    @ApiOkResponse({ description: 'Customer address deleted.' })
    deleteAddress(
        @Param() params: Request.DeleteAddressParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['deleteAddress']> {
        return this.customerService.deleteAddress(params, headers[H.Authorization]);
    }

    @Post(':id/default')
    @ApiOperation({ summary: 'Set default customer address' })
    @ApiParam({ name: 'id', type: String, description: 'Customer address identifier.' })
    @ApiOkResponse({ description: 'Default customer address updated.', type: CustomerAddress })
    setDefaultAddress(
        @Param() params: Request.SetDefaultAddressParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['setDefaultAddress']> {
        return this.customerService.setDefaultAddress(params, headers[H.Authorization]);
    }
}
