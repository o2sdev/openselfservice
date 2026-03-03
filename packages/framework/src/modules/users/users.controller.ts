import { Body, Controller, Delete, Get, Headers, Param, Patch, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { UserService } from './users.service';
import { AppHeaders } from '@/utils/models/headers';

/**
 * HTTP controller for users. Base path: `/users`. All methods delegate to {@link UserService}.
 */
@Controller('/users')
@UseInterceptors(LoggerService)
export class UserController {
    constructor(protected readonly userService: UserService) {}

    @Get('/me')
    getCurrentUser(@Headers() headers: AppHeaders): ReturnType<UserService['getCurrentUser']> {
        return this.userService.getCurrentUser(headers.authorization);
    }

    @Get(':id')
    getUser(
        @Param() params: Request.GetUserParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['getUser']> {
        return this.userService.getUser(params, headers.authorization);
    }

    @Patch('/me')
    updateCurrentUser(
        @Body() body: Request.PostUserBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['updateCurrentUser']> {
        return this.userService.updateCurrentUser(body, headers.authorization);
    }

    @Patch(':id')
    updateUser(
        @Param() params: Request.GetUserParams,
        @Body() body: Request.PostUserBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['updateUser']> {
        return this.userService.updateUser(params, body, headers.authorization);
    }

    @Get('/me/customers')
    getCustomersForCurrentUser(@Headers() headers: AppHeaders): ReturnType<UserService['getCurrentUserCustomers']> {
        return this.userService.getCurrentUserCustomers(headers.authorization);
    }

    @Get('/me/customers/:id')
    getCustomerForCurrentUserById(
        @Param() params: Request.GetCustomerParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['getCurrentUserCustomer']> {
        return this.userService.getCurrentUserCustomer(params, headers.authorization);
    }

    @Delete('/me')
    deleteCurrentUser(@Headers() headers: AppHeaders): ReturnType<UserService['deleteCurrentUser']> {
        return this.userService.deleteCurrentUser(headers.authorization);
    }

    @Delete(':id')
    deleteUser(
        @Param() params: Request.GetUserParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['deleteUser']> {
        return this.userService.deleteUser(params, headers.authorization);
    }
}
