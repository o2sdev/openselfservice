export type Currency = 'USD' | 'EUR' | 'GBP' | 'PLN';

export type Price = {
    value: number;
    currency: Currency;
    period?: string;
};
