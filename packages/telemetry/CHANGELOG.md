# @o2s/telemetry

## 1.2.1

### Patch Changes

- a288b11: chore(deps): update dependencies
- 3b8ab83: chore(deps): update dependencies
- 8c01be4: added README
- ea200fc: chore(deps): update dependencies

## 1.2.0

### Minor Changes

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

## 1.1.2

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged

## 1.1.1

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage

## 1.1.0

### Minor Changes

- 93797de: added a new parameter to telemetry to define the name of the app that sends the events (e.g. 'o2s' or 'dxp')

## 1.0.8

### Patch Changes

- c660045: refactored telemetry package to be class-based

## 1.0.7

### Patch Changes

- b961738: added a failsafe around `configstore` not being available e.g. in serverless environements

## 1.0.6

### Patch Changes

- edda060: added missing dependencies

## 1.0.5

### Patch Changes

- 03f71a4: re-publish to fix missing `dist` files in the package

## 1.0.4

### Patch Changes

- 07f5cf7: added missing `files` field for the package

## 1.0.1

### Patch Changes

- 3373633: changed `main` file for the package

## 1.0.0

### Major Changes

- f4b70b3: added telemetry package for gathering anonymous data about usage
