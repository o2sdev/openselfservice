import Medusa from '@medusajs/js-sdk';
import { UnauthorizedException } from '@nestjs/common';
import { Observable, from, map } from 'rxjs';

/**
 * Prevents unauthenticated access to resources owned by registered customers.
 *
 * Guest resources (no customerId, or guest customer with has_account=false) are
 * accessible without a token. Authenticated requests are always allowed — Medusa
 * validates ownership server-side when the token is forwarded.
 */
export const verifyResourceAccess = (
    sdk: Medusa,
    adminHeaders: Record<string, string>,
    customerId: string | undefined,
    authorization: string | undefined,
): Observable<void> => {
    if (!customerId || authorization) {
        return from(Promise.resolve());
    }

    // No token + resource has a customer — only allow if it's a guest customer
    return from(sdk.admin.customer.retrieve(customerId, {}, adminHeaders)).pipe(
        map((response) => {
            const customer = response.customer as { has_account?: boolean };
            if (customer.has_account !== false) {
                throw new UnauthorizedException('Authentication required to access this resource');
            }
        }),
    );
};
