import { Models } from '@o2s/framework/modules';

const VALID_CURRENCIES: Models.Price.Currency[] = ['USD', 'EUR', 'GBP', 'PLN'];

export function parseCurrency(code: string | undefined | null): Models.Price.Currency {
    const normalized = (code ?? '').toUpperCase();
    if (VALID_CURRENCIES.includes(normalized as Models.Price.Currency)) {
        return normalized as Models.Price.Currency;
    }
    throw new Error(`Invalid or unsupported currency: ${code}`);
}
