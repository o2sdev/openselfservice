import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapCheckoutCompanyData } from './checkout-company-data.mapper';
import { CheckoutCompanyDataBlock } from './checkout-company-data.model';
import { GetCheckoutCompanyDataBlockQuery } from './checkout-company-data.request';

@Injectable()
export class CheckoutCompanyDataService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getCheckoutCompanyDataBlock(
        query: GetCheckoutCompanyDataBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<CheckoutCompanyDataBlock> {
        return this.cmsService.getEntry({ ...query, locale: headers['x-locale'] }).pipe(
            map((cms) => {
                const result = mapCheckoutCompanyData(
                    cms as CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock,
                );

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
