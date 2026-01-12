import { Models } from '@o2s/framework/modules';

/**
 * Maps external IAM permission strings to internal Permission format.
 * Customize this mapping for your specific IAM integration (Keycloak, Auth0, Okta, etc.)
 *
 * Key: External scope string from IAM (e.g., "invoices:view", "billing.read", "manage_users")
 * Value: Internal { resource, action } pair
 */
const permissionMappings: Record<string, { resource: string; action: string }> = {
    // Invoice permissions
    'invoices:view': { resource: 'invoices', action: 'view' },
    'invoices:create': { resource: 'invoices', action: 'create' },
    'invoices:edit': { resource: 'invoices', action: 'edit' },
    'invoices:delete': { resource: 'invoices', action: 'delete' },
    'invoices:pay': { resource: 'invoices', action: 'pay' },
    // User permissions
    'users:view': { resource: 'users', action: 'view' },
    'users:create': { resource: 'users', action: 'create' },
    'users:edit': { resource: 'users', action: 'edit' },
    'users:delete': { resource: 'users', action: 'delete' },
    // Settings permissions
    'settings:view': { resource: 'settings', action: 'view' },
    'settings:edit': { resource: 'settings', action: 'edit' },
    // Notifications permissions
    'notifications:view': { resource: 'notifications', action: 'view' },
    'notifications:create': { resource: 'notifications', action: 'create' },
    'notifications:mark_read': { resource: 'notifications', action: 'mark_read' },
    'notifications:delete': { resource: 'notifications', action: 'delete' },
    // Orders permissions
    'orders:view': { resource: 'orders', action: 'view' },
    'orders:create': { resource: 'orders', action: 'create' },
    'orders:edit': { resource: 'orders', action: 'edit' },
    'orders:cancel': { resource: 'orders', action: 'cancel' },
    'orders:track': { resource: 'orders', action: 'track' },
    // Tickets permissions
    'tickets:view': { resource: 'tickets', action: 'view' },
    'tickets:create': { resource: 'tickets', action: 'create' },
    'tickets:edit': { resource: 'tickets', action: 'edit' },
    'tickets:close': { resource: 'tickets', action: 'close' },
    'tickets:reopen': { resource: 'tickets', action: 'reopen' },
    'tickets:delete': { resource: 'tickets', action: 'delete' },
    // Services permissions
    'services:view': { resource: 'services', action: 'view' },
    // Products permissions
    'products:view': { resource: 'products', action: 'view' },
    // Page access permissions (resource format: page:{pageName})
    'page:dashboard:view': { resource: 'page:dashboard', action: 'view' },
    'page:invoices:view': { resource: 'page:invoices', action: 'view' },
    'page:orders:view': { resource: 'page:orders', action: 'view' },
    'page:tickets:view': { resource: 'page:tickets', action: 'view' },
    'page:notifications:view': { resource: 'page:notifications', action: 'view' },
    'page:services:view': { resource: 'page:services', action: 'view' },
    'page:products:view': { resource: 'page:products', action: 'view' },
    'page:knowledge-base:view': { resource: 'page:knowledge-base', action: 'view' },
    'page:user-account:view': { resource: 'page:user-account', action: 'view' },
    'page:surveys:view': { resource: 'page:surveys', action: 'view' },
};

/**
 * Converts a space-separated scope string from external IAM to normalized Permission array.
 * @param scopeString - External scope string (e.g., "invoices:view invoices:pay")
 * @returns Normalized Permission array grouped by resource
 */
export const mapFromScopeString = (scopeString?: string): Models.Permission.Permission[] => {
    if (!scopeString) {
        return [];
    }

    const resourceMap: Record<string, Set<string>> = {};

    scopeString
        .split(' ')
        .filter(Boolean)
        .forEach((scope) => {
            const mapping = permissionMappings[scope];
            if (mapping) {
                const actionsSet = resourceMap[mapping.resource] || new Set<string>();
                actionsSet.add(mapping.action);
                resourceMap[mapping.resource] = actionsSet;
            }
        });

    return Object.entries(resourceMap).map(([resource, actions]) => ({
        resource,
        actions: Array.from(actions),
    }));
};

/**
 * Converts normalized Permission array to a scope string.
 * @param permissions - Normalized Permission array
 * @returns Space-separated scope string in "resource:action" format
 */
export const mapToScopeString = (permissions?: Models.Permission.Permission[]): string => {
    if (!permissions || permissions.length === 0) {
        return '';
    }

    return permissions.flatMap((p) => p.actions.map((action) => `${p.resource}:${action}`)).join(' ');
};
