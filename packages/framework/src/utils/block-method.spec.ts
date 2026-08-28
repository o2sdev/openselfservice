import { describe, expect, it, vi } from 'vitest';

import type { CompatRequestConfig, Sdk } from '../sdk';

import { createBlockMethod } from './block-method';

const createSdk = () => {
    const makeRequest = vi.fn(async (_config: CompatRequestConfig) => ({}));
    const sdk = { makeRequest } as unknown as Pick<Sdk, 'makeRequest'>;

    return { sdk, makeRequest };
};

const lastConfig = (makeRequest: ReturnType<typeof createSdk>['makeRequest']): CompatRequestConfig =>
    makeRequest.mock.calls[makeRequest.mock.calls.length - 1]![0];

describe('createBlockMethod', () => {
    describe('supported params', () => {
        it('should send an object of query params, without the undefined ones', async () => {
            const { sdk, makeRequest } = createSdk();

            await createBlockMethod(sdk)({ url: '/tickets', params: { limit: 10, search: undefined } });

            expect(lastConfig(makeRequest).params).toEqual({ limit: 10 });
        });

        it('should send the params of a query class instance', async () => {
            const { sdk, makeRequest } = createSdk();

            class GetTicketListQuery {
                id = 'ticket-list';
                limit?: number = 10;
            }

            await createBlockMethod(sdk)({ url: '/tickets', params: new GetTicketListQuery() });

            expect(lastConfig(makeRequest).params).toEqual({ id: 'ticket-list', limit: 10 });
        });

        it('should send an empty query when there are no params to send', async () => {
            const { sdk, makeRequest } = createSdk();

            await createBlockMethod(sdk)({ url: '/tickets', params: {} });

            expect(lastConfig(makeRequest).params).toEqual({});
        });

        it('should not send a query at all when params are not provided', async () => {
            const { sdk, makeRequest } = createSdk();

            await createBlockMethod(sdk)({ url: '/tickets' });

            expect(lastConfig(makeRequest)).not.toHaveProperty('params');
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

            await expect(createBlockMethod(sdk)({ url: '/tickets', params })).rejects.toThrow(
                new TypeError(`Query params have to be an object of key/value pairs, received [object ${tag}].`),
            );
            expect(makeRequest).not.toHaveBeenCalled();
        });
    });
});
