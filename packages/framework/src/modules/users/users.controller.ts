import { Body, Controller, Delete, Get, Headers, Param, Patch, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import * as Auth from '@/modules/auth';

import { Request } from './';
import { UserService } from './users.service';
import { AppHeaders } from '@/utils/models/headers';

@Controller('/users')
@UseInterceptors(LoggerService)
export class UserController {
    constructor(protected readonly userService: UserService) {}

    @Get('/me')
    @Auth.Decorators.Roles({ roles: [] })
    getCurrentUser(@Headers() headers: AppHeaders) {
        return this.userService.getCurrentUser(headers.authorization);
    }

    @Get(':id')
    @Auth.Decorators.Roles({ roles: [] })
    getUser(@Param() params: Request.GetUserParams, @Headers() headers: AppHeaders) {
        return this.userService.getUser(params, headers.authorization);
    }

    @Patch('/me')
    @Auth.Decorators.Roles({ roles: [] })
    updateCurrentUser(@Body() body: Request.PostUserBody, @Headers() headers: AppHeaders) {
        return this.userService.updateCurrentUser(body, headers.authorization);
    }

    @Patch(':id')
    @Auth.Decorators.Roles({ roles: [] })
    updateUser(
        @Param() params: Request.GetUserParams,
        @Body() body: Request.PostUserBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.userService.updateUser(params, body, headers.authorization);
    }

    @Get('/me/customers')
    @Auth.Decorators.Roles({ roles: [] })
    getCustomersForCurrentUser(@Headers() headers: AppHeaders) {
        return this.userService.getCurrentUserCustomers(headers.authorization);
    }

    @Get('/me/customers/:id')
    @Auth.Decorators.Roles({ roles: [] })
    getCustomerForCurrentUserById(@Param() params: Request.GetCustomerParams, @Headers() headers: AppHeaders) {
        return this.userService.getCurrentUserCustomer(params, headers.authorization);
    }

    @Delete('/me')
    @Auth.Decorators.Roles({ roles: [] })
    deleteCurrentUser(@Headers() headers: AppHeaders) {
        return this.userService.deleteCurrentUser(headers.authorization);
    }

    @Delete(':id')
    @Auth.Decorators.Roles({ roles: [] })
    deleteUser(@Param() params: Request.GetUserParams, @Headers() headers: AppHeaders) {
        return this.userService.deleteUser(params, headers.authorization);
    }
}
