import Medusa from '@medusajs/js-sdk';
import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Global()
@Injectable()
export class MedusaJsService {
    private readonly logLevel: string;
    private readonly medusaBaseUrl: string;
    private readonly medusaPublishableApiKey: string;
    private readonly medusaAdminApiKey: string;
    private readonly medusaAdminApiKeyEncoded: string;
    private readonly sdk: Medusa;

    constructor(private readonly config: ConfigService) {
        this.medusaBaseUrl = this.config.get('MEDUSAJS_BASE_URL') || '';
        this.medusaPublishableApiKey = this.config.get('MEDUSAJS_PUBLISHABLE_API_KEY') || '';
        this.medusaAdminApiKey = this.config.get('MEDUSAJS_ADMIN_API_KEY') || '';
        this.logLevel = this.config.get('LOG_LEVEL') || '';
        if (!this.medusaBaseUrl) {
            throw new Error('MEDUSAJS_BASE_URL is not defined');
        }
        if (!this.medusaPublishableApiKey) {
            throw new Error('MEDUSAJS_PUBLISHABLE_API_KEY is not defined');
        }
        if (!this.medusaAdminApiKey) {
            throw new Error('MEDUSAJS_ADMIN_API_KEY is not defined');
        }

        this.sdk = new Medusa({
            baseUrl: this.medusaBaseUrl,
            debug: this.logLevel === 'debug',
            publishableKey: this.medusaPublishableApiKey,
            apiKey: this.medusaAdminApiKey,
        });
        this.medusaAdminApiKeyEncoded = Buffer.from(this.medusaAdminApiKey).toString('base64');
    }

    getSdk(): Medusa {
        return this.sdk;
    }

    getBaseUrl(): string {
        return this.medusaBaseUrl;
    }

    getPublishableKey(): string {
        return this.medusaPublishableApiKey;
    }

    getAdminKey(): string {
        return this.medusaAdminApiKey;
    }

    getAdminKeyEncoded(): string {
        return this.medusaAdminApiKeyEncoded;
    }

    getMedusaAdminApiHeaders() {
        return {
            'x-publishable-api-key': this.getPublishableKey(),
            Authorization: `Basic ${this.getAdminKeyEncoded()}`,
        };
    }
}
