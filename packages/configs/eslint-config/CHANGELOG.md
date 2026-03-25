# @o2s/eslint-config

## 1.1.2

### Patch Changes

- 0aaac5b: fix: resolve build and lint issues
    - Fix `src/` bare import in organizations module to use relative path
    - Convert express import to type-only in context-headers middleware
    - Update page model to import `CMS` from `@o2s/configs.integrations`
    - Add `@typescript-eslint/no-empty-object-type: off` rule to frontend-block ESLint config
    - Add `npm dedupe` step to api-harmonization and frontend Dockerfiles
    - Add `tsconfig.tsbuildinfo` to `.gitignore` across all packages

- 0aaac5b: fix: add missing dependency declarations for turbo boundaries compliance

    Declare previously undeclared imports as explicit dependencies across 55 packages. This resolves all `turbo boundaries` violations where packages imported modules not listed in their `package.json`.

    Key dependency categories added:
    - `@storybook/nextjs-vite`, `@storybook/react`, `storybook` for story files
    - `vitest`, `@nestjs/testing`, `@o2s/vitest-config` for test files
    - `lucide-react`, `dayjs`, `string-template`, `class-variance-authority` for runtime code
    - `vite` for vitest configs in integrations
    - `@o2s/api-harmonization`, `@auth/core`, `@docusaurus/*` for app-level imports

## 1.1.1

### Patch Changes

- 8c01be4: added README

## 1.1.0

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

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

## 0.12.0

### Minor Changes

- 05eea01: chore: update dependencies

## 0.11.0

### Minor Changes

- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies

## 0.10.0

### Minor Changes

- c0ff0a7: implement context switch
- de00274: updated dependencies
- c0ff0a7: added recommended typescript rules for eslint; overrode default `no-unused-vars` rule to allow variables starting with `_`

## 0.9.2

### Patch Changes

- 5b48057: updated dependencies

## 0.9.1

### Patch Changes

- 2c79c35: initial release
