import { BadRequestException } from '@nestjs/common';

import { Models } from '@o2s/framework/modules';

/**
 * Maps a price value to a Price object, throwing BadRequestException if the value is missing.
 *
 * @param value - The price value (can be undefined or null)
 * @param currency - The currency code
 * @param context - Context string describing the price field (e.g., "Cart subtotal", "Order item total")
 * @returns Price object if value is present
 * @throws BadRequestException if value is missing
 *
 * @example
 * const subtotal = mapPrice(cart.subtotal, currency, `Cart ${cart.id} subtotal`);
 * const total = mapPrice(cart.total, currency, `Cart ${cart.id} total`);
 */
export function mapPrice(
    value: number | undefined | null,
    currency: Models.Price.Currency,
    context: string,
): Models.Price.Price {
    if (typeof value === 'undefined' || value === null) {
        throw new BadRequestException(`${context}: price value is missing or invalid`);
    }
    return { value, currency };
}
