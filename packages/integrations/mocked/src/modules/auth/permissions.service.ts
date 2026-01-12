import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';

import { Auth, Models } from '@o2s/framework/modules';

import { Jwt } from './auth.model';

@Injectable()
export class MockedPermissionsService extends Auth.Permissions.Service {
    extractPermissions(token: string | Auth.Model.Jwt): Auth.Permissions.Permission[] {
        let decodedToken: Jwt;

        if (typeof token === 'string') {
            const accessToken = token.replace('Bearer ', '');
            decodedToken = jwt.decode(accessToken) as Jwt;
        } else {
            decodedToken = token as Jwt;
        }

        // Permissions are now stored directly as Permission[] in the JWT
        return decodedToken?.permissions || decodedToken?.customer?.permissions || [];
    }

    hasPermission(token: string | Auth.Model.Jwt, resource: string, action: string): boolean {
        const permissions = this.extractPermissions(token);
        const resourcePermissions = permissions.find((p) => p.resource === resource);

        if (!resourcePermissions) {
            return false;
        }

        return resourcePermissions.actions.includes(action);
    }

    getAllowedActions(token: string | Auth.Model.Jwt, resource: string): string[] {
        const permissions = this.extractPermissions(token);
        const resourcePermissions = permissions.find((p) => p.resource === resource);

        if (!resourcePermissions) {
            return [];
        }

        return resourcePermissions.actions;
    }

    /**
     * Get all permissions from the token
     */
    getPermissions(token: string | Auth.Model.Jwt): Models.Permission.Permission[] {
        return this.extractPermissions(token);
    }
}
