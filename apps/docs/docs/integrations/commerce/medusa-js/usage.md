---
sidebar_position: 300
---

# Usage

This page provides examples and API reference for using the Medusa.js integration.

## API Endpoints Overview

The Medusa.js integration exposes endpoints for Products, Orders, Carts, Checkout, Customers, and Payments. All endpoints follow the O2S framework API specification. For the full checkout flow, see [Cart & Checkout](./cart-checkout.md).

## Products API

### List Products

**Endpoint:** `GET /products`

**Query Parameters:**

| Parameter | Type   | Description                 | Required |
| --------- | ------ | --------------------------- | -------- |
| limit     | number | Number of products per page | No       |
| offset    | number | Pagination offset           | No       |
| type      | string | Filter by product type      | No       |
| category  | string | Filter by category          | No       |
| sort      | string | Sort order                  | No       |

**Example:**

```bash
GET /products?limit=20&offset=0
Authorization: Bearer {token}
```

### Get Product

**Endpoint:** `GET /products/:id`

**Path Parameters:**

| Parameter | Type   | Description    | Required |
| --------- | ------ | -------------- | -------- |
| id        | string | The product ID | Yes      |

**Example:**

```bash
GET /products/prod_01ABC123
Authorization: Bearer {token}
```

### Get Related Products

**Endpoint:** `GET /products/:id/variants/:variantId/related-products`

Uses the Medusa Admin API (requires admin key). Returns products related to the given product variant.

**Path Parameters:**

| Parameter | Type   | Description    | Required |
| --------- | ------ | -------------- | -------- |
| id        | string | The product ID | Yes      |
| variantId | string | The variant ID | Yes      |

**Query Parameters:**

| Parameter | Type   | Description       | Required |
| --------- | ------ | ----------------- | -------- |
| type      | string | Reference type    | No       |
| limit     | number | Max results       | No       |
| offset    | number | Pagination offset | No       |
| sort      | string | Sort order        | No       |

**Example:**

```bash
GET /products/prod_01ABC123/variants/var_01XYZ789/related-products
Authorization: Bearer {token}
```

## Orders API

### List Orders

**Endpoint:** `GET /orders`

**Query Parameters:**

| Parameter     | Type   | Description                  | Required |
| ------------- | ------ | ---------------------------- | -------- |
| limit         | number | Number of orders per page    | No       |
| offset        | number | Pagination offset            | No       |
| status        | string | Filter by order status       | No       |
| paymentStatus | string | Filter by payment status     | No       |
| dateFrom      | string | Orders from this date (ISO)  | No       |
| dateTo        | string | Orders until this date (ISO) | No       |
| sort          | string | Sort order                   | No       |

**Example:**

```bash
GET /orders?limit=20&status=completed
Authorization: Bearer {token}
```

### Get Order

**Endpoint:** `GET /orders/:id`

**Path Parameters:**

| Parameter | Type   | Description  | Required |
| --------- | ------ | ------------ | -------- |
| id        | string | The order ID | Yes      |

**Example:**

```bash
GET /orders/order_01ABC123
Authorization: Bearer {token}
```

## Carts API

### Create Cart

**Endpoint:** `POST /carts`

**Body:**

| Field    | Type   | Description                    | Required |
| -------- | ------ | ------------------------------ | -------- |
| currency | string | Currency code (e.g., EUR, USD) | Yes      |
| regionId | string | Medusa region ID (required)    | Yes      |
| metadata | object | Optional metadata              | No       |

**Example:**

```bash
POST /carts
Content-Type: application/json

{
    "currency": "EUR",
    "regionId": "reg_01ABC123",
    "metadata": {}
}
```

### Get Cart

**Endpoint:** `GET /carts/:id`

**Path Parameters:**

| Parameter | Type   | Description | Required |
| --------- | ------ | ----------- | -------- |
| id        | string | The cart ID | Yes      |

**Example:**

```bash
GET /carts/cart_01ABC123
Authorization: Bearer {token}
```

### Update Cart

**Endpoint:** `PATCH /carts/:id`

**Body:**

| Field    | Type   | Description                | Required |
| -------- | ------ | -------------------------- | -------- |
| regionId | string | Medusa region ID           | No       |
| email    | string | Email (for guest checkout) | No       |
| notes    | string | Order notes                | No       |
| metadata | object | Optional metadata          | No       |

### Add Cart Item

**Endpoint:** `POST /carts/items`

**Body:**

| Field    | Type   | Description                                         | Required |
| -------- | ------ | --------------------------------------------------- | -------- |
| cartId   | string | Existing cart ID (omit to create new cart)          | No       |
| sku      | string | Variant ID from product catalog (Medusa variant_id) | Yes      |
| quantity | number | Quantity                                            | Yes      |
| currency | string | Required when creating new cart                     | No       |
| regionId | string | Required when creating new cart                     | No       |
| metadata | object | Optional metadata                                   | No       |

**Example:**

```bash
POST /carts/items
Content-Type: application/json

{
    "cartId": "cart_01ABC123",
    "sku": "var_01XYZ789",
    "quantity": 2
}
```

### Update Cart Item

**Endpoint:** `PATCH /carts/:cartId/items/:itemId`

### Remove Cart Item

**Endpoint:** `DELETE /carts/:cartId/items/:itemId`

### Apply Promotion

**Endpoint:** `POST /carts/:cartId/promotions`

**Body:**

| Field | Type   | Description    | Required |
| ----- | ------ | -------------- | -------- |
| code  | string | Promotion code | Yes      |

### Remove Promotion

**Endpoint:** `DELETE /carts/:cartId/promotions/:code`

## Checkout API

For the full checkout flow, see [Cart & Checkout](./cart-checkout.md).

| Method | Endpoint                             | Purpose                            |
| ------ | ------------------------------------ | ---------------------------------- |
| POST   | `/checkout/:cartId/addresses`        | Set shipping and billing addresses |
| POST   | `/checkout/:cartId/shipping-method`  | Select shipping option             |
| POST   | `/checkout/:cartId/payment`          | Create payment session             |
| GET    | `/checkout/:cartId/shipping-options` | List available shipping options    |
| GET    | `/checkout/:cartId/summary`          | Get checkout summary               |
| POST   | `/checkout/:cartId/place-order`      | Create order from cart             |
| POST   | `/checkout/:cartId/complete`         | One-shot complete flow             |

## Customers API

Customer address management. All endpoints require authentication.

**Base path:** `/customers/addresses`

| Method | Endpoint                           | Purpose             |
| ------ | ---------------------------------- | ------------------- |
| GET    | `/customers/addresses`             | List addresses      |
| GET    | `/customers/addresses/:id`         | Get address         |
| POST   | `/customers/addresses`             | Create address      |
| PATCH  | `/customers/addresses/:id`         | Update address      |
| DELETE | `/customers/addresses/:id`         | Delete address      |
| POST   | `/customers/addresses/:id/default` | Set default address |

## Payments API

### List Payment Providers

**Endpoint:** `GET /payments/providers`

**Query Parameters:**

| Parameter | Type   | Description      | Required |
| --------- | ------ | ---------------- | -------- |
| regionId  | string | Medusa region ID | Yes      |

**Example:**

```bash
GET /payments/providers?regionId=reg_01ABC123
Authorization: Bearer {token}
```

### Create Payment Session

**Endpoint:** `POST /payments/sessions`

**Body:**

| Field      | Type   | Description                       | Required |
| ---------- | ------ | --------------------------------- | -------- |
| cartId     | string | Cart ID                           | Yes      |
| providerId | string | Payment provider ID from Medusa   | Yes      |
| returnUrl  | string | Redirect URL after payment        | Yes      |
| cancelUrl  | string | Redirect URL if payment cancelled | No       |
| metadata   | object | Optional metadata                 | No       |

**Example:**

```bash
POST /payments/sessions
Content-Type: application/json
Authorization: Bearer {token}

{
    "cartId": "cart_01ABC123",
    "providerId": "pp_stripe",
    "returnUrl": "https://example.com/checkout/success",
    "cancelUrl": "https://example.com/checkout/cancel"
}
```

**Note:** The Medusa integration does not implement `getSession`, `updateSession`, or `cancelSession` due to SDK limitations. Use `createSession` and proceed to place order.

## Authentication

Store API operations (Products, Orders, Carts, Checkout, Customers, Payments) require SSO token authentication. Pass the JWT token in the `Authorization` header:

```
Authorization: Bearer {your_sso_token}
```

The integration forwards this token to Medusa. A custom SSO auth plugin must be deployed on your Medusa server to validate the token and map it to a Medusa customer. See [How to set up](./how-to-setup.md#sso-authentication-plugin-setup).

**Guest checkout:** Cart creation and adding items can work without authentication. For checkout completion, provide an email (in addresses or place-order body).
