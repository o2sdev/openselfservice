import Medusa from '@medusajs/js-sdk';
import { Global, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Central service providing Medusa.js SDK access and common utilities.
 *
 * ## Authentication Architecture
 *
 * This integration uses two authentication strategies:
 *
 * 1. **Store API with SSO tokens** - For customer-facing operations (orders, carts, checkout,
 *    customers, payments, products). The authorization token (SSO JWT from Auth0/Keycloak/NextAuth)
 *    is passed directly to the Medusa Store API. A custom **Medusa auth plugin** must be deployed
 *    to validate these SSO tokens and map them to Medusa customer identities.
 *
 * 2. **Admin API with API key** - For operations without Store API equivalents (related products,
 *    custom resource endpoints). Uses `MEDUSAJS_ADMIN_API_KEY` for authentication.
 *
 * ## Required Environment Variables
 *
 * - `MEDUSAJS_BASE_URL` - Base URL of the Medusa server
 * - `MEDUSAJS_PUBLISHABLE_API_KEY` - Publishable API key for Store API
 * - `MEDUSAJS_ADMIN_API_KEY` - Admin API key (used only for Admin API operations)
 *
 * ## Integration Testing
 *
 * Integration tests should verify:
 * - SSO token acceptance once the Medusa auth plugin is deployed
 * - Store API operations return customer-scoped data
 * - Admin API operations work for custom endpoints (related products, resources)
 *
 * @see {@link https://docs.medusajs.com/resources/js-sdk Medusa JS SDK}
 */
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
            throw new InternalServerErrorException('MEDUSAJS_BASE_URL is not defined');
        }
        if (!this._medusaPublishableApiKey) {
            throw new InternalServerErrorException('MEDUSAJS_PUBLISHABLE_API_KEY is not defined');
        }
        if (!this._medusaAdminApiKey) {
            throw new InternalServerErrorException('MEDUSAJS_ADMIN_API_KEY is not defined');
        }

        this._sdk = new Medusa({
            baseUrl: this._medusaBaseUrl,
            debug: this.logLevel === 'debug',
            publishableKey: this._medusaPublishableApiKey,
            apiKey: this._medusaAdminApiKey,
            auth: {
                type: 'jwt',
            },
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

    /**
     * Returns headers for Admin API calls.
     * Used only for operations without Store API equivalents (e.g., custom endpoints, related products).
     */
    getMedusaAdminApiHeaders(): Record<string, string> {
        return {
            'x-publishable-api-key': this.getPublishableKey(),
            Authorization: `Basic ${this.getAdminKeyEncoded()}`,
        };
    }

    /**
     * Returns headers for authenticated Store API calls.
     *
     * The authorization token (SSO JWT) is passed as-is to the Medusa Store API.
     * A custom Medusa auth plugin must be configured to validate external SSO tokens
     * and map them to Medusa customer identities.
     *
     * @param authorization - Authorization header value from the API Harmonization layer (SSO JWT)
     */
    getStoreApiHeaders(authorization?: string): Record<string, string> {
        const headers: Record<string, string> = {
            'x-publishable-api-key': this.getPublishableKey(),
        };
        if (authorization) {
            headers['Authorization'] = authorization;
        }
        return headers;
    }
}
