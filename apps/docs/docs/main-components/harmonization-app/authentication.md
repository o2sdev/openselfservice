---
sidebar_position: 200
---

# Authentication

The API Harmonization server implements a flexible authentication and authorization system that supports both role-based and permission-based access control. This allows you to secure endpoints at different levels, from entire pages down to specific features within blocks.

For an overview of authentication across the entire O2S framework, see the [authentication overview](../../overview/authentication.md).

## Overview

The authentication system is built around JWT tokens. Importantly, roles and permissions are kept at the organization/customer level, not per user. This allows for more granular access control since one user can belong to different organizations and their access level can vary (e.g., they can be an admin in one organization and a regular user in another).

Both pages and blocks can use role-based access control, permission-based access control, or a combination of both, depending on your security requirements.

The system is designed to work with any IAM provider. Roles and permissions can be retrieved in two ways:
- **From the JWT token** - If your IAM system includes roles and permissions in the access token, they can be extracted directly
- **Asynchronously from another API** - If roles and permissions are not present in the access token, they can be fetched asynchronously from your IAM system or another API endpoint

Each integration implements the abstract `AuthService` to retrieve roles and permissions in whatever way your IAM system provides them. Permissions can be extracted from organization roles, depending on the specific IAM system you're using.

## JWT token structure

JWT tokens contain user information. The exact structure depends on your IAM integration. Roles and permissions may be included in the token if your IAM system provides them, or they may need to be retrieved asynchronously from another API.

If roles and permissions are included in the token, they typically include:

- Organization/customer-level roles (e.g., `['ORG_USER', 'ORG_ADMIN']`) - these are specific to the organization the user is currently accessing
- Permissions organized by resource (e.g., `{ invoices: { actions: ['view', 'pay'] } }`) - also at the organization/customer level
- Customer context for multi-tenant scenarios, which includes the organization-specific roles and permissions
- Standard OIDC claims (sub, exp, iat, jti, etc.)

Since roles and permissions are kept at the organization/customer level, the same user can have different access levels in different organizations. When a user switches between organizations, their roles and permissions change accordingly.

The mocked integration provides a quick-start implementation for development, but it's not production-grade. For production, you'll need to implement an integration that works with your actual IAM system.

## Role-based access control

Role-based access control uses organization-level roles to determine access. Roles are typically broader categories like `ORG_USER` or `ORG_ADMIN`, making them useful for high-level access decisions.

Since roles are kept at the organization/customer level, a user can have different roles in different organizations. For example, a user might be an `ORG_ADMIN` in one organization but only an `ORG_USER` in another. This allows for fine-grained access control based on the user's relationship with each specific organization.

### Using the `@Roles()` decorator

You can protect endpoints using the `@Roles()` decorator on controllers:

```typescript title="protecting an endpoint with roles"
import { Auth } from '@o2s/framework/modules';

@Controller(URL)
export class MyController {
    @Get()
    @Auth.Decorators.Roles({ roles: ['ORG_ADMIN'] })
    getEndpoint() {
        // Only users with ORG_ADMIN role in their current organization can access this
    }
}
```

### Matching modes

The `@Roles()` decorator supports two matching modes:

- `ANY` (default): User needs at least one of the specified roles
- `ALL`: User must have all specified roles

```typescript title="using matching modes"
import { Auth } from '@o2s/framework/modules';

// User needs at least one of these roles (default)
@Auth.Decorators.Roles({ roles: ['ORG_USER', 'ORG_ADMIN'], mode: Auth.Model.MatchingMode.ANY })

// User must have all of these roles
@Auth.Decorators.Roles({ roles: ['ORG_USER', 'ORG_ADMIN'], mode: Auth.Model.MatchingMode.ALL })
```

### Role-based access on pages

One of the key features is that role-based access for pages can be configured directly in your CMS. This gives content editors flexibility to control page access without requiring code changes.

Pages have a `roles` field that can be set in the CMS. When a page is requested, the system checks if the user has at least one of the required roles for their current organization:

```typescript title="page role checking in page.service.ts"
const userRoles = this.authService.getUserRoles(headers['authorization']);
Auth.Service.requireRoles(page.roles, userRoles.map((r) => r));
```

The roles checked are those associated with the user's current organization/customer context. If the user doesn't have the required role in their current organization, an `UnauthorizedException` is thrown. If no roles are specified on the page, it's publicly accessible.

## Permission-based access control

Permission-based access control is more granular than roles. It protects specific resources and actions, making it ideal for controlling access to sensitive data or operations.

Like roles, permissions are kept at the organization/customer level. This means a user can have different permissions in different organizations. For example, a user might have `invoices:pay` permission in one organization but not in another, even if they have the same role in both.

### Using the `@Permissions()` decorator

The `@Permissions()` decorator requires a resource name and one or more actions:

```typescript title="protecting an endpoint with permissions"
import { Auth } from '@o2s/framework/modules';

@Controller(URL)
export class PaymentsSummaryController {
    @Get()
    @Auth.Decorators.Permissions({ resource: 'invoices', actions: ['view'] })
    getPaymentsSummaryBlock() {
        // Only users with 'invoices:view' permission in their current organization can access this
    }
}
```

### Resource and action concepts

Permissions follow a `resource:action` pattern:

- Resource: The entity being accessed (e.g., `invoices`, `orders`, `tickets`, `users`)
- Action: The operation being performed (e.g., `view`, `create`, `edit`, `delete`, `pay`)

Common actions are defined in `Auth.Model.CommonActions`:
- `VIEW` - Read access
- `CREATE` - Create new resources
- `EDIT` - Modify existing resources
- `DELETE` - Remove resources

### Matching modes for permissions

Like roles, permissions support `ANY` and `ALL` modes:

```typescript title="permission matching modes"
// User needs all specified actions (default)
@Auth.Decorators.Permissions({
    resource: 'orders',
    actions: ['view', 'edit'],
    mode: 'all'
})

// User needs at least one action
@Auth.Decorators.Permissions({
    resource: 'orders',
    actions: ['view', 'edit'],
    mode: 'any'
})
```

### Combining roles and permissions

You can use both decorators together on the same endpoint. Both checks must pass for access to be granted:

```typescript title="combining roles and permissions"
@Get()
@Auth.Decorators.Roles({ roles: [] })  // No role requirement
@Auth.Decorators.Permissions({ resource: 'invoices', actions: ['view'] })
getPaymentsSummaryBlock() {
    // Accessible to anyone with invoices:view permission
}
```

## Guard system

The authentication system uses NestJS guards that are registered globally in the API Harmonization app. There are two guards:

- `RolesGuard`: Checks role-based access control
- `PermissionsGuard`: Checks permission-based access control

Both guards are registered in `app.module.ts`:

```typescript title="global guard registration"
providers: [
    {
        provide: APP_GUARD,
        useFactory: (reflector: Reflector, logger: LoggerService, authService: AuthModule.Service) =>
            new Auth.Guards.RolesGuard(reflector, logger, authService),
        inject: [Reflector, LoggerService, AuthModule.Service],
    },
    {
        provide: APP_GUARD,
        useFactory: (reflector: Reflector, logger: LoggerService, authService: AuthModule.Service) =>
            new Auth.Guards.PermissionsGuard(reflector, logger, authService),
        inject: [Reflector, LoggerService, AuthModule.Service],
    },
]
```

### How guards work

1. When a request arrives, the guards check for decorators on the controller method
2. If decorators are present, the guard extracts the required roles or permissions
3. The guard verifies the JWT token (signature, expiration, standard claims)
4. Roles or permissions are retrieved - either extracted from the token if present, or fetched asynchronously from an API if not
5. Access is granted or denied based on the matching logic

If no decorators are present, the endpoint is publicly accessible.

## Auth Service abstraction

The `AuthService` is an abstract class that each integration must implement. It provides methods for:

- `verifyToken()`: Verifies token signature, expiration, and standard OIDC claims
- `getUserRoles()`: Retrieves organization-level user roles - can extract from token if present, or fetch asynchronously from an API if not (roles for the current organization/customer context)
- `getPermissions()`: Retrieves organization-level permissions - can extract from token if present, or fetch asynchronously from an API if not (permissions for the current organization/customer context)
- `hasPermission()`: Checks if a user has a specific permission in their current organization
- `canPerformActions()`: Checks multiple actions at once, returning a map of action -> boolean (for the current organization)
- `isTokenRevoked()`: Checks if a token has been revoked (can be no-op if not supported)
- `getCustomerId()`: Extracts customer ID for multi-tenant scenarios

Note that `getUserRoles()` and `getPermissions()` return roles and permissions for the user's current organization/customer context, not global user roles. When a user switches organizations, these methods will return different values. The implementation can retrieve these values from the JWT token (if provided by your IAM) or fetch them asynchronously from another API endpoint.

### Using canPerformActions in services

The `canPerformActions()` method is particularly useful when you need to check multiple permissions and return them as flags in your response:

```typescript title="using canPerformActions in a service"
getPaymentsSummaryBlock(
    query: GetPaymentsSummaryBlockQuery,
    headers: ApiModels.Headers.AppHeaders,
): Observable<PaymentsSummaryBlock> {
    // ... fetch data ...

    // Extract permissions using ACL service
    if (headers.authorization) {
        const permissions = this.authService.canPerformActions(
            headers.authorization,
            'invoices',
            ['view', 'pay']
        );

        result.permissions = {
            view: permissions.view ?? false,
            pay: permissions.pay ?? false,
        };
    }

    return result;
}
```

This allows the frontend to conditionally render features based on what the user can actually do.

## Page-level access control

Pages can use role-based access control that's configured in the CMS. This is useful because content editors can control who can access which pages without needing to modify code.

### Configuring roles in CMS

You can model your CMS structure so that there is a `roles` property that can be configured per-page. This allows content editors to control page access directly in the CMS without requiring code changes.

The actual way to implement this depends on your CMS. Different CMS systems handle this differently:

- In some CMS systems, you might add a `roles` field directly to the Page content type
- In others, roles might be configured through a component or a separate content type that's referenced by pages
- The field might be a multi-select dropdown, checkboxes, or tags depending on your CMS's capabilities

The important part is that your CMS integration maps this configuration to the `roles` field in the `Page` model. For example, in the mocked integration:

```typescript title="page with roles configured"
export const PAGE_DASHBOARD: CMS.Model.Page.Page = {
    slug: '/',
    id: '1',
    roles: [Roles.PROSPECT, Roles.ORG_USER, Roles.ORG_ADMIN],
    // ... other page properties
};
```

If the `roles` field is empty or undefined, the page is publicly accessible. The roles specified in the CMS are checked against the user's current organization-level roles when the page is requested.

### How page access checking works

When a page is requested, the `PageService` checks if the user has the required roles for their current organization:

```typescript title="page access check in page.service.ts"
getPage(query: GetPageQuery, headers: Models.Headers.AppHeaders): Observable<Page | NotFound> {
    const page = this.cmsService.getPage({ slug: query.slug, locale: headers['x-locale'] });
    // Gets roles for the user's current organization/customer context
    const userRoles = this.authService.getUserRoles(headers['authorization']);

    return forkJoin([page]).pipe(
        concatMap(([page]) => {
            if (!page) {
                // Handle article fallback...
            }

            // Check if user has required roles in their current organization
            Auth.Service.requireRoles(
                page.roles,
                userRoles.map((r) => r),
            );

            return this.processPage(page, query, headers);
        }),
    );
}
```

The roles checked are those associated with the user's current organization/customer context. If the user doesn't have at least one of the required roles in their current organization, an `UnauthorizedException` is thrown.

## Block-level access control

Blocks can use both role-based and permission-based access control. This gives you flexibility to protect blocks at the endpoint level.

### Endpoint protection

You protect block endpoints using decorators on the controller:

```typescript title="protecting a block endpoint"
@Controller(URL)
export class PaymentsSummaryController {
    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    @Auth.Decorators.Permissions({ resource: 'invoices', actions: ['view'] })
    getPaymentsSummaryBlock() {
        // Protected by permissions
    }
}
```

### Permission flags in responses

Blocks can include permission flags in their responses. This allows the frontend to conditionally render features based on what the user can do:

```typescript title="block model with permissions"
export class PaymentsSummaryBlock extends Block.Block {
    __typename!: 'PaymentsSummaryBlock';
    // ... other properties ...
    permissions?: {
        view: boolean;
        pay: boolean;
    };
}
```

The service populates these flags using `canPerformActions()`:

```typescript title="populating permission flags"
if (headers.authorization) {
    const permissions = this.authService.canPerformActions(
        headers.authorization,
        'invoices',
        ['view', 'pay']
    );
    result.permissions = {
        view: permissions.view ?? false,
        pay: permissions.pay ?? false,
    };
}
```

The frontend can use these permission flags to conditionally render blocks and features. For details on how the frontend handles permission-based rendering, see the [frontend authentication documentation](../frontend-app/authentication.md#permission-based-access-control-in-blocks).

## Multi-organization access control

Since roles and permissions are kept at the organization/customer level rather than per user, the same user can have different access levels in different organizations. This enables more granular access control and supports complex multi-tenant scenarios.

For example:
- A user might be an `ORG_ADMIN` in Organization A, giving them full access to invoices, orders, and settings
- The same user might only be an `ORG_USER` in Organization B, with limited permissions like `invoices:view` but not `invoices:pay`
- When the user switches between organizations, their roles and permissions change automatically based on their relationship with each organization

This approach allows you to:
- Support users who belong to multiple organizations with different access levels
- Implement fine-grained access control that varies by organization
- Ensure users only see and can only perform actions appropriate to their role in the current organization

When checking roles or permissions, the system always uses the values associated with the user's current organization/customer context. These values can be retrieved from the JWT token (if provided by your IAM) or fetched asynchronously from another API if not present in the token.

For more details on multi-organization access control and when to use roles vs permissions, see the [authentication overview](../../overview/authentication.md).

## Best practices

- Remember that roles and permissions are organization-level, not per user - this enables multi-organization access control
- Use permission-based access for blocks that expose sensitive data or operations
- Configure page-level roles in the CMS to give content editors flexibility
- Include permission flags in block responses so the frontend can make rendering decisions
- Use `canPerformActions()` when you need to check multiple permissions at once
- Remember that permissions can be extracted from organization roles, depending on your IAM system
- Always verify tokens before retrieving roles or permissions
- Handle cases where tokens might be missing (for public endpoints)
- When checking access, always use the roles/permissions for the user's current organization context

## Integration implementation

Each integration must implement the abstract `AuthService` class. The mocked integration provides a reference implementation, but remember it's for quick-start purposes only and not production-grade.

For production, implement an integration that:
- Verifies tokens according to your IAM system's requirements
- Retrieves roles and permissions - either extracts them from tokens if your IAM includes them, or fetches them asynchronously from another API if not
- Handles token revocation if your IAM supports it
- Properly extracts customer context for multi-tenant scenarios

See the [integrations documentation](../../integrations/overview.md) for more information on creating custom integrations.
