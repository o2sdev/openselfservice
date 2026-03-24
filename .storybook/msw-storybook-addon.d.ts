declare module 'msw-storybook-addon' {
    export function initialize(...args: unknown[]): void;
    export const mswLoader: (
        ...args: unknown[]
    ) => void | Record<string, unknown> | Promise<void | Record<string, unknown>>;
}
