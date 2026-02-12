# @o2s/configs.integrations

## 0.5.0

### Minor Changes

- 5aba06c: add Zendesk Help Center articles integration
- 8702f91: feat(zendesk): remove hardcoded locale base paths from article slugs

### Patch Changes

- Updated dependencies [dadd9ba]
- Updated dependencies [7305d03]
- Updated dependencies [5aba06c]
- Updated dependencies [8702f91]
- Updated dependencies [002ff11]
    - @o2s/framework@1.17.0
    - @o2s/integrations.mocked@1.18.0

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
    - @o2s/integrations.mocked@1.17.0
    - @o2s/framework@1.16.0

## 0.3.0

### Minor Changes

- e11b23a: resolving linter errors
- e78c11a: feat: Added sorting support for products in mocked integration
    - Added sorting functionality to `mapProducts` and `mapRelatedProducts` in mocked integration
    - Supports sorting by name and price in ascending/descending order (format: `name_ASC`, `name_DESC`, `price_ASC`, `price_DESC`)
    - Sorting is applied to filtered product lists before returning results

### Patch Changes

- e11b23a: reworked data fetching a little to overcome ESlint warnings
- Updated dependencies [e78c11a]
- Updated dependencies [79b7c87]
    - @o2s/integrations.mocked@1.16.0
    - @o2s/framework@1.15.0

## 0.2.1

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [221dc2c]
- Updated dependencies [235f706]
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
    - @o2s/integrations.mocked@1.15.0
    - @o2s/framework@1.14.0

## 0.2.0

### Minor Changes

- 1653b74: fix: update FilterItem and renderCell components for improved functionality and code clarity

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [2c780d5]
- Updated dependencies [1653b74]
- Updated dependencies [c27726a]
- Updated dependencies [2c780d5]
- Updated dependencies [0354126]
- Updated dependencies [1653b74]
    - @o2s/integrations.mocked@1.14.0
    - @o2s/framework@1.13.0

## 0.1.1

### Patch Changes

- b1c47e8: added mising live preview components to mocked and Strapi integrations
- Updated dependencies [0d1b8cc]
- Updated dependencies [8ac0de9]
- Updated dependencies [ac245c5]
- Updated dependencies [4542ea1]
- Updated dependencies [b1c47e8]
- Updated dependencies [3da2e69]
- Updated dependencies [d3bf68c]
    - @o2s/framework@1.12.0
    - @o2s/integrations.strapi-cms@2.7.0
    - @o2s/integrations.mocked@1.13.0
    - @o2s/integrations.zendesk@2.0.0

## 0.1.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
    - @o2s/integrations.mocked@1.11.0
    - @o2s/framework@1.11.0
