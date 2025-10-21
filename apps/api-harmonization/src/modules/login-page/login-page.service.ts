import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapLoginPage } from './login-page.mapper';
import { LoginPage } from './login-page.model';

@Injectable()
export class LoginPageService {
    constructor(private readonly cmsService: CMS.Service) {}

    getLoginPage(headers: Models.Headers.AppHeaders): Observable<LoginPage> {
        const loginPage = this.cmsService.getLoginPage({ locale: headers['x-locale'] });

        return forkJoin([loginPage]).pipe(
            map(([loginPage]) => {
                if (!loginPage) {
                    throw new NotFoundException();
                }

                return mapLoginPage(loginPage);
            }),
        );
    }
}
