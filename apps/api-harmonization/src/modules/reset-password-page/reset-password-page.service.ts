import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapResetPasswordPage } from './reset-password-page.mapper';
import { ResetPasswordPage } from './reset-password-page.model';

@Injectable()
export class ResetPasswordPageService {
    constructor(private readonly cmsService: CMS.Service) {}

    getResetPasswordPage(headers: AppHeaders): Observable<ResetPasswordPage> {
        const resetPasswordPage = this.cmsService.getResetPasswordPage({ locale: headers['x-locale'] });

        return forkJoin([resetPasswordPage]).pipe(
            map(([resetPasswordPage]) => {
                if (!resetPasswordPage) {
                    throw new NotFoundException();
                }

                return mapResetPasswordPage(resetPasswordPage);
            }),
        );
    }
}
