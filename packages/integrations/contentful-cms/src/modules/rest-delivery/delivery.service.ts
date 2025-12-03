import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LocaleCollection, createClient } from 'contentful';

@Global()
@Injectable()
export class RestDeliveryService {
    private readonly contentfulDeliveryClient: ReturnType<typeof createClient>;

    constructor(private readonly config: ConfigService) {
        const spaceId = this.config.get<string>('CF_SPACE_ID') || process.env.CF_SPACE_ID;
        const environmentId = this.config.get<string>('CF_ENV') || process.env.CF_ENV;
        const deliveryToken = this.config.get<string>('CF_TOKEN') || process.env.CF_TOKEN;

        if (!spaceId || !environmentId || !deliveryToken) {
            throw new Error('CF_SPACE_ID, CF_ENV and CF_TOKEN are required for Contentful delivery.');
        }

        this.contentfulDeliveryClient = createClient({
            space: spaceId,
            environment: environmentId,
            accessToken: deliveryToken,
        });
    }

    public async getLocales(): Promise<Array<{ value: string; label: string }>> {
        try {
            const response: LocaleCollection = await this.contentfulDeliveryClient.getLocales();

            if (response?.items && Array.isArray(response.items) && response.items.length > 0) {
                const locales = response.items.map((locale: { code: string; name: string }) => ({
                    value: locale.code,
                    label: locale.name,
                }));

                return locales;
            }

            return [];
        } catch (_error) {
            return [];
        }
    }
}
