/**
 * Represents a permission for a specific resource.
 * This is a normalized format that can be mapped from various IAM systems (Keycloak, Auth0, etc.)
 */
export interface Permission {
    /** The resource identifier (e.g., "invoices", "users", "orders") */
    resource: string;
    /** List of allowed actions for this resource (e.g., ["view", "create", "edit", "delete"]) */
    actions: string[];
}

/**
 * Common action types that can be used across resources.
 * Individual resources may define additional custom actions.
 */
export const CommonActions = {
    VIEW: 'view',
    CREATE: 'create',
    EDIT: 'edit',
    DELETE: 'delete',
} as const;

export type CommonAction = (typeof CommonActions)[keyof typeof CommonActions];
