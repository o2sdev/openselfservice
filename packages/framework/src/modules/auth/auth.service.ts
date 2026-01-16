import * as Auth from '.';
import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

/**
 * Abstract service for authentication, authorization, and permission management.
 *
 * Integrations must implement all abstract methods to provide:
 * - Token verification (signature, expiration, claims)
 * - Role extraction from IAM-specific token structure
 * - Permission extraction from IAM-specific token structure
 * - Revocation checking (can be no-op if not supported)
 *
 * Tokens are kept in their native IAM format.
 * Each integration extends Auth.Model.Jwt with IAM-specific fields.
 */
@Injectable()
export abstract class AuthService {
    protected constructor(..._services: unknown[]) {}

    /**
     * Verifies token signature, expiration, and standard OIDC claims.
     * @param token - Authorization header value
     * @returns Verified token in native IAM format
     * @throws UnauthorizedException if invalid or expired
     */
    abstract verifyToken(token: string): Promise<Auth.Model.Jwt>;

    /**
     * Checks if token has been revoked.
     * @param jti - JWT ID from token
     * @returns true if revoked
     */
    abstract isTokenRevoked(jti: string): Promise<boolean>;

    /**
     * Extracts the customer ID from a JWT token
     * @param token - JWT token string
     * @returns Customer ID if present, undefined otherwise
     */
    abstract getCustomerId(token: string): string | undefined;

    /**
     * Gets user roles from a JWT token
     * @param token - JWT token string or decoded JWT object
     * @returns Array of user roles (e.g., ['ORG_USER', 'ORG_ADMIN'])
     */
    abstract getUserRoles(token?: string | Auth.Model.Jwt): Auth.Model.Role[];

    /**
     * Gets permissions from a JWT token
     * @param token - JWT token string or decoded JWT object
     * @returns Array of normalized permissions
     */
    abstract getPermissions(token: string | Auth.Model.Jwt): Auth.Model.Permissions;

    /**
     * Check if user has permission for a specific resource and action
     * @param token - JWT token string or decoded JWT object
     * @param resource - Resource name (e.g., 'payments', 'invoices')
     * @param action - Action name (e.g., 'view', 'create', 'edit', 'delete', 'pay')
     * @returns true if user has permission, false otherwise
     */
    abstract hasPermission(token: string | Auth.Model.Jwt, resource: string, action: string): boolean;

    /**
     * Checks if user can perform multiple actions on a resource and returns a map of action -> boolean
     * This is a convenience method for blocks to easily get permission flags
     * @param token - JWT token string or decoded JWT object
     * @param resource - Resource name
     * @param actions - Array of action names to check
     * @returns Object mapping action names to boolean values indicating if user can perform each action
     */
    canPerformActions(token: string | Auth.Model.Jwt, resource: string, actions: string[]): Record<string, boolean> {
        return actions.reduce(
            (acc, action) => {
                acc[action] = this.hasPermission(token, resource, action);
                return acc;
            },
            {} as Record<string, boolean>,
        );
    }

    /**
     * Requires user to have at least one of the specified roles, throws UnauthorizedException if not.
     * @param requiredRoles - Array of role strings (e.g., ['ORG_USER', 'ORG_ADMIN'])
     * @param userRoles - User's roles from JWT (Auth.Model.Role[])
     * @throws UnauthorizedException if user doesn't have required roles
     */
    static requireRoles(requiredRoles?: string[], userRoles?: string[]): void {
        // No roles required = public access
        if (!requiredRoles || requiredRoles.length === 0) {
            return;
        }

        // Roles required but user has none
        if (!userRoles || userRoles.length === 0) {
            throw new UnauthorizedException();
        }

        // Check if user has at least one required role
        const hasRole = requiredRoles.some((role) => userRoles.includes(role));
        if (!hasRole) {
            throw new UnauthorizedException();
        }
    }

    /**
     * Checks whether user has at least one of the specified roles.
     * @param requiredRoles - Array of role strings (e.g., ['ORG_USER', 'ORG_ADMIN'])
     * @param userRoles - User's roles from JWT (Auth.Model.Role[])
     * @returns true if user has at least one required role
     */
    static hasRole(requiredRoles?: string[], userRoles?: string[]): boolean {
        // No roles required = public access
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }

        // Roles required but user has none
        if (!userRoles || userRoles.length === 0) {
            return false;
        }

        // Check if user has at least one required role
        return requiredRoles.some((role) => userRoles.includes(role));
    }
}
