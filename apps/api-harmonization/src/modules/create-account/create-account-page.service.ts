import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapCreateAccountPage } from './create-account-page.mapper';
import { CreateAccountPage } from './create-account-page.model';

@Injectable()
export class CreateAccountPageService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCreateAccountPage(headers: AppHeaders): Observable<CreateAccountPage> {
        const createAccountPage = this.cmsService.getCreateAccountPage({ locale: headers['x-locale'] });

        return forkJoin([createAccountPage]).pipe(
            map(([createAccountPage]) => {
                if (!createAccountPage) {
                    throw new NotFoundException();
                }

                return mapCreateAccountPage(createAccountPage);
            }),
        );
    }
}
