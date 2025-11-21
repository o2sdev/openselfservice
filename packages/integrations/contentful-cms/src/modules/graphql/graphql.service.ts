import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';

import {
    GetAppConfigQueryVariables,
    GetComponentQueryVariables,
    GetFooterQueryVariables,
    GetHeaderQueryVariables,
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
        const deliveryToken = this.config.get<string>('CF_TOKEN') || process.env.CF_TOKEN;

        // Delivery API client (for published content)
        this.deliveryClient = new GraphQLClient(baseUrl, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${deliveryToken}`,
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

    public getHeader(params: GetHeaderQueryVariables) {
        return this.getSdk(params.preview).getHeader(params);
    }

    public getAppConfig(params: GetAppConfigQueryVariables) {
        return this.getSdk(params.preview).getAppConfig(params);
    }

    public getFooter(params: GetFooterQueryVariables) {
        return this.getSdk(params.preview).getFooter(params);
    }
}
