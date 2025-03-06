import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapLoginPage } from './login-page.mapper';
import { LoginPage } from './login-page.model';

@Injectable()
export class LoginPageService {
    constructor(private readonly cmsService: CMS.Service) {}

    getLoginPage(headers: AppHeaders): Observable<LoginPage> {
        return this.cmsService.getAppConfig({ locale: headers['x-locale'] }).pipe(
            switchMap((appConfig) => {
                const header = this.cmsService.getHeader({
                    id: appConfig.signedOut.header || '',
                    locale: headers['x-locale'],
                });
                const loginPage = this.cmsService.getLoginPage({ locale: headers['x-locale'] });

                return forkJoin([header, loginPage]).pipe(
                    map(([header, loginPage]) => {
                        if (!loginPage) {
                            throw new NotFoundException();
                        }

                        return mapLoginPage(header, loginPage);
                    }),
                );
            }),
        );
    }
}
