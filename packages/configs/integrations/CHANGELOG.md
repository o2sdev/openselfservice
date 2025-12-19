# @o2s/configs.integrations

## 0.3.0

### Minor Changes

- e78c11a: feat: Added sorting support for products in mocked integration
    - Added sorting functionality to `mapProducts` and `mapRelatedProducts` in mocked integration
    - Supports sorting by name and price in ascending/descending order (format: `name_ASC`, `name_DESC`, `price_ASC`, `price_DESC`)
    - Sorting is applied to filtered product lists before returning results

### Patch Changes

- Updated dependencies [e78c11a]
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
