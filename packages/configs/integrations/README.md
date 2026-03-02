# @o2s/configs.integrations

Integration configuration package for O2S, providing centralized integration configs and type re-exports.

## Installation

```bash
npm install @o2s/configs.integrations
```

## Usage

### Configure Integrations

Import and use integration configs in your `AppConfig`:

```typescript
import { ApiConfig } from '@o2s/framework/modules';
import {
    Tickets,
    CMS,
    Users,
    Articles,
    Orders,
    Products,
    Carts,
    Customers,
    Payments,
    Checkout,
    Invoices,
    Notifications,
    Organizations,
    Resources,
    BillingAccounts,
    Search,
    Cache,
    Auth,
} from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        tickets: Tickets.TicketsIntegrationConfig,
        cms: CMS.CmsIntegrationConfig,
        users: Users.UsersIntegrationConfig,
        articles: Articles.ArticlesIntegrationConfig,
        orders: Orders.OrdersIntegrationConfig,
        products: Products.ProductsIntegrationConfig,
        carts: Carts.CartsIntegrationConfig,
        customers: Customers.CustomersIntegrationConfig,
        payments: Payments.PaymentsIntegrationConfig,
        checkout: Checkout.CheckoutIntegrationConfig,
        invoices: Invoices.InvoicesIntegrationConfig,
        notifications: Notifications.NotificationsIntegrationConfig,
        organizations: Organizations.OrganizationsIntegrationConfig,
        resources: Resources.ResourcesIntegrationConfig,
        billingAccounts: BillingAccounts.BillingAccountsIntegrationConfig,
        search: Search.SearchIntegrationConfig,
        cache: Cache.CacheIntegrationConfig,
        auth: Auth.AuthIntegrationConfig,
    },
};
```

### Swap Integrations

To swap integrations, simply change the config import, for example:

```typescript
// Tickets.TicketsIntegrationConfig uses Mocked by default
import { Tickets } from '@o2s/integrations.mocked/integration';

// To use Zendesk instead, import from the Zendesk integration
import { Tickets } from '@o2s/integrations.zendesk/integration';
// tickets: ZendeskConfig.tickets
```

### Type Re-exports

Import types from configs, not directly from integration packages:

```typescript
import { Tickets } from '@o2s/configs.integrations';

// Use types
type TicketService = Tickets.Service;
type TicketRequest = Tickets.Request;
type TicketModel = Tickets.Model;
```

## Available Integrations

- `Tickets` - Ticket management (Zendesk, Mocked)
- `CMS` - Content management (Strapi, Contentful, Mocked)
- `Users` - User management (Mocked)
- `Articles` - Article management (Strapi, Contentful, Mocked)
- `Orders` - Order management (MedusaJS, Mocked)
- `Products` - Product management (MedusaJS, Mocked)
- `Carts` - Shopping cart (MedusaJS, Mocked)
- `Customers` - Customer management (MedusaJS, Mocked)
- `Payments` - Payment processing (MedusaJS, Mocked)
- `Checkout` - Checkout flow (MedusaJS, Mocked)
- `Invoices` - Invoice management (Mocked)
- `Notifications` - Notification management (Mocked)
- `Organizations` - Organization management (Mocked)
- `Resources` - Resource management (Mocked)
- `BillingAccounts` - Billing account management (Mocked)
- `Search` - Search functionality (Algolia)
- `Cache` - Caching (Redis)
- `Auth` - Authentication (Mocked)

## Related Packages

- `@o2s/integrations.*` - Individual integration packages
- `@o2s/framework` - Core framework
