# @o2s/blocks.notification-details

## 1.5.0

### Minor Changes

- fcf14d2: Configure Storybook to use package README.md as documentation source

### Patch Changes

- a288b11: chore(deps): update dependencies
- 3b8ab83: chore(deps): update dependencies
- 8c01be4: added README
- ea200fc: chore(deps): update dependencies
- Updated dependencies [46d4077]
- Updated dependencies [a288b11]
- Updated dependencies [09d7b17]
- Updated dependencies [bbb3b89]
- Updated dependencies [c6ae8e6]
- Updated dependencies [3b8ab83]
- Updated dependencies [1f2965c]
- Updated dependencies [88d180a]
- Updated dependencies [1804016]
- Updated dependencies [8c01be4]
- Updated dependencies [ea200fc]
  - @o2s/framework@1.18.0
  - @o2s/utils.api-harmonization@0.3.1
  - @o2s/utils.frontend@0.4.1
  - @o2s/utils.logger@1.2.2
  - @o2s/configs.integrations@0.6.0
  - @o2s/ui@1.11.0

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
  - @o2s/utils.api-harmonization@0.3.0
  - @o2s/configs.integrations@0.4.0
  - @o2s/ui@1.9.0
  - @o2s/utils.frontend@0.4.0
  - @o2s/utils.logger@1.2.0

## 1.3.0

### Minor Changes

- e11b23a: resolving linter errors

### Patch Changes

- e11b23a: reworked data fetching a little to overcome ESlint warnings
- Updated dependencies [5947ca4]
- Updated dependencies [e11b23a]
- Updated dependencies [e78c11a]
- Updated dependencies [8f39c25]
- Updated dependencies [79b7c87]
- Updated dependencies [e11b23a]
- Updated dependencies [d197b89]
- Updated dependencies [cd483b7]
- Updated dependencies [d197b89]
  - @o2s/ui@1.8.0
  - @o2s/utils.api-harmonization@0.2.0
  - @o2s/configs.integrations@0.3.0
  - @o2s/utils.frontend@0.3.0
  - @o2s/framework@1.15.0

## 1.2.0

### Minor Changes

- ec8794c: improved error handling

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [221dc2c]
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
  - @o2s/utils.api-harmonization@0.1.3
  - @o2s/configs.integrations@0.2.1
  - @o2s/utils.frontend@0.2.1
  - @o2s/utils.logger@1.1.3
  - @o2s/ui@1.7.0
  - @o2s/framework@1.14.0

## 1.1.1

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [2c780d5]
- Updated dependencies [1653b74]
- Updated dependencies [c27726a]
- Updated dependencies [2c780d5]
- Updated dependencies [0354126]
- Updated dependencies [1653b74]
  - @o2s/framework@1.13.0
  - @o2s/configs.integrations@0.2.0
  - @o2s/ui@1.6.0
  - @o2s/utils.frontend@0.2.0
  - @o2s/utils.api-harmonization@0.1.2
  - @o2s/utils.logger@1.1.2

## 1.1.0

### Minor Changes

- 9ad8658: added support for prioritizing image rendering in order to disable lazyloading for images above the fold
- 9ad8658: made improvements to the way the code splitting to reduce the total size of JS bundles

### Patch Changes

- Updated dependencies [9ad8658]
- Updated dependencies [9ad8658]
  - @o2s/ui@1.4.0

## 1.0.0

### Major Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
  - @o2s/utils.api-harmonization@0.1.0
  - @o2s/configs.integrations@0.1.0
  - @o2s/utils.frontend@0.1.0
  - @o2s/framework@1.11.0
  - @o2s/ui@1.3.0
