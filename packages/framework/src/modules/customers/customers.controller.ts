import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CustomerService } from './customers.service';
import { AppHeaders } from '@/utils/models/headers';

@Controller('/customers/addresses')
@UseInterceptors(LoggerService)
export class CustomersController {
    constructor(protected readonly customerService: CustomerService) {}

    @Get()
    getAddresses(@Headers() headers: AppHeaders) {
        return this.customerService.getAddresses(headers.authorization);
    }

    @Get(':id')
    getAddress(@Param() params: Request.GetAddressParams, @Headers() headers: AppHeaders) {
        return this.customerService.getAddress(params, headers.authorization);
    }

    @Post()
    createAddress(@Body() body: Request.CreateAddressBody, @Headers() headers: AppHeaders) {
        return this.customerService.createAddress(body, headers.authorization);
    }

    @Patch(':id')
    updateAddress(
        @Param() params: Request.UpdateAddressParams,
        @Body() body: Request.UpdateAddressBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.customerService.updateAddress(params, body, headers.authorization);
    }

    @Delete(':id')
    deleteAddress(@Param() params: Request.DeleteAddressParams, @Headers() headers: AppHeaders) {
        return this.customerService.deleteAddress(params, headers.authorization);
    }

    @Post(':id/default')
    setDefaultAddress(@Param() params: Request.SetDefaultAddressParams, @Headers() headers: AppHeaders) {
        return this.customerService.setDefaultAddress(params, headers.authorization);
    }
}
