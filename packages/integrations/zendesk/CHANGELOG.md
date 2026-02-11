# @o2s/integrations.zendesk

## 3.0.0

### Major Changes

- 8702f91: feat(zendesk): remove hardcoded locale base paths from article slugs

### Minor Changes

- 20a5bdd: Across the integrations (Contentful, Strapi, Algolia, Medusa, Redis, Zendesk) tests cover primarily the service and mapper layers (including error handling), verifying configuration, request shaping and delegation to SDK/clients.
- 5aba06c: add Zendesk Help Center articles integration

### Patch Changes

- 272314a: chore(deps): update dependencies
- 7c24901: chore(deps): update dependencies
- a5f8a7a: chore(deps): update dependencies
- 3934c6e: chore(deps): update dependencies
- 15782d8: chore(deps): update dependencies
- 68b51fe: chore(deps): update dependencies
- f45c3b5: chore(deps): update dependencies
- 3e14803: chore(deps): update dependencies
- 78ea1f7: chore(deps): update dependencies
- 94a24b9: chore(deps): update dependencies
- 241ab52: chore(deps): update dependencies
- Updated dependencies [3934c6e]
- Updated dependencies [dadd9ba]
- Updated dependencies [7305d03]
- Updated dependencies [5aba06c]
- Updated dependencies [8702f91]
- Updated dependencies [002ff11]
- Updated dependencies [78ea1f7]
- Updated dependencies [241ab52]
    - @o2s/utils.logger@1.2.1
    - @o2s/framework@1.17.0

## 2.1.0

### Minor Changes

- 1a5a22d: Added ticket creation functionality to the Zendesk integration. Users can now create tickets via POST /tickets with attachments and custom fields. Added custom field mapping from Survey.js format to Zendesk custom fields via new zendesk-field.mapper. Updated table columns on TicketList component to display: ticket type (topic), status, and last updated date. Added display of custom field values from ticket properties on TicketDetails. Updated mapper mocks in cms
- 72391c1: ### Authorization & PBAC Implementation

    This release introduces a comprehensive Policy-Based Access Control system interlaced with Role-Based Access Control.

    #### Framework & Core
    - **`@o2s/framework` (AuthService)**: Enhanced with abstract permission logic (`getPermissions`, `hasPermission`), role checks (`hasRole`, `requireRoles`), and action batching (`canPerformActions`).
    - **`@o2s/api-harmonization`**: Implemented global `RolesGuard` and `PermissionsGuard` in `AppModule`.
    - **`@o2s/utils.api-harmonization`**: Added `extractUserRolesFromJwt` to unify role extraction from different JWT claims.

    #### Features
    - **Decorators**: New `@Auth.Decorators.Permissions({ resource, actions })` for securing controllers.
    - **Data Filtering**: Mappers (e.g., `page.mapper.ts`) now filter UI elements (header/footer navigation) based on user roles.

    This provides granular control over resource access and UI visibility based on user roles and permissions.

### Patch Changes

- Updated dependencies [1a5a22d]
- Updated dependencies [72391c1]
    - @o2s/framework@1.16.0
    - @o2s/utils.logger@1.2.0

## 2.0.2

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [221dc2c]
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
    - @o2s/utils.logger@1.1.3
    - @o2s/framework@1.14.0

## 2.0.1

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [2c780d5]
- Updated dependencies [1653b74]
- Updated dependencies [c27726a]
- Updated dependencies [2c780d5]
- Updated dependencies [0354126]
- Updated dependencies [1653b74]
    - @o2s/framework@1.13.0
    - @o2s/utils.logger@1.1.2

## 2.0.0

### Major Changes

- 4542ea1: added a new integration with Zendesk in the area of retrievieng user tickets

### Patch Changes

- Updated dependencies [0d1b8cc]
- Updated dependencies [8ac0de9]
- Updated dependencies [ac245c5]
- Updated dependencies [b519464]
- Updated dependencies [3da2e69]
    - @o2s/framework@1.12.0
    - @o2s/utils.logger@1.1.1
