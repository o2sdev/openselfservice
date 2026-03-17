import { FetchOptions, ofetch } from 'ofetch';

import { getInvoiceList, getInvoicePdf } from './api/invoices';
import { getNotification, getNotifications, markAs } from './api/notifications';
import { createTicket, getTicket, getTickets } from './api/tickets';
import { getCustomerForCurrentUserById, getDefaultCustomerForCurrentUser, getUser } from './api/users';
import { createInterceptors } from './interceptors';
import { LoggerConfig } from './utils/logger';
import { AppHeaders } from './utils/models/headers';

export interface CompatRequestConfig {
    url?: string;
    method?: string;
    headers?: Partial<AppHeaders> & Record<string, string>;
    params?: unknown;
    data?: unknown;
    [key: string]: unknown;
}

export interface SdkConfig {
    apiUrl: string;
    logger?: LoggerConfig;
}

// Define API method groups as a generic type for better scalability.
export interface ApiMethodGroup {
    [key: string]: (makeRequest: RequestMethod) => (...args: never[]) => unknown;
}

// Define the generic `RequestMethod` type.
export type RequestMethod = <T>(config: CompatRequestConfig) => Promise<T>;

// Helper function to generate grouped APIs dynamically
const createApiGroup = <T extends ApiMethodGroup>(
    methods: T,
    makeRequest: RequestMethod,
): { [K in keyof T]: ReturnType<T[K]> } => {
    return Object.fromEntries(Object.entries(methods).map(([key, method]) => [key, method(makeRequest)])) as {
        [K in keyof T]: ReturnType<T[K]>;
    };
};

export interface Sdk {
    makeRequest: RequestMethod;
    tickets: {
        getTicket: ReturnType<typeof getTicket>;
        getTickets: ReturnType<typeof getTickets>;
        createTicket: ReturnType<typeof createTicket>;
    };
    notifications: {
        getNotification: ReturnType<typeof getNotification>;
        getNotifications: ReturnType<typeof getNotifications>;
        markAs: ReturnType<typeof markAs>;
    };
    invoices: {
        getInvoiceList: ReturnType<typeof getInvoiceList>;
        getInvoicePdf: ReturnType<typeof getInvoicePdf>;
    };
    users: {
        getUser: ReturnType<typeof getUser>;
        getCustomerForCurrentUserById: ReturnType<typeof getCustomerForCurrentUserById>;
        getDefaultCustomerForCurrentUser: ReturnType<typeof getDefaultCustomerForCurrentUser>;
    };
}

// The primary SDK factory function
export const getSdk = ({ apiUrl, logger }: SdkConfig): Sdk => {
    const { onRequest, onRequestError, onResponse, onResponseError } = createInterceptors({
        logger,
    });

    const ofetchInstance = ofetch.create({
        baseURL: apiUrl,
        onRequest,
        onRequestError,
        onResponse,
        onResponseError,
    });

    const makeRequest: RequestMethod = <T>(config: CompatRequestConfig): Promise<T> => {
        const fetchOptions: FetchOptions = {
            method: config.method,
            query: config.params as Record<string, unknown>,
            body: config.data as BodyInit,
        };

        if (config.headers) {
            fetchOptions.headers = config.headers as FetchOptions['headers'];
        }

        const url = config.url || '';
        return ofetchInstance(url, fetchOptions) as Promise<T>;
    };

    // Define API method groups here
    const ticketsApi = createApiGroup(
        {
            getTicket,
            getTickets,
            createTicket,
        },
        makeRequest,
    );

    const notificationsApi = createApiGroup(
        {
            getNotification,
            getNotifications,
            markAs,
        },
        makeRequest,
    );

    const invoicesApi = createApiGroup(
        {
            getInvoiceList,
            getInvoicePdf,
        },
        makeRequest,
    );

    const usersApi = createApiGroup(
        {
            getUser,
            getCustomerForCurrentUserById,
            getDefaultCustomerForCurrentUser,
        },
        makeRequest,
    );

    return {
        makeRequest,
        tickets: ticketsApi,
        notifications: notificationsApi,
        invoices: invoicesApi,
        users: usersApi,
    };
};

// Extending the SDK while maintaining type safety
export const extendSdk = <CustomMethods extends Partial<Record<string, unknown>>>(
    sdk: ReturnType<typeof getSdk>,
    overrides: CustomMethods,
): typeof sdk & CustomMethods => {
    return {
        ...sdk,
        ...overrides,
    };
};
