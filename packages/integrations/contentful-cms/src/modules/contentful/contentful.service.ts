import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    Asset,
    ContentfulClientApi,
    Entry,
    EntryCollection,
    EntryQueries,
    EntrySkeletonType,
    LocaleCollection,
    createClient,
} from 'contentful';

export interface ContentfulServiceProps {
    getClient: ContentfulClientApi<undefined>;
}

@Global()
@Injectable()
export class ContentfulService implements ContentfulServiceProps {
    client: ContentfulClientApi<undefined>;

    constructor(private readonly config: ConfigService) {
        this.client = createClient({
            accessToken: this.config.get('CF_TOKEN') ?? '',
            space: this.config.get('CF_SPACE_ID') ?? '',
            environment: this.config.get('CF_ENV') ?? '',
        });
    }

    get getClient() {
        return this.client;
    }

    public async getEntry(id: string, query?: EntryQueries<undefined>): Promise<Entry> {
        return await this.client.getEntry(id, query);
    }

    public async findEntries(query: EntryQueries<undefined>): Promise<EntryCollection<EntrySkeletonType>> {
        return await this.client.getEntries<EntrySkeletonType, string>(query);
    }

    public async getAsset(id: string, query?: EntryQueries<undefined>): Promise<Asset> {
        return await this.client.getAsset(id, query);
    }

    public async getLocales(): Promise<LocaleCollection> {
        return await this.client.getLocales();
    }
}
