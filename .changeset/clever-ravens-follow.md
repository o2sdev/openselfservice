---
'@o2s/blocks.checkout-shipping-address': minor
'@o2s/blocks.checkout-billing-payment': minor
'@o2s/blocks.checkout-company-data': minor
'@o2s/blocks.recommended-products': minor
'@o2s/blocks.checkout-summary': minor
'@o2s/blocks.product-details': minor
'@o2s/blocks.product-list': minor
'@o2s/blocks.cart': minor
'@o2s/utils.frontend': minor
'@o2s/frontend': minor
'@o2s/ui': minor
---

Add CartStorage utility for org-scoped cart management in localStorage. Replace direct localStorage calls and cartIdLocalStorageKey prop with centralized Utils.CartStorage across all blocks and app components.
