# create-o2s-app

## 1.2.1

### Patch Changes

- 4a9b047: chore(deps): update dependencies

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

### Patch Changes

- Updated dependencies [72391c1]
    - @o2s/telemetry@1.2.0

## 1.1.4

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [221dc2c]
    - @o2s/telemetry@1.1.2

## 1.1.3

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [0354126]
    - @o2s/telemetry@1.1.1

## 1.1.2

### Patch Changes

- c25f982: updated script to remove unneeded files

## 1.1.1

### Patch Changes

- ebadc3f: updated script to remove blocks and updated telemetry version

## 1.1.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

## 1.0.4

### Patch Changes

- 141b4b2: updated telemetry version

## 1.0.3

### Patch Changes

- b0b16e5: updated script to remove unnecessary packages

## 1.0.2

### Patch Changes

- 7486781: fixed telemetry package version

## 1.0.1

### Patch Changes

- f4b70b3: added telemetry events for anonymous data collection about usage
- Updated dependencies [f4b70b3]
    - @o2s/telemetry@1.0.0

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

## 0.13.0

### Minor Changes

- 05eea01: chore: update dependencies

## 0.12.0

### Minor Changes

- 68f7858: chore: updated dependencies

## 0.11.0

### Minor Changes

- de00274: updated dependencies

## 0.10.2

### Patch Changes

- 20aa578: changed source branch to a dedicated one for the script to eliminate dependencies versions mismatch

## 0.10.1

### Patch Changes

- 1fd263d: changed source branch to a dedicated one for the script to eliminate dependencies versions mismatch

## 0.10.0

### Minor Changes

- 68e5eef: removed locking of o2s dependencies, they will be already locked on the `main` branch

### Patch Changes

- cc6fff1: removed locking of o2s dependencies, they will be already locked on the `main` branch

## 0.9.2

### Patch Changes

- 5b48057: updated dependencies

## 0.9.1

### Patch Changes

- 2c79c35: initial release
