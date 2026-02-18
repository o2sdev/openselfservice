---
sidebar_position: 100
---

# Medusa.js

This integration provides a full integration with [Medusa.js](https://medusajs.com/) - the open-source commerce platform for digital commerce. The integration enables order management, product catalog browsing, cart and checkout, and resource management (assets and services) for customer self-service scenarios.

## In this section

- [How to set up](./how-to-setup.md) - Step-by-step guide for setting up the Medusa.js integration
- [Features](./features.md) - Overview of features and capabilities provided by the integration
- [Usage](./usage.md) - Examples and API reference for all modules
- [Cart & Checkout](./cart-checkout.md) - Cart lifecycle and checkout process

## What is Medusa.js?

Medusa.js is an open-source headless commerce platform that provides:

- Product catalog with variants and pricing
- Cart and checkout flow
- Order management
- Customer and address management
- Payment provider integrations
- Regional configuration (currencies, shipping, taxes)
- Extensible plugin architecture

This integration connects your Open Self Service application with Medusa, enabling customers to browse products, manage carts, complete checkout, and view orders directly within your application.

## Supported modules

The integration implements these modules from the O2S framework:

| Module   | Description                                     | Plugin Required |
| -------- | ----------------------------------------------- | --------------- |
| Carts    | Cart creation, line items, addresses, shipping  | No              |
| Checkout | Multi-step checkout and order placement         | No              |
| Customers| Address management for authenticated users       | No              |
| Orders   | Order management and history                     | No              |
| Payments | Payment session creation and validation         | No              |
| Products | Product catalog and variants                    | No              |
| Resources| Assets and service instances management         | Yes             |

## Quick start

1. Install the package (see [How to set up](./how-to-setup.md))
2. Configure the integration in `@o2s/configs.integrations` (Carts, Checkout, Customers, Orders, Payments, Products)
3. Set up a Medusa.js server instance
4. Deploy the SSO authentication plugin (required for Store API operations)
5. Configure environment variables

For detailed instructions, see the [How to set up](./how-to-setup.md) guide.

## Requirements

- A Medusa.js server instance (running Store API and Admin API)
- SSO authentication plugin (custom) - Medusa's default Store API does not validate SSO tokens; you must deploy a custom plugin to validate JWT tokens and map them to customer identities
- Publishable API key from Medusa Admin (for Store API operations)
- Admin API key from Medusa Admin (for related products and Resources plugin)
- `DEFAULT_CURRENCY` environment variable

:::info SSO Authentication Plugin Required

Store API operations (Products, Orders, Carts, Checkout, Customers, Payments) require SSO token authentication. A basic example plugin is available at [openselfservice-resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/third-party/medusajs/plugins/mocked-auth) that demonstrates how to validate SSO tokens and map them to Medusa customer identities.

:::

## Architecture

The integration uses the official Medusa.js SDK for most operations:

- **Store API** (Products, Orders, Carts, Checkout, Customers, Payments): Uses publishable API key + SSO JWT tokens. Requires a custom Medusa auth plugin.
- **Admin API** (Related Products, Resources plugin): Uses admin API key for authentication.

```text
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   O2S Frontend  │────▶│  API Harmonizer  │────▶│  Medusa Server  │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                             │                         │
                             │ Medusa.js SDK           │ Admin API
                             │ Store API               │ (Related Products,
                             │ (Products, Orders,      │  Resources plugin)
                             │  Carts, Checkout,       │
                             │  Customers, Payments)   │
                             │ Requires SSO auth plugin│
                             ▼                         ▼
                      ┌──────────────────┐     ┌─────────────────┐
                      │ Carts/Checkout/   │     │ Assets/Services │
                      │ Orders/Products   │     │   (plugin)      │
                      └──────────────────┘     └─────────────────┘
```
