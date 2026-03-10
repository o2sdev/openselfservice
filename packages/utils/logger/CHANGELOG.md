# @o2s/utils.logger

## 1.2.2

### Patch Changes

- a288b11: chore(deps): update dependencies
- 3b8ab83: chore(deps): update dependencies
- 8c01be4: added README
- ea200fc: chore(deps): update dependencies

## 1.2.1

### Patch Changes

- 3934c6e: chore(deps): update dependencies
- 78ea1f7: chore(deps): update dependencies
- 241ab52: chore(deps): update dependencies

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

## 1.1.3

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged

## 1.1.2

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage

## 1.1.1

### Patch Changes

- 8ac0de9: added missing dependencies
- b519464: updated dependencies

## 1.1.0

### Minor Changes

- 61d4f2f: Added integration of services and assets with MedusaJS

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

## 0.12.0

### Minor Changes

- 05eea01: chore: update dependencies

## 0.11.0

### Minor Changes

- 8b93cbf: feat: Implement SurveyJS forms
- 8b93cbf: feat: implement surveyJS forms
- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies

## 0.10.0

### Minor Changes

- de00274: updated dependencies

## 0.9.3

### Patch Changes

- 40fc169: updated dependencies

## 0.9.2

### Patch Changes

- 5b48057: updated dependencies

## 0.9.1

### Patch Changes

- 2c79c35: initial release
