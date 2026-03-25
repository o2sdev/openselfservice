---
'@o2s/api-harmonization': patch
'@o2s/eslint-config': patch
'@o2s/frontend': patch
---

fix: resolve build and lint issues

- Fix `src/` bare import in organizations module to use relative path
- Convert express import to type-only in context-headers middleware
- Update page model to import `CMS` from `@o2s/configs.integrations`
- Add `@typescript-eslint/no-empty-object-type: off` rule to frontend-block ESLint config
- Add `npm dedupe` step to api-harmonization and frontend Dockerfiles
- Add `tsconfig.tsbuildinfo` to `.gitignore` across all packages
