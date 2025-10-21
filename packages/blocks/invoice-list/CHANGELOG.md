# @o2s/blocks.invoice-list

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
