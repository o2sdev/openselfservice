# @o2s/frontend

## 0.16.0

### Minor Changes

- 92f2be2: Fix inconsistent data in User Profile

### Patch Changes

- Updated dependencies [92f2be2]
    - @o2s/api-harmonization@0.16.0

## 0.15.0

### Minor Changes

- 477ca3e: bug-43 - pagination component shows wrong number of total pages - fix

### Patch Changes

- @o2s/api-harmonization@0.15.3

## 0.14.0

### Minor Changes

- c4ec3cb: fix validation messages on login page
- db41474: naming fix, added error message when invalid credentials
- 78a3c92: fix filters Context
- db41474: use alert component to display error message

### Patch Changes

- @o2s/api-harmonization@0.15.2

## 0.13.1

### Patch Changes

- 5b48057: updated dependencies
- Updated dependencies [5b48057]
    - @o2s/api-harmonization@0.15.1
    - @o2s/ui@0.10.2

## 0.13.0

### Minor Changes

- db32d1c: unified naming of the related objects in the api-harmonization and frontend apps - from now on, they are called `blocks` (instead of `components` in api-harmonization and `containers` in frontend)

### Patch Changes

- Updated dependencies [db32d1c]
    - @o2s/api-harmonization@0.15.0

## 0.12.3

### Patch Changes

- 5c0aa1d: fixed alternative urls for pages not working when changing locale
- a847eb9: fixed incorrect props in the `Header` component

## 0.12.2

### Patch Changes

- 8c8bcf4: SEO and accessibility improvements
- Updated dependencies [8c8bcf4]
    - @o2s/ui@0.10.1

## 0.12.1

### Patch Changes

- 6e5870c: removed `loading.tsx` in favor of component-specific loaders

## 0.12.0

### Minor Changes

- 0e3fe6c: improved error handling across the app

### Patch Changes

- Updated dependencies [0e3fe6c]
    - @o2s/api-harmonization@0.13.0

## 0.11.0

### Minor Changes

- b4cddfb: add seo, add headers

### Patch Changes

- f2a6781: fixed an issue with alternative URLs for pages - on pages with dynamic URLs (e.g. /cases/(.+)) switching to another locale caused route to change to /cases/(.+) instead of /cases/12345
- eea2896: added recent tickets component
- 54c9fb5: added an alert about the upcoming feature
- Updated dependencies [f2a6781]
- Updated dependencies [eea2896]
- Updated dependencies [b4cddfb]
    - @o2s/api-harmonization@0.12.0

## 0.10.1

### Patch Changes

- c60861b: removed hardcoded logo URL and switched it with a URL to raw file hosted on GitHub

## 0.10.0

### Minor Changes

- e0ce5cb: Removed console.log

### Patch Changes

- Updated dependencies [e0ce5cb]
- Updated dependencies [e0ce5cb]
    - @o2s/ui@0.10.0
    - @o2s/api-harmonization@0.11.0

## 0.9.1

### Patch Changes

- 2c79c35: initial release
- Updated dependencies [2c79c35]
    - @o2s/api-harmonization@0.10.1
    - @o2s/ui@0.9.1
