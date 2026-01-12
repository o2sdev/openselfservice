import { Auth } from '@o2s/framework/modules';

import { Customer } from '@/utils/models/customer';

/**
 * Represents a user's membership in an organization/customer.
 * Actual permissions are defined at the organization level, not the user level.
 */
export class OrganizationMembership {
    /** The organization the user belongs to */
    customer!: Customer;
    /** Whether the user has admin privileges within this organization */
    isAdmin?: boolean;
    /** @deprecated Use customer.scope instead. Legacy roles array for backward compatibility. */
    roles?: Auth.Constants.Roles[];
}

/**
 * @deprecated Use OrganizationMembership instead. Kept for backward compatibility.
 */
export type UserCustomerRole = OrganizationMembership;
