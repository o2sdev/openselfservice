---
'@o2s/blocks.recommended-products': patch
'@o2s/blocks.product-details': patch
'@o2s/ui': patch
---

fix: prevent multiple carousels from responding to arrow keys at the same time

Added managed keyboard control for Swiper-based carousels so only the active carousel handles left/right arrows.
On product pages, the ProductDetails gallery is now the default active carousel, and focus/pointer interaction switches control predictably (including lightbox state).
