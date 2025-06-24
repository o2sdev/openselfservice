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
            name: string;
            service: typeof CMS.Service;
            controller?: typeof CMS.Controller;
            imports?: Type[];
        };
        tickets: {
            name: string;
            service: typeof Tickets.Service;
            controller?: typeof Tickets.Controller;
            imports?: Type[];
        };
        notifications: {
            name: string;
            service: typeof Notifications.Service;
            controller?: typeof Notifications.Controller;
            imports?: Type[];
        };
        articles: {
            name: string;
            service: typeof Articles.Service;
            controller?: typeof Articles.Controller;
            imports?: Type[];
        };
        organizations: {
            name: string;
            service: typeof Organizations.Service;
            controller?: typeof Organizations.Controller;
            imports?: Type[];
            providers?: Type[];
        };
        users: {
            name: string;
            service: typeof Users.Service;
            controller?: typeof Users.Controller;
            imports?: Type[];
            providers?: Type[];
        };
        resources: {
            name: string;
            service: typeof Resources.Service;
            controller?: typeof Resources.Controller;
            imports?: Type[];
        };
        invoices: {
            name: string;
            service: typeof Invoices.Service;
            controller?: typeof Invoices.Controller;
            imports?: Type[];
        };
        cache: {
            name: string;
            service: typeof Cache.Service;
            imports?: Type[];
        };
        billingAccounts: {
            name: string;
            service: typeof BillingAccounts.Service;
            controller?: typeof BillingAccounts.Controller;
            imports?: Type[];
        };
        search: {
            name: string;
            service?: typeof Search.Service;
            controller?: typeof Search.Controller;
            imports?: Type[];
        };
        products: {
            name: string;
            service: typeof Products.Service;
            controller?: typeof Products.Controller;
            imports?: Type[];
        };
        orders: {
            name: string;
            service: typeof Orders.Service;
            controller?: typeof Orders.Controller;
            imports?: Type[];
        };
        auth: {
            name: string;
            service: typeof Auth.Service;
            imports?: Type[];
        };
    };
}
