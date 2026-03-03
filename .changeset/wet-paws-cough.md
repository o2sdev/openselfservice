---
'@o2s/blocks.recommended-products': patch
'@o2s/blocks.product-details': patch
'@o2s/ui': patch
---

fix: prevent multiple carousels from responding to arrow keys at the same time

Added managed keyboard control for Swiper-based carousels so only the active carousel handles left/right arrows.
Keyboard control is activated by focus/pointer interaction on a carousel, without any default active carousel that captures arrow keys before interaction.
Introduced automatic `keyboardCarouselId` resolution when it is not provided in props.
