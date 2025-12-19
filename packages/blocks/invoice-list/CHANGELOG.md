# @o2s/blocks.invoice-list

## 1.3.1

### Patch Changes

- d197b89: fixed incorrect price rendering in `DataView` component
- Updated dependencies [5947ca4]
- Updated dependencies [e78c11a]
- Updated dependencies [d197b89]
- Updated dependencies [d197b89]
  - @o2s/ui@1.8.0
  - @o2s/configs.integrations@0.3.0
  - @o2s/framework@1.15.0

## 1.3.0

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

## 1.2.1

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

## 1.2.0

### Minor Changes

- ac245c5: adding initial filters support to list blocks
- 3da2e69: Added search functionality to invoice list filters

### Patch Changes

- Updated dependencies [0d1b8cc]
- Updated dependencies [8ac0de9]
- Updated dependencies [ac245c5]
- Updated dependencies [485731c]
- Updated dependencies [51b17ed]
- Updated dependencies [b519464]
- Updated dependencies [b1c47e8]
- Updated dependencies [3da2e69]
  - @o2s/framework@1.12.0
  - @o2s/ui@1.5.0
  - @o2s/utils.logger@1.1.1
  - @o2s/configs.integrations@0.1.1

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
