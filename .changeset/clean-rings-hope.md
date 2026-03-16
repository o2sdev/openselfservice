---
'@o2s/blocks.article-list': patch
'@o2s/blocks.notification-details': patch
'@o2s/blocks.ticket-list': patch
'@o2s/blocks.user-account': patch
'@o2s/blocks.quick-links': patch
'@o2s/blocks.faq': patch
---

Align renderer prop types with runtime usage across blocks.

Restore missing `isDraftModeEnabled` and `userId` coverage in renderer prop contracts and rename the misnamed notification details renderer prop type for consistency.
