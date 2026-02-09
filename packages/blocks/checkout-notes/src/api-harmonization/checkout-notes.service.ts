import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapCheckoutNotes } from './checkout-notes.mapper';
import { CheckoutNotesBlock } from './checkout-notes.model';
import { GetCheckoutNotesBlockQuery } from './checkout-notes.request';

@Injectable()
export class CheckoutNotesService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getCheckoutNotesBlock(
        query: GetCheckoutNotesBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<CheckoutNotesBlock> {
        const cms = this.cmsService.getCheckoutNotesBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            map(([cms]) => {
                const result = mapCheckoutNotes(cms, headers['x-locale']);

                // Optional: Add permission flags to the response
                // if (headers.authorization) {
                //     const permissions = this.authService.canPerformActions(headers.authorization, 'resource-name', [
                //         'view',
                //         'edit',
                //     ]);
                //     result.permissions = {
                //         view: permissions.view ?? false,
                //         edit: permissions.edit ?? false,
                //     };
                // }

                return result;
            }),
        );
    }
}
