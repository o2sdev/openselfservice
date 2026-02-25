# @o2s/integrations.mocked

Mocked integration for O2S development and testing, providing in-memory data with Prisma.

The mocked integration provides a fully functional backend for local development and testing without any external APIs. It implements all O2S modules (CMS, Tickets, Notifications, Articles, Resources, Users, Organizations, Invoices, Orders, Products, Carts, Customers, Payments, Checkout, Cache, Search, Auth) using Prisma with SQLite or in-memory storage and seeded data.

- **All modules** – CMS, tickets, orders, invoices, products, users, auth, and more
- **Seeded data** – Realistic sample data for immediate testing
- **Optional delays** – Simulate latency via `MOCKED_INTEGRATION_DELAYS_ENABLED`
- **No external services** – Works offline; ideal for CI and demos

Developers use it to build and test O2S apps locally. Content editors can preview content flows without connecting to production CMS or CRM systems.

## Installation

```bash
npm install @o2s/integrations.mocked
```

## Configuration

Configure the integration via `@o2s/configs.integrations` in your `AppConfig`:

```typescript
import { Tickets, CMS, Users, Articles, Invoices, Orders, Products } from '@o2s/configs.integrations';
import { MockedConfig } from '@o2s/integrations.mocked/integration';

export const AppConfig: ApiConfig = {
    integrations: {
        tickets: MockedConfig.tickets,
        cms: MockedConfig.cms,
        users: MockedConfig.users,
        articles: MockedConfig.articles,
        invoices: MockedConfig.invoices,
        orders: MockedConfig.orders,
        products: MockedConfig.products,
    },
};
```

Or use the pre-configured integration from `@o2s/configs.integrations`:

```typescript
import { Tickets, CMS, Users } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        tickets: Tickets.TicketsIntegrationConfig,
        cms: CMS.CmsIntegrationConfig,
        users: Users.UsersIntegrationConfig,
    },
};
```

## Environment Variables

### Database (Required)

- `AUTH_DATABASE_URL` - SQLite database connection string (e.g. `file:./dev.db`)

## Example .env.local

```bash
AUTH_DATABASE_URL=file:./dev.db
```

## Setup

1. Install dependencies: `npm install`
2. Generate Prisma client: `npx prisma generate`
3. Run migrations: `npx prisma migrate deploy`
4. Seed database: `npm run seed`

## Features

- In-memory data storage with Prisma
- Seed data for development
- Support for all O2S domain models
- Authentication support
- Live preview support

## Related Packages

- `@o2s/configs.integrations` - Integration configuration
- `@prisma/client` - Prisma ORM client


## About Integrations in O2S

Integrations are adapters that connect O2S to external backend services. They handle API communication and normalize data from various backend services into an API-agnostic format. The frontend app communicates only with the API Harmonization server, never directly with backend services, enabling you to swap integrations without breaking the frontend.

**Documentation**: [Mocked integration](https://www.openselfservice.com/docs/integrations/mocked/mocked)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
