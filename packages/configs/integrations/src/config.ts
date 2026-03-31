import * as Mocked from '@o2s/integrations.mocked/integration';

import { createIntegrationConfig } from '@o2s/framework/config';
import type { ApiConfig } from '@o2s/framework/modules';

// Single swap point: change Mocked → another integration per domain
// When swapping a domain, update BOTH the assignment below AND the matching export import
const result = createIntegrationConfig({
    articles: Mocked,
    auth: Mocked,
    billingAccounts: Mocked,
    cache: Mocked,
    carts: Mocked,
    checkout: Mocked,
    cms: Mocked,
    customers: Mocked,
    invoices: Mocked,
    notifications: Mocked,
    orders: Mocked,
    organizations: Mocked,
    payments: Mocked,
    products: Mocked,
    resources: Mocked,
    search: Mocked,
    tickets: Mocked,
    users: Mocked,
});

export const integrations: ApiConfig['integrations'] = result.integrations;

// Type exports — re-export the integration namespace so consumers get the correct types,
// including any model extensions defined by the integration (e.g. extended Notification).
// Keep these in sync with the createIntegrationConfig assignments above.
export import Articles = Mocked.Integration.Articles;
export import Auth = Mocked.Integration.Auth;
export import BillingAccounts = Mocked.Integration.BillingAccounts;
export import Cache = Mocked.Integration.Cache;
export import Carts = Mocked.Integration.Carts;
export import Checkout = Mocked.Integration.Checkout;
export import CMS = Mocked.Integration.CMS;
export import Customers = Mocked.Integration.Customers;
export import Invoices = Mocked.Integration.Invoices;
export import Notifications = Mocked.Integration.Notifications;
export import Orders = Mocked.Integration.Orders;
export import Organizations = Mocked.Integration.Organizations;
export import Payments = Mocked.Integration.Payments;
export import Products = Mocked.Integration.Products;
export import Resources = Mocked.Integration.Resources;
export import Search = Mocked.Integration.Search;
export import Tickets = Mocked.Integration.Tickets;
export import Users = Mocked.Integration.Users;
export import Documents = Mocked.Integration.Documents;
