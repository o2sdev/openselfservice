import Medusa from '@medusajs/js-sdk';
import { UnauthorizedException } from '@nestjs/common';
import { Observable, from, map } from 'rxjs';

import { Auth } from '@o2s/framework/modules';

/**
 * Checks if a resource (cart/order) with a given customerId can be accessed.
 *
 * Medusa assigns a customer_id to both registered and guest customers.
 * Guest customers (has_account=false) are created automatically when an email is provided.
 * This helper uses Admin API to check has_account and enforce ownership:
 *
 * - No customerId on resource → accessible to anyone
 * - No authorization token → check if customer is guest (has_account=false), if so allow access
 * - Authorization provided → customerId must match the authenticated user
 */
export const verifyResourceAccess = (
    sdk: Medusa,
    authService: Auth.Service,
    adminHeaders: Record<string, string>,
    customerId: string | undefined,
    authorization: string | undefined,
): Observable<void> => {
    // No customer on resource — public access
    if (!customerId) {
        return from(Promise.resolve());
    }

    // Authorized user — check ownership directly (no Admin API call needed)
    if (authorization) {
        const tokenCustomerId = authService.getCustomerId(authorization);
        if (customerId !== tokenCustomerId) {
            throw new UnauthorizedException('Unauthorized');
        }
        return from(Promise.resolve());
    }

    // No authorization — check if this is a guest customer via Admin API
    return from(sdk.admin.customer.retrieve(customerId, {}, adminHeaders)).pipe(
        map((response) => {
            const customer = response.customer as { has_account?: boolean };
            if (customer.has_account !== false) {
                throw new UnauthorizedException('Authentication required to access this resource');
            }
            // Guest customer (has_account=false) — allow access
        }),
    );
};
