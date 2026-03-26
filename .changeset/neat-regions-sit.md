---
'@o2s/blocks.checkout-shipping-address': patch
'@o2s/blocks.checkout-billing-payment': patch
'@o2s/blocks.checkout-company-data': patch
'@o2s/blocks.recommended-products': patch
'@o2s/blocks.checkout-summary': patch
'@o2s/blocks.product-details': patch
'@o2s/blocks.product-list': patch
'@o2s/blocks.cart': patch
'@o2s/frontend': patch
---

fix: replace build-time `NEXT_PUBLIC_CART_ID_LOCAL_STORAGE_KEY` env variable with runtime `CART_ID_LOCAL_STORAGE_KEY` passed as a prop from server components across all shop and checkout blocks
