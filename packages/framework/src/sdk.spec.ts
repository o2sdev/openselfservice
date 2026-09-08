import type { FetchOptions } from 'ofetch';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getSdk } from './sdk';
import { ApiRequestError } from './utils/api-request-error';

const ofetchInstance = vi.fn(async (_url: string, _options?: FetchOptions) => ({}));

vi.mock('ofetch', () => ({
    ofetch: { create: () => ofetchInstance },
}));

const lastOptions = () => ofetchInstance.mock.calls[ofetchInstance.mock.calls.length - 1]![1];

describe('makeRequest', () => {
    beforeEach(() => {
        ofetchInstance.mockClear();
    });

    it('should forward the response type, so that it is not guessed from the content type', async () => {
        const sdk = getSdk({ apiUrl: 'https://api.example.com' });

        await sdk.makeRequest({ url: '/invoices/1/pdf', responseType: 'blob' });

        expect(lastOptions()).toMatchObject({ responseType: 'blob' });
    });

    it('should leave the response type to ofetch when the caller does not ask for one', async () => {
        const sdk = getSdk({ apiUrl: 'https://api.example.com' });

        await sdk.makeRequest({ url: '/invoices' });

        expect(lastOptions()).not.toHaveProperty('responseType');
    });

    it('should normalize response parsing failures at the SDK boundary', async () => {
        const cause = new SyntaxError('Unexpected end of JSON input');
        ofetchInstance.mockRejectedValueOnce(cause);
        const sdk = getSdk({ apiUrl: 'https://api.example.com' });

        const error = await sdk.makeRequest({ url: '/tickets/1' }).catch((caught: unknown) => caught);

        expect(error).toBeInstanceOf(ApiRequestError);
        expect(error).toMatchObject({
            name: 'ApiRequestError',
            message: '[GET /tickets/1] Unexpected end of JSON input',
            method: 'get',
            url: '/tickets/1',
            cause,
        });
    });
});
