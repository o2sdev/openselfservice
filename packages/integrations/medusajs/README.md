# @o2s/integrations.medusajs

MedusaJS integration for O2S, providing ecommerce functionality including products, orders, and carts.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Integrations in O2S

Integrations are adapters that connect O2S to external backend services. They handle API communication and normalize data from various backend services into an API-agnostic format. The frontend app communicates only with the API Harmonization server, never directly with backend services, enabling you to swap integrations without breaking the frontend.

**Documentation**: [Medusa.js](https://www.openselfservice.com/docs/integrations/commerce/medusa-js/overview)

## About This Integration

The Medusa.js integration connects O2S to Medusa's e-commerce platform via Store API (products, carts, checkout, fulfillment) and Admin API (e.g. related products). It implements Orders, Resources (assets, service instances), Products, Carts, Customers, Payments, and Checkout. Supports SSO JWT for authenticated store requests. Optional Medusa plugin adds assets and service instances for B2B and post-purchase scenarios.

- **Store API** – Products, carts, checkout, fulfillment; SSO JWT
- **Admin API** – Related products and custom endpoints
- **Orders, Products, Carts** – Full cart lifecycle and order placement
- **Resources** – Assets and service instances (with plugin)

Content editors manage products in Medusa Admin. Developers configure `MEDUSAJS_BASE_URL`, `MEDUSAJS_PUBLISHABLE_API_KEY`, and optionally `MEDUSAJS_ADMIN_API_KEY`.

## Installation

```bash
npm install @o2s/integrations.medusajs
```

## Configuration

Configure the integration via `@o2s/configs.integrations` in your `AppConfig`:

```typescript
import { Products, Orders, Carts, Customers, Payments, Checkout } from '@o2s/configs.integrations';
import { MedusaConfig } from '@o2s/integrations.medusajs/integration';

export const AppConfig: ApiConfig = {
    integrations: {
        products: MedusaConfig.products,
        orders: MedusaConfig.orders,
        carts: MedusaConfig.carts,
        customers: MedusaConfig.customers,
        payments: MedusaConfig.payments,
        checkout: MedusaConfig.checkout,
    },
};
```

Or use the pre-configured integration from `@o2s/configs.integrations`:

```typescript
import { Products, Orders, Carts, Customers, Payments, Checkout } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        products: Products.ProductsIntegrationConfig,
        orders: Orders.OrdersIntegrationConfig,
        carts: Carts.CartsIntegrationConfig,
        customers: Customers.CustomersIntegrationConfig,
        payments: Payments.PaymentsIntegrationConfig,
        checkout: Checkout.CheckoutIntegrationConfig,
    },
};
```

## Environment Variables

### Required

- `MEDUSA_API_URL` - Your Medusa backend URL (e.g., `https://api.your-medusa.com`)
- `MEDUSA_API_KEY` - Medusa API key for authentication

## Example .env

```bash
MEDUSA_API_URL=https://api.your-medusa.com
MEDUSA_API_KEY=your-api-key-here
```

## Features

- Product catalog management
- Order processing and management
- Shopping cart functionality
- Customer management
- Payment processing
- Checkout flow

## Related Packages

- `@o2s/blocks.product-list` - Display products
- `@o2s/blocks.order-list` - Display orders
- `@o2s/configs.integrations` - Integration configuration
