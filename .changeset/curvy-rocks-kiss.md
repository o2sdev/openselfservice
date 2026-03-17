---
'@o2s/api-harmonization': patch
'@o2s/frontend': patch
'@o2s/framework': patch
'@o2s/utils.api-harmonization': patch
---

Introduce typed header name constants (`HeaderName`) using `as const` and
replace selected magic header strings in API harmonization and frontend code.

Update SDK header typing to use `AppHeaders` for stronger request typing.
