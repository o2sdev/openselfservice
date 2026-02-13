import Medusa from '@medusajs/js-sdk';
import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Global()
@Injectable()
export class MedusaJsService {
    private readonly logLevel: string;
    private _medusaBaseUrl: string | null = null;
    private _medusaPublishableApiKey: string | null = null;
    private _medusaAdminApiKey: string | null = null;
    private _medusaAdminApiKeyEncoded: string | null = null;
    private _sdk: Medusa | null = null;

    constructor(private readonly config: ConfigService) {
        this.logLevel = this.config.get('LOG_LEVEL') || '';
    }

    private ensureInitialized(): void {
        if (this._sdk !== null) {
            return;
        }

        this._medusaBaseUrl = this.config.get('MEDUSAJS_BASE_URL') || '';
        this._medusaPublishableApiKey = this.config.get('MEDUSAJS_PUBLISHABLE_API_KEY') || '';
        this._medusaAdminApiKey = this.config.get('MEDUSAJS_ADMIN_API_KEY') || '';

        if (!this._medusaBaseUrl) {
            throw new Error('MEDUSAJS_BASE_URL is not defined');
        }
        if (!this._medusaPublishableApiKey) {
            throw new Error('MEDUSAJS_PUBLISHABLE_API_KEY is not defined');
        }
        if (!this._medusaAdminApiKey) {
            throw new Error('MEDUSAJS_ADMIN_API_KEY is not defined');
        }

        this._sdk = new Medusa({
            baseUrl: this._medusaBaseUrl,
            debug: this.logLevel === 'debug',
            publishableKey: this._medusaPublishableApiKey,
            apiKey: this._medusaAdminApiKey,
        });
        this._medusaAdminApiKeyEncoded = Buffer.from(this._medusaAdminApiKey).toString('base64');
    }

    getSdk(): Medusa {
        this.ensureInitialized();
        return this._sdk!;
    }

    getBaseUrl(): string {
        this.ensureInitialized();
        return this._medusaBaseUrl!;
    }

    getPublishableKey(): string {
        this.ensureInitialized();
        return this._medusaPublishableApiKey!;
    }

    getAdminKey(): string {
        this.ensureInitialized();
        return this._medusaAdminApiKey!;
    }

    getAdminKeyEncoded(): string {
        this.ensureInitialized();
        return this._medusaAdminApiKeyEncoded!;
    }

    getMedusaAdminApiHeaders() {
        return {
            'x-publishable-api-key': this.getPublishableKey(),
            Authorization: `Basic ${this.getAdminKeyEncoded()}`,
        };
    }
}
