import { Body, Controller, Headers, Post, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { REGISTER_USER_URL, RESET_PASSOWRD_URL, SET_NEW_PASSWORD_URL, URL } from './';
import { RegisterUserBody, ResetPasswordBody, SetNewPasswordBody } from './users.request';
import { UsersService } from './users.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class UsersController {
    constructor(protected readonly service: UsersService) {}

    @Post(REGISTER_USER_URL)
    @Auth.Decorators.Roles({ roles: [] })
    registerUser(@Headers() headers: AppHeaders, @Body() body: RegisterUserBody) {
        return this.service.registerUser(body, headers);
    }

    @Post(RESET_PASSOWRD_URL)
    @Auth.Decorators.Roles({ roles: [] })
    resetPassword(@Headers() headers: AppHeaders, @Body() body: ResetPasswordBody) {
        return this.service.resetPassword(body, headers);
    }

    @Post(SET_NEW_PASSWORD_URL)
    @Auth.Decorators.Roles({ roles: [] })
    setNewPassword(@Headers() headers: AppHeaders, @Body() body: SetNewPasswordBody) {
        return this.service.setNewPassword(body, headers);
    }
}
