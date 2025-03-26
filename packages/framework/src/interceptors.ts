import { FetchContext, FetchError, FetchResponse } from 'ofetch';

import { ErrorType, LoggerConfig, LoggerService, RequestConfig, ResponseType } from './utils/logger';

const parseError = (error: Error | FetchError) => {
    if (error instanceof FetchError && error.response) {
        return Promise.reject({
            status: error.response.status || error.statusCode,
            message: error.message,
            data: error.response._data,
        });
    }
    return Promise.reject(error);
};

export interface InterceptorsConfig {
    logger?: LoggerConfig;
}

export type FetchHookType<T> = (context: T) => Promise<void> | void;

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
        return parseError(error);
    };

    const onResponseError: FetchInterceptors['onResponseError'] = (context) => {
        const { request, options, response } = context;

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
        return parseError(errorObject);
    };

    return {
        onRequest,
        onResponse,
        onRequestError,
        onResponseError,
    };
};
