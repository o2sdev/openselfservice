import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CustomerService } from './customers.service';
import { AppHeaders } from '@/utils/models/headers';

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
    @ApiResponse({ status: 200, description: 'Returns customer addresses list.' })
    getAddresses(@Headers() headers: AppHeaders): ReturnType<CustomerService['getAddresses']> {
        return this.customerService.getAddresses(headers.authorization);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get customer address by id' })
    @ApiParam({ name: 'id', type: String, description: 'Customer address identifier.' })
    @ApiResponse({ status: 200, description: 'Returns customer address details.' })
    getAddress(
        @Param() params: Request.GetAddressParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['getAddress']> {
        return this.customerService.getAddress(params, headers.authorization);
    }

    @Post()
    @ApiOperation({ summary: 'Create customer address' })
    @ApiBody({ type: Request.CreateAddressBody, description: 'Customer address payload to create.' })
    @ApiResponse({ status: 201, description: 'Customer address created.' })
    createAddress(
        @Body() body: Request.CreateAddressBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['createAddress']> {
        return this.customerService.createAddress(body, headers.authorization);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update customer address' })
    @ApiParam({ name: 'id', type: String, description: 'Customer address identifier.' })
    @ApiBody({ type: Request.UpdateAddressBody, description: 'Customer address payload to update.' })
    @ApiResponse({ status: 200, description: 'Customer address updated.' })
    updateAddress(
        @Param() params: Request.UpdateAddressParams,
        @Body() body: Request.UpdateAddressBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['updateAddress']> {
        return this.customerService.updateAddress(params, body, headers.authorization);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete customer address' })
    @ApiParam({ name: 'id', type: String, description: 'Customer address identifier.' })
    @ApiResponse({ status: 200, description: 'Customer address deleted.' })
    deleteAddress(
        @Param() params: Request.DeleteAddressParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['deleteAddress']> {
        return this.customerService.deleteAddress(params, headers.authorization);
    }

    @Post(':id/default')
    @ApiOperation({ summary: 'Set default customer address' })
    @ApiParam({ name: 'id', type: String, description: 'Customer address identifier.' })
    @ApiResponse({ status: 200, description: 'Default customer address updated.' })
    setDefaultAddress(
        @Param() params: Request.SetDefaultAddressParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<CustomerService['setDefaultAddress']> {
        return this.customerService.setDefaultAddress(params, headers.authorization);
    }
}
