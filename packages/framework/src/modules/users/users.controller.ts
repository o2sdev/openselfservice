import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Constants } from '../auth';
import { Roles } from '../auth/roles.decorator';

import { Request } from './';
import { UserService } from './users.service';

@Controller('/users')
@UseInterceptors(LoggerService)
export class UserController {
    constructor(protected readonly userService: UserService) {}

    @Get('/me')
    @Roles({ roles: [Constants.Roles.USER, Constants.Roles.ADMIN] })
    getCurrentUser() {
        return this.userService.getCurrentUser();
    }

    @Get(':id')
    @Roles({ roles: [Constants.Roles.USER, Constants.Roles.ADMIN] })
    getUser(@Param() params: Request.GetUserParams) {
        return this.userService.getUser(params);
    }

    @Post()
    @Roles({ roles: [] })
    createUser(@Body() body: Request.PostUserBody) {
        return this.userService.createUser(body);
    }

    @Delete('/me')
    @Roles({ roles: [Constants.Roles.USER, Constants.Roles.ADMIN] })
    deleteUser() {
        return this.userService.deleteUser();
    }

    @Post('/reset-password')
    @Roles({ roles: [] })
    resetPassword(@Body() body: Request.ResetPasswordBody) {
        return this.userService.resetPassword(body);
    }

    @Post('/set-new-password')
    @Roles({ roles: [] })
    setNewPassword(@Body() body: Request.SetNewPasswordBody) {
        return this.userService.setNewPassword(body);
    }

    @Patch('/me')
    @Roles({ roles: [Constants.Roles.USER, Constants.Roles.ADMIN] })
    updateCurrentUser(@Body() body: Request.PatchUserBody) {
        return this.userService.updateCurrentUser(body);
    }

    @Patch(':id')
    @Roles({ roles: [Constants.Roles.USER, Constants.Roles.ADMIN] })
    updateUser(@Param() params: Request.GetUserParams, @Body() body: Request.PatchUserBody) {
        return this.userService.updateUser(params, body);
    }

    @Get('/me/customers')
    @Roles({ roles: [Constants.Roles.USER, Constants.Roles.ADMIN] })
    getCustomersForCurrentUser() {
        return this.userService.getCurrentUserCustomers();
    }

    @Get('/me/customers/:id')
    @Roles({ roles: [Constants.Roles.USER, Constants.Roles.ADMIN] })
    getCustomerForCurrentUserById(@Param() params: Request.GetCustomerParams) {
        return this.userService.getCurrentUserCustomer(params);
    }
}
