import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CustomerService } from './customers.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

@Controller('/customers/addresses')
@UseInterceptors(LoggerService)
export class CustomersController {
    constructor(protected readonly customerService: CustomerService) {}

    @Get()
    getAddresses(@Headers() headers: AppHeaders) {
        return this.customerService.getAddresses(headers[H.Authorization]);
    }

    @Get(':id')
    getAddress(@Param() params: Request.GetAddressParams, @Headers() headers: AppHeaders) {
        return this.customerService.getAddress(params, headers[H.Authorization]);
    }

    @Post()
    createAddress(@Body() body: Request.CreateAddressBody, @Headers() headers: AppHeaders) {
        return this.customerService.createAddress(body, headers[H.Authorization]);
    }

    @Patch(':id')
    updateAddress(
        @Param() params: Request.UpdateAddressParams,
        @Body() body: Request.UpdateAddressBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.customerService.updateAddress(params, body, headers[H.Authorization]);
    }

    @Delete(':id')
    deleteAddress(@Param() params: Request.DeleteAddressParams, @Headers() headers: AppHeaders) {
        return this.customerService.deleteAddress(params, headers[H.Authorization]);
    }

    @Post(':id/default')
    setDefaultAddress(@Param() params: Request.SetDefaultAddressParams, @Headers() headers: AppHeaders) {
        return this.customerService.setDefaultAddress(params, headers[H.Authorization]);
    }
}
