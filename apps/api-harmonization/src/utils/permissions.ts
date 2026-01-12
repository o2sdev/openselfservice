import { UnauthorizedException } from '@nestjs/common';

import { Models } from '@o2s/framework/modules';

/**
 * Flattens Permission[] to an array of "resource:action" strings
 */
const flattenPermissions = (permissions: Models.Permission.Permission[]): string[] => {
    return permissions.flatMap((p) => p.actions.map((action) => `${p.resource}:${action}`));
};

/**
 * Checks if user has required permissions, throws UnauthorizedException if not.
 * @param requiredPermissions - Normalized Permission[] (e.g., [{resource: 'page:dashboard', actions: ['view']}])
 * @param userPermissions - User's Permission[] from JWT
 */
export const checkPermissions = (
    requiredPermissions?: Models.Permission.Permission[],
    userPermissions?: Models.Permission.Permission[],
) => {
    if (!requiredPermissions?.length) {
        return; // No permissions required
    }

    if (!userPermissions?.length) {
        throw new UnauthorizedException(); // Permissions required but user has none
    }

    const requiredPermissionStrings = flattenPermissions(requiredPermissions);
    const userPermissionStrings = flattenPermissions(userPermissions);
    const hasAccess = requiredPermissionStrings.some((perm) => userPermissionStrings.includes(perm));

    if (!hasAccess) {
        throw new UnauthorizedException();
    }
};

/**
 * Checks if user has access to resource with required permissions.
 * @param requiredPermissions - Normalized Permission[] (e.g., [{resource: 'page:dashboard', actions: ['view']}])
 * @param userPermissions - User's Permission[] from JWT
 * @returns true if user has at least one of the required permissions
 */
export const getHasAccess = (
    requiredPermissions?: Models.Permission.Permission[],
    userPermissions?: Models.Permission.Permission[],
): boolean => {
    if (!requiredPermissions?.length) {
        return true; // No permissions required
    }

    if (!userPermissions?.length) {
        return false; // Permissions required but user has none
    }

    const requiredPermissionStrings = flattenPermissions(requiredPermissions);
    const userPermissionStrings = flattenPermissions(userPermissions);
    return requiredPermissionStrings.some((perm) => userPermissionStrings.includes(perm));
};
