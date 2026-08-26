---
'@o2s/ui': patch
---

fix(ui): merge list filter URL writes into the live query string, so a write queued before `useSearchParams` catches up — another block's filter change, or a debounced one — no longer drops the params written in between
