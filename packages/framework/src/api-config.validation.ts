import { Logger } from '@nestjs/common';

import { ApiConfig } from './api-config';

export function validateApiConfig(config: ApiConfig): void {
    const logger = new Logger('ApiConfig');
    const has = (slot: keyof ApiConfig['integrations']) => !!config.integrations[slot];
    const errors: string[] = [];

    if (has('resources') && !has('products')) {
        errors.push('"resources" requires "products" to be configured.');
    }
    if (has('checkout') && (!has('carts') || !has('customers') || !has('payments'))) {
        errors.push('"checkout" requires "carts", "customers", and "payments" to be configured.');
    }
    if (has('carts') && !has('customers')) {
        errors.push('"carts" requires "customers" to be configured.');
    }

    if (errors.length) {
        errors.forEach((e) => logger.error(`ApiConfig: ${e}`));
        throw new Error(`ApiConfig validation failed:\n${errors.join('\n')}`);
    }
}
