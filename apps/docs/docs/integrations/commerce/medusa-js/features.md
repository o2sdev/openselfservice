---
sidebar_position: 200
---

# Features

This document provides an overview of features supported by the Medusa.js integration.

**Related documentation:** [How to set up](./how-to-setup.md) | [Usage](./usage.md) | [Cart & Checkout](./cart-checkout.md)

## Overview

| Feature                                             | Status | Notes                                                                            |
| --------------------------------------------------- | ------ | -------------------------------------------------------------------------------- |
| [Cart Management](#cart-management)                 | ✅     | Cart creation, line items, addresses, shipping (Store API)                       |
| [Checkout Flow](#checkout-flow)                     | ✅     | Multi-step checkout, payment sessions, order placement                           |
| [Order Management](#order-management)               | ✅     | Complete order history and details                                               |
| [Product Catalog](#product-catalog)                 | ✅     | Product browsing with variants (Store API)                                        |
| [Product Recommendations](#product-recommendations) | ✅     | Related products ([requires plugin](#plugin-architecture))                       |
| [Asset Management](#asset-management)               | ✅     | Customer assets with warranty tracking ([requires plugin](#plugin-architecture)) |
| [Service Subscriptions](#service-subscriptions)     | ✅     | Service contracts and billing ([requires plugin](#plugin-architecture))          |
| [Service Discovery](#service-discovery)             | ✅     | Compatible and featured services ([requires plugin](#plugin-architecture))       |
| [Multi-currency Support](#multi-currency-support)   | ✅     | Configurable currency handling                                                   |
| [Customer Authentication](#customer-authentication) | ✅     | JWT-based customer context                                                       |
| [Pagination](#pagination)                           | ✅     | Consistent pagination across all lists                                           |
| [Admin API Integration](#admin-api-integration)     | ✅     | Uses Medusa Admin API for extended capabilities                                  |
| [Plugin Architecture](#plugin-architecture)         | ✅     | Extensible via custom Medusa plugins                                             |
| [Purchase/Activation](#purchaseactivation)          | ❌     | Not implemented                                                                  |

## Feature Details

### Cart Management {#cart-management}

The integration provides full cart management via the Medusa Store API (`sdk.store.cart.*`):

- Create cart with `currency_code`, `region_id`, and optional metadata
- Add line items (requires `variantId` — Medusa uses variants, not productId alone)
- Update and remove cart items
- Update shipping and billing addresses (inline or by saved address ID for authenticated users)
- Add shipping method by `option_id`
- Guest and customer carts supported

**Limitations (Medusa Store API):**

- `getCartList` and `getCurrentCart` are not implemented — the Store API does not support listing carts
- `deleteCart` is a no-op (logs only; Store API has no delete endpoint)

### Checkout Flow {#checkout-flow}

Complete checkout orchestration from cart to order:

- **setAddresses** — Set shipping and billing addresses (delegates to Carts)
- **setShippingMethod** — Select shipping option (delegates to Carts)
- **setPayment** — Create payment session via Payments module
- **getShippingOptions** — List available options from Medusa fulfillment API (`fulfillment.listCartOptions` + `fulfillment.calculate` for calculated prices)
- **getCheckoutSummary** — Cart with addresses, shipping, payment, totals
- **placeOrder** — Completes cart via `sdk.store.cart.complete`, returns order
- **completeCheckout** — One-shot flow: addresses → shipping → payment → place order

Guest checkout supported; email required for guest order placement. See [Cart & Checkout](./cart-checkout.md) for the full flow.

### Order Management {#order-management}

The integration provides comprehensive order management capabilities for customer self-service portals:

- View complete order history with filtering by status and date range
- Access detailed order information including items, quantities, and pricing
- Track order lifecycle through multiple statuses (pending, completed, archived, cancelled)
- Monitor payment status (awaiting, captured, refunded, etc.)
- View shipping and billing addresses
- See shipping methods and associated costs
- Support for sorting orders by various criteria

Orders are displayed on the **Orders** screen in the frontend app, allowing customers to review their purchase history and track current orders.

### Product Catalog {#product-catalog}

Browse and display products from your Medusa commerce platform using the Store API:

- List products with pagination support
- Display product details including title, description, and images
- Support for product variants with individual pricing
- Category-based product organization
- Product type classification (physical vs. virtual products)
- Thumbnail and image display

The product catalog powers the **Products** module in the frontend, enabling product listing pages and detailed product views. All product operations use Medusa's Store API, which requires SSO token authentication. See [How to set up](./how-to-setup.md#sso-authentication-plugin-setup) for SSO plugin configuration.

### Product Recommendations {#product-recommendations}

Display related products to enhance product discovery:

- Show products related to the currently viewed item
- Support for different reference types (cross-sell, up-sell, accessories)
- Enhance customer experience with relevant suggestions

### Asset Management {#asset-management}

Manage customer-owned assets and equipment for after-sales service scenarios:

- View all assets belonging to the authenticated customer
- Track asset details: model, serial number, description
- Monitor warranty status and end-of-warranty dates
- Store installation/location addresses for each asset
- Link assets to original products for reference

This feature enables the **Assets** screen in the frontend, supporting use cases like equipment management, warranty tracking, and service scheduling.

### Service Subscriptions {#service-subscriptions}

Manage service contracts and subscriptions for customers:

- View active and historical service instances
- Track contract details: status, start date, end date
- Support for various payment periods (one-time, monthly, yearly)
- Display pricing information with currency
- Link services to associated assets
- Monitor service lifecycle and renewal dates

This powers the **Services** screen in the frontend, enabling customers to manage their subscriptions and service agreements.

### Service Discovery {#service-discovery}

Help customers discover relevant services for their assets:

- **Compatible Services** - Show services that can be purchased for a specific asset
- **Featured Services** - Highlight promoted or recommended service offerings

These features enable upselling and cross-selling opportunities within the self-service portal.

### Multi-currency Support {#multi-currency-support}

Handle multiple currencies for international commerce:

- Configure default currency via environment variable
- Display prices in customer's preferred currency when available
- Automatic fallback to default currency
- Support for common currencies: EUR, USD, PLN, and others

### Customer Authentication {#customer-authentication}

Secure customer identification for personalized experiences:

- JWT-based authentication through the Auth module
- Customer ID extraction from authorization tokens
- Automatic filtering of data by customer context
- Secure access to customer-specific orders, assets, and services

### Pagination {#pagination}

Consistent pagination support across all list operations:

- Configurable page size (limit)
- Offset-based navigation
- Total count for UI pagination controls
- Applied to orders, products, assets, and services

### Admin API Integration {#admin-api-integration}

The integration primarily uses Medusa's Store API for customer-facing operations (Products, Orders, Carts, Checkout, Customers, Payments). Store API operations require SSO tokens passed from the frontend and a custom Medusa auth plugin to validate these tokens and map them to customer identities.

A basic example plugin demonstrating SSO token handling is available at [openselfservice-resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/third-party/medusajs/plugins/mocked-auth). The example plugin handles tokens from the mocked integration to find matching customers in Medusa (or create new customers if not found).

**Admin API is only used for:**
- Related products endpoint (`/admin/products/{id}/variants/{variantId}/references`) - custom endpoint not available in Store API
- Resources plugin endpoints (Assets, Services) - custom endpoints provided by the Assets & Services plugin

Admin API operations use `MEDUSAJS_ADMIN_API_KEY` for authentication via API keys.

### Plugin Architecture {#plugin-architecture}

The integration supports extensibility through Medusa's plugin system:

- **Core features** (Orders, Products) work with standard Medusa installation
- **Extended features** (Assets, Services) require the O2S custom plugin
- Plugin adds new entities and API endpoints to Medusa
- Seamless integration with Medusa Admin Panel for content management

The [medusa-plugin-assets-services](https://github.com/o2sdev/medusa-plugin-assets-services) plugin extends Medusa with:

- Asset entity for tracking customer equipment
- Service Instance entity for subscription management
- Product reference relationships
- Compatible and featured services configuration

### Purchase/Activation {#purchaseactivation}

Resource and service purchase/activation operations are not currently implemented. The integration focuses on read operations for self-service scenarios. Future versions may add support for:

- Direct service activation from the portal
- Asset registration workflows
- Service renewal and upgrades
