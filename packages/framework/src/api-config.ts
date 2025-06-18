import { Type } from '@nestjs/common';

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
} from './';

export interface ApiConfig {
    integrations: {
        cms: {
            service: typeof CMS.Service;
            controller?: typeof CMS.Controller;
            imports?: Type[];
        };
        tickets: {
            service: typeof Tickets.Service;
            controller?: typeof Tickets.Controller;
            imports?: Type[];
        };
        notifications: {
            service: typeof Notifications.Service;
            controller?: typeof Notifications.Controller;
            imports?: Type[];
        };
        articles: {
            service: typeof Articles.Service;
            controller?: typeof Articles.Controller;
            imports?: Type[];
        };
        organizations: {
            service: typeof Organizations.Service;
            controller?: typeof Organizations.Controller;
            imports?: Type[];
            providers?: Type[];
        };
        users: {
            service: typeof Users.Service;
            controller?: typeof Users.Controller;
            imports?: Type[];
            providers?: Type[];
        };
        resources: {
            service: typeof Resources.Service;
            controller?: typeof Resources.Controller;
            imports?: Type[];
        };
        invoices: {
            service: typeof Invoices.Service;
            controller?: typeof Invoices.Controller;
            imports?: Type[];
        };
        cache: {
            service: typeof Cache.Service;
            imports?: Type[];
        };
        billingAccounts: {
            service: typeof BillingAccounts.Service;
            controller?: typeof BillingAccounts.Controller;
            imports?: Type[];
        };
        search: {
            service?: typeof Search.Service;
            controller?: typeof Search.Controller;
            imports?: Type[];
        };
        products: {
            service: typeof Products.Service;
            controller?: typeof Products.Controller;
            imports?: Type[];
        };
        orders: {
            service: typeof Orders.Service;
            controller?: typeof Orders.Controller;
            imports?: Type[];
        };
        auth: {
            service: typeof Auth.Service;
            imports?: Type[];
        };
    };
}
