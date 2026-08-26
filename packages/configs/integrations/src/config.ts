/*
 * Central integration configuration — the single place that decides which integration backs
 * each domain.
 *
 * HOW TO SWAP AN INTEGRATION FOR A DOMAIN:
 *   Change the module path on that domain's `import * as <Domain>Source ...` line below.
 *   Both the runtime map (`createIntegrationConfig({ ... })`) and the type re-export
 *   (`export import <Domain> = <Domain>Source.Integration.<Domain>`) reference the SAME alias,
 *   so they can never drift out of sync. That is why each domain has its own import line even
 *   when several point at the same integration.
 *
 * COMPILE-TIME SAFETY:
 *   `createIntegrationConfig` only accepts an integration for a domain it actually provides.
 *   e.g. assigning `cms: TicketsSource` when that integration has no `cms` config is a type
 *   error, not a runtime crash. This relies on integrations declaring their `Config` with
 *   `satisfies Partial<ApiConfig['integrations']>` (see any `packages/integrations/*`).
 *
 * The `export import` re-exports expose each integration's `Service`/`Request`/`Model`
 * namespaces to consumers (blocks import `{ CMS, Tickets, ... }` from `@o2s/configs.integrations`).
 */
import * as ArticlesSource from '@o2s/integrations.mocked/integration';
import * as AuthSource from '@o2s/integrations.mocked/integration';
import * as BillingAccountsSource from '@o2s/integrations.mocked/integration';
import * as CacheSource from '@o2s/integrations.mocked/integration';
import * as CartsSource from '@o2s/integrations.mocked/integration';
import * as CheckoutSource from '@o2s/integrations.mocked/integration';
import * as CmsSource from '@o2s/integrations.mocked/integration';
import * as CustomersSource from '@o2s/integrations.mocked/integration';
import * as DocumentsSource from '@o2s/integrations.mocked/integration';
import * as InvoicesSource from '@o2s/integrations.mocked/integration';
import * as NotificationsSource from '@o2s/integrations.mocked/integration';
import * as OrdersSource from '@o2s/integrations.mocked/integration';
import * as OrganizationsSource from '@o2s/integrations.mocked/integration';
import * as PaymentsSource from '@o2s/integrations.mocked/integration';
import * as ProductsSource from '@o2s/integrations.mocked/integration';
import * as ResourcesSource from '@o2s/integrations.mocked/integration';
import * as SearchSource from '@o2s/integrations.mocked/integration';
import * as TicketsSource from '@o2s/integrations.mocked/integration';
import * as UsersSource from '@o2s/integrations.mocked/integration';

import { createIntegrationConfig } from '@o2s/framework/config';
import type { ApiConfig } from '@o2s/framework/modules';

// Explicit annotation keeps the emitted declaration portable (avoids TS2742 references to
// framework-internal module paths in the inferred type).
const result = createIntegrationConfig({
    articles: ArticlesSource,
    auth: AuthSource,
    billingAccounts: BillingAccountsSource,
    cache: CacheSource,
    carts: CartsSource,
    checkout: CheckoutSource,
    cms: CmsSource,
    customers: CustomersSource,
    invoices: InvoicesSource,
    notifications: NotificationsSource,
    orders: OrdersSource,
    organizations: OrganizationsSource,
    payments: PaymentsSource,
    products: ProductsSource,
    resources: ResourcesSource,
    search: SearchSource,
    tickets: TicketsSource,
    users: UsersSource,
});

export const integrations: ApiConfig['integrations'] = result.integrations;

// Type re-exports — each references the SAME alias as its domain assignment above.
export import Articles = ArticlesSource.Integration.Articles;
export import Auth = AuthSource.Integration.Auth;
export import BillingAccounts = BillingAccountsSource.Integration.BillingAccounts;
export import Cache = CacheSource.Integration.Cache;
export import Carts = CartsSource.Integration.Carts;
export import Checkout = CheckoutSource.Integration.Checkout;
export import CMS = CmsSource.Integration.CMS;
export import Customers = CustomersSource.Integration.Customers;
export import Documents = DocumentsSource.Integration.Documents;
export import Invoices = InvoicesSource.Integration.Invoices;
export import Notifications = NotificationsSource.Integration.Notifications;
export import Orders = OrdersSource.Integration.Orders;
export import Organizations = OrganizationsSource.Integration.Organizations;
export import Payments = PaymentsSource.Integration.Payments;
export import Products = ProductsSource.Integration.Products;
export import Resources = ResourcesSource.Integration.Resources;
export import Search = SearchSource.Integration.Search;
export import Tickets = TicketsSource.Integration.Tickets;
export import Users = UsersSource.Integration.Users;
