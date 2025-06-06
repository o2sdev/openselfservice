import { Body, Controller, Delete, Get, Headers, Param, Patch, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { UserService } from './users.service';
import * as Auth from '@/modules/auth';
import { AppHeaders } from '@/utils/models/headers';

@Controller('/users')
@UseInterceptors(LoggerService)
export class UserController {
    constructor(protected readonly userService: UserService) {}

    @Get('/me')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getCurrentUser(@Headers() headers: AppHeaders) {
        return this.userService.getCurrentUser(headers.authorization);
    }

    @Get(':id')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getUser(@Param() params: Request.GetUserParams, @Headers() headers: AppHeaders) {
        return this.userService.getUser(params, headers.authorization);
    }

    @Patch('/me')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    updateCurrentUser(@Body() body: Request.PostUserBody, @Headers() headers: AppHeaders) {
        return this.userService.updateCurrentUser(body, headers.authorization);
    }

    @Patch(':id')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    updateUser(
        @Param() params: Request.GetUserParams,
        @Body() body: Request.PostUserBody,
        @Headers() headers: AppHeaders,
    ) {
        return this.userService.updateUser(params, body, headers.authorization);
    }

    @Get('/me/customers')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getCustomersForCurrentUser(@Headers() headers: AppHeaders) {
        return this.userService.getCurrentUserCustomers(headers.authorization);
    }

    @Get('/me/customers/:id')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getCustomerForCurrentUserById(@Param() params: Request.GetCustomerParams, @Headers() headers: AppHeaders) {
        return this.userService.getCurrentUserCustomer(params, headers.authorization);
    }

    @Delete('/me')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    deleteUser(@Headers() headers: AppHeaders) {
        return this.userService.deleteUser(headers.authorization);
    }
}
