import { FetchContext, FetchResponse } from 'ofetch';

import { toApiRequestError } from './utils/api-request-error';
import { ErrorType, LoggerConfig, LoggerService, RequestConfig, ResponseType } from './utils/logger';

export interface InterceptorsConfig {
    logger?: LoggerConfig;
}

export type FetchHookType<T> = (context: T) => Promise<void> | void;

const getRequestUrl = (request: FetchContext['request'], baseURL?: string): string => {
    const requestUrl = typeof request === 'string' ? request : request.url;

    if (!baseURL) {
        return requestUrl;
    }

    const normalizedBaseURL = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;

    if (requestUrl !== normalizedBaseURL && !requestUrl.startsWith(`${normalizedBaseURL}/`)) {
        return requestUrl;
    }

    const relativeUrl = requestUrl.slice(normalizedBaseURL.length);

    return relativeUrl ? (relativeUrl.startsWith('/') ? relativeUrl : `/${relativeUrl}`) : '/';
};

export interface FetchInterceptors {
    onRequest: FetchHookType<FetchContext>;
    onRequestError: FetchHookType<FetchContext & { error: Error }>;
    onResponse: FetchHookType<FetchContext & { response: FetchResponse<unknown> }>;
    onResponseError: FetchHookType<FetchContext & { response: FetchResponse<unknown> }>;
}

export const createInterceptors = ({ logger }: InterceptorsConfig): FetchInterceptors => {
    const loggerService = new LoggerService(logger || {});

    const onRequest: FetchInterceptors['onRequest'] = (context) => {
        const { request, options } = context;

        const requestConfig: RequestConfig = {
            url: typeof request === 'string' ? request : request.url,
            method: options.method || 'GET',
            headers: options.headers ? Object.fromEntries(options.headers.entries()) : {},
            params: options.query || {},
            data: options.body || {},
        };

        loggerService.apiRequest(requestConfig);
    };

    const onResponse: FetchInterceptors['onResponse'] = (context) => {
        const { request, response, options } = context;

        const responseObject: ResponseType = {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers ? Object.fromEntries(response.headers.entries()) : {},
            data: response._data,
            config: {
                url: typeof request === 'string' ? request : request.url,
                method: options.method || 'GET',
                headers: options.headers ? Object.fromEntries(options.headers.entries()) : {},
                params: options.query || {},
                data: options.body || {},
            },
        };

        loggerService.apiResponse(responseObject);
    };

    const onRequestError: FetchInterceptors['onRequestError'] = (context) => {
        const { request, options, error } = context;
        const requestUrl = getRequestUrl(request, options.baseURL);

        const errorObject: ErrorType = {
            name: error.name,
            message: error.message,
            config: {
                url: typeof request === 'string' ? request : request.url,
                method: options.method || 'GET',
                headers: options.headers ? Object.fromEntries(options.headers.entries()) : {},
                params: options.query || {},
                data: options.body || {},
            },
        };

        loggerService.apiRequestError(errorObject);
        return Promise.reject(toApiRequestError(error, options.method || 'GET', requestUrl));
    };

    const onResponseError: FetchInterceptors['onResponseError'] = (context) => {
        const { request, options, response } = context;
        const requestUrl = getRequestUrl(request, options.baseURL);

        const errorObject: ErrorType = {
            name: 'ResponseError',
            message: response?.statusText || 'Error',
            response: {
                status: response?.status,
                data: response?._data,
                headers: response?.headers ? Object.fromEntries(response.headers.entries()) : {},
                config: {
                    url: typeof request === 'string' ? request : request.url,
                    method: options.method || 'GET',
                    headers: options.headers ? Object.fromEntries(options.headers.entries()) : {},
                    params: options.query || {},
                    data: options.body || {},
                },
            },
            config: {
                url: typeof request === 'string' ? request : request.url,
                method: options.method || 'GET',
                headers: options.headers ? Object.fromEntries(options.headers.entries()) : {},
                params: options.query || {},
                data: options.body || {},
            },
        };

        loggerService.apiResponseError(errorObject);
        return Promise.reject(toApiRequestError(errorObject, options.method || 'GET', requestUrl));
    };

    return {
        onRequest,
        onResponse,
        onRequestError,
        onResponseError,
    };
};
