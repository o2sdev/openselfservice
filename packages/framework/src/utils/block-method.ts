import type { CompatRequestConfig, Sdk } from '../sdk';

import { getApiHeaders } from './api-headers';
import { AppHeaders, HeaderName } from './models/headers';

export type BlockRequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type BlockRequestHeaders = Partial<AppHeaders> | Record<string, string | undefined>;

export type BlockResponseType = 'json' | 'text' | 'blob' | 'arrayBuffer' | 'stream';

export interface BlockRequestConfig {
    /** Path of the endpoint, relative to the API Harmonization Server URL. */
    url: string;
    /** HTTP method, `get` by default. */
    method?: BlockRequestMethod;
    /**
     * Query params - an object of key/value pairs, serialized into the query string, with `undefined`
     * values dropped. Built-ins that keep their content out of own properties (`Date`, `Map`, `Set`,
     * `URLSearchParams`, ...) are rejected, as they would silently serialize into an empty query.
     */
    params?: unknown;
    /** Request body. */
    data?: unknown;
    /** Headers provided by the caller, merged on top of the default API headers. */
    headers?: BlockRequestHeaders;
    /** Access token, sent as the `authorization` header when provided. */
    authorization?: string;
    /** Expected response type, `json` by default. */
    responseType?: BlockResponseType;
}

/**
 * Performs a single request to the API Harmonization Server, with the response typed as `TResponse`.
 */
export type BlockRequest = <TResponse>(config: BlockRequestConfig) => Promise<TResponse>;

interface BlockRequestErrorOptions {
    method: BlockRequestMethod;
    url: string;
    status?: number;
    data?: unknown;
    response?: BlockErrorResponse;
    cause?: unknown;
}

interface BlockErrorResponse {
    status?: number;
    data?: unknown;
}

/**
 * Error thrown by every method created with {@link createBlockMethod}. It normalizes the various error
 * shapes returned by the underlying fetch client and keeps the original error available as `cause`.
 */
export class BlockRequestError extends Error {
    /** HTTP method of the failed request. */
    readonly method: BlockRequestMethod;
    /** URL of the failed request. */
    readonly url: string;
    /** HTTP status code, when the request reached the server. */
    readonly status?: number;
    /** Response payload returned by the server. */
    readonly data?: unknown;
    /** Raw response details, as returned by the underlying fetch client. */
    readonly response?: BlockErrorResponse;

    constructor(message: string, options: BlockRequestErrorOptions) {
        super(message, { cause: options.cause });

        this.name = 'BlockRequestError';
        this.method = options.method;
        this.url = options.url;
        this.status = options.status;
        this.data = options.data;
        this.response = options.response;
    }
}

const mergeHeaders = (headers?: BlockRequestHeaders, authorization?: string): Record<string, string> => {
    const merged: Record<string, string> = getApiHeaders();

    for (const [name, value] of Object.entries(headers || {})) {
        if (value !== undefined) {
            merged[name.toLowerCase()] = value;
        }
    }

    if (authorization) {
        merged[HeaderName.Authorization] = `Bearer ${authorization}`;
    }

    return merged;
};

const QUERY_OBJECT_TAG = '[object Object]';

const serializeParams = (params: unknown): unknown => {
    if (params === undefined || params === null) {
        return undefined;
    }

    if (typeof params !== 'object' || Array.isArray(params)) {
        return params;
    }

    const tag = Object.prototype.toString.call(params);

    if (tag !== QUERY_OBJECT_TAG) {
        throw new TypeError(`Query params have to be an object of key/value pairs, received ${tag}.`);
    }

    return Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined));
};

const toStatus = (value: unknown): number | undefined => {
    return typeof value === 'number' ? value : undefined;
};

const toBlockRequestError = (error: unknown, method: BlockRequestMethod, url: string): BlockRequestError => {
    if (error instanceof BlockRequestError) {
        return error;
    }

    const source = (typeof error === 'object' && error !== null ? error : {}) as {
        message?: unknown;
        status?: unknown;
        statusCode?: unknown;
        data?: unknown;
        response?: BlockErrorResponse;
    };

    const status = toStatus(source.status) ?? toStatus(source.statusCode) ?? toStatus(source.response?.status);
    const message = typeof source.message === 'string' && source.message ? source.message : 'Request failed';

    return new BlockRequestError(`[${method.toUpperCase()} ${url}]${status ? ` ${status}` : ''} ${message}`, {
        method,
        url,
        status,
        data: source.data ?? source.response?.data,
        response: source.response,
        cause: error,
    });
};

/**
 * Creates the request function used by the methods of a block (or module) SDK. It takes care of
 * merging the default API headers with the ones provided by the caller and with the access token,
 * serializing query params, typing the response and wrapping errors into {@link BlockRequestError}.
 *
 * @example
 * ```typescript
 * export const ticketList = (sdk: Sdk) => {
 *     const request = createBlockMethod(sdk);
 *
 *     return {
 *         blocks: {
 *             getTicketList: (
 *                 query: Request.GetTicketListBlockQuery,
 *                 headers: AppHeaders,
 *                 authorization?: string,
 *             ): Promise<Model.TicketListBlock> =>
 *                 request({
 *                     url: API_URL,
 *                     params: query,
 *                     headers,
 *                     authorization,
 *                 }),
 *         },
 *     };
 * };
 * ```
 */
export const createBlockMethod = (sdk: Pick<Sdk, 'makeRequest'>): BlockRequest => {
    return async <TResponse>(config: BlockRequestConfig): Promise<TResponse> => {
        const { url, method = 'get', params, data, headers, authorization, responseType } = config;

        const requestConfig: CompatRequestConfig = {
            method,
            url,
            headers: mergeHeaders(headers, authorization),
        };

        const query = serializeParams(params);

        if (query !== undefined) {
            requestConfig.params = query;
        }

        if (data !== undefined) {
            requestConfig.data = data;
        }

        if (responseType !== undefined) {
            requestConfig.responseType = responseType;
        }

        try {
            return await sdk.makeRequest<TResponse>(requestConfig);
        } catch (error) {
            throw toBlockRequestError(error, method, url);
        }
    };
};
