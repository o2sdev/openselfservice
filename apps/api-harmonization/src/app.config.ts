import { ApiConfig } from '@o2s/framework/modules';

import { ArticlesIntegrationConfig } from '@o2s/api-harmonization/models/articles';
import { AuthIntegrationConfig } from '@o2s/api-harmonization/models/auth';
import { BillingAccountsIntegrationConfig } from '@o2s/api-harmonization/models/billing-accounts';
import { CacheIntegrationConfig } from '@o2s/api-harmonization/models/cache';
import { CmsIntegrationConfig } from '@o2s/api-harmonization/models/cms';
import { InvoicesIntegrationConfig } from '@o2s/api-harmonization/models/invoices';
import { NotificationsIntegrationConfig } from '@o2s/api-harmonization/models/notifications';
import { OrganizationsIntegrationConfig } from '@o2s/api-harmonization/models/organizations';
import { ProductsIntegrationConfig } from '@o2s/api-harmonization/models/products';
import { ResourcesIntegrationConfig } from '@o2s/api-harmonization/models/resources';
import { SearchIntegrationConfig } from '@o2s/api-harmonization/models/search';
import { TicketsIntegrationConfig } from '@o2s/api-harmonization/models/tickets';
import { UsersIntegrationConfig } from '@o2s/api-harmonization/models/users';

import { OrdersIntegrationConfig } from './models/orders';

export const AppConfig: ApiConfig = {
    integrations: {
        users: UsersIntegrationConfig,
        organizations: OrganizationsIntegrationConfig,
        tickets: TicketsIntegrationConfig,
        notifications: NotificationsIntegrationConfig,
        articles: ArticlesIntegrationConfig,
        resources: ResourcesIntegrationConfig,
        invoices: InvoicesIntegrationConfig,
        cms: CmsIntegrationConfig,
        cache: CacheIntegrationConfig,
        billingAccounts: BillingAccountsIntegrationConfig,
        search: SearchIntegrationConfig,
        products: ProductsIntegrationConfig,
        orders: OrdersIntegrationConfig,
        auth: AuthIntegrationConfig,
    },
};
