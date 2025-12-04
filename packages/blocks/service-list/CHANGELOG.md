# @o2s/blocks.service-list

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
