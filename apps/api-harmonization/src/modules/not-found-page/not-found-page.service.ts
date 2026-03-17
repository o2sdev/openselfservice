import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapNotFoundPage } from './not-found-page.mapper';
import { NotFoundPage } from './not-found-page.model';

const H = HeaderName;

@Injectable()
export class NotFoundPageService {
    constructor(private readonly cmsService: CMS.Service) {}

    getNotFoundPage(headers: AppHeaders): Observable<NotFoundPage> {
        return this.cmsService.getNotFoundPage({ locale: headers[H.Locale] }).pipe(
            map((notFoundPage) => {
                if (!notFoundPage) {
                    throw new NotFoundException();
                }
                return mapNotFoundPage(notFoundPage);
            }),
        );
    }
}
