---
'@o2s/ui': minor
'@o2s/blocks.product-list': patch
'@o2s/blocks.product-details': patch
'@o2s/blocks.recommended-products': patch
'@o2s/blocks.cart': patch
'@o2s/blocks.checkout-billing-payment': patch
'@o2s/blocks.checkout-summary': patch
'@o2s/blocks.checkout-shipping-address': patch
'@o2s/blocks.checkout-company-data': patch
'@o2s/frontend': patch
---

feat: add mitt-based event bus (`@o2s/ui/event-bus`), cart header badge with `cart:changed`, SDK `GET /carts/current`, and emit `cart:changed` from product list, product details, recommended products, and cart block

refactor: read guest cart localStorage key from `NEXT_PUBLIC_CART_ID_LOCAL_STORAGE_KEY` (required; set in e.g. `apps/frontend/.env.development`) across shop and checkout blocks
