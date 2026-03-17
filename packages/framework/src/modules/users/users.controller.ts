import { Body, Controller, Delete, Get, Headers, Param, Patch, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { UserService } from './users.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

@Controller('/users')
@UseInterceptors(LoggerService)
export class UserController {
    constructor(protected readonly userService: UserService) {}

    @Get('/me')
    getCurrentUser(@Headers() headers: AppHeaders) {
        return this.userService.getCurrentUser(headers[H.Authorization]);
    }

    @Get(':id')
    getUser(@Param() params: Request.GetUserParams, @Headers() headers: AppHeaders) {
        return this.userService.getUser(params, headers[H.Authorization]);
    }

    @Patch('/me')
    updateCurrentUser(@Body() body: Request.PostUserBody, @Headers() headers: AppHeaders) {
        return this.userService.updateCurrentUser(body, headers[H.Authorization]);
    }

    @Patch(':id')
    updateUser(
        @Param() params: Request.GetUserParams,
        @Body() body: Request.PostUserBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.userService.updateUser(params, body, headers[H.Authorization]);
    }

    @Get('/me/customers')
    getCustomersForCurrentUser(@Headers() headers: AppHeaders) {
        return this.userService.getCurrentUserCustomers(headers[H.Authorization]);
    }

    @Get('/me/customers/:id')
    getCustomerForCurrentUserById(@Param() params: Request.GetCustomerParams, @Headers() headers: AppHeaders) {
        return this.userService.getCurrentUserCustomer(params, headers[H.Authorization]);
    }

    @Delete('/me')
    deleteCurrentUser(@Headers() headers: AppHeaders) {
        return this.userService.deleteCurrentUser(headers[H.Authorization]);
    }

    @Delete(':id')
    deleteUser(@Param() params: Request.GetUserParams, @Headers() headers: AppHeaders) {
        return this.userService.deleteUser(params, headers[H.Authorization]);
    }
}
