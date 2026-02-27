# @o2s/integrations.algolia

## 1.5.1

### Patch Changes

- a288b11: chore(deps): update dependencies
- f9c379f: chore(deps): update dependencies
- e19e2fd: chore(deps): update dependencies
- 8a59a9f: chore(deps): update dependencies
- 3b8ab83: chore(deps): update dependencies
- 5c6d8c6: chore(deps): update dependencies
- 8c01be4: added README
- 9c78485: chore(deps): update dependencies
- 01725fc: chore(deps): update dependencies
- ea200fc: chore(deps): update dependencies
- Updated dependencies [46d4077]
- Updated dependencies [a288b11]
- Updated dependencies [09d7b17]
- Updated dependencies [bbb3b89]
- Updated dependencies [c6ae8e6]
- Updated dependencies [3b8ab83]
- Updated dependencies [88d180a]
- Updated dependencies [8c01be4]
- Updated dependencies [ea200fc]
    - @o2s/framework@1.18.0
    - @o2s/utils.logger@1.2.2

## 1.5.0

### Minor Changes

- 20a5bdd: Across the integrations (Contentful, Strapi, Algolia, Medusa, Redis, Zendesk) tests cover primarily the service and mapper layers (including error handling), verifying configuration, request shaping and delegation to SDK/clients.

### Patch Changes

- 3e14803: chore(deps): update dependencies
- 94a24b9: chore(deps): update dependencies
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

## 1.4.0

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

### Patch Changes

- Updated dependencies [1a5a22d]
- Updated dependencies [72391c1]
    - @o2s/framework@1.16.0
    - @o2s/utils.logger@1.2.0

## 1.3.2

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [221dc2c]
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
    - @o2s/utils.logger@1.1.3
    - @o2s/framework@1.14.0

## 1.3.1

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

## 1.3.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
    - @o2s/framework@1.11.0

## 1.2.0

### Minor Changes

- c13192c: adjusted `Page` and `Article` models to conform with new user-based permission model

### Patch Changes

- Updated dependencies [c13192c]
    - @o2s/framework@1.7.0

## 1.1.1

### Patch Changes

- f4b70b3: added telemetry events for anonymous data collection about usage
- Updated dependencies [97264f1]
    - @o2s/framework@1.6.2

## 1.1.0

### Minor Changes

- 84510e2: adjusted algolia article search

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

### Patch Changes

- Updated dependencies [0e0c816]
    - @o2s/framework@1.0.0
    - @o2s/utils.logger@1.0.0

## 0.6.0

### Minor Changes

- 05eea01: chore: update dependencies

### Patch Changes

- Updated dependencies [05eea01]
- Updated dependencies [44653fb]
    - @o2s/utils.logger@0.12.0
    - @o2s/framework@0.24.0

## 0.5.0

### Minor Changes

- 2e81dca: added possibility to defined unprotected pages

### Patch Changes

- Updated dependencies [2e81dca]
    - @o2s/framework@0.23.0

## 0.4.0

### Minor Changes

- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies
- Updated dependencies [2e4f22d]
- Updated dependencies [8b93cbf]
- Updated dependencies [e4ebc5a]
- Updated dependencies [8d92afc]
- Updated dependencies [30f3524]
- Updated dependencies [8b93cbf]
- Updated dependencies [30f3524]
- Updated dependencies [8b93cbf]
- Updated dependencies [84b9002]
- Updated dependencies [6d63cb1]
- Updated dependencies [ba125d6]
- Updated dependencies [bb46536]
- Updated dependencies [68f7858]
    - @o2s/framework@0.22.0
    - @o2s/utils.logger@0.11.0

## 0.3.0

### Minor Changes

- de00274: updated dependencies

### Patch Changes

- Updated dependencies [c0ff0a7]
- Updated dependencies [de00274]
- Updated dependencies [c0ff0a7]
- Updated dependencies [e9dc277]
- Updated dependencies [e9dc277]
    - @o2s/framework@0.21.0
    - @o2s/utils.logger@0.10.0

## 0.2.1

### Patch Changes

- 5b48057: updated dependencies
- Updated dependencies [5b48057]
    - @o2s/utils.logger@0.9.2
    - @o2s/framework@0.15.1

## 0.2.0

### Minor Changes

- 80b678a: Added search integration with Algolia

### Patch Changes

- Updated dependencies [80b678a]
    - @o2s/framework@0.14.0
