import { Body, Controller, Delete, Get, Param, Patch, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { UserService } from './users.service';
import * as Auth from '@/modules/auth';

@Controller('/users')
@UseInterceptors(LoggerService)
export class UserController {
    constructor(protected readonly userService: UserService) {}

    @Get('/me')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getCurrentUser() {
        return this.userService.getCurrentUser();
    }

    @Get(':id')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getUser(@Param() params: Request.GetUserParams) {
        return this.userService.getUser(params);
    }

    @Patch('/me')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    updateCurrentUser(@Body() body: Request.PostUserBody) {
        return this.userService.updateCurrentUser(body);
    }

    @Patch(':id')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    updateUser(@Param() params: Request.GetUserParams, @Body() body: Request.PostUserBody) {
        return this.userService.updateUser(params, body);
    }

    @Get('/me/customers')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getCustomersForCurrentUser() {
        return this.userService.getCurrentUserCustomers();
    }

    @Get('/me/customers/:id')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getCustomerForCurrentUserById(@Param() params: Request.GetCustomerParams) {
        return this.userService.getCurrentUserCustomer(params);
    }

    @Delete('/me')
    @Auth.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    deleteUser() {
        return this.userService.deleteUser();
    }
}
