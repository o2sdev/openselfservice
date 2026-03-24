/**
 * Browser-safe mock for @o2s/utils.api-harmonization.
 * Exports only Models (Block, Headers) - avoids jsonwebtoken which uses Node.js util.inherits.
 * The full package includes Utils.Auth that imports jsonwebtoken, causing "util.inherits is not a function" in Storybook.
 */

export class Block {
    id!: string;
}

export class AppHeaders {
    'x-locale'!: string;
    'x-client-timezone'?: string;
    'x-currency'?: string;
    'authorization'?: string;
}

export const Models = {
    Block: { Block },
    Headers: { AppHeaders },
};

export const Utils = {} as Record<string, unknown>;
