import { Body, Controller, Delete, Get, Headers, Param, Patch, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { User } from './users.model';
import { UserService } from './users.service';
import { Customer } from '@/utils/models/customer';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for users. Base path: `/users`. All methods delegate to {@link UserService}.
 */
@Controller('/users')
@UseInterceptors(LoggerService)
@ApiTags('users')
export class UserController {
    constructor(protected readonly userService: UserService) {}

    @Get('/me')
    @ApiOperation({ summary: 'Get current user' })
    @ApiOkResponse({ description: 'Returns current user profile.', type: User })
    getCurrentUser(@Headers() headers: AppHeaders): ReturnType<UserService['getCurrentUser']> {
        return this.userService.getCurrentUser(headers[H.Authorization]);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get user by id' })
    @ApiParam({ name: 'id', type: String, description: 'User identifier.' })
    @ApiOkResponse({ description: 'Returns user details.', type: User })
    getUser(
        @Param() params: Request.GetUserParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['getUser']> {
        return this.userService.getUser(params, headers[H.Authorization]);
    }

    @Patch('/me')
    @ApiOperation({ summary: 'Update current user' })
    @ApiBody({ type: Request.PostUserBody, description: 'User profile fields to update.' })
    @ApiOkResponse({ description: 'Current user updated.', type: User })
    updateCurrentUser(
        @Body() body: Request.PostUserBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['updateCurrentUser']> {
        return this.userService.updateCurrentUser(body, headers[H.Authorization]);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update user by id' })
    @ApiParam({ name: 'id', type: String, description: 'User identifier.' })
    @ApiBody({ type: Request.PostUserBody, description: 'User profile fields to update.' })
    @ApiOkResponse({ description: 'User updated.', type: User })
    updateUser(
        @Param() params: Request.GetUserParams,
        @Body() body: Request.PostUserBody,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['updateUser']> {
        return this.userService.updateUser(params, body, headers[H.Authorization]);
    }

    @Get('/me/customers')
    @ApiOperation({ summary: 'Get customers for current user' })
    @ApiOkResponse({ description: 'Returns customers linked to current user.', type: [Customer] })
    getCustomersForCurrentUser(@Headers() headers: AppHeaders): ReturnType<UserService['getCurrentUserCustomers']> {
        return this.userService.getCurrentUserCustomers(headers[H.Authorization]);
    }

    @Get('/me/customers/:id')
    @ApiOperation({ summary: 'Get current user customer by id' })
    @ApiParam({ name: 'id', type: String, description: 'Customer identifier linked to current user.' })
    @ApiOkResponse({ description: 'Returns customer details.', type: Customer })
    getCustomerForCurrentUserById(
        @Param() params: Request.GetCustomerParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['getCurrentUserCustomer']> {
        return this.userService.getCurrentUserCustomer(params, headers[H.Authorization]);
    }

    @Delete('/me')
    @ApiOperation({ summary: 'Delete current user' })
    @ApiOkResponse({ description: 'Current user deleted.' })
    deleteCurrentUser(@Headers() headers: AppHeaders): ReturnType<UserService['deleteCurrentUser']> {
        return this.userService.deleteCurrentUser(headers[H.Authorization]);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete user by id' })
    @ApiParam({ name: 'id', type: String, description: 'User identifier.' })
    @ApiOkResponse({ description: 'User deleted.' })
    deleteUser(
        @Param() params: Request.GetUserParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<UserService['deleteUser']> {
        return this.userService.deleteUser(params, headers[H.Authorization]);
    }
}
