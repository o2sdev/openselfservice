export const HeaderName = {
    Locale: 'x-locale',
    ClientTimezone: 'x-client-timezone',
    Currency: 'x-currency',
    Authorization: 'authorization',
} as const;

export type HeaderName = (typeof HeaderName)[keyof typeof HeaderName];

export class AppHeaders {
    [HeaderName.Locale]!: string;
    [HeaderName.ClientTimezone]?: string;
    [HeaderName.Currency]?: string;
    [HeaderName.Authorization]?: string;
}
