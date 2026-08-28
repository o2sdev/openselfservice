---
'@o2s/blocks.ticket-list': patch
'@o2s/blocks.order-list': patch
'@o2s/blocks.invoice-list': patch
'@o2s/blocks.notification-list': patch
'@o2s/blocks.product-list': patch
---

fix(blocks): reset list block pagination when filters change, so filtering from page 2 or later no longer lands on a page of the new result set that the user never asked for (often an empty one)
