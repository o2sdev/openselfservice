import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const getSdk = vi.fn((config: { apiUrl: string; logger?: unknown }) => ({ ...config }));

vi.mock('@o2s/framework/sdk', () => ({
    getSdk,
    // the parser is the real one; only the SDK construction is stubbed out
    toLoggerConfig: ({ level }: { level?: string }) => ({ level }),
}));

vi.mock('next-runtime-env', () => ({
    env: (name: string) => publicEnv[name],
}));

let publicEnv: Record<string, string | undefined> = {};

/** The instance is memoized per module, so every case starts from a fresh import. */
const importSharedSdk = async () => {
    vi.resetModules();

    return (await import('./sdk')).getSharedSdk;
};

const lastConfig = () => getSdk.mock.calls[getSdk.mock.calls.length - 1]![0];

describe('getSharedSdk', () => {
    beforeEach(() => {
        getSdk.mockClear();
        publicEnv = { NEXT_PUBLIC_API_URL: 'https://public.example' };
        process.env.API_URL_INTERNAL = 'http://internal.example';
    });

    afterEach(() => {
        delete process.env.API_URL_INTERNAL;
        vi.unstubAllGlobals();
    });

    it('should build the SDK once and hand the same instance out afterwards', async () => {
        const getSharedSdk = await importSharedSdk();

        expect(getSharedSdk()).toBe(getSharedSdk());
        expect(getSdk).toHaveBeenCalledTimes(1);
    });

    it('should talk to the API directly when rendering on the server', async () => {
        const getSharedSdk = await importSharedSdk();

        getSharedSdk();

        expect(lastConfig().apiUrl).toBe('http://internal.example');
    });

    it('should go through the public url in the browser', async () => {
        vi.stubGlobal('window', {});

        const getSharedSdk = await importSharedSdk();

        getSharedSdk();

        expect(lastConfig().apiUrl).toBe('https://public.example');
    });

    it('should fall back to the public url when there is no internal one', async () => {
        delete process.env.API_URL_INTERNAL;

        const getSharedSdk = await importSharedSdk();

        getSharedSdk();

        expect(lastConfig().apiUrl).toBe('https://public.example');
    });

    it('should pass the logger settings of the environment on', async () => {
        process.env.LOG_LEVEL = 'debug';

        const getSharedSdk = await importSharedSdk();

        getSharedSdk();

        expect(lastConfig().logger).toEqual({ level: 'debug' });

        delete process.env.LOG_LEVEL;
    });
});
