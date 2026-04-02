# @o2s/blocks.surveyjs-form

## 1.6.2

### Patch Changes

- 025bfb3: fix(deps): declare `@o2s/utils.frontend` and `@o2s/utils.api-harmonization` as peer dependencies in blocks and surveyjs module

  Moves both shared utils from `dependencies` to `peerDependencies` (with `devDependencies` for monorepo builds) so consuming apps supply a single hoisted version and npm does not nest conflicting copies under published packages.

- Updated dependencies [025bfb3]
  - @o2s/modules.surveyjs@0.5.3

## 1.6.1

### Patch Changes

- 31df3a8: fix(deps): move @o2s/framework to peerDependencies in all published packages

  `@o2s/framework` was listed in `dependencies` of blocks, integrations, modules, and utils packages. When installed from npm with mismatched versions across the dependency tree, npm would create nested copies of `@o2s/framework` with different class references. This caused NestJS to fail resolving DI tokens (e.g. `SearchService`) because injected class instances came from a different `@o2s/framework` copy than the one registered in the application module.

  Moved `@o2s/framework` to `peerDependencies` across all affected packages so that the consuming application always provides a single shared copy. Also moved `@o2s/integrations.mocked` to `peerDependencies` in `@o2s/integrations.mocked-dxp`.

- Updated dependencies [31df3a8]
  - @o2s/modules.surveyjs@0.5.2
  - @o2s/utils.api-harmonization@0.3.4
  - @o2s/utils.frontend@0.6.1

## 1.6.0

### Minor Changes

- 6edc9ca: Updated all block services to use the generic getBlockConfig<T>() method instead of block-specific CMS service methods.

### Patch Changes

- Updated dependencies [7d99d13]
- Updated dependencies [7d99d13]
- Updated dependencies [6edc9ca]
  - @o2s/framework@1.22.0

## 1.5.1

### Patch Changes

- 0aaac5b: fix: add missing dependency declarations for turbo boundaries compliance

  Declare previously undeclared imports as explicit dependencies across 55 packages. This resolves all `turbo boundaries` violations where packages imported modules not listed in their `package.json`.

  Key dependency categories added:
  - `@storybook/nextjs-vite`, `@storybook/react`, `storybook` for story files
  - `vitest`, `@nestjs/testing`, `@o2s/vitest-config` for test files
  - `lucide-react`, `dayjs`, `string-template`, `class-variance-authority` for runtime code
  - `vite` for vitest configs in integrations
  - `@o2s/api-harmonization`, `@auth/core`, `@docusaurus/*` for app-level imports

- Updated dependencies [e8cdde6]
- Updated dependencies [0aaac5b]
- Updated dependencies [0aaac5b]
- Updated dependencies [7ac16b0]
- Updated dependencies [0aaac5b]
  - @o2s/ui@1.14.0
  - @o2s/modules.surveyjs@0.5.1
  - @o2s/utils.frontend@0.5.2
  - @o2s/configs.integrations@0.7.0
  - @o2s/framework@1.21.0

## 1.5.0

### Minor Changes

- 32183ef: Full list of blocks in packages/blocks - bump minor version

### Patch Changes

- 4d1c9c5: Bump version to publish missing packages

## 1.4.1

### Patch Changes

- a7bb35c: refactor: reorganize blocks into domain folders and update generation/docs tooling
- fab2aea: refactor: group Storybook stories by domain and rename UI component directories to PascalCase
- Updated dependencies [a7bb35c]
- Updated dependencies [fab2aea]
  - @o2s/ui@1.13.1

## 1.4.2

### Patch Changes

- fadbc63: Extract shared block prop types into framework models and migrate block frontend props to the common `BlockWith*` helpers.

  This removes duplicated `slug`, `userId`, and `isDraftModeEnabled` definitions and keeps renderer props aligned across blocks.

- 338cb01: fix(api-harmonization): align typed header usage across services and generated SDK/controller contracts
- 338cb01: Refactor header access to use `HeaderName` constants instead of literal header keys across framework controllers, block harmonization services, and mocked auth guards.

  This unifies header handling, reduces string-key typos, and aligns modules with the typed headers approach exposed by `@o2s/framework/headers`.

- Updated dependencies [fadbc63]
- Updated dependencies [338cb01]
- Updated dependencies [338cb01]
- Updated dependencies [338cb01]
  - @o2s/framework@1.20.1
  - @o2s/utils.api-harmonization@0.3.3
  - @o2s/modules.surveyjs@0.4.4

## 1.4.1

### Patch Changes

- 83a3d13: chore(deps): update dependencies
- 98b2e68: chore(deps): update dependencies
- Updated dependencies [83a3d13]
- Updated dependencies [375cd90]
- Updated dependencies [daf592e]
- Updated dependencies [375cd90]
- Updated dependencies [98b2e68]
  - @o2s/framework@1.20.0
  - @o2s/modules.surveyjs@0.4.3
  - @o2s/utils.api-harmonization@0.3.2
  - @o2s/utils.frontend@0.5.1
  - @o2s/utils.logger@1.2.3
  - @o2s/ui@1.13.0

## 1.4.0

### Minor Changes

- fcf14d2: Configure Storybook to use package README.md as documentation source
- 600d5ac: chore: add create-o2s-app flag to package.json in all blocks and integrations

### Patch Changes

- 9678d12: chore(deps): update dependencies
- a288b11: chore(deps): update dependencies
- 8529002: chore(deps): update dependencies
- 3b8ab83: chore(deps): update dependencies
- c413a8b: chore(deps): update dependencies
- 8c01be4: added README
- ea200fc: chore(deps): update dependencies
- Updated dependencies [9678d12]
- Updated dependencies [46d4077]
- Updated dependencies [a288b11]
- Updated dependencies [09d7b17]
- Updated dependencies [bbb3b89]
- Updated dependencies [c6ae8e6]
- Updated dependencies [8529002]
- Updated dependencies [3b8ab83]
- Updated dependencies [1f2965c]
- Updated dependencies [88d180a]
- Updated dependencies [1804016]
- Updated dependencies [c413a8b]
- Updated dependencies [8c01be4]
- Updated dependencies [ea200fc]
- Updated dependencies [cc2e932]
  - @o2s/modules.surveyjs@0.4.2
  - @o2s/framework@1.18.0
  - @o2s/utils.api-harmonization@0.3.1
  - @o2s/utils.frontend@0.4.1
  - @o2s/utils.logger@1.2.2
  - @o2s/configs.integrations@0.6.0
  - @o2s/ui@1.11.0

## 1.3.1

### Patch Changes

- 3e14803: chore(deps): update dependencies
- Updated dependencies [3934c6e]
- Updated dependencies [dadd9ba]
- Updated dependencies [7305d03]
- Updated dependencies [5aba06c]
- Updated dependencies [8702f91]
- Updated dependencies [002ff11]
- Updated dependencies [3e14803]
- Updated dependencies [78ea1f7]
- Updated dependencies [241ab52]
  - @o2s/utils.logger@1.2.1
  - @o2s/framework@1.17.0
  - @o2s/configs.integrations@0.5.0
  - @o2s/ui@1.10.0
  - @o2s/modules.surveyjs@0.4.1

## 1.3.0

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
  - @o2s/modules.surveyjs@0.4.0
  - @o2s/framework@1.16.0
  - @o2s/utils.api-harmonization@0.3.0
  - @o2s/configs.integrations@0.4.0
  - @o2s/ui@1.9.0
  - @o2s/utils.frontend@0.4.0
  - @o2s/utils.logger@1.2.0

## 1.2.0

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
  - @o2s/modules.surveyjs@0.3.0
  - @o2s/utils.frontend@0.3.0
  - @o2s/framework@1.15.0

## 1.1.2

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [221dc2c]
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
  - @o2s/utils.api-harmonization@0.1.3
  - @o2s/configs.integrations@0.2.1
  - @o2s/modules.surveyjs@0.2.3
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
  - @o2s/modules.surveyjs@0.2.2
  - @o2s/utils.logger@1.1.2

## 1.1.0

### Minor Changes

- 9ad8658: added support for prioritizing image rendering in order to disable lazyloading for images above the fold
- 9ad8658: made improvements to the way the code splitting to reduce the total size of JS bundles

### Patch Changes

- Updated dependencies [9ad8658]
- Updated dependencies [9ad8658]
- Updated dependencies [9ad8658]
  - @o2s/ui@1.4.0
  - @o2s/modules.surveyjs@0.2.0

## 1.0.0

### Major Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
  - @o2s/utils.api-harmonization@0.1.0
  - @o2s/configs.integrations@0.1.0
  - @o2s/modules.surveyjs@0.1.0
  - @o2s/utils.frontend@0.1.0
  - @o2s/framework@1.11.0
  - @o2s/ui@1.3.0
