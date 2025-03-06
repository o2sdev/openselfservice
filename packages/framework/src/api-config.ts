import { Type } from '@nestjs/common';

import {
    Articles,
    BillingAccounts,
    CMS,
    Cache,
    Invoices,
    Notifications,
    Organizations,
    Resources,
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
        };
        users: {
            service: typeof Users.Service;
            controller?: typeof Users.Controller;
            imports?: Type[];
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
    };
}
