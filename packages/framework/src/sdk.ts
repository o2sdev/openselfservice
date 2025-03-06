import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';

import { getInvoiceList, getInvoicePdf } from './api/invoices';
import { getNotification, getNotifications, markAs } from './api/notifications';
import { createTicket, getTicket, getTickets } from './api/tickets';
import { getCustomerForCurrentUserById, getDefaultCustomerForCurrentUser, getUser } from './api/users';
import { createInterceptors } from './interceptors';
import { LoggerConfig } from './utils/logger';

export interface SdkConfig {
    apiUrl: string;
    logger?: LoggerConfig;
}

export interface Sdk extends SdkMethods {
    makeRequest: RequestMethod;
}

export type TicketMethods = {
    getTicket: ReturnType<typeof getTicket>;
    getTickets: ReturnType<typeof getTickets>;
    createTicket: ReturnType<typeof createTicket>;
};

export type NotificationMethods = {
    getNotification: ReturnType<typeof getNotification>;
    getNotifications: ReturnType<typeof getNotifications>;
    markAs: ReturnType<typeof markAs>;
};

export type UsersMethods = {
    getUser: ReturnType<typeof getUser>;
    getCustomerForCurrentUserById: ReturnType<typeof getCustomerForCurrentUserById>;
    getDefaultCustomerForCurrentUser: ReturnType<typeof getDefaultCustomerForCurrentUser>;
};

export type InvoicesMethods = {
    getInvoiceList: ReturnType<typeof getInvoiceList>;
    getInvoicePdf: ReturnType<typeof getInvoicePdf>;
};

export interface SdkMethods {
    tickets: TicketMethods;
    notifications: NotificationMethods;
    invoices: InvoicesMethods;
    users: UsersMethods;
}

export type ExtendedSdkMethods = {
    tickets: Partial<TicketMethods> & { [key: string]: unknown };
    notifications: Partial<NotificationMethods> & { [key: string]: unknown };
    invoices: Partial<InvoicesMethods> & { [key: string]: unknown };
    components: { [key: string]: unknown };
    modules: { [key: string]: unknown };
};

export type RequestMethod = <T>(config: AxiosRequestConfig) => Promise<T>;

export const getSdk = ({ apiUrl, logger }: SdkConfig): Sdk => {
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: apiUrl,
    });

    const { requestInterceptor, requestErrorInterceptor, responseSuccessInterceptor, responseErrorInterceptor } =
        createInterceptors({
            logger,
        });

    axiosInstance.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
    axiosInstance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

    const makeRequest: RequestMethod = <T>(config: AxiosRequestConfig): Promise<T> => {
        return axiosInstance.request({
            withCredentials: true,
            ...config,
            paramsSerializer: (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' });
            },
        });
    };

    return {
        makeRequest,
        tickets: {
            getTicket: getTicket(makeRequest),
            getTickets: getTickets(makeRequest),
            createTicket: createTicket(makeRequest),
        },
        notifications: {
            getNotification: getNotification(makeRequest),
            getNotifications: getNotifications(makeRequest),
            markAs: markAs(makeRequest),
        },
        invoices: {
            getInvoiceList: getInvoiceList(makeRequest),
            getInvoicePdf: getInvoicePdf(makeRequest),
        },
        users: {
            getUser: getUser(makeRequest),
            getCustomerForCurrentUserById: getCustomerForCurrentUserById(makeRequest),
            getDefaultCustomerForCurrentUser: getDefaultCustomerForCurrentUser(makeRequest),
        },
    };
};

export const extendSdk = <CustomMethods extends Partial<ExtendedSdkMethods>>(
    sdk: ReturnType<typeof getSdk>,
    overrides: CustomMethods,
): SdkMethods & CustomMethods => {
    return {
        ...sdk,
        ...overrides,
        tickets: {
            ...sdk.tickets,
            ...overrides.tickets,
        },
        notifications: {
            ...sdk.notifications,
            ...overrides.notifications,
        },
        invoices: {
            ...sdk.invoices,
            ...overrides.invoices,
        },
    };
};
