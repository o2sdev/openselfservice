import type { FetchOptions } from 'ofetch';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { extendSdk, getSdk } from './sdk';

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
});

describe('extendSdk', () => {
    const baseSdk = () => getSdk({ apiUrl: 'https://api.example.com' });

    it('should add a group the SDK does not have yet', () => {
        const extended = extendSdk(baseSdk(), { blocks: { getTicketList: () => 'list' } });

        expect(extended.blocks.getTicketList()).toBe('list');
        expect(typeof extended.makeRequest).toBe('function');
    });

    it('should keep the methods of a group it is given again', () => {
        // naming an existing group used to drop everything it held, while the returned type went on
        // promising those methods, because it is an intersection of both sides
        const extended = extendSdk(baseSdk(), { notifications: { someNewEndpoint: () => 'custom' } });

        expect(Object.keys(extended.notifications).sort()).toEqual([
            'getNotification',
            'getNotifications',
            'markAs',
            'someNewEndpoint',
        ]);
        expect(typeof extended.notifications.getNotifications).toBe('function');
    });

    it('should let a method of the same name win over the one below it', () => {
        const extended = extendSdk(baseSdk(), { notifications: { markAs: () => 'mine' } });

        expect(extended.notifications.markAs()).toBe('mine');
        expect(typeof extended.notifications.getNotifications).toBe('function');
    });

    it('should compose, so that two extensions of one group both survive', () => {
        const extended = extendSdk(extendSdk(baseSdk(), { blocks: { a: () => 'a' } }), { blocks: { b: () => 'b' } });

        expect(extended.blocks.a()).toBe('a');
        expect(extended.blocks.b()).toBe('b');
    });

    it('should replace a member that is not a group of methods', () => {
        const makeRequest = () => Promise.resolve('mine' as never);
        const extended = extendSdk(baseSdk(), { makeRequest });

        expect(extended.makeRequest).toBe(makeRequest);
    });

    it('should leave the SDK it extends alone', () => {
        const sdk = baseSdk();

        extendSdk(sdk, { notifications: { someNewEndpoint: () => 'custom' } });

        expect(Object.keys(sdk.notifications).sort()).toEqual(['getNotification', 'getNotifications', 'markAs']);
    });

    it('should type the result as the added group next to the built-in ones', () => {
        const extended = extendSdk(baseSdk(), { blocks: { getTicketList: () => 'list' } });

        // checked by `tsc`, not at runtime
        const added: () => string = extended.blocks.getTicketList;
        const builtIn: typeof extended.notifications.markAs = extended.notifications.markAs;

        expect([added, builtIn].every((method) => typeof method === 'function')).toBe(true);
    });

    it('should type a replaced method as its replacement rather than as both signatures', () => {
        const extended = extendSdk(baseSdk(), { makeRequest: () => 'not a promise' });
        const inGroup = extendSdk(baseSdk(), { notifications: { markAs: () => 'mine' } });

        const replaced: string = extended.makeRequest();
        const replacedInGroup: string = inGroup.notifications.markAs();

        // @ts-expect-error the override replaced makeRequest, so its old signature is gone
        expect(() => extended.makeRequest({ url: '/' })).toBeDefined();
        // @ts-expect-error and the same for a method replaced inside a merged group
        expect(() => inGroup.notifications.markAs({ id: '1', status: 'VIEWED' }, 'token')).toBeDefined();

        expect([replaced, replacedInGroup]).toEqual(['not a promise', 'mine']);
    });
});
