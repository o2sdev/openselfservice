import {
    Articles,
    Auth,
    BillingAccounts,
    CMS,
    Cache,
    Invoices,
    Notifications,
    Orders,
    Organizations,
    Products,
    Resources,
    Search,
    Tickets,
    Users,
} from '@o2s/configs.integrations';

import { ApiConfig } from '@o2s/framework/modules';

export const AppConfig: ApiConfig = {
    integrations: {
        users: Users.UsersIntegrationConfig,
        organizations: Organizations.OrganizationsIntegrationConfig,
        tickets: Tickets.TicketsIntegrationConfig,
        notifications: Notifications.NotificationsIntegrationConfig,
        articles: Articles.ArticlesIntegrationConfig,
        resources: Resources.ResourcesIntegrationConfig,
        invoices: Invoices.InvoicesIntegrationConfig,
        cms: CMS.CmsIntegrationConfig,
        cache: Cache.CacheIntegrationConfig,
        billingAccounts: BillingAccounts.BillingAccountsIntegrationConfig,
        search: Search.SearchIntegrationConfig,
        products: Products.ProductsIntegrationConfig,
        orders: Orders.OrdersIntegrationConfig,
        auth: Auth.AuthIntegrationConfig,
    },
};
