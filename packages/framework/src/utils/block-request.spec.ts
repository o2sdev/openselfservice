import { describe, expect, it, vi } from 'vitest';

import type { CompatRequestConfig, Sdk } from '../sdk';

import { type BlockRequestConfig, BlockRequestError, createBlockRequest } from './block-request';
import { HeaderName } from './models/headers';

const TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

const createSdk = () => {
    const makeRequest = vi.fn(async (_config: CompatRequestConfig) => ({}));
    const sdk = { makeRequest } as unknown as Pick<Sdk, 'makeRequest'>;

    return { sdk, makeRequest };
};

const lastConfig = (makeRequest: ReturnType<typeof createSdk>['makeRequest']): CompatRequestConfig =>
    makeRequest.mock.calls[makeRequest.mock.calls.length - 1]![0];

const sendRequest = async (config: BlockRequestConfig) => {
    const { sdk, makeRequest } = createSdk();

    await createBlockRequest(sdk)(config);

    return lastConfig(makeRequest);
};

const failWith = async (error: unknown, config: BlockRequestConfig = { url: '/tickets' }) => {
    const { sdk, makeRequest } = createSdk();
    makeRequest.mockRejectedValueOnce(error);

    return createBlockRequest(sdk)<never>(config).catch((caught: unknown) => caught as BlockRequestError);
};

describe('createBlockRequest', () => {
    describe('headers', () => {
        it('should send the default API headers', async () => {
            const config = await sendRequest({ url: '/tickets' });

            expect(config.headers).toEqual({ [HeaderName.ClientTimezone]: TIMEZONE });
        });

        it('should merge the headers of the caller on top of the default ones', async () => {
            const config = await sendRequest({
                url: '/tickets',
                headers: { [HeaderName.Locale]: 'en', [HeaderName.ClientTimezone]: 'Europe/Warsaw' },
            });

            expect(config.headers).toEqual({
                [HeaderName.Locale]: 'en',
                [HeaderName.ClientTimezone]: 'Europe/Warsaw',
            });
        });

        it('should keep a default header the caller passed as undefined', async () => {
            const config = await sendRequest({
                url: '/tickets',
                headers: { [HeaderName.ClientTimezone]: undefined },
            });

            expect(config.headers).toEqual({ [HeaderName.ClientTimezone]: TIMEZONE });
        });

        it('should match the header names of the caller case-insensitively', async () => {
            const config = await sendRequest({
                url: '/tickets',
                headers: { 'X-Locale': 'en', 'X-Client-Timezone': 'Europe/Warsaw' },
            });

            expect(config.headers).toEqual({
                [HeaderName.Locale]: 'en',
                [HeaderName.ClientTimezone]: 'Europe/Warsaw',
            });
        });

        it('should send the access token as a bearer authorization header', async () => {
            const config = await sendRequest({ url: '/tickets', authorization: 'token' });

            expect(config.headers).toMatchObject({ [HeaderName.Authorization]: 'Bearer token' });
        });

        it('should let the access token win over an authorization header of the caller', async () => {
            const config = await sendRequest({
                url: '/tickets',
                headers: { Authorization: 'Bearer stale' },
                authorization: 'token',
            });

            expect(config.headers).toMatchObject({ [HeaderName.Authorization]: 'Bearer token' });
        });

        it('should keep the authorization header of the caller when there is no access token', async () => {
            const config = await sendRequest({ url: '/tickets', headers: { Authorization: 'Basic dXNlcg==' } });

            expect(config.headers).toMatchObject({ [HeaderName.Authorization]: 'Basic dXNlcg==' });
        });
    });

    describe('supported params', () => {
        it('should send an object of query params, without the undefined ones', async () => {
            const config = await sendRequest({ url: '/tickets', params: { limit: 10, search: undefined } });

            expect(config.params).toEqual({ limit: 10 });
        });

        it('should send the params of a query class instance', async () => {
            class GetTicketListQuery {
                id = 'ticket-list';
                limit?: number = 10;
            }

            const config = await sendRequest({ url: '/tickets', params: new GetTicketListQuery() });

            expect(config.params).toEqual({ id: 'ticket-list', limit: 10 });
        });

        it('should send an empty query when there are no params to send', async () => {
            const config = await sendRequest({ url: '/tickets', params: {} });

            expect(config.params).toEqual({});
        });

        it('should not send a query at all when params are not provided', async () => {
            const config = await sendRequest({ url: '/tickets' });

            expect(config).not.toHaveProperty('params');
        });
    });

    describe('unsupported params', () => {
        it.each([
            ['Date', new Date()],
            ['Map', new Map([['limit', 10]])],
            ['Set', new Set(['limit'])],
            ['URLSearchParams', new URLSearchParams({ limit: '10' })],
        ])('should reject a %s instead of sending an empty query', async (tag, params) => {
            const { sdk, makeRequest } = createSdk();

            await expect(createBlockRequest(sdk)({ url: '/tickets', params })).rejects.toThrow(
                new TypeError(`Query params have to be an object of key/value pairs, received [object ${tag}].`),
            );
            expect(makeRequest).not.toHaveBeenCalled();
        });
    });

    describe('errors', () => {
        it('should take the status of an error that carries it directly', async () => {
            const error = await failWith({ status: 404, message: 'Not Found' });

            expect(error).toBeInstanceOf(BlockRequestError);
            expect(error.status).toBe(404);
            expect(error.message).toBe('[GET /tickets] 404 Not Found');
        });

        it('should take the status of an error that calls it statusCode', async () => {
            const error = await failWith({ statusCode: 500, message: 'Server Error' });

            expect(error.status).toBe(500);
            expect(error.message).toBe('[GET /tickets] 500 Server Error');
        });

        it('should take the status out of the response of an error', async () => {
            const error = await failWith({ message: 'Bad Request', response: { status: 400, data: { code: 'x' } } });

            expect(error.status).toBe(400);
            expect(error.data).toEqual({ code: 'x' });
            expect(error.response).toEqual({ status: 400, data: { code: 'x' } });
        });

        it('should prefer the data of the error itself over the one of its response', async () => {
            const error = await failWith({ data: 'own', response: { status: 400, data: 'response' } });

            expect(error.data).toBe('own');
        });

        it('should describe an error that carries neither a status nor a message', async () => {
            const error = await failWith('boom', { url: '/tickets', method: 'delete' });

            expect(error.status).toBeUndefined();
            expect(error.message).toBe('[DELETE /tickets] Request failed');
            expect(error.method).toBe('delete');
            expect(error.url).toBe('/tickets');
        });

        it('should keep the original error as the cause', async () => {
            const cause = { status: 404, message: 'Not Found' };

            expect((await failWith(cause)).cause).toBe(cause);
        });

        it('should not wrap an error that is already a BlockRequestError', async () => {
            const original = new BlockRequestError('[GET /tickets] 404 Not Found', {
                method: 'get',
                url: '/tickets',
                status: 404,
            });

            expect(await failWith(original)).toBe(original);
        });
    });
});
