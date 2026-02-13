---
sidebar_position: 100
---

# Medusa.js

This integration provides a full integration with [Medusa.js](https://medusajs.com/) - the open-source commerce platform for digital commerce. The integration enables order management, product catalog browsing, and resource management (assets and services) for customer self-service scenarios.

## In this section

- [Features](./features.md) - Overview of features supported by the Medusa.js integration
- [Cart & Checkout](./cart-checkout.md) - Cart lifecycle and checkout process

## Installation

First, install the Medusa.js integration package:

```shell
npm install @o2s/integrations.medusajs --workspace=@o2s/configs.integrations
```

## Configuration

After installing the package, you need to configure the integration in the `@o2s/configs.integrations` package. This tells the framework to use Medusa.js instead of the default mocked integration.

### Step 1: Update the integration configs

The Medusa.js integration supports multiple modules. You need to update the corresponding config files:

**Update `packages/configs/integrations/src/models/orders.ts`:**

```typescript
import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const OrdersIntegrationConfig: ApiConfig['integrations']['orders'] = Config.orders!;

export import Service = Integration.Orders.Service;
export import Request = Integration.Orders.Request;
export import Model = Integration.Orders.Model;
```

**Update `packages/configs/integrations/src/models/products.ts`:**

```typescript
import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const ProductsIntegrationConfig: ApiConfig['integrations']['products'] = Config.products!;

export import Service = Integration.Products.Service;
export import Request = Integration.Products.Request;
export import Model = Integration.Products.Model;
```

**Update `packages/configs/integrations/src/models/carts.ts`:**

```typescript
import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CartsIntegrationConfig: ApiConfig['integrations']['carts'] = Config.carts!;

export import Service = Integration.Carts.Service;
export import Request = Integration.Carts.Request;
export import Model = Integration.Carts.Model;
```

**Update `packages/configs/integrations/src/models/checkout.ts`:**

```typescript
import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CheckoutIntegrationConfig: ApiConfig['integrations']['checkout'] = Config.checkout!;

export import Service = Integration.Checkout.Service;
export import Request = Integration.Checkout.Request;
export import Model = Integration.Checkout.Model;
```

**Update `packages/configs/integrations/src/models/customers.ts` (required for checkout address resolution):**

```typescript
import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CustomersIntegrationConfig: ApiConfig['integrations']['customers'] = Config.customers!;

export import Service = Integration.Customers.Service;
export import Request = Integration.Customers.Request;
export import Model = Integration.Customers.Model;
```

**Update `packages/configs/integrations/src/models/resources.ts` (if using Resources module):**

```typescript
import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const ResourcesIntegrationConfig: ApiConfig['integrations']['resources'] = Config.resources!;

export import Service = Integration.Resources.Service;
export import Request = Integration.Resources.Request;
export import Model = Integration.Resources.Model;
```

### Step 2: Verify AppConfig

The `AppConfig` in `apps/api-harmonization/src/app.config.ts` should already reference the integration configs. You don't need to modify this file - it automatically uses the configuration from `@o2s/configs.integrations`.

## Environment variables

Configure the following environment variables in your API Harmonization server:

| Name                         | Type   | Description                                                      | Required |
| ---------------------------- | ------ | ---------------------------------------------------------------- | -------- |
| MEDUSAJS_BASE_URL            | string | The base URL pointing to the domain hosting your Medusa instance | yes      |
| MEDUSAJS_PUBLISHABLE_API_KEY | string | The publishable API key for storefront operations                | yes      |
| MEDUSAJS_ADMIN_API_KEY       | string | The admin user's API key for administrative operations           | yes      |
| DEFAULT_CURRENCY             | string | The default currency code (e.g., `EUR`, `USD`, `PLN`)            | yes      |

You can obtain these values from your Medusa Admin Panel:

1. **Base URL**: The URL where your Medusa server is running (e.g., `http://localhost:9000` for local development)
2. **Publishable API Key**: Create in Medusa Admin under "Settings" → "Publishable API Keys"
3. **Admin API Key**: Create in Medusa Admin under "Settings" → "API Keys"

For more details about authentication setup, see the official [Medusa.js SDK documentation](https://docs.medusajs.com/resources/js-sdk).

## Supported modules

The integration implements these modules from the O2S framework:

| Module    | Description                                    | Plugin Required |
| --------- | ---------------------------------------------- | --------------- |
| Carts     | Cart creation, line items, addresses, shipping | No              |
| Checkout  | Multi-step checkout and order placement        | No              |
| Customers | Address management for authenticated users     | No              |
| Orders    | Order management and history                   | No              |
| Payments  | Payment session creation and validation        | No              |
| Products  | Product catalog and variants                   | No              |
| Resources | Assets and service instances management        | Yes             |

## Dependencies

This integration relies on:

- **[@medusajs/js-sdk](https://www.npmjs.com/package/@medusajs/js-sdk)** - Official Medusa.js SDK for API communication
- **[medusa-plugin-assets-services](https://github.com/o2sdev/medusa-plugin-assets-services)** - Custom O2S plugin for Assets and Services management (required for Resources module)

:::info Custom Plugin Required
To use the **Resources** module (Assets & Services), you must install our custom Medusa plugin in your Medusa instance. The plugin adds endpoints for managing customer assets, service instances, and product relations.

See the plugin repository for installation instructions: [medusa-plugin-assets-services](https://github.com/o2sdev/medusa-plugin-assets-services)
:::
The integration uses the official Medusa.js SDK for most operations, combined with direct HTTP calls for custom endpoints provided by the Assets & Services plugin. All API calls are authenticated using a combination of publishable API key and admin API key.

```text
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   O2S Frontend  │────▶│  API Harmonizer  │────▶│  Medusa Server  │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                             │                         │
                             │ Medusa.js SDK           │ Admin API
                             │ Store API               │ Store API
                             ▼                         ▼
                      ┌──────────────────┐     ┌─────────────────┐
                      │ Carts/Checkout/   │     │ Assets/Services │
                      │ Orders/Products  │     │   (plugin)      │
                      └──────────────────┘     └─────────────────┘
```
