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
    private readonly client: GraphQLClient;
    private readonly sdk: Sdk;

    constructor(private readonly config: ConfigService) {
        this.client = new GraphQLClient(
            `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}/environments/${process.env.CF_ENV}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.CF_PREVIEW_TOKEN}`,
                },
            },
        );
        this.sdk = getSdk(this.client);
    }

    public getPage(params: GetPageQueryVariables) {
        return this.sdk.getPage(params);
    }

    public getPages(params: GetPagesQueryVariables) {
        return this.sdk.getPages(params);
    }

    public getComponent(params: GetComponentQueryVariables) {
        return this.sdk.getComponent(params);
    }
}
