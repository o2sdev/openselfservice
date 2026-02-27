# @o2s/blocks.bento-grid

## 0.6.0

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

## 0.5.0

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

## 0.4.0

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

## 0.3.0

### Minor Changes

- c2d9438: added new blocks from dxp-starter-kit app

### Patch Changes

- Updated dependencies [221dc2c]
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
  - @o2s/utils.api-harmonization@0.1.3
  - @o2s/configs.integrations@0.2.1
  - @o2s/utils.frontend@0.2.1
  - @o2s/utils.logger@1.1.3
  - @o2s/ui@1.7.0
  - @o2s/framework@1.14.0

## 0.2.0

### Minor Changes

- f1ac1f2: added support for prioritizing image rendering in order to disable lazyloading for images above the fold
- e2f4907: made improvements to the way the code splitting to reduce the total size of JS bundles

### Patch Changes

- Updated dependencies [f1ac1f2]
- Updated dependencies [49d2bb0]
  - @o2s/ui@1.6.0

## 0.1.1

### Patch Changes

- 5654a4b: added Storybook support for blocks
- Updated dependencies [5654a4b]
- Updated dependencies [e8c3d7d]
  - @o2s/ui@1.4.0

## 0.1.0

### Minor Changes

- 3d6afed: feat: add proper Bento grid layout for better responsiveness

### Patch Changes

- Updated dependencies [3d6afed]
  - @o2s/ui@1.2.0

## 0.0.5

### Patch Changes

- 1657f42: updated eslint configs to better suite blocks

## 0.0.4

### Patch Changes

- d12f3b8: updated build configs
- Updated dependencies [d12f3b8]
  - @o2s/configs.integrations@0.0.4
  - @o2s/framework@0.0.4
  - @o2s/ui@1.0.3
  - @o2s/utils.api-harmonization@0.0.4
  - @o2s/utils.frontend@0.0.4

## 0.0.3

### Patch Changes

- dd0d723: initial release
- Updated dependencies [dd0d723]
  - @o2s/framework@0.0.3
  - @o2s/ui@1.0.2
  - @o2s/configs.integrations@0.0.3
  - @o2s/utils.api-harmonization@0.0.3
  - @o2s/utils.frontend@0.0.3

## 0.0.2

### Patch Changes

- dd0d723: initial release
- Updated dependencies [dd0d723]
  - @o2s/framework@null
  - @o2s/ui@1.0.1
  - @o2s/configs.integrations@0.0.2
  - @o2s/utils.api-harmonization@0.0.2
  - @o2s/utils.frontend@0.0.2
