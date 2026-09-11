import type { FetchContext, FetchResponse } from 'ofetch';
import { describe, expect, it } from 'vitest';

import { createInterceptors } from './interceptors';
import { ApiRequestError } from './utils/api-request-error';

const requestContext = (
    error: Error,
    request: FetchContext['request'] = '/tickets/1',
    baseURL?: string,
): FetchContext & { error: Error } => ({
    request,
    options: { method: 'GET', headers: new Headers(), baseURL },
    error,
});

const responseContext = (status: number, statusText: string, data: unknown) =>
    ({
        request: '/tickets/1',
        options: { method: 'GET', headers: new Headers() },
        response: {
            status,
            statusText,
            _data: data,
        },
    }) as unknown as FetchContext & { response: FetchResponse<unknown> };

describe('request error interceptors', () => {
    it('wraps transport failures in ApiRequestError', async () => {
        const cause = new Error('Failed to fetch');
        const { onRequestError } = createInterceptors({});

        await expect(
            onRequestError(requestContext(cause, 'https://api.example.com/tickets/1', 'https://api.example.com')),
        ).rejects.toMatchObject({
            name: 'ApiRequestError',
            message: '[GET /tickets/1] Failed to fetch',
            method: 'get',
            url: '/tickets/1',
            cause,
        });
    });

    it('wraps HTTP failures and preserves the response payload', async () => {
        const { onResponseError } = createInterceptors({});

        await expect(onResponseError(responseContext(404, 'Not Found', { code: 'missing' }))).rejects.toMatchObject({
            name: 'ApiRequestError',
            message: '[GET /tickets/1] 404 Not Found',
            status: 404,
            data: { code: 'missing' },
            response: {
                status: 404,
                data: { code: 'missing' },
            },
        });
    });

    it('does not replace an error that was already normalized', async () => {
        const original = new ApiRequestError('[GET /tickets/1] 401 Unauthorized', {
            method: 'get',
            url: '/tickets/1',
            status: 401,
        });
        const { onRequestError } = createInterceptors({});

        await expect(onRequestError(requestContext(original))).rejects.toBe(original);
    });
});
