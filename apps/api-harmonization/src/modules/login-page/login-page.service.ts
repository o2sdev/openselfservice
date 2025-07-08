import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { mapLoginPage } from './login-page.mapper';
import { LoginPage } from './login-page.model';

@Injectable()
export class LoginPageService {
    constructor(private readonly cmsService: CMS.Service) {}

    getLoginPage(headers: AppHeaders): Observable<LoginPage> {
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
