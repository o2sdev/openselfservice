---
sidebar_position: 400
---

# Cart & Checkout

This document describes the cart lifecycle and checkout process when using the Medusa.js integration. It is intended for developers familiar with O2S who need to understand how the Medusa.js flow maps to the O2S cart and checkout model.

## Understanding MedusaJS Concepts

If you are familiar with O2S but not Medusa, these concepts are essential:

### Regions

Medusa requires a **`region_id`** for every cart. Regions determine:

- **Pricing** — Currency and tax rules
- **Shipping** — Available shipping options
- **Taxes** — Tax calculation for the region

O2S maps `regionId` (in request bodies) to Medusa's `region_id`. You must create regions in Medusa Admin and pass a valid `regionId` when creating carts.

### Variants vs Products

Medusa uses **product variants** for cart line items, not products directly. Each variant has its own ID, SKU, price, and options (size, color, etc.).

- **O2S** uses the `sku` field when adding items to cart.
- **Medusa** expects `variant_id` — the integration maps O2S `sku` to Medusa `variant_id`.
- You must use the **variant ID** from the product catalog (e.g., from `GET /products/:id` response), not the product ID.

### Currency

Medusa expects lowercase currency codes (e.g., `eur`), while O2S typically uses uppercase (e.g., `EUR`). The integration converts automatically. The `DEFAULT_CURRENCY` environment variable is used when currency is not provided.

### Cart Ownership

- **Customer carts** — When a cart is associated with a logged-in customer, the `customerId` is extracted from the SSO token. The integration verifies ownership on cart access; unauthorized access throws `UnauthorizedException`.
- **Guest carts** — Carts created without authentication have no `customerId`. Anyone with the cart ID can access them.

## O2S to MedusaJS Mapping

### Cart Model

The O2S `Cart` model maps to Medusa's `StoreCart`:

| O2S Field                 | Medusa Field             | Notes                                                                               |
| ------------------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| `id`                      | `id`                     | Cart identifier                                                                     |
| `customerId`              | `customer_id`            | Present when cart is linked to a customer                                           |
| `regionId`                | `region_id`              | Required for Medusa                                                                 |
| `currency`                | `currency_code`          | Normalized to uppercase in O2S                                                      |
| `items`                   | `items`                  | Line items with variant references                                                  |
| `subtotal`, `total`, etc. | Calculated by Medusa     | Mapped to O2S `Price` objects                                                       |
| `shippingAddress`         | `shipping_address`       | Set via checkout addresses                                                          |
| `billingAddress`          | `billing_address`        | Set via checkout addresses                                                          |
| `shippingMethod`          | `shipping_methods[0]`    | Single shipping method supported                                                    |
| `paymentMethod`           | `metadata.paymentMethod` | Stored in cart metadata after setPayment                                            |
| `metadata`                | `metadata`               | Notes stored in `metadata.notes`; payment session ID in `metadata.paymentSessionId` |

### Checkout Flow Mapping

Each O2S checkout step maps to a Medusa operation:

| O2S Step            | Medusa Operation                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| `setAddresses`      | `sdk.store.cart.update()` with `shipping_address`, `billing_address`                                   |
| `setShippingMethod` | `sdk.store.cart.addShippingMethod()` with `option_id`                                                  |
| `setPayment`        | `sdk.store.payment.initiatePaymentSession()` then store session ID and payment method in cart metadata |
| `placeOrder`        | `sdk.store.cart.complete()` — single call creates the order; no separate order creation endpoint       |

### Payment Session Storage

After `setPayment`, the integration stores:

- **`cart.metadata.paymentSessionId`** — ID of the created payment session
- **`cart.metadata.paymentMethod`** — Object with `{ id, name, type }` for display

These are used by `getCheckoutSummary` and validated before `placeOrder`.

### Address Handling

- **Saved addresses** — When `shippingAddressId` or `billingAddressId` is provided (authenticated users), the integration fetches the address from the Customers service and maps it to Medusa format via `mapAddressToMedusa()`.
- **Inline addresses** — When `shippingAddress` or `billingAddress` is provided (guests or one-off addresses), the integration maps directly to Medusa format.
- **Single address** — If only one address is provided, it is used for both shipping and billing.

## Important Caveats

| Caveat                         | Details                                                                                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Region required**            | `regionId` is required for cart creation. It affects pricing, shipping options, and tax calculation.                                            |
| **Variant ID required**        | Use variant ID (from product catalog), not product ID. O2S `sku` expects the variant ID.                                                        |
| **Payment session storage**    | Payment session ID and payment method are stored in `cart.metadata`. Do not clear metadata when updating cart.                                  |
| **Guest checkout**             | Email is required for guest order placement. Provide it in `setAddresses`, `placeOrder`, or `completeCheckout`.                                 |
| **Shipping price calculation** | Options with `price_type=calculated` require a separate API call to `sdk.store.fulfillment.calculate()`. Flat-price options are returned as-is. |
| **Order creation**             | Single operation (`cart.complete()`) — no separate order creation endpoint. The order is returned directly from the response.                   |
| **Cart ownership**             | Customer carts verify ownership via SSO token. Unauthorized access throws `UnauthorizedException`.                                              |
| **Unimplemented methods**      | `getCartList`, `getCurrentCart`, `deleteCart` are not available due to Store API limitations.                                                   |
