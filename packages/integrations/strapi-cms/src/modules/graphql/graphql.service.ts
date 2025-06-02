import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';

import {
    GetAppConfigQueryVariables,
    GetArticleQueryVariables,
    GetArticlesQueryVariables,
    GetCategoriesQueryVariables,
    GetComponentQueryVariables,
    GetCreateAccountPageQueryVariables,
    GetCreateNewPasswordPageQueryVariables,
    GetFooterQueryVariables,
    GetHeaderQueryVariables,
    GetLoginPageQueryVariables,
    GetNotFoundPageQueryVariables,
    GetOrganizationListQueryVariables,
    GetPageQueryVariables,
    GetPagesQueryVariables,
    GetResetPasswordPageQueryVariables,
    GetSurveyQueryVariables,
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
    public getResetPasswordPage(params: GetResetPasswordPageQueryVariables) {
        return this.sdk.getResetPasswordPage(params);
    }

    public getCreateNewPasswordPage(params: GetCreateNewPasswordPageQueryVariables) {
        return this.sdk.getCreateNewPasswordPage(params);
    }

    public getCreateAccountPage(params: GetCreateAccountPageQueryVariables) {
        return this.sdk.getCreateAccountPage(params);
    }

    public getNotFoundPage(params: GetNotFoundPageQueryVariables) {
        return this.sdk.getNotFoundPage(params);
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

    public getOrganizationList(params: GetOrganizationListQueryVariables) {
        return this.sdk.getOrganizationList(params);
    }

    public getSurvey(params: GetSurveyQueryVariables) {
        return this.sdk.getSurvey(params);
    }

    public getCategories(params: GetCategoriesQueryVariables) {
        return this.sdk.getCategories(params);
    }

    public getArticle(params: GetArticleQueryVariables) {
        return this.sdk.getArticle(params);
    }

    public getArticles(params: GetArticlesQueryVariables) {
        return this.sdk.getArticles(params);
    }
}
