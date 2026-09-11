import type { CompatRequestConfig, Sdk } from '../sdk';

import { getApiHeaders } from './api-headers';
import { ApiRequestError, toApiRequestError } from './api-request-error';
import { AppHeaders, HeaderName } from './models/headers';

export { ApiRequestError } from './api-request-error';

/** @deprecated Use {@link ApiRequestError} instead. */
export { ApiRequestError as BlockRequestError } from './api-request-error';

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

const toBlockRequestError = (error: unknown, method: BlockRequestMethod, url: string): ApiRequestError => {
    if (error instanceof ApiRequestError) {
        return error;
    }

    return toApiRequestError(error, method, url);
};

/**
 * Creates the request function used by the methods of a block (or module) SDK. It takes care of
 * merging the default API headers with the ones provided by the caller and with the access token,
 * serializing query params, typing the response and wrapping errors into {@link ApiRequestError}.
 *
 * @example
 * ```typescript
 * export const ticketList = (sdk: Sdk) => {
 *     const request = createBlockRequest(sdk);
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
export const createBlockRequest = (sdk: Pick<Sdk, 'makeRequest'>): BlockRequest => {
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
