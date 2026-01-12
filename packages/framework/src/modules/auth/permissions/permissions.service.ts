import { Injectable } from '@nestjs/common';

import * as Auth from '../index';

export interface Permission {
    resource: string;
    actions: string[];
}

@Injectable()
export abstract class PermissionsService {
    /**
     * Extract permissions from JWT token
     * @param token - JWT token string or decoded JWT object
     * @returns Array of normalized permissions
     */
    abstract extractPermissions(token: string | Auth.Model.Jwt): Permission[];

    /**
     * Check if user has permission for a specific resource and action
     * @param token - JWT token string or decoded JWT object
     * @param resource - Resource name (e.g., 'payments', 'invoices')
     * @param action - Action name (e.g., 'view', 'create', 'edit', 'delete', 'pay')
     * @returns true if user has permission, false otherwise
     */
    abstract hasPermission(token: string | Auth.Model.Jwt, resource: string, action: string): boolean;

    /**
     * Get all allowed actions for a specific resource
     * @param token - JWT token string or decoded JWT object
     * @param resource - Resource name
     * @returns Array of allowed action names
     */
    abstract getAllowedActions(token: string | Auth.Model.Jwt, resource: string): string[];

    /**
     * Check multiple actions for a resource and return a map of action -> boolean
     * This is a convenience method for blocks to easily get permission flags
     * @param token - JWT token string or decoded JWT object
     * @param resource - Resource name
     * @param actions - Array of action names to check
     * @returns Object mapping action names to boolean values
     */
    checkResourceActions(token: string | Auth.Model.Jwt, resource: string, actions: string[]): Record<string, boolean> {
        return actions.reduce(
            (acc, action) => {
                acc[action] = this.hasPermission(token, resource, action);
                return acc;
            },
            {} as Record<string, boolean>,
        );
    }
}
