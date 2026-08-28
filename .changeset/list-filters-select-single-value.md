---
'@o2s/blocks.invoice-list': patch
'@o2s/blocks.notification-list': patch
'@o2s/blocks.ticket-list': patch
'@o2s/blocks.order-list': patch
---

fix(blocks): restore select filters from the URL as single values, so opening a shared link no longer hands an array to a single-value select and trips React's `<select>` check
