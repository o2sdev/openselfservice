---
sidebar_position: 300
---

# Cart & Checkout

This document describes the cart lifecycle and checkout process when using the Medusa.js integration.

## Cart Lifecycle

The typical flow is:

1. **Create cart** — `POST /carts` with `currency` (and `region_id` for Medusa)
2. **Add items** — `POST /carts/items` with `variantId`, `quantity`, optional `cartId`
3. **Update addresses** — via checkout: `POST /checkout/:cartId/addresses`
4. **Add shipping method** — `POST /checkout/:cartId/shipping-method`
5. **Set payment** — `POST /checkout/:cartId/payment`
6. **Place order** — `POST /checkout/:cartId/place-order`

The frontend orchestrates these steps. The API does not track checkout state; each action is independent.

## Checkout API Endpoints

| Method | Route                                | Purpose                                                         |
| ------ | ------------------------------------ | --------------------------------------------------------------- |
| POST   | `/checkout/:cartId/addresses`        | Set shipping and billing addresses                              |
| POST   | `/checkout/:cartId/shipping-method`  | Select shipping option                                          |
| POST   | `/checkout/:cartId/payment`          | Create payment session                                          |
| GET    | `/checkout/:cartId/shipping-options` | List available shipping options                                 |
| GET    | `/checkout/:cartId/summary`          | Get checkout summary (cart + totals + addresses)                |
| POST   | `/checkout/:cartId/place-order`      | Create order from cart                                          |
| POST   | `/checkout/:cartId/complete`         | One-shot complete flow (addresses → shipping → payment → order) |

## Medusa-Specific Behavior

### Cart Creation

- **`region_id`** — Required. Medusa associates carts with regions (pricing, shipping, taxes).
- **`currency_code`** — Required. Use `DEFAULT_CURRENCY` when not provided.

### Adding Items

- **`variantId` required** — Medusa uses product variants, not productId alone. Use the variant ID from the product catalog.
- When `cartId` is omitted and no active cart exists, a new cart is created via `sdk.store.cart.create` (or `createCartAndAddItem`).

### Shipping Options

- Fetched from `sdk.store.fulfillment.listCartOptions({ cart_id })`.
- For options with `price_type: calculated`, prices are computed via `sdk.store.fulfillment.calculate`.

### Order Placement

- Uses `sdk.store.cart.complete(cartId)` to convert the cart into an order in Medusa.
- Returns the created order; no separate order creation endpoint is used.

### Guest Checkout

- Supported. No authentication required.
- **Email** — Required for guest order placement (passed in `placeOrder` or `completeCheckout` body).
- Addresses must be provided inline; saved-address IDs are for authenticated users only.

### Limitations

| Capability       | MedusaJS | Notes                                    |
| ---------------- | -------- | ---------------------------------------- |
| `getCartList`    | No       | Store API does not support listing carts |
| `getCurrentCart` | No       | No way to query carts by customer        |
| `deleteCart`     | No-op    | Store API has no cart delete endpoint    |

## Dependencies

Checkout delegates to:

- **Carts** — `updateCartAddresses`, `addShippingMethod`
- **Customers** — Resolve `shippingAddressId` / `billingAddressId` for authenticated users
- **Payments** — `createSession` for payment setup
- **Medusa SDK** — Fulfillment options, `cart.complete`

Ensure Carts, Checkout, Customers, and Payments are configured with Medusa.js (see [Configuration](./overview.md#step-1-update-the-integration-configs)).
