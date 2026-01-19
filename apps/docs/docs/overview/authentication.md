---
sidebar_position: 450
---

# Authentication

O2S implements a flexible authentication and authorization system that works across both the frontend app and the API Harmonization server. This document provides an overview of the authentication approach used throughout the framework.

## Core principles

### Organization-level access control

Roles and permissions are kept at the organization/customer level, not per user. This is a fundamental architectural decision that enables more granular access control since one user can belong to different organizations and their access level can vary. For example, a user might be an `ORG_ADMIN` in Organization A, giving them full access, while the same user might only be an `ORG_USER` in Organization B, with limited permissions. When the user switches between organizations, their roles and permissions change automatically.

This approach allows you to support users who belong to multiple organizations with different access levels, implement fine-grained access control that varies by organization, and ensure users only see and can only perform actions appropriate to their role in the current organization.

### Role-based and permission-based access control

O2S supports both role-based and permission-based access control, and both can be used together:

- **Role-based access control**: Uses organization-level roles (e.g., `ORG_USER`, `ORG_ADMIN`) for high-level access decisions
- **Permission-based access control**: Uses resource and action combinations (e.g., `invoices:view`, `invoices:pay`) for fine-grained control

Both pages and blocks can use role-based access control, permission-based access control, or a combination of both, depending on your security requirements.

### When to use roles vs permissions

Use roles when you need simple, high-level access control, when access is configured in the CMS (for pages), when you're grouping users into broad categories, or when the access decision is straightforward (e.g., "admin only").

Use permissions when you need to protect specific resources, when access depends on what the user can do with a resource, when permissions come from organization roles in your IAM system, or when you need fine-grained control over actions (view, edit, delete, etc.).

You can also combine both: use roles for broad access control and permissions for resource-specific protection.

## How authentication works across the stack

### Frontend app

The frontend app uses NextAuth.js for session management and handles user authentication through various providers (credentials, OAuth, etc.), session management with JWT tokens from your IAM system, token handling and storage, and customer/organization context switching. The frontend does not generate or modify JWT tokens - it reuses tokens issued by your IAM system.

### API Harmonization server

The API Harmonization server handles token verification and validation, role and permission checking for endpoints, page-level access control (configured in CMS), block-level access control (via decorators), and permission flags in block responses.

### How they work together

1. User authenticates in the frontend app using NextAuth.js
2. IAM system issues JWT tokens (O2S does not generate or modify them)
3. Frontend stores tokens and includes them in API requests via `Authorization` header
4. API Harmonization server verifies tokens and checks roles/permissions
5. Access is granted or denied based on organization-level roles and permissions

## Retrieving roles and permissions

Roles and permissions can be retrieved in two ways:

1. **From the JWT token** - If your IAM system includes roles and permissions in the access token, they can be extracted directly
2. **Asynchronously from another API** - If roles and permissions are not present in the access token, they can be fetched asynchronously from your IAM system or another API endpoint

The exact implementation depends on your IAM integration. Each integration implements its own logic to retrieve roles and permissions in whatever way your IAM system provides them.

## Access control levels

O2S provides access control at multiple levels:

### Page-level access control

Pages can use role-based access control that's configured directly in your CMS. This gives content editors flexibility to control page access without requiring code changes. The `roles` field on pages can be configured per-page, though the actual implementation depends on your CMS.

### Block-level access control

Blocks can use both role-based and permission-based access control at the endpoint level. This protects the API endpoint and ensures only authorized users can access the block's data.

### Feature-level access control

Within blocks, permission flags can be used to conditionally show or hide specific features. This provides fine-grained control over what users can see and do within a block.

## Multi-organization support

Since roles and permissions are organization-level, the same user can have different access levels in different organizations. When a user switches organizations, their roles and permissions change automatically, all API calls use the organization-specific access levels, and the frontend updates to show only features the user can access in that organization.

## Learn more

- **[Frontend authentication](./../main-components/frontend-app/authentication.md)** - NextAuth.js implementation, session management, and frontend-specific authentication details
- **[API Harmonization authentication](./../main-components/harmonization-app/authentication.md)** - Server-side authorization, guards, decorators, and access control implementation
