# @o2s/blocks.ticket-list

## 1.5.0

### Minor Changes

- e11b23a: resolving linter errors
- 79b7c87: add inline filters variant with expandable sections
- cd483b7: - add MoreActionsMenu component and refactor ActionList
  - migrate OrderDetails and TicketList to unified ActionList API
  - improve breadcrumbs visibility and card border styling

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

## 1.4.0

### Minor Changes

- db5b381: fixing various bugs related with blocks and ui components, adding sign-in button in navigation
- ec8794c: improved error handling

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- 235f706: changed the default title from h1 to h2 on a block
- Updated dependencies [221dc2c]
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
  - @o2s/utils.api-harmonization@0.1.3
  - @o2s/configs.integrations@0.2.1
  - @o2s/utils.frontend@0.2.1
  - @o2s/utils.logger@1.1.3
  - @o2s/ui@1.7.0
  - @o2s/framework@1.14.0

## 1.3.0

### Minor Changes

- 1653b74: fix: update FilterItem and renderCell components for improved functionality and code clarity
- 2c780d5: conditionally render button in InfoCard for improved layout
- 1653b74: feat(ui): tile version of data lists

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

- 0d1b8cc: Added Live Preview support in blocks
- ac245c5: adding initial filters support to list blocks

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
