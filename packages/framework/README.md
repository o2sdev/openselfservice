# @o2s/framework

Core O2S framework providing modules, SDK, and ApiConfig for building composable customer portals.

## Installation

```bash
npm install @o2s/framework
```

## Usage

### Modules

Import framework modules for domain services:

```typescript
import { Tickets, CMS, Users, Articles, Orders, Products } from '@o2s/framework/modules';

// Use in your services
class MyService {
    constructor(
        private readonly ticketsService: Tickets.Service,
        private readonly cmsService: CMS.Service,
    ) {}
}
```

### SDK

Use the SDK for type-safe API clients:

```typescript
import { getSdk } from '@o2s/framework/sdk';

const sdk = getSdk({ apiUrl: 'https://your-api-url.com' });

// Fetch data
const tickets = await sdk.tickets.getTickets({}, accessToken);
const invoices = await sdk.invoices.getInvoiceList({}, accessToken);
```

### ApiConfig

Define your API configuration:

```typescript
import { ApiConfig } from '@o2s/framework/modules';
import { Tickets, CMS } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        tickets: Tickets.TicketsIntegrationConfig,
        cms: CMS.CmsIntegrationConfig,
    },
};
```

## Available Modules

- `Tickets` - Ticket management
- `CMS` - Content management
- `Users` - User management
- `Articles` - Article management
- `Orders` - Order management
- `Products` - Product management
- `Carts` - Shopping cart
- `Customers` - Customer management
- `Payments` - Payment processing
- `Checkout` - Checkout flow
- `Invoices` - Invoice management
- `Notifications` - Notification management
- `Organizations` - Organization management
- `Resources` - Resource management
- `BillingAccounts` - Billing account management
- `Search` - Search functionality
- `Cache` - Caching
- `Auth` - Authentication

## Peer Dependencies

- `@nestjs/common` ^11
- `@nestjs/core` ^11
- `@nestjs/config` ^4.0.2
- `@nestjs/axios` ^4.0.1
- `rxjs` ^7

## Related Packages

- `@o2s/configs.integrations` - Integration configurations
- `@o2s/utils.logger` - Logging utilities
