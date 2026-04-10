# @o2s/blocks.feature-section-grid

## 0.7.3

### Patch Changes

- 30ecae9: Rename server-only environment variables to drop `NEXT_PUBLIC_` prefix (`NEXT_PUBLIC_LOG_LEVEL` → `LOG_LEVEL`, `NEXT_PUBLIC_LOG_FORMAT` → `LOG_FORMAT`, `NEXT_PUBLIC_LOG_COLORS_ENABLED` → `LOG_COLORS_ENABLED`, `NEXT_PUBLIC_API_URL_INTERNAL` → `API_URL_INTERNAL`) and use `next-runtime-env` for client-side access to `NEXT_PUBLIC_API_URL`.

## 0.7.2

### Patch Changes

- 025bfb3: fix(deps): declare `@o2s/utils.frontend` and `@o2s/utils.api-harmonization` as peer dependencies in blocks and surveyjs module

  Moves both shared utils from `dependencies` to `peerDependencies` (with `devDependencies` for monorepo builds) so consuming apps supply a single hoisted version and npm does not nest conflicting copies under published packages.

## 0.7.1

### Patch Changes

- 31df3a8: fix(deps): move @o2s/framework to peerDependencies in all published packages

  `@o2s/framework` was listed in `dependencies` of blocks, integrations, modules, and utils packages. When installed from npm with mismatched versions across the dependency tree, npm would create nested copies of `@o2s/framework` with different class references. This caused NestJS to fail resolving DI tokens (e.g. `SearchService`) because injected class instances came from a different `@o2s/framework` copy than the one registered in the application module.

  Moved `@o2s/framework` to `peerDependencies` across all affected packages so that the consuming application always provides a single shared copy. Also moved `@o2s/integrations.mocked` to `peerDependencies` in `@o2s/integrations.mocked-dxp`.

- Updated dependencies [31df3a8]
  - @o2s/utils.api-harmonization@0.3.4
  - @o2s/utils.frontend@0.6.1

## 0.7.0

### Minor Changes

- 6edc9ca: Updated all block services to use the generic getBlockConfig<T>() method instead of block-specific CMS service methods.

### Patch Changes

- Updated dependencies [7d99d13]
- Updated dependencies [7d99d13]
- Updated dependencies [6edc9ca]
  - @o2s/framework@1.22.0

## 0.6.1

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
  - @o2s/utils.frontend@0.5.2
  - @o2s/configs.integrations@0.7.0
  - @o2s/framework@1.21.0

## 0.6.0

### Minor Changes

- 32183ef: Full list of blocks in packages/blocks - bump minor version

## 0.5.3

### Patch Changes

- a7bb35c: refactor: reorganize blocks into domain folders and update generation/docs tooling
- fab2aea: refactor: group Storybook stories by domain and rename UI component directories to PascalCase
- Updated dependencies [a7bb35c]
- Updated dependencies [fab2aea]
  - @o2s/ui@1.13.1

## 0.5.2

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

## 0.5.1

### Patch Changes

- 83a3d13: chore(deps): update dependencies
- 98b2e68: chore(deps): update dependencies
- Updated dependencies [83a3d13]
- Updated dependencies [375cd90]
- Updated dependencies [daf592e]
- Updated dependencies [375cd90]
- Updated dependencies [98b2e68]
  - @o2s/framework@1.20.0
  - @o2s/utils.api-harmonization@0.3.2
  - @o2s/utils.frontend@0.5.1
  - @o2s/utils.logger@1.2.3
  - @o2s/ui@1.13.0

## 0.5.0

### Minor Changes

- fcf14d2: Configure Storybook to use package README.md as documentation source
- 600d5ac: chore: add create-o2s-app flag to package.json in all blocks and integrations

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
- Updated dependencies [cc2e932]
  - @o2s/framework@1.18.0
  - @o2s/utils.api-harmonization@0.3.1
  - @o2s/utils.frontend@0.4.1
  - @o2s/utils.logger@1.2.2
  - @o2s/configs.integrations@0.6.0
  - @o2s/ui@1.11.0

## 0.4.0

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

## 0.3.0

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

## 0.2.0

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

## 0.1.0

### Minor Changes

- f1ac1f2: added support for prioritizing image rendering in order to disable lazyloading for images above the fold
- e2f4907: made improvements to the way the code splitting to reduce the total size of JS bundles

### Patch Changes

- Updated dependencies [f1ac1f2]
- Updated dependencies [49d2bb0]
  - @o2s/ui@1.6.0

## 0.0.7

### Patch Changes

- 5654a4b: added Storybook support for blocks
- Updated dependencies [5654a4b]
- Updated dependencies [e8c3d7d]
  - @o2s/ui@1.4.0

## 0.0.6

### Patch Changes

- 57d91eb: fix: fix build issue
  - replace buttonsVariant with baseVariant,
  - use RichText for descriptions

- Updated dependencies [57d91eb]
  - @o2s/ui@1.2.1

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
