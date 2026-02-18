---
sidebar_position: 150
---

# How to set up

This guide will walk you through setting up the Medusa.js integration in your Open Self Service application.

## Install

Install the Medusa.js integration package in the integrations config workspace:

```shell
npm install @o2s/integrations.medusajs --workspace=@o2s/configs.integrations
```

## Configuration

After installing the package, configure the integration in the `@o2s/configs.integrations` package. This tells the framework to use Medusa.js instead of the default mocked integration.

### Step 1: Update the integration configs

The Medusa.js integration supports multiple modules. Update the corresponding config files for each module you use.

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

**Update `packages/configs/integrations/src/models/customers.ts`** (required for checkout address resolution):

```typescript
import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CustomersIntegrationConfig: ApiConfig['integrations']['customers'] = Config.customers!;

export import Service = Integration.Customers.Service;
export import Request = Integration.Customers.Request;
export import Model = Integration.Customers.Model;
```

**Update `packages/configs/integrations/src/models/payments.ts`** (required for checkout):

```typescript
import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const PaymentsIntegrationConfig: ApiConfig['integrations']['payments'] = Config.payments!;

export import Service = Integration.Payments.Service;
export import Request = Integration.Payments.Request;
export import Model = Integration.Payments.Model;
```

**Update `packages/configs/integrations/src/models/resources.ts`** (if using Resources module):

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

## Medusa.js server setup

You need a running Medusa.js server instance. If you don't have one yet:

1. **Create a Medusa project** (see [Medusa documentation](https://docs.medusajs.com/learn/get-started)):

    ```shell
    npx create-medusa-app@latest my-medusa-store
    ```

2. **Configure regions and currencies** in Medusa Admin:
    - Go to Settings → Regions
    - Create at least one region with the currency you want (e.g., EUR, USD)
    - Regions affect pricing, shipping options, and tax calculation for carts

3. **Create API keys** in Medusa Admin:
    - **Publishable API key**: Settings → Publishable API Keys → Create. Used for Store API operations.
    - **Admin API key**: Settings → API Keys → Create. Used for related products and Resources plugin.

4. **Add products and variants** so customers can add items to carts. The O2S integration uses variant IDs (not product IDs) when adding items to carts.

5. **Verify Store API** is accessible at `{MEDUSAJS_BASE_URL}/store/*`.

## SSO authentication plugin setup

Medusa's default Store API does not validate SSO JWT tokens. For authenticated operations (cart access, checkout, orders, etc.), you must deploy a custom auth plugin that:

- Intercepts Store API requests
- Validates JWT tokens from your Auth provider (Auth0, Keycloak, NextAuth, etc.)
- Maps token claims to Medusa customer identities
- Finds existing customers or creates new ones based on token claims

### Example plugin

A basic example plugin is available at [openselfservice-resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/third-party/medusajs/plugins/mocked-auth). The example demonstrates:

- Token validation for the mocked integration
- Customer lookup or creation based on token claims
- How to integrate with Medusa's customer model

### Installation (example plugin)

If using the example plugin from openselfservice-resources:

1. Clone or add the plugin package to your Medusa project
2. Register the plugin in your Medusa configuration

    ```ts title="./medusa-config.ts"
    module.exports = defineConfig({
        projectConfig: {...},
        modules: [
            {
                resolve: "@medusajs/medusa/auth",
                options: {
                    providers: [
                        // Default email/password provider for admin login
                        {
                            resolve: "@medusajs/auth-emailpass",
                            id: "emailpass",
                        },
                        // Third-party JWT provider for customer authentication
                        {
                            resolve: "./src/plugins/mocked-auth/providers",
                            id: "third-party-jwt",
                            options: {
                                jwtSecret: process.env.THIRD_PARTY_AUTH_JWT_SECRET,
                            },
                        },
                    ],
                },
            },
        ],
    })
    ```

3. Configure the plugin to validate tokens from your auth provider

    ```ts title="./src/api/middlewares.ts"
    export default defineMiddlewares({
        routes: [
            {
                matcher: '/store/*',
                middlewares: [
                    createThirdPartyAuthMiddleware({
                        ...thirdPartyAuthOptions,
                        // Public routes should still work without a token
                        allowUnauthenticated: true,
                    }),
                ],
            },
        ],
    });
    ```

### Customization for production

For production, you will typically:

- Replace token validation logic with your Auth0/Keycloak/NextAuth validation
- Adjust customer mapping (email, ID, etc.) to match your token claims
- Handle error responses when tokens are invalid or expired
- Ensure customer creation logic follows your business rules

## Environment variables

Configure the following environment variables in your API Harmonization server:

| Name                         | Type   | Description                                                          | Required |
| ---------------------------- | ------ | -------------------------------------------------------------------- | -------- |
| MEDUSAJS_BASE_URL            | string | The base URL of your Medusa instance (e.g., `http://localhost:9000`) | yes      |
| MEDUSAJS_PUBLISHABLE_API_KEY | string | The publishable API key for Store API operations                     | yes      |
| MEDUSAJS_ADMIN_API_KEY       | string | The admin API key for Admin API operations                           | yes      |
| DEFAULT_CURRENCY             | string | The default currency code (e.g., `EUR`, `USD`, `PLN`)                | yes      |

You can obtain these values from your Medusa Admin Panel:

1. **Base URL**: The URL where your Medusa server is running
2. **Publishable API Key**: Create in Medusa Admin under Settings → Publishable API Keys
3. **Admin API Key**: Create in Medusa Admin under Settings → API Keys

### Example `.env` configuration

```env
MEDUSAJS_BASE_URL=http://localhost:9000
MEDUSAJS_PUBLISHABLE_API_KEY=pk_xxxxxxxx
MEDUSAJS_ADMIN_API_KEY=sk_xxxxxxxx
DEFAULT_CURRENCY=EUR
```

## Verify installation

After completing the setup:

1. **Rebuild the configs package** (if needed):

    ```shell
    npm run build --workspace=@o2s/configs.integrations
    ```

2. **Start the API Harmonization server** and the dev stack:

    ```shell
    npm run dev
    ```

3. **Verify** by:
    - Checking server logs for successful module registration
    - Testing product listing: `GET /products`
    - Creating a cart: `POST /carts` with `{ "currency": "EUR", "regionId": "<your-region-id>" }`
    - Ensuring SSO plugin is deployed if you need authenticated operations

## Troubleshooting

| Problem                                        | Solution                                                                           |
| ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| Module not found                               | Verify the package is installed: `npm list @o2s/integrations.medusajs`             |
| Cannot connect to Medusa                       | Check `MEDUSAJS_BASE_URL` is correct and Medusa server is running                  |
| 401/403 on Store API                           | Ensure SSO auth plugin is deployed and tokens are passed in `Authorization` header |
| Missing region when creating cart              | Provide `regionId` in cart creation; create regions in Medusa Admin                |
| Payment providers not found                    | Configure payment providers in Medusa; ensure region has payment providers         |
| `getCartList` / `getCurrentCart` not supported | These are Store API limitations; use `getCart` with known cart ID                  |
````
