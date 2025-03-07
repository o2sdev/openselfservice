import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';

import {
    GetAppConfigQueryVariables,
    GetComponentQueryVariables,
    GetFooterQueryVariables,
    GetHeaderQueryVariables,
    GetLoginPageQueryVariables,
    GetPageQueryVariables,
    GetPagesQueryVariables,
    Sdk,
    getSdk,
} from '@/generated/strapi';

@Global()
@Injectable()
export class GraphqlService {
    private readonly client: GraphQLClient;
    private readonly sdk: Sdk;

    constructor(private readonly config: ConfigService) {
        this.client = new GraphQLClient(this.config.get('CMS_STRAPI_BASE_URL') + '/graphql');
        this.sdk = getSdk(this.client);
    }

    public getAppConfig(params: GetAppConfigQueryVariables) {
        return this.sdk.getAppConfig(params);
    }

    public getLocales() {
        return this.sdk.getLocales();
    }

    public getPage(params: GetPageQueryVariables) {
        return this.sdk.getPage(params);
    }

    public getPages(params: GetPagesQueryVariables) {
        return this.sdk.getPages(params);
    }

    public getLoginPage(params: GetLoginPageQueryVariables) {
        return this.sdk.getLoginPage(params);
    }

    public getHeader(params: GetHeaderQueryVariables) {
        return this.sdk.getHeader(params);
    }

    public getFooter(params: GetFooterQueryVariables) {
        return this.sdk.getFooter(params);
    }

    public getComponent(params: GetComponentQueryVariables) {
        return this.sdk.getComponent(params);
    }
}
