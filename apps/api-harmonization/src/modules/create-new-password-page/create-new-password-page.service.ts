import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapCreateNewPasswordPage } from './create-new-password-page.mapper';
import { CreateNewPasswordPage } from './create-new-password-page.model';

@Injectable()
export class CreateNewPasswordPageService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCreateNewPasswordPage(headers: AppHeaders): Observable<CreateNewPasswordPage> {
        const createNewPasswordPage = this.cmsService.getCreateNewPasswordPage({ locale: headers['x-locale'] });

        return forkJoin([createNewPasswordPage]).pipe(
            map(([createNewPasswordPage]) => {
                if (!createNewPasswordPage) {
                    throw new NotFoundException();
                }

                return mapCreateNewPasswordPage(createNewPasswordPage);
            }),
        );
    }
}
