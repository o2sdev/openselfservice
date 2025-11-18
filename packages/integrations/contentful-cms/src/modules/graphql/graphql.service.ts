import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';

import {
    GetComponentQueryVariables,
    GetPageQueryVariables,
    GetPagesQueryVariables,
    Sdk,
    getSdk,
} from '@/generated/contentful';

@Global()
@Injectable()
export class GraphqlService {
    private readonly deliveryClient: GraphQLClient;
    private readonly previewClient: GraphQLClient;
    private readonly deliverySdk: Sdk;
    private readonly previewSdk: Sdk;

    constructor(private readonly config: ConfigService) {
        const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}/environments/${process.env.CF_ENV}`;

        // Delivery API client (for published content)
        this.deliveryClient = new GraphQLClient(baseUrl, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.CF_TOKEN}`,
            },
        });

        // Preview API client (for draft/unpublished content)
        this.previewClient = new GraphQLClient(baseUrl, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.CF_PREVIEW_TOKEN}`,
            },
        });

        this.deliverySdk = getSdk(this.deliveryClient);
        this.previewSdk = getSdk(this.previewClient);
    }

    private getSdk(preview?: boolean | null): Sdk {
        return preview === true ? this.previewSdk : this.deliverySdk;
    }

    public getPage(params: GetPageQueryVariables) {
        return this.getSdk(params.preview).getPage(params);
    }

    public getPages(params: GetPagesQueryVariables) {
        return this.getSdk(params.preview).getPages(params);
    }

    public getComponent(params: GetComponentQueryVariables) {
        return this.getSdk(params.preview).getComponent(params);
    }
}
