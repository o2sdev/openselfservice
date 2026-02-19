import { ApiConfig, Auth, Carts, Customers, Payments, Search } from '@o2s/framework/modules';

import { Service as ArticlesService } from './modules/articles';
import { Service as AuthService } from './modules/auth';
import { Service as BillingAccountsService } from './modules/billing-accounts';
import { Service as CacheService } from './modules/cache';
import { Service as CartsService } from './modules/carts';
import { Service as CheckoutService } from './modules/checkout';
import { Service as CmsService } from './modules/cms';
import { Service as CustomersService } from './modules/customers';
import { Service as InvoicesService } from './modules/invoices';
import { Service as NotificationsService } from './modules/notifications';
import { Service as OrdersService } from './modules/orders';
import { Service as OrganizationsService } from './modules/organizations';
import { Service as PaymentsService } from './modules/payments';
import { Service as ProductsService } from './modules/products';
import { Service as ResourceService } from './modules/resources';
import { Service as SearchService } from './modules/search';
import { Service as TicketsService } from './modules/tickets';
import { Service as UserService } from './modules/users';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        name: 'mocked',
        service: CmsService,
        imports: [Auth.Module],
    },
    tickets: {
        name: 'mocked',
        service: TicketsService,
    },
    notifications: {
        name: 'mocked',
        service: NotificationsService,
    },
    articles: {
        name: 'mocked',
        service: ArticlesService,
        imports: [Search.Module],
    },
    resources: {
        name: 'mocked',
        service: ResourceService,
    },
    users: {
        name: 'mocked',
        service: UserService,
    },
    organizations: {
        name: 'mocked',
        service: OrganizationsService,
    },
    invoices: {
        name: 'mocked',
        service: InvoicesService,
    },
    orders: {
        name: 'mocked',
        service: OrdersService,
        imports: [Auth.Module],
    },
    cache: {
        name: 'mocked',
        service: CacheService,
    },
    billingAccounts: {
        name: 'mocked',
        service: BillingAccountsService,
    },
    search: {
        name: 'mocked',
        service: SearchService,
    },
    products: {
        name: 'mocked',
        service: ProductsService,
    },
    carts: {
        name: 'mocked',
        service: CartsService,
        imports: [Auth.Module, Customers.Module],
    },
    customers: {
        name: 'mocked',
        service: CustomersService,
        imports: [Auth.Module],
    },
    payments: {
        name: 'mocked',
        service: PaymentsService,
    },
    checkout: {
        name: 'mocked',
        service: CheckoutService,
        imports: [Auth.Module, Carts.Module, Customers.Module, Payments.Module],
    },
    auth: {
        name: 'mocked',
        service: AuthService,
    },
};
