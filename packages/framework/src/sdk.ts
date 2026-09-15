import { FetchOptions, ofetch } from 'ofetch';

import { getInvoiceList, getInvoicePdf } from './api/invoices';
import { getNotification, getNotifications, markAs } from './api/notifications';
import { createTicket, getTicket, getTickets } from './api/tickets';
import { getCustomerForCurrentUserById, getDefaultCustomerForCurrentUser, getUser } from './api/users';
import { createInterceptors } from './interceptors';
import type { BlockResponseType } from './utils/block-request';
import { LoggerConfig } from './utils/logger';
import { AppHeaders } from './utils/models/headers';

export { BlockRequestError, createBlockRequest } from './utils/block-request';
export { toLoggerConfig } from './utils/logger';
export type { LogFormat, LogLevel, LoggerConfig, RawLoggerConfig } from './utils/logger';
export type {
    BlockRequest,
    BlockRequestConfig,
    BlockRequestHeaders,
    BlockRequestMethod,
    BlockResponseType,
} from './utils/block-request';

export interface CompatRequestConfig {
    url?: string;
    method?: string;
    headers?: Partial<AppHeaders> & Record<string, string>;
    params?: unknown;
    data?: unknown;
    responseType?: BlockResponseType;
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

/**
 * Builds the HTTP client the SDK is made of, together with the method groups the framework ships
 * itself: `tickets`, `notifications`, `invoices` and `users`. Everything a block or a module serves
 * is added on top with {@link extendSdk}.
 *
 * Inside the frontend packages, take the instance from `@o2s/utils.frontend/sdk` rather than
 * calling this again: it resolves the API url and the logger settings from the environment and
 * hands out one client for all of them.
 */
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

        if (config.responseType) {
            fetchOptions.responseType = config.responseType;
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

const isMethodGroup = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

/**
 * Adds method groups to an SDK and returns a copy, leaving the instance it extends alone, so what
 * one caller adds stays invisible to the others.
 *
 * A group the SDK already has is merged rather than replaced, one level deep: passing
 * `{ notifications: { mine } }` keeps the `notifications` methods that were already there and adds
 * `mine` next to them, and a method of the same name replaces the one below it. Without that,
 * naming an existing group would drop everything it held while the returned type went on promising
 * those methods, since it is an intersection of both sides.
 *
 * The SDK being extended keeps its own type, so extending an extended SDK adds to what is already
 * there instead of hiding it.
 */
export const extendSdk = <BaseSdk extends Sdk, CustomMethods extends Partial<Record<string, unknown>>>(
    sdk: BaseSdk,
    overrides: CustomMethods,
): BaseSdk & CustomMethods => {
    const extended = { ...sdk } as Record<string, unknown>;

    Object.entries(overrides).forEach(([group, methods]) => {
        const existing = extended[group];

        extended[group] = isMethodGroup(existing) && isMethodGroup(methods) ? { ...existing, ...methods } : methods;
    });

    return extended as BaseSdk & CustomMethods;
};
