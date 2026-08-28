---
'@o2s/ui': patch
---

fix(ui): derive list filter URL writes from the next state, so a filter change and a view mode change applied in one batch no longer write the URL from each other's stale value
