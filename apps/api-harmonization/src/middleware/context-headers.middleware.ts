import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

import { Models } from '@o2s/utils.api-harmonization';

const H = Models.Headers.HeaderName;

@Injectable()
export class ContextHeadersMiddleware implements NestMiddleware {
    private readonly defaultCurrency: string;
    private readonly defaultLocale: string;
    private readonly supportedCurrencies: string[];
    private readonly supportedLocales: string[];

    constructor(private readonly configService: ConfigService) {
        this.defaultCurrency = this.configService.get('DEFAULT_CURRENCY') as string;
        this.defaultLocale = this.configService.get('DEFAULT_LOCALE') as string;

        this.supportedCurrencies = this.configService.get('SUPPORTED_CURRENCIES').split(',');
        this.supportedLocales = this.configService.get('SUPPORTED_LOCALES').split(',');
    }

    private isValidCurrency(currency: string): boolean {
        return this.supportedCurrencies.includes(currency);
    }

    private isValidLocale(locale: string): boolean {
        return this.supportedLocales.includes(locale);
    }

    use(req: Request, res: Response, next: NextFunction) {
        const currency = (req.headers[H.Currency] as string) || this.defaultCurrency;
        const locale = (req.headers[H.Locale] as string) || this.defaultLocale;

        if (!this.isValidCurrency(currency)) {
            return res.status(400).json({
                statusCode: 400,
                message: `Unsupported currency. Supported currencies are: ${this.supportedCurrencies.join(', ')}.`,
            });
        }

        if (!this.isValidLocale(locale)) {
            return res.status(400).json({
                statusCode: 400,
                message: `Unsupported locale. Supported locales are: ${this.supportedLocales.join(', ')}.`,
            });
        }

        res.setHeader('Access-Control-Expose-Headers', `${H.Currency}, ${H.Locale}`);
        res.setHeader(H.Currency, currency);
        res.setHeader(H.Locale, locale);

        next();
    }
}
