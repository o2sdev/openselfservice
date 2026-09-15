import { URL } from '.';
import { Controller, Get, Headers, Query } from '@nestjs/common';

import { AppHeaders } from '@o2s/framework/headers';

import { LoginPageService } from './login-page.service';

@Controller(URL)
export class LoginPageController {
    constructor(protected readonly service: LoginPageService) {}

    @Get()
    getLoginPage(@Headers() headers: AppHeaders, @Query('preview') preview?: boolean) {
        return this.service.getLoginPage(headers, preview);
    }
}
