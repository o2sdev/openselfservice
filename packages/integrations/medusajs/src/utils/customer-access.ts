import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import { UnauthorizedException } from '@nestjs/common';
import { Observable, from, map, of, switchMap } from 'rxjs';

/**
 * Verifies that the caller has access to a resource owned by a given customer.
 *
 * - No customerId on resource → allow (public/unassigned resource)
 * - Authenticated + resource is mine → allow
 * - Authenticated + resource belongs to a guest → allow (e.g. cart created before login)
 * - Authenticated + resource belongs to another registered user → deny
 * - Unauthenticated + resource belongs to a guest → allow (guest checkout flow)
 * - Unauthenticated + resource belongs to a registered user → deny
 */
export const verifyResourceAccess = (
    sdk: Medusa,
    adminHeaders: Record<string, string>,
    storeHeaders: Record<string, string>,
    customerId: string | undefined,
    authorization: string | undefined,
): Observable<void> => {
    if (!customerId) {
        return from(Promise.resolve());
    }

    if (authorization) {
        // Resolve the caller's Medusa customer ID via /store/customers/me
        return from(sdk.store.customer.retrieve({}, storeHeaders)).pipe(
            switchMap((response: HttpTypes.StoreCustomerResponse) => {
                if (response.customer?.id === customerId) {
                    return of(undefined);
                }

                // Not the owner — allow if it's a guest cart, deny if registered
                return from(sdk.admin.customer.retrieve(customerId, {}, adminHeaders)).pipe(
                    map((adminResponse) => {
                        const customer = adminResponse.customer as { has_account?: boolean };
                        if (customer.has_account !== false) {
                            throw new UnauthorizedException('Unauthorized to access this resource');
                        }
                    }),
                );
            }),
        );
    }

    // No token — only allow if this is a guest customer (has_account=false)
    return from(sdk.admin.customer.retrieve(customerId, {}, adminHeaders)).pipe(
        map((response) => {
            const customer = response.customer as { has_account?: boolean };
            if (customer.has_account !== false) {
                throw new UnauthorizedException('Authentication required to access this resource');
            }
        }),
    );
};
