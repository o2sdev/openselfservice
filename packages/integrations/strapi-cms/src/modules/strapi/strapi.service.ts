import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { API, StrapiClient, strapi } from '@strapi/client';
import { Observable, from } from 'rxjs';

export interface StrapiServiceProps {
    getClient: StrapiClient;
}

@Global()
@Injectable()
export class StrapiService implements StrapiServiceProps {
    client: StrapiClient;

    constructor(private readonly config: ConfigService) {
        this.client = strapi({
            baseURL: `${this.config.get('CMS_STRAPI_BASE_URL')}/api`,
            headers: {
                'strapi-encode-source-maps': "true",
            },
        });
    }

    get getClient() {
        return this.client;
    }

    public single<T extends API.Document>(
        resource: string,
        query?: API.BaseQueryParams,
    ): Observable<API.DocumentResponse> {
        return from(this.client.single(resource).find(query) as Promise<API.DocumentResponse<T>>);
    }

    public collectionMultiple<T extends API.Document>(
        resource: string,
        query: API.BaseQueryParams,
    ): Observable<API.DocumentResponseCollection> {
        return from(this.client.collection(resource).find(query) as Promise<API.DocumentResponseCollection<T>>);
    }

    public collectionSingle<T extends API.Document>(
        resource: string,
        id: string,
        query: API.BaseQueryParams,
    ): Observable<API.DocumentResponse> {
        return from(this.client.collection(resource).findOne(id, query) as Promise<API.DocumentResponse<T>>);
    }
}
