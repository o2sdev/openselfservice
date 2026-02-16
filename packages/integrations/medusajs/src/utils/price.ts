import { Models } from '@o2s/framework/modules';

export function mapPriceRequired(
    value: number | undefined | null,
    currency: Models.Price.Currency,
    context: string,
): Models.Price.Price {
    if (value === undefined || value === null || typeof value !== 'number') {
        throw new Error(`${context}: price value is missing or invalid`);
    }
    return { value, currency };
}
