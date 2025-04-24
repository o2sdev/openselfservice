import { ApiConfig, Search } from '@o2s/framework/modules';

import { Service as ArticlesService } from './modules/articles';
import { Service as BillingAccountsService } from './modules/billing-accounts';
import { Service as CacheService } from './modules/cache';
import { Service as CmsService } from './modules/cms';
import { Service as InvoicesService } from './modules/invoices';
import { Service as NotificationsService } from './modules/notifications';
import { Service as OrdersService } from './modules/orders';
import { Service as OrganizationsService } from './modules/organizations';
import { Service as ProductsService } from './modules/products';
import { Service as ResourceService } from './modules/resources';
import { Service as SearchService } from './modules/search';
import { Service as TicketsService } from './modules/tickets';
import { Service as UserService } from './modules/users';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        service: CmsService,
    },
    tickets: {
        service: TicketsService,
    },
    notifications: {
        service: NotificationsService,
    },
    articles: {
        service: ArticlesService,
        imports: [Search.Module],
    },
    resources: {
        service: ResourceService,
    },
    users: {
        service: UserService,
    },
    organizations: {
        service: OrganizationsService,
    },
    invoices: {
        service: InvoicesService,
    },
    orders: {
        service: OrdersService,
    },
    cache: {
        service: CacheService,
    },
    billingAccounts: {
        service: BillingAccountsService,
    },
    search: {
        service: SearchService,
    },
    products: {
        service: ProductsService,
    },
};
