import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapNotFoundPage } from './not-found-page.mapper';
import { NotFoundPage } from './not-found-page.model';

@Injectable()
export class NotFoundPageService {
    constructor(private readonly cmsService: CMS.Service) {}

    getNotFoundPage(headers: Models.Headers.AppHeaders): Observable<NotFoundPage> {
        return this.cmsService.getNotFoundPage({ locale: headers['x-locale'] }).pipe(
            map((notFoundPage) => {
                if (!notFoundPage) {
                    throw new NotFoundException();
                }
                return mapNotFoundPage(notFoundPage);
            }),
        );
    }
}
