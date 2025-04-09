import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Asset, ContentfulClientApi, Entry, EntryCollection, LocaleCollection, createClient } from 'contentful';
import { Observable, from } from 'rxjs';

export interface ContentfulServiceProps {
    getClient: ContentfulClientApi;
}

@Global()
@Injectable()
export class ContentfulService implements ContentfulServiceProps {
    client: ContentfulClientApi;

    constructor(private readonly config: ConfigService) {
        this.client = createClient({
            accessToken: this.config.get('CF_TOKEN') || '',
            space: this.config.get('CF_SPACE_ID') || '',
            environment: this.config.get('CF_ENV') || '',
        });
    }

    get getClient() {
        return this.client;
    }

    public getEntry<T>(id: string, query?: unknown): Observable<Entry<T>> {
        return from(this.client.getEntry<T>(id, query));
    }

    public findEntries<T>(query: unknown): Observable<EntryCollection<T>> {
        return from(this.client.getEntries<T>(query));
    }

    public getAsset(id: string, query?: unknown): Observable<Asset> {
        return from(this.client.getAsset(id, query));
    }

    public getLocales(): Observable<LocaleCollection> {
        return from(this.client.getLocales());
    }
}
