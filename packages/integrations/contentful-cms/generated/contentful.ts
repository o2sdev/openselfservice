/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLError, print } from 'graphql';
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';

export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateTime: { input: any; output: any };
    Dimension: { input: any; output: any };
    HexColor: { input: any; output: any };
    Quality: { input: any; output: any };
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/appConfig) */
export type AppConfig = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<AppConfigLinkingCollections>;
        name?: Maybe<Scalars['String']['output']>;
        signedInFooter?: Maybe<Footer>;
        signedInHeader?: Maybe<Header>;
        signedOutFooter?: Maybe<Footer>;
        signedOutHeader?: Maybe<Header>;
        sys: Sys;
        themesCollection?: Maybe<AppConfigThemesCollection>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/appConfig) */
export type AppConfigLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/appConfig) */
export type AppConfigNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/appConfig) */
export type AppConfigSignedInFooterArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<FooterFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/appConfig) */
export type AppConfigSignedInHeaderArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<HeaderFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/appConfig) */
export type AppConfigSignedOutFooterArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<FooterFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/appConfig) */
export type AppConfigSignedOutHeaderArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<HeaderFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/appConfig) */
export type AppConfigThemesCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<AppConfigThemesCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ThemeFilter>;
};

export type AppConfigCollection = {
    items: Array<Maybe<AppConfig>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type AppConfigFilter = {
    AND?: InputMaybe<Array<InputMaybe<AppConfigFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<AppConfigFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    signedInFooter?: InputMaybe<CfFooterNestedFilter>;
    signedInFooter_exists?: InputMaybe<Scalars['Boolean']['input']>;
    signedInHeader?: InputMaybe<CfHeaderNestedFilter>;
    signedInHeader_exists?: InputMaybe<Scalars['Boolean']['input']>;
    signedOutFooter?: InputMaybe<CfFooterNestedFilter>;
    signedOutFooter_exists?: InputMaybe<Scalars['Boolean']['input']>;
    signedOutHeader?: InputMaybe<CfHeaderNestedFilter>;
    signedOutHeader_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    themes?: InputMaybe<CfThemeNestedFilter>;
    themesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AppConfigLinkingCollections = {
    entryCollection?: Maybe<EntryCollection>;
};

export type AppConfigLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AppConfigOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type AppConfigThemesCollection = {
    items: Array<Maybe<Theme>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum AppConfigThemesCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/article) */
export type Article = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        content?: Maybe<ComponentArticle>;
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<ArticleLinkingCollections>;
        parent?: Maybe<Page>;
        seo?: Maybe<PageSeo>;
        slug?: Maybe<Scalars['String']['output']>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/article) */
export type ArticleContentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentArticleFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/article) */
export type ArticleLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/article) */
export type ArticleParentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/article) */
export type ArticleSeoArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageSeoFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/article) */
export type ArticleSlugArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleCollection = {
    items: Array<Maybe<Article>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ArticleFilter = {
    AND?: InputMaybe<Array<InputMaybe<ArticleFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ArticleFilter>>>;
    content?: InputMaybe<CfComponentArticleNestedFilter>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    parent?: InputMaybe<CfPageNestedFilter>;
    parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
    seo?: InputMaybe<CfPageSeoNestedFilter>;
    seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type ArticleLinkingCollections = {
    blockArticleListCollection?: Maybe<BlockArticleListCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ArticleLinkingCollectionsBlockArticleListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ArticleLinkingCollectionsBlockArticleListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ArticleLinkingCollectionsBlockArticleListCollectionOrder {
    ArticlesToShowAsc = 'articlesToShow_ASC',
    ArticlesToShowDesc = 'articlesToShow_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ArticleOrder {
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
    contentType?: Maybe<Scalars['String']['output']>;
    contentfulMetadata: ContentfulMetadata;
    description?: Maybe<Scalars['String']['output']>;
    fileName?: Maybe<Scalars['String']['output']>;
    height?: Maybe<Scalars['Int']['output']>;
    linkedFrom?: Maybe<AssetLinkingCollections>;
    size?: Maybe<Scalars['Int']['output']>;
    sys: Sys;
    title?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Int']['output']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
    items: Array<Maybe<Asset>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type AssetFilter = {
    AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
    contentType?: InputMaybe<Scalars['String']['input']>;
    contentType_contains?: InputMaybe<Scalars['String']['input']>;
    contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentType_not?: InputMaybe<Scalars['String']['input']>;
    contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
    contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    fileName?: InputMaybe<Scalars['String']['input']>;
    fileName_contains?: InputMaybe<Scalars['String']['input']>;
    fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
    fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    fileName_not?: InputMaybe<Scalars['String']['input']>;
    fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
    fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    height?: InputMaybe<Scalars['Int']['input']>;
    height_exists?: InputMaybe<Scalars['Boolean']['input']>;
    height_gt?: InputMaybe<Scalars['Int']['input']>;
    height_gte?: InputMaybe<Scalars['Int']['input']>;
    height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    height_lt?: InputMaybe<Scalars['Int']['input']>;
    height_lte?: InputMaybe<Scalars['Int']['input']>;
    height_not?: InputMaybe<Scalars['Int']['input']>;
    height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    size?: InputMaybe<Scalars['Int']['input']>;
    size_exists?: InputMaybe<Scalars['Boolean']['input']>;
    size_gt?: InputMaybe<Scalars['Int']['input']>;
    size_gte?: InputMaybe<Scalars['Int']['input']>;
    size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    size_lt?: InputMaybe<Scalars['Int']['input']>;
    size_lte?: InputMaybe<Scalars['Int']['input']>;
    size_not?: InputMaybe<Scalars['Int']['input']>;
    size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url?: InputMaybe<Scalars['String']['input']>;
    url_contains?: InputMaybe<Scalars['String']['input']>;
    url_exists?: InputMaybe<Scalars['Boolean']['input']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url_not?: InputMaybe<Scalars['String']['input']>;
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    width?: InputMaybe<Scalars['Int']['input']>;
    width_exists?: InputMaybe<Scalars['Boolean']['input']>;
    width_gt?: InputMaybe<Scalars['Int']['input']>;
    width_gte?: InputMaybe<Scalars['Int']['input']>;
    width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    width_lt?: InputMaybe<Scalars['Int']['input']>;
    width_lte?: InputMaybe<Scalars['Int']['input']>;
    width_not?: InputMaybe<Scalars['Int']['input']>;
    width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
    authorCollection?: Maybe<AuthorCollection>;
    entryCollection?: Maybe<EntryCollection>;
    footerCollection?: Maybe<FooterCollection>;
    headerCollection?: Maybe<HeaderCollection>;
    pageSeoCollection?: Maybe<PageSeoCollection>;
    themeCollection?: Maybe<ThemeCollection>;
};

export type AssetLinkingCollectionsAuthorCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsFooterCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsHeaderCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsPageSeoCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsThemeCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
    ContentTypeAsc = 'contentType_ASC',
    ContentTypeDesc = 'contentType_DESC',
    FileNameAsc = 'fileName_ASC',
    FileNameDesc = 'fileName_DESC',
    HeightAsc = 'height_ASC',
    HeightDesc = 'height_DESC',
    SizeAsc = 'size_ASC',
    SizeDesc = 'size_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
    WidthAsc = 'width_ASC',
    WidthDesc = 'width_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/author) */
export type Author = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        avatar?: Maybe<Asset>;
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<AuthorLinkingCollections>;
        name?: Maybe<Scalars['String']['output']>;
        position?: Maybe<Scalars['String']['output']>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/author) */
export type AuthorAvatarArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/author) */
export type AuthorLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/author) */
export type AuthorNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/author) */
export type AuthorPositionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorCollection = {
    items: Array<Maybe<Author>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type AuthorFilter = {
    AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
    avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    position?: InputMaybe<Scalars['String']['input']>;
    position_contains?: InputMaybe<Scalars['String']['input']>;
    position_exists?: InputMaybe<Scalars['Boolean']['input']>;
    position_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    position_not?: InputMaybe<Scalars['String']['input']>;
    position_not_contains?: InputMaybe<Scalars['String']['input']>;
    position_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type AuthorLinkingCollections = {
    componentArticleCollection?: Maybe<ComponentArticleCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type AuthorLinkingCollectionsComponentArticleCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<AuthorLinkingCollectionsComponentArticleCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AuthorLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AuthorLinkingCollectionsComponentArticleCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum AuthorOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    PositionAsc = 'position_ASC',
    PositionDesc = 'position_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/block) */
export type Block = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        background?: Maybe<Scalars['String']['output']>;
        content?: Maybe<BlockContent>;
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<BlockLinkingCollections>;
        name?: Maybe<Scalars['String']['output']>;
        spacing?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        theme?: Maybe<Theme>;
        variant?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/block) */
export type BlockBackgroundArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/block) */
export type BlockContentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/block) */
export type BlockLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/block) */
export type BlockNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/block) */
export type BlockSpacingArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/block) */
export type BlockThemeArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ThemeFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/block) */
export type BlockVariantArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockArticleList) */
export type BlockArticleList = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        articlesCollection?: Maybe<BlockArticleListArticlesCollection>;
        articlesToShow?: Maybe<Scalars['Int']['output']>;
        category?: Maybe<ComponentCategory>;
        contentfulMetadata: ContentfulMetadata;
        description?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<BlockArticleListLinkingCollections>;
        parent?: Maybe<Page>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockArticleList) */
export type BlockArticleListArticlesCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockArticleListArticlesCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ArticleFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockArticleList) */
export type BlockArticleListArticlesToShowArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockArticleList) */
export type BlockArticleListCategoryArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentCategoryFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockArticleList) */
export type BlockArticleListDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockArticleList) */
export type BlockArticleListLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockArticleList) */
export type BlockArticleListParentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockArticleList) */
export type BlockArticleListTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlockArticleListArticlesCollection = {
    items: Array<Maybe<Article>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum BlockArticleListArticlesCollectionOrder {
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type BlockArticleListCollection = {
    items: Array<Maybe<BlockArticleList>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type BlockArticleListFilter = {
    AND?: InputMaybe<Array<InputMaybe<BlockArticleListFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<BlockArticleListFilter>>>;
    articles?: InputMaybe<CfArticleNestedFilter>;
    articlesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    articlesToShow?: InputMaybe<Scalars['Int']['input']>;
    articlesToShow_exists?: InputMaybe<Scalars['Boolean']['input']>;
    articlesToShow_gt?: InputMaybe<Scalars['Int']['input']>;
    articlesToShow_gte?: InputMaybe<Scalars['Int']['input']>;
    articlesToShow_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    articlesToShow_lt?: InputMaybe<Scalars['Int']['input']>;
    articlesToShow_lte?: InputMaybe<Scalars['Int']['input']>;
    articlesToShow_not?: InputMaybe<Scalars['Int']['input']>;
    articlesToShow_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    category?: InputMaybe<CfComponentCategoryNestedFilter>;
    category_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    parent?: InputMaybe<CfPageNestedFilter>;
    parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockArticleListLinkingCollections = {
    blockCollection?: Maybe<BlockCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type BlockArticleListLinkingCollectionsBlockCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockArticleListLinkingCollectionsBlockCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockArticleListLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockArticleListLinkingCollectionsBlockCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export enum BlockArticleListOrder {
    ArticlesToShowAsc = 'articlesToShow_ASC',
    ArticlesToShowDesc = 'articlesToShow_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategory) */
export type BlockCategory = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        category?: Maybe<ComponentCategory>;
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<BlockCategoryLinkingCollections>;
        name?: Maybe<Scalars['String']['output']>;
        parent?: Maybe<Page>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategory) */
export type BlockCategoryCategoryArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentCategoryFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategory) */
export type BlockCategoryLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategory) */
export type BlockCategoryNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategory) */
export type BlockCategoryParentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

export type BlockCategoryCollection = {
    items: Array<Maybe<BlockCategory>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type BlockCategoryFilter = {
    AND?: InputMaybe<Array<InputMaybe<BlockCategoryFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<BlockCategoryFilter>>>;
    category?: InputMaybe<CfComponentCategoryNestedFilter>;
    category_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    parent?: InputMaybe<CfPageNestedFilter>;
    parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
};

export type BlockCategoryLinkingCollections = {
    blockCollection?: Maybe<BlockCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type BlockCategoryLinkingCollectionsBlockCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockCategoryLinkingCollectionsBlockCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockCategoryLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockCategoryLinkingCollectionsBlockCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategoryList) */
export type BlockCategoryList = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        categoriesCollection?: Maybe<BlockCategoryListCategoriesCollection>;
        contentfulMetadata: ContentfulMetadata;
        description?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<BlockCategoryListLinkingCollections>;
        parent?: Maybe<Page>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategoryList) */
export type BlockCategoryListCategoriesCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockCategoryListCategoriesCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentCategoryFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategoryList) */
export type BlockCategoryListDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategoryList) */
export type BlockCategoryListLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategoryList) */
export type BlockCategoryListParentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockCategoryList) */
export type BlockCategoryListTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlockCategoryListCategoriesCollection = {
    items: Array<Maybe<ComponentCategory>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum BlockCategoryListCategoriesCollectionOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type BlockCategoryListCollection = {
    items: Array<Maybe<BlockCategoryList>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type BlockCategoryListFilter = {
    AND?: InputMaybe<Array<InputMaybe<BlockCategoryListFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<BlockCategoryListFilter>>>;
    categories?: InputMaybe<CfComponentCategoryNestedFilter>;
    categoriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    parent?: InputMaybe<CfPageNestedFilter>;
    parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockCategoryListLinkingCollections = {
    blockCollection?: Maybe<BlockCollection>;
    componentCategoryCollection?: Maybe<ComponentCategoryCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type BlockCategoryListLinkingCollectionsBlockCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockCategoryListLinkingCollectionsBlockCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockCategoryListLinkingCollectionsComponentCategoryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockCategoryListLinkingCollectionsComponentCategoryCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockCategoryListLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockCategoryListLinkingCollectionsBlockCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export enum BlockCategoryListLinkingCollectionsComponentCategoryCollectionOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum BlockCategoryListOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum BlockCategoryOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type BlockCollection = {
    items: Array<Maybe<Block>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type BlockContent =
    | BlockArticleList
    | BlockCategory
    | BlockCategoryList
    | BlockFaq
    | BlockQuickLinks
    | BlockTicketList;

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockFaq) */
export type BlockFaq = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        banner?: Maybe<ComponentBanner>;
        contentfulMetadata: ContentfulMetadata;
        itemsCollection?: Maybe<BlockFaqItemsCollection>;
        linkedFrom?: Maybe<BlockFaqLinkingCollections>;
        subtitle?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockFaq) */
export type BlockFaqBannerArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentBannerFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockFaq) */
export type BlockFaqItemsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockFaqItemsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentFaqItemFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockFaq) */
export type BlockFaqLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockFaq) */
export type BlockFaqSubtitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockFaq) */
export type BlockFaqTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlockFaqCollection = {
    items: Array<Maybe<BlockFaq>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type BlockFaqFilter = {
    AND?: InputMaybe<Array<InputMaybe<BlockFaqFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<BlockFaqFilter>>>;
    banner?: InputMaybe<CfComponentBannerNestedFilter>;
    banner_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    items?: InputMaybe<CfComponentFaqItemNestedFilter>;
    itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    subtitle?: InputMaybe<Scalars['String']['input']>;
    subtitle_contains?: InputMaybe<Scalars['String']['input']>;
    subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
    subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    subtitle_not?: InputMaybe<Scalars['String']['input']>;
    subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockFaqItemsCollection = {
    items: Array<Maybe<ComponentFaqItem>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum BlockFaqItemsCollectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export type BlockFaqLinkingCollections = {
    blockCollection?: Maybe<BlockCollection>;
    componentCategoryCollection?: Maybe<ComponentCategoryCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type BlockFaqLinkingCollectionsBlockCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockFaqLinkingCollectionsBlockCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockFaqLinkingCollectionsComponentCategoryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockFaqLinkingCollectionsComponentCategoryCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockFaqLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockFaqLinkingCollectionsBlockCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export enum BlockFaqLinkingCollectionsComponentCategoryCollectionOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum BlockFaqOrder {
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export type BlockFilter = {
    AND?: InputMaybe<Array<InputMaybe<BlockFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<BlockFilter>>>;
    background?: InputMaybe<Scalars['String']['input']>;
    background_contains?: InputMaybe<Scalars['String']['input']>;
    background_exists?: InputMaybe<Scalars['Boolean']['input']>;
    background_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    background_not?: InputMaybe<Scalars['String']['input']>;
    background_not_contains?: InputMaybe<Scalars['String']['input']>;
    background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    spacing?: InputMaybe<Scalars['String']['input']>;
    spacing_contains?: InputMaybe<Scalars['String']['input']>;
    spacing_exists?: InputMaybe<Scalars['Boolean']['input']>;
    spacing_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    spacing_not?: InputMaybe<Scalars['String']['input']>;
    spacing_not_contains?: InputMaybe<Scalars['String']['input']>;
    spacing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    theme?: InputMaybe<CfThemeNestedFilter>;
    theme_exists?: InputMaybe<Scalars['Boolean']['input']>;
    variant?: InputMaybe<Scalars['String']['input']>;
    variant_contains?: InputMaybe<Scalars['String']['input']>;
    variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
    variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    variant_not?: InputMaybe<Scalars['String']['input']>;
    variant_not_contains?: InputMaybe<Scalars['String']['input']>;
    variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockLinkingCollections = {
    entryCollection?: Maybe<EntryCollection>;
    pageOneColumnTemplateCollection?: Maybe<PageOneColumnTemplateCollection>;
    pageTwoColumnTemplateCollection?: Maybe<PageTwoColumnTemplateCollection>;
};

export type BlockLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockLinkingCollectionsPageOneColumnTemplateCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockLinkingCollectionsPageOneColumnTemplateCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockLinkingCollectionsPageTwoColumnTemplateCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockLinkingCollectionsPageTwoColumnTemplateCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockLinkingCollectionsPageOneColumnTemplateCollectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum BlockLinkingCollectionsPageTwoColumnTemplateCollectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum BlockOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockQuickLinks) */
export type BlockQuickLinks = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        description?: Maybe<Scalars['String']['output']>;
        itemsCollection?: Maybe<BlockQuickLinksItemsCollection>;
        linkedFrom?: Maybe<BlockQuickLinksLinkingCollections>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockQuickLinks) */
export type BlockQuickLinksDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockQuickLinks) */
export type BlockQuickLinksItemsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockQuickLinksItemsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentLinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockQuickLinks) */
export type BlockQuickLinksLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockQuickLinks) */
export type BlockQuickLinksTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlockQuickLinksCollection = {
    items: Array<Maybe<BlockQuickLinks>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type BlockQuickLinksFilter = {
    AND?: InputMaybe<Array<InputMaybe<BlockQuickLinksFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<BlockQuickLinksFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    items?: InputMaybe<CfComponentLinkNestedFilter>;
    itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockQuickLinksItemsCollection = {
    items: Array<Maybe<ComponentLink>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum BlockQuickLinksItemsCollectionOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

export type BlockQuickLinksLinkingCollections = {
    blockCollection?: Maybe<BlockCollection>;
    componentCategoryCollection?: Maybe<ComponentCategoryCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type BlockQuickLinksLinkingCollectionsBlockCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockQuickLinksLinkingCollectionsBlockCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockQuickLinksLinkingCollectionsComponentCategoryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockQuickLinksLinkingCollectionsComponentCategoryCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockQuickLinksLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockQuickLinksLinkingCollectionsBlockCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export enum BlockQuickLinksLinkingCollectionsComponentCategoryCollectionOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum BlockQuickLinksOrder {
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketList = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        detailsUrl?: Maybe<Scalars['String']['output']>;
        fieldsCollection?: Maybe<BlockTicketListFieldsCollection>;
        labels?: Maybe<DataConfigurableTexts>;
        linkedFrom?: Maybe<BlockTicketListLinkingCollections>;
        noResults?: Maybe<ComponentNoResult>;
        pagination?: Maybe<ComponentPagination>;
        subTitle?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        table?: Maybe<ComponentTable>;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketListDetailsUrlArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketListFieldsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockTicketListFieldsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentFieldMappingFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketListLabelsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<DataConfigurableTextsFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketListLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketListNoResultsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentNoResultFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketListPaginationArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentPaginationFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketListSubTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketListTableArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentTableFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/blockTicketList) */
export type BlockTicketListTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlockTicketListCollection = {
    items: Array<Maybe<BlockTicketList>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type BlockTicketListFieldsCollection = {
    items: Array<Maybe<ComponentFieldMapping>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum BlockTicketListFieldsCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type BlockTicketListFilter = {
    AND?: InputMaybe<Array<InputMaybe<BlockTicketListFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<BlockTicketListFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    detailsUrl?: InputMaybe<Scalars['String']['input']>;
    detailsUrl_contains?: InputMaybe<Scalars['String']['input']>;
    detailsUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
    detailsUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    detailsUrl_not?: InputMaybe<Scalars['String']['input']>;
    detailsUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
    detailsUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    fields?: InputMaybe<CfComponentFieldMappingNestedFilter>;
    fieldsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    labels?: InputMaybe<CfDataConfigurableTextsNestedFilter>;
    labels_exists?: InputMaybe<Scalars['Boolean']['input']>;
    noResults?: InputMaybe<CfComponentNoResultNestedFilter>;
    noResults_exists?: InputMaybe<Scalars['Boolean']['input']>;
    pagination?: InputMaybe<CfComponentPaginationNestedFilter>;
    pagination_exists?: InputMaybe<Scalars['Boolean']['input']>;
    subTitle?: InputMaybe<Scalars['String']['input']>;
    subTitle_contains?: InputMaybe<Scalars['String']['input']>;
    subTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
    subTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    subTitle_not?: InputMaybe<Scalars['String']['input']>;
    subTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    subTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    table?: InputMaybe<CfComponentTableNestedFilter>;
    table_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockTicketListLinkingCollections = {
    blockCollection?: Maybe<BlockCollection>;
    componentCategoryCollection?: Maybe<ComponentCategoryCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type BlockTicketListLinkingCollectionsBlockCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockTicketListLinkingCollectionsBlockCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockTicketListLinkingCollectionsComponentCategoryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockTicketListLinkingCollectionsComponentCategoryCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockTicketListLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockTicketListLinkingCollectionsBlockCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export enum BlockTicketListLinkingCollectionsComponentCategoryCollectionOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum BlockTicketListOrder {
    DetailsUrlAsc = 'detailsUrl_ASC',
    DetailsUrlDesc = 'detailsUrl_DESC',
    SubTitleAsc = 'subTitle_ASC',
    SubTitleDesc = 'subTitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticle) */
export type ComponentArticle = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        author?: Maybe<Author>;
        category?: Maybe<ComponentCategory>;
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<ComponentArticleLinkingCollections>;
        name?: Maybe<Scalars['String']['output']>;
        sectionsCollection?: Maybe<ComponentArticleSectionsCollection>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticle) */
export type ComponentArticleAuthorArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<AuthorFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticle) */
export type ComponentArticleCategoryArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentCategoryFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticle) */
export type ComponentArticleLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticle) */
export type ComponentArticleNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticle) */
export type ComponentArticleSectionsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentArticleSectionsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentArticleSectionFilter>;
};

export type ComponentArticleCollection = {
    items: Array<Maybe<ComponentArticle>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentArticleFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentArticleFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentArticleFilter>>>;
    author?: InputMaybe<CfAuthorNestedFilter>;
    author_exists?: InputMaybe<Scalars['Boolean']['input']>;
    category?: InputMaybe<CfComponentCategoryNestedFilter>;
    category_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sections?: InputMaybe<CfComponentArticleSectionNestedFilter>;
    sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
};

export type ComponentArticleLinkingCollections = {
    articleCollection?: Maybe<ArticleCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentArticleLinkingCollectionsArticleCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentArticleLinkingCollectionsArticleCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentArticleLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentArticleLinkingCollectionsArticleCollectionOrder {
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ComponentArticleOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticleSection) */
export type ComponentArticleSection = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        content?: Maybe<Scalars['String']['output']>;
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<ComponentArticleSectionLinkingCollections>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticleSection) */
export type ComponentArticleSectionContentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticleSection) */
export type ComponentArticleSectionLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentArticleSection) */
export type ComponentArticleSectionTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentArticleSectionCollection = {
    items: Array<Maybe<ComponentArticleSection>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentArticleSectionFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentArticleSectionFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentArticleSectionFilter>>>;
    content?: InputMaybe<Scalars['String']['input']>;
    content_contains?: InputMaybe<Scalars['String']['input']>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    content_not?: InputMaybe<Scalars['String']['input']>;
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleSectionLinkingCollections = {
    componentArticleCollection?: Maybe<ComponentArticleCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentArticleSectionLinkingCollectionsComponentArticleCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentArticleSectionLinkingCollectionsComponentArticleCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentArticleSectionLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentArticleSectionLinkingCollectionsComponentArticleCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ComponentArticleSectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export type ComponentArticleSectionsCollection = {
    items: Array<Maybe<ComponentArticleSection>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum ComponentArticleSectionsCollectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentBanner) */
export type ComponentBanner = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        description?: Maybe<Scalars['String']['output']>;
        link?: Maybe<ComponentLink>;
        linkedFrom?: Maybe<ComponentBannerLinkingCollections>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentBanner) */
export type ComponentBannerDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentBanner) */
export type ComponentBannerLinkArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentLinkFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentBanner) */
export type ComponentBannerLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentBanner) */
export type ComponentBannerTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBannerCollection = {
    items: Array<Maybe<ComponentBanner>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentBannerFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentBannerFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentBannerFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    link?: InputMaybe<CfComponentLinkNestedFilter>;
    link_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBannerLinkingCollections = {
    blockFaqCollection?: Maybe<BlockFaqCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentBannerLinkingCollectionsBlockFaqCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentBannerLinkingCollectionsBlockFaqCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentBannerLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentBannerLinkingCollectionsBlockFaqCollectionOrder {
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentBannerOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentCategory) */
export type ComponentCategory = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        componentsCollection?: Maybe<ComponentCategoryComponentsCollection>;
        contentfulMetadata: ContentfulMetadata;
        description?: Maybe<Scalars['String']['output']>;
        icon?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<ComponentCategoryLinkingCollections>;
        name?: Maybe<Scalars['String']['output']>;
        parent?: Maybe<Page>;
        slug?: Maybe<Scalars['String']['output']>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentCategory) */
export type ComponentCategoryComponentsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentCategoryComponentsFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentCategory) */
export type ComponentCategoryDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentCategory) */
export type ComponentCategoryIconArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentCategory) */
export type ComponentCategoryLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentCategory) */
export type ComponentCategoryNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentCategory) */
export type ComponentCategoryParentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentCategory) */
export type ComponentCategorySlugArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCategoryCollection = {
    items: Array<Maybe<ComponentCategory>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentCategoryComponentsCollection = {
    items: Array<Maybe<ComponentCategoryComponentsItem>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentCategoryComponentsFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentCategoryComponentsFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentCategoryComponentsFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCategoryComponentsItem = BlockCategoryList | BlockFaq | BlockQuickLinks | BlockTicketList;

export type ComponentCategoryFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentCategoryFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentCategoryFilter>>>;
    components?: InputMaybe<CfcomponentsMultiTypeNestedFilter>;
    componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    icon?: InputMaybe<Scalars['String']['input']>;
    icon_contains?: InputMaybe<Scalars['String']['input']>;
    icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
    icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    icon_not?: InputMaybe<Scalars['String']['input']>;
    icon_not_contains?: InputMaybe<Scalars['String']['input']>;
    icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    parent?: InputMaybe<CfPageNestedFilter>;
    parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type ComponentCategoryLinkingCollections = {
    blockArticleListCollection?: Maybe<BlockArticleListCollection>;
    blockCategoryCollection?: Maybe<BlockCategoryCollection>;
    blockCategoryListCollection?: Maybe<BlockCategoryListCollection>;
    componentArticleCollection?: Maybe<ComponentArticleCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentCategoryLinkingCollectionsBlockArticleListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentCategoryLinkingCollectionsBlockArticleListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentCategoryLinkingCollectionsBlockCategoryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentCategoryLinkingCollectionsBlockCategoryCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentCategoryLinkingCollectionsBlockCategoryListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentCategoryLinkingCollectionsBlockCategoryListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentCategoryLinkingCollectionsComponentArticleCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentCategoryLinkingCollectionsComponentArticleCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentCategoryLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentCategoryLinkingCollectionsBlockArticleListCollectionOrder {
    ArticlesToShowAsc = 'articlesToShow_ASC',
    ArticlesToShowDesc = 'articlesToShow_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentCategoryLinkingCollectionsBlockCategoryCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ComponentCategoryLinkingCollectionsBlockCategoryListCollectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentCategoryLinkingCollectionsComponentArticleCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ComponentCategoryOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentFaqItem) */
export type ComponentFaqItem = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        content?: Maybe<Scalars['String']['output']>;
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<ComponentFaqItemLinkingCollections>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentFaqItem) */
export type ComponentFaqItemContentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentFaqItem) */
export type ComponentFaqItemLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentFaqItem) */
export type ComponentFaqItemTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFaqItemCollection = {
    items: Array<Maybe<ComponentFaqItem>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentFaqItemFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentFaqItemFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentFaqItemFilter>>>;
    content?: InputMaybe<Scalars['String']['input']>;
    content_contains?: InputMaybe<Scalars['String']['input']>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    content_not?: InputMaybe<Scalars['String']['input']>;
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFaqItemLinkingCollections = {
    blockFaqCollection?: Maybe<BlockFaqCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentFaqItemLinkingCollectionsBlockFaqCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentFaqItemLinkingCollectionsBlockFaqCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentFaqItemLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentFaqItemLinkingCollectionsBlockFaqCollectionOrder {
    SubtitleAsc = 'subtitle_ASC',
    SubtitleDesc = 'subtitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentFaqItemOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentFieldMapping) */
export type ComponentFieldMapping = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<ComponentFieldMappingLinkingCollections>;
        name?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        valuesCollection?: Maybe<ComponentFieldMappingValuesCollection>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentFieldMapping) */
export type ComponentFieldMappingLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentFieldMapping) */
export type ComponentFieldMappingNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentFieldMapping) */
export type ComponentFieldMappingValuesCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentFieldMappingValuesCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentKeyValueFilter>;
};

export type ComponentFieldMappingCollection = {
    items: Array<Maybe<ComponentFieldMapping>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentFieldMappingFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentFieldMappingFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentFieldMappingFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    values?: InputMaybe<CfComponentKeyValueNestedFilter>;
    valuesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentFieldMappingLinkingCollections = {
    blockTicketListCollection?: Maybe<BlockTicketListCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentFieldMappingLinkingCollectionsBlockTicketListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentFieldMappingLinkingCollectionsBlockTicketListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentFieldMappingLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentFieldMappingLinkingCollectionsBlockTicketListCollectionOrder {
    DetailsUrlAsc = 'detailsUrl_ASC',
    DetailsUrlDesc = 'detailsUrl_DESC',
    SubTitleAsc = 'subTitle_ASC',
    SubTitleDesc = 'subTitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentFieldMappingOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ComponentFieldMappingValuesCollection = {
    items: Array<Maybe<ComponentKeyValue>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum ComponentFieldMappingValuesCollectionOrder {
    KeyAsc = 'key_ASC',
    KeyDesc = 'key_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    ValueAsc = 'value_ASC',
    ValueDesc = 'value_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentKeyValue) */
export type ComponentKeyValue = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        key?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<ComponentKeyValueLinkingCollections>;
        sys: Sys;
        value?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentKeyValue) */
export type ComponentKeyValueKeyArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentKeyValue) */
export type ComponentKeyValueLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentKeyValue) */
export type ComponentKeyValueValueArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKeyValueCollection = {
    items: Array<Maybe<ComponentKeyValue>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentKeyValueFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentKeyValueFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentKeyValueFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    key?: InputMaybe<Scalars['String']['input']>;
    key_contains?: InputMaybe<Scalars['String']['input']>;
    key_exists?: InputMaybe<Scalars['Boolean']['input']>;
    key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    key_not?: InputMaybe<Scalars['String']['input']>;
    key_not_contains?: InputMaybe<Scalars['String']['input']>;
    key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    value?: InputMaybe<Scalars['String']['input']>;
    value_contains?: InputMaybe<Scalars['String']['input']>;
    value_exists?: InputMaybe<Scalars['Boolean']['input']>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    value_not?: InputMaybe<Scalars['String']['input']>;
    value_not_contains?: InputMaybe<Scalars['String']['input']>;
    value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentKeyValueLinkingCollections = {
    componentFieldMappingCollection?: Maybe<ComponentFieldMappingCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentKeyValueLinkingCollectionsComponentFieldMappingCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentKeyValueLinkingCollectionsComponentFieldMappingCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentKeyValueLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentKeyValueLinkingCollectionsComponentFieldMappingCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ComponentKeyValueOrder {
    KeyAsc = 'key_ASC',
    KeyDesc = 'key_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    ValueAsc = 'value_ASC',
    ValueDesc = 'value_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentLink) */
export type ComponentLink = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        icon?: Maybe<Scalars['String']['output']>;
        label?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<ComponentLinkLinkingCollections>;
        page?: Maybe<Page>;
        sys: Sys;
        url?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentLink) */
export type ComponentLinkIconArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentLink) */
export type ComponentLinkLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentLink) */
export type ComponentLinkLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentLink) */
export type ComponentLinkPageArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentLink) */
export type ComponentLinkUrlArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLinkCollection = {
    items: Array<Maybe<ComponentLink>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentLinkFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentLinkFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentLinkFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    icon?: InputMaybe<Scalars['String']['input']>;
    icon_contains?: InputMaybe<Scalars['String']['input']>;
    icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
    icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    icon_not?: InputMaybe<Scalars['String']['input']>;
    icon_not_contains?: InputMaybe<Scalars['String']['input']>;
    icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    label?: InputMaybe<Scalars['String']['input']>;
    label_contains?: InputMaybe<Scalars['String']['input']>;
    label_exists?: InputMaybe<Scalars['Boolean']['input']>;
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    label_not?: InputMaybe<Scalars['String']['input']>;
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    page?: InputMaybe<CfPageNestedFilter>;
    page_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    url?: InputMaybe<Scalars['String']['input']>;
    url_contains?: InputMaybe<Scalars['String']['input']>;
    url_exists?: InputMaybe<Scalars['Boolean']['input']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url_not?: InputMaybe<Scalars['String']['input']>;
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLinkLinkingCollections = {
    blockQuickLinksCollection?: Maybe<BlockQuickLinksCollection>;
    componentBannerCollection?: Maybe<ComponentBannerCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentLinkLinkingCollectionsBlockQuickLinksCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentLinkLinkingCollectionsBlockQuickLinksCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentLinkLinkingCollectionsComponentBannerCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentLinkLinkingCollectionsComponentBannerCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentLinkLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentLinkLinkingCollectionsBlockQuickLinksCollectionOrder {
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentLinkLinkingCollectionsComponentBannerCollectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentLinkOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentMessageSimple) */
export type ComponentMessageSimple = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        content?: Maybe<Scalars['String']['output']>;
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<ComponentMessageSimpleLinkingCollections>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentMessageSimple) */
export type ComponentMessageSimpleContentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentMessageSimple) */
export type ComponentMessageSimpleLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentMessageSimple) */
export type ComponentMessageSimpleTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMessageSimpleCollection = {
    items: Array<Maybe<ComponentMessageSimple>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentMessageSimpleFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentMessageSimpleFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentMessageSimpleFilter>>>;
    content?: InputMaybe<Scalars['String']['input']>;
    content_contains?: InputMaybe<Scalars['String']['input']>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    content_not?: InputMaybe<Scalars['String']['input']>;
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMessageSimpleLinkingCollections = {
    dataErrorsCollection?: Maybe<DataErrorsCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentMessageSimpleLinkingCollectionsDataErrorsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentMessageSimpleLinkingCollectionsDataErrorsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentMessageSimpleLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentMessageSimpleLinkingCollectionsDataErrorsCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ComponentMessageSimpleOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationGroup) */
export type ComponentNavigationGroup = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        itemsCollection?: Maybe<ComponentNavigationGroupItemsCollection>;
        linkedFrom?: Maybe<ComponentNavigationGroupLinkingCollections>;
        page?: Maybe<Page>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
        url?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationGroup) */
export type ComponentNavigationGroupItemsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupItemsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentNavigationItemFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationGroup) */
export type ComponentNavigationGroupLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationGroup) */
export type ComponentNavigationGroupPageArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationGroup) */
export type ComponentNavigationGroupTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationGroup) */
export type ComponentNavigationGroupUrlArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentNavigationGroupCollection = {
    items: Array<Maybe<ComponentNavigationGroup>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentNavigationGroupFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    items?: InputMaybe<CfComponentNavigationItemNestedFilter>;
    itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<CfPageNestedFilter>;
    page_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url?: InputMaybe<Scalars['String']['input']>;
    url_contains?: InputMaybe<Scalars['String']['input']>;
    url_exists?: InputMaybe<Scalars['Boolean']['input']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url_not?: InputMaybe<Scalars['String']['input']>;
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentNavigationGroupItemsCollection = {
    items: Array<Maybe<ComponentNavigationItem>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum ComponentNavigationGroupItemsCollectionOrder {
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

export type ComponentNavigationGroupLinkingCollections = {
    entryCollection?: Maybe<EntryCollection>;
    footerCollection?: Maybe<FooterCollection>;
    headerCollection?: Maybe<HeaderCollection>;
};

export type ComponentNavigationGroupLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentNavigationGroupLinkingCollectionsFooterCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupLinkingCollectionsFooterCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentNavigationGroupLinkingCollectionsHeaderCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupLinkingCollectionsHeaderCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentNavigationGroupLinkingCollectionsFooterCollectionOrder {
    CopyrightAsc = 'copyright_ASC',
    CopyrightDesc = 'copyright_DESC',
    LogoLabelAsc = 'logoLabel_ASC',
    LogoLabelDesc = 'logoLabel_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentNavigationGroupLinkingCollectionsHeaderCollectionOrder {
    CloseMobileMenuLabelAsc = 'closeMobileMenuLabel_ASC',
    CloseMobileMenuLabelDesc = 'closeMobileMenuLabel_DESC',
    LanguageSwitcherLabelAsc = 'languageSwitcherLabel_ASC',
    LanguageSwitcherLabelDesc = 'languageSwitcherLabel_DESC',
    LogoLabelAsc = 'logoLabel_ASC',
    LogoLabelDesc = 'logoLabel_DESC',
    OpenMobileMenuLabelAsc = 'openMobileMenuLabel_ASC',
    OpenMobileMenuLabelDesc = 'openMobileMenuLabel_DESC',
    ShowContextSwitcherAsc = 'showContextSwitcher_ASC',
    ShowContextSwitcherDesc = 'showContextSwitcher_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentNavigationGroupOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationItem) */
export type ComponentNavigationItem = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        description?: Maybe<Scalars['String']['output']>;
        label?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<ComponentNavigationItemLinkingCollections>;
        page?: Maybe<Page>;
        sys: Sys;
        url?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationItem) */
export type ComponentNavigationItemDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationItem) */
export type ComponentNavigationItemLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationItem) */
export type ComponentNavigationItemLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationItem) */
export type ComponentNavigationItemPageArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNavigationItem) */
export type ComponentNavigationItemUrlArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentNavigationItemCollection = {
    items: Array<Maybe<ComponentNavigationItem>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentNavigationItemFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentNavigationItemFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentNavigationItemFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    label?: InputMaybe<Scalars['String']['input']>;
    label_contains?: InputMaybe<Scalars['String']['input']>;
    label_exists?: InputMaybe<Scalars['Boolean']['input']>;
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    label_not?: InputMaybe<Scalars['String']['input']>;
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    page?: InputMaybe<CfPageNestedFilter>;
    page_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    url?: InputMaybe<Scalars['String']['input']>;
    url_contains?: InputMaybe<Scalars['String']['input']>;
    url_exists?: InputMaybe<Scalars['Boolean']['input']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url_not?: InputMaybe<Scalars['String']['input']>;
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentNavigationItemLinkingCollections = {
    componentNavigationGroupCollection?: Maybe<ComponentNavigationGroupCollection>;
    entryCollection?: Maybe<EntryCollection>;
    footerCollection?: Maybe<FooterCollection>;
    headerCollection?: Maybe<HeaderCollection>;
};

export type ComponentNavigationItemLinkingCollectionsComponentNavigationGroupCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<
        Array<InputMaybe<ComponentNavigationItemLinkingCollectionsComponentNavigationGroupCollectionOrder>>
    >;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentNavigationItemLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentNavigationItemLinkingCollectionsFooterCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentNavigationItemLinkingCollectionsFooterCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentNavigationItemLinkingCollectionsHeaderCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentNavigationItemLinkingCollectionsHeaderCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentNavigationItemLinkingCollectionsComponentNavigationGroupCollectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

export enum ComponentNavigationItemLinkingCollectionsFooterCollectionOrder {
    CopyrightAsc = 'copyright_ASC',
    CopyrightDesc = 'copyright_DESC',
    LogoLabelAsc = 'logoLabel_ASC',
    LogoLabelDesc = 'logoLabel_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentNavigationItemLinkingCollectionsHeaderCollectionOrder {
    CloseMobileMenuLabelAsc = 'closeMobileMenuLabel_ASC',
    CloseMobileMenuLabelDesc = 'closeMobileMenuLabel_DESC',
    LanguageSwitcherLabelAsc = 'languageSwitcherLabel_ASC',
    LanguageSwitcherLabelDesc = 'languageSwitcherLabel_DESC',
    LogoLabelAsc = 'logoLabel_ASC',
    LogoLabelDesc = 'logoLabel_DESC',
    OpenMobileMenuLabelAsc = 'openMobileMenuLabel_ASC',
    OpenMobileMenuLabelDesc = 'openMobileMenuLabel_DESC',
    ShowContextSwitcherAsc = 'showContextSwitcher_ASC',
    ShowContextSwitcherDesc = 'showContextSwitcher_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentNavigationItemOrder {
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNoResult) */
export type ComponentNoResult = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        description?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<ComponentNoResultLinkingCollections>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNoResult) */
export type ComponentNoResultDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNoResult) */
export type ComponentNoResultLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentNoResult) */
export type ComponentNoResultTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentNoResultCollection = {
    items: Array<Maybe<ComponentNoResult>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentNoResultFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentNoResultFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentNoResultFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentNoResultLinkingCollections = {
    blockTicketListCollection?: Maybe<BlockTicketListCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentNoResultLinkingCollectionsBlockTicketListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentNoResultLinkingCollectionsBlockTicketListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentNoResultLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentNoResultLinkingCollectionsBlockTicketListCollectionOrder {
    DetailsUrlAsc = 'detailsUrl_ASC',
    DetailsUrlDesc = 'detailsUrl_DESC',
    SubTitleAsc = 'subTitle_ASC',
    SubTitleDesc = 'subTitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentNoResultOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentPagination) */
export type ComponentPagination = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        description?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<ComponentPaginationLinkingCollections>;
        nextLabel?: Maybe<Scalars['String']['output']>;
        perPage?: Maybe<Scalars['Int']['output']>;
        previousLabel?: Maybe<Scalars['String']['output']>;
        selectPageLabel?: Maybe<Scalars['String']['output']>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentPagination) */
export type ComponentPaginationDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentPagination) */
export type ComponentPaginationLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentPagination) */
export type ComponentPaginationNextLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentPagination) */
export type ComponentPaginationPerPageArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentPagination) */
export type ComponentPaginationPreviousLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentPagination) */
export type ComponentPaginationSelectPageLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPaginationCollection = {
    items: Array<Maybe<ComponentPagination>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentPaginationFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentPaginationFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentPaginationFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    nextLabel?: InputMaybe<Scalars['String']['input']>;
    nextLabel_contains?: InputMaybe<Scalars['String']['input']>;
    nextLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    nextLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    nextLabel_not?: InputMaybe<Scalars['String']['input']>;
    nextLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    nextLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
    perPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
    perPage_gt?: InputMaybe<Scalars['Int']['input']>;
    perPage_gte?: InputMaybe<Scalars['Int']['input']>;
    perPage_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    perPage_lt?: InputMaybe<Scalars['Int']['input']>;
    perPage_lte?: InputMaybe<Scalars['Int']['input']>;
    perPage_not?: InputMaybe<Scalars['Int']['input']>;
    perPage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    previousLabel?: InputMaybe<Scalars['String']['input']>;
    previousLabel_contains?: InputMaybe<Scalars['String']['input']>;
    previousLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    previousLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    previousLabel_not?: InputMaybe<Scalars['String']['input']>;
    previousLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    previousLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    selectPageLabel?: InputMaybe<Scalars['String']['input']>;
    selectPageLabel_contains?: InputMaybe<Scalars['String']['input']>;
    selectPageLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    selectPageLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    selectPageLabel_not?: InputMaybe<Scalars['String']['input']>;
    selectPageLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    selectPageLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type ComponentPaginationLinkingCollections = {
    blockTicketListCollection?: Maybe<BlockTicketListCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentPaginationLinkingCollectionsBlockTicketListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentPaginationLinkingCollectionsBlockTicketListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentPaginationLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentPaginationLinkingCollectionsBlockTicketListCollectionOrder {
    DetailsUrlAsc = 'detailsUrl_ASC',
    DetailsUrlDesc = 'detailsUrl_DESC',
    SubTitleAsc = 'subTitle_ASC',
    SubTitleDesc = 'subTitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentPaginationOrder {
    DescriptionAsc = 'description_ASC',
    DescriptionDesc = 'description_DESC',
    NextLabelAsc = 'nextLabel_ASC',
    NextLabelDesc = 'nextLabel_DESC',
    PerPageAsc = 'perPage_ASC',
    PerPageDesc = 'perPage_DESC',
    PreviousLabelAsc = 'previousLabel_ASC',
    PreviousLabelDesc = 'previousLabel_DESC',
    SelectPageLabelAsc = 'selectPageLabel_ASC',
    SelectPageLabelDesc = 'selectPageLabel_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentRoles) */
export type ComponentRoles = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<ComponentRolesLinkingCollections>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentRoles) */
export type ComponentRolesLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentRolesCollection = {
    items: Array<Maybe<ComponentRoles>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentRolesFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentRolesFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentRolesFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
};

export type ComponentRolesLinkingCollections = {
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentRolesLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentRolesOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentTable) */
export type ComponentTable = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        actionsLabel?: Maybe<Scalars['String']['output']>;
        actionsTitle?: Maybe<Scalars['String']['output']>;
        columnsCollection?: Maybe<ComponentTableColumnsCollection>;
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<ComponentTableLinkingCollections>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentTable) */
export type ComponentTableActionsLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentTable) */
export type ComponentTableActionsTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentTable) */
export type ComponentTableColumnsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentTableColumnsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentTableColumnFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentTable) */
export type ComponentTableLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTableCollection = {
    items: Array<Maybe<ComponentTable>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentTableColumn) */
export type ComponentTableColumn = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        field?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<ComponentTableColumnLinkingCollections>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentTableColumn) */
export type ComponentTableColumnFieldArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentTableColumn) */
export type ComponentTableColumnLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/componentTableColumn) */
export type ComponentTableColumnTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentTableColumnCollection = {
    items: Array<Maybe<ComponentTableColumn>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ComponentTableColumnFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentTableColumnFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentTableColumnFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    field?: InputMaybe<Scalars['String']['input']>;
    field_contains?: InputMaybe<Scalars['String']['input']>;
    field_exists?: InputMaybe<Scalars['Boolean']['input']>;
    field_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    field_not?: InputMaybe<Scalars['String']['input']>;
    field_not_contains?: InputMaybe<Scalars['String']['input']>;
    field_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentTableColumnLinkingCollections = {
    componentTableCollection?: Maybe<ComponentTableCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentTableColumnLinkingCollectionsComponentTableCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentTableColumnLinkingCollectionsComponentTableCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentTableColumnLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentTableColumnLinkingCollectionsComponentTableCollectionOrder {
    ActionsLabelAsc = 'actionsLabel_ASC',
    ActionsLabelDesc = 'actionsLabel_DESC',
    ActionsTitleAsc = 'actionsTitle_ASC',
    ActionsTitleDesc = 'actionsTitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ComponentTableColumnOrder {
    FieldAsc = 'field_ASC',
    FieldDesc = 'field_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export type ComponentTableColumnsCollection = {
    items: Array<Maybe<ComponentTableColumn>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum ComponentTableColumnsCollectionOrder {
    FieldAsc = 'field_ASC',
    FieldDesc = 'field_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export type ComponentTableFilter = {
    AND?: InputMaybe<Array<InputMaybe<ComponentTableFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ComponentTableFilter>>>;
    actionsLabel?: InputMaybe<Scalars['String']['input']>;
    actionsLabel_contains?: InputMaybe<Scalars['String']['input']>;
    actionsLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    actionsLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    actionsLabel_not?: InputMaybe<Scalars['String']['input']>;
    actionsLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    actionsLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    actionsTitle?: InputMaybe<Scalars['String']['input']>;
    actionsTitle_contains?: InputMaybe<Scalars['String']['input']>;
    actionsTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
    actionsTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    actionsTitle_not?: InputMaybe<Scalars['String']['input']>;
    actionsTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    actionsTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    columns?: InputMaybe<CfComponentTableColumnNestedFilter>;
    columnsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
};

export type ComponentTableLinkingCollections = {
    blockTicketListCollection?: Maybe<BlockTicketListCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ComponentTableLinkingCollectionsBlockTicketListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentTableLinkingCollectionsBlockTicketListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentTableLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentTableLinkingCollectionsBlockTicketListCollectionOrder {
    DetailsUrlAsc = 'detailsUrl_ASC',
    DetailsUrlDesc = 'detailsUrl_DESC',
    SubTitleAsc = 'subTitle_ASC',
    SubTitleDesc = 'subTitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ComponentTableOrder {
    ActionsLabelAsc = 'actionsLabel_ASC',
    ActionsLabelDesc = 'actionsLabel_DESC',
    ActionsTitleAsc = 'actionsTitle_ASC',
    ActionsTitleDesc = 'actionsTitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/configurableTexts) */
export type ConfigurableTexts = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        actions?: Maybe<DataActions>;
        contentfulMetadata: ContentfulMetadata;
        dates?: Maybe<DataDates>;
        errors?: Maybe<DataErrors>;
        linkedFrom?: Maybe<ConfigurableTextsLinkingCollections>;
        name?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        validation?: Maybe<DataValidation>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/configurableTexts) */
export type ConfigurableTextsActionsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<DataActionsFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/configurableTexts) */
export type ConfigurableTextsDatesArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<DataDatesFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/configurableTexts) */
export type ConfigurableTextsErrorsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<DataErrorsFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/configurableTexts) */
export type ConfigurableTextsLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/configurableTexts) */
export type ConfigurableTextsNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/configurableTexts) */
export type ConfigurableTextsValidationArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<DataValidationFilter>;
};

export type ConfigurableTextsCollection = {
    items: Array<Maybe<ConfigurableTexts>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ConfigurableTextsFilter = {
    AND?: InputMaybe<Array<InputMaybe<ConfigurableTextsFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ConfigurableTextsFilter>>>;
    actions?: InputMaybe<CfDataActionsNestedFilter>;
    actions_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    dates?: InputMaybe<CfDataDatesNestedFilter>;
    dates_exists?: InputMaybe<Scalars['Boolean']['input']>;
    errors?: InputMaybe<CfDataErrorsNestedFilter>;
    errors_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    validation?: InputMaybe<CfDataValidationNestedFilter>;
    validation_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConfigurableTextsLinkingCollections = {
    entryCollection?: Maybe<EntryCollection>;
};

export type ConfigurableTextsLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ConfigurableTextsOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentfulMetadata = {
    concepts: Array<Maybe<TaxonomyConcept>>;
    tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
    id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
    descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
    id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
    concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
    concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
    tags?: InputMaybe<ContentfulMetadataTagsFilter>;
    tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
    id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
    id?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActions = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        apply?: Maybe<Scalars['String']['output']>;
        cancel?: Maybe<Scalars['String']['output']>;
        clear?: Maybe<Scalars['String']['output']>;
        clickToSelect?: Maybe<Scalars['String']['output']>;
        close?: Maybe<Scalars['String']['output']>;
        contentfulMetadata: ContentfulMetadata;
        delete?: Maybe<Scalars['String']['output']>;
        details?: Maybe<Scalars['String']['output']>;
        edit?: Maybe<Scalars['String']['output']>;
        hide?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<DataActionsLinkingCollections>;
        logIn?: Maybe<Scalars['String']['output']>;
        logOut?: Maybe<Scalars['String']['output']>;
        off?: Maybe<Scalars['String']['output']>;
        on?: Maybe<Scalars['String']['output']>;
        payOnline?: Maybe<Scalars['String']['output']>;
        renew?: Maybe<Scalars['String']['output']>;
        reorder?: Maybe<Scalars['String']['output']>;
        save?: Maybe<Scalars['String']['output']>;
        seeAllArticles?: Maybe<Scalars['String']['output']>;
        settings?: Maybe<Scalars['String']['output']>;
        show?: Maybe<Scalars['String']['output']>;
        showAllArticles?: Maybe<Scalars['String']['output']>;
        showLess?: Maybe<Scalars['String']['output']>;
        showMore?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        trackOrder?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsApplyArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsCancelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsClearArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsClickToSelectArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsCloseArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsDeleteArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsDetailsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsEditArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsHideArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsLogInArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsLogOutArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsOffArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsOnArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsPayOnlineArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsRenewArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsReorderArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsSaveArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsSeeAllArticlesArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsSettingsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsShowArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsShowAllArticlesArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsShowLessArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsShowMoreArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataActions) */
export type DataActionsTrackOrderArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type DataActionsCollection = {
    items: Array<Maybe<DataActions>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type DataActionsFilter = {
    AND?: InputMaybe<Array<InputMaybe<DataActionsFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<DataActionsFilter>>>;
    apply?: InputMaybe<Scalars['String']['input']>;
    apply_contains?: InputMaybe<Scalars['String']['input']>;
    apply_exists?: InputMaybe<Scalars['Boolean']['input']>;
    apply_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    apply_not?: InputMaybe<Scalars['String']['input']>;
    apply_not_contains?: InputMaybe<Scalars['String']['input']>;
    apply_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    cancel?: InputMaybe<Scalars['String']['input']>;
    cancel_contains?: InputMaybe<Scalars['String']['input']>;
    cancel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    cancel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    cancel_not?: InputMaybe<Scalars['String']['input']>;
    cancel_not_contains?: InputMaybe<Scalars['String']['input']>;
    cancel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clear?: InputMaybe<Scalars['String']['input']>;
    clear_contains?: InputMaybe<Scalars['String']['input']>;
    clear_exists?: InputMaybe<Scalars['Boolean']['input']>;
    clear_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clear_not?: InputMaybe<Scalars['String']['input']>;
    clear_not_contains?: InputMaybe<Scalars['String']['input']>;
    clear_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clickToSelect?: InputMaybe<Scalars['String']['input']>;
    clickToSelect_contains?: InputMaybe<Scalars['String']['input']>;
    clickToSelect_exists?: InputMaybe<Scalars['Boolean']['input']>;
    clickToSelect_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clickToSelect_not?: InputMaybe<Scalars['String']['input']>;
    clickToSelect_not_contains?: InputMaybe<Scalars['String']['input']>;
    clickToSelect_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    close?: InputMaybe<Scalars['String']['input']>;
    close_contains?: InputMaybe<Scalars['String']['input']>;
    close_exists?: InputMaybe<Scalars['Boolean']['input']>;
    close_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    close_not?: InputMaybe<Scalars['String']['input']>;
    close_not_contains?: InputMaybe<Scalars['String']['input']>;
    close_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    delete?: InputMaybe<Scalars['String']['input']>;
    delete_contains?: InputMaybe<Scalars['String']['input']>;
    delete_exists?: InputMaybe<Scalars['Boolean']['input']>;
    delete_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    delete_not?: InputMaybe<Scalars['String']['input']>;
    delete_not_contains?: InputMaybe<Scalars['String']['input']>;
    delete_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    details?: InputMaybe<Scalars['String']['input']>;
    details_contains?: InputMaybe<Scalars['String']['input']>;
    details_exists?: InputMaybe<Scalars['Boolean']['input']>;
    details_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    details_not?: InputMaybe<Scalars['String']['input']>;
    details_not_contains?: InputMaybe<Scalars['String']['input']>;
    details_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    edit?: InputMaybe<Scalars['String']['input']>;
    edit_contains?: InputMaybe<Scalars['String']['input']>;
    edit_exists?: InputMaybe<Scalars['Boolean']['input']>;
    edit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    edit_not?: InputMaybe<Scalars['String']['input']>;
    edit_not_contains?: InputMaybe<Scalars['String']['input']>;
    edit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    hide?: InputMaybe<Scalars['String']['input']>;
    hide_contains?: InputMaybe<Scalars['String']['input']>;
    hide_exists?: InputMaybe<Scalars['Boolean']['input']>;
    hide_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    hide_not?: InputMaybe<Scalars['String']['input']>;
    hide_not_contains?: InputMaybe<Scalars['String']['input']>;
    hide_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logIn?: InputMaybe<Scalars['String']['input']>;
    logIn_contains?: InputMaybe<Scalars['String']['input']>;
    logIn_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logIn_not?: InputMaybe<Scalars['String']['input']>;
    logIn_not_contains?: InputMaybe<Scalars['String']['input']>;
    logIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logOut?: InputMaybe<Scalars['String']['input']>;
    logOut_contains?: InputMaybe<Scalars['String']['input']>;
    logOut_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logOut_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logOut_not?: InputMaybe<Scalars['String']['input']>;
    logOut_not_contains?: InputMaybe<Scalars['String']['input']>;
    logOut_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    off?: InputMaybe<Scalars['String']['input']>;
    off_contains?: InputMaybe<Scalars['String']['input']>;
    off_exists?: InputMaybe<Scalars['Boolean']['input']>;
    off_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    off_not?: InputMaybe<Scalars['String']['input']>;
    off_not_contains?: InputMaybe<Scalars['String']['input']>;
    off_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    on?: InputMaybe<Scalars['String']['input']>;
    on_contains?: InputMaybe<Scalars['String']['input']>;
    on_exists?: InputMaybe<Scalars['Boolean']['input']>;
    on_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    on_not?: InputMaybe<Scalars['String']['input']>;
    on_not_contains?: InputMaybe<Scalars['String']['input']>;
    on_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    payOnline?: InputMaybe<Scalars['String']['input']>;
    payOnline_contains?: InputMaybe<Scalars['String']['input']>;
    payOnline_exists?: InputMaybe<Scalars['Boolean']['input']>;
    payOnline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    payOnline_not?: InputMaybe<Scalars['String']['input']>;
    payOnline_not_contains?: InputMaybe<Scalars['String']['input']>;
    payOnline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    renew?: InputMaybe<Scalars['String']['input']>;
    renew_contains?: InputMaybe<Scalars['String']['input']>;
    renew_exists?: InputMaybe<Scalars['Boolean']['input']>;
    renew_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    renew_not?: InputMaybe<Scalars['String']['input']>;
    renew_not_contains?: InputMaybe<Scalars['String']['input']>;
    renew_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    reorder?: InputMaybe<Scalars['String']['input']>;
    reorder_contains?: InputMaybe<Scalars['String']['input']>;
    reorder_exists?: InputMaybe<Scalars['Boolean']['input']>;
    reorder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    reorder_not?: InputMaybe<Scalars['String']['input']>;
    reorder_not_contains?: InputMaybe<Scalars['String']['input']>;
    reorder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    save?: InputMaybe<Scalars['String']['input']>;
    save_contains?: InputMaybe<Scalars['String']['input']>;
    save_exists?: InputMaybe<Scalars['Boolean']['input']>;
    save_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    save_not?: InputMaybe<Scalars['String']['input']>;
    save_not_contains?: InputMaybe<Scalars['String']['input']>;
    save_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    seeAllArticles?: InputMaybe<Scalars['String']['input']>;
    seeAllArticles_contains?: InputMaybe<Scalars['String']['input']>;
    seeAllArticles_exists?: InputMaybe<Scalars['Boolean']['input']>;
    seeAllArticles_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    seeAllArticles_not?: InputMaybe<Scalars['String']['input']>;
    seeAllArticles_not_contains?: InputMaybe<Scalars['String']['input']>;
    seeAllArticles_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    settings?: InputMaybe<Scalars['String']['input']>;
    settings_contains?: InputMaybe<Scalars['String']['input']>;
    settings_exists?: InputMaybe<Scalars['Boolean']['input']>;
    settings_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    settings_not?: InputMaybe<Scalars['String']['input']>;
    settings_not_contains?: InputMaybe<Scalars['String']['input']>;
    settings_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show?: InputMaybe<Scalars['String']['input']>;
    showAllArticles?: InputMaybe<Scalars['String']['input']>;
    showAllArticles_contains?: InputMaybe<Scalars['String']['input']>;
    showAllArticles_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showAllArticles_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showAllArticles_not?: InputMaybe<Scalars['String']['input']>;
    showAllArticles_not_contains?: InputMaybe<Scalars['String']['input']>;
    showAllArticles_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showLess?: InputMaybe<Scalars['String']['input']>;
    showLess_contains?: InputMaybe<Scalars['String']['input']>;
    showLess_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showLess_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showLess_not?: InputMaybe<Scalars['String']['input']>;
    showLess_not_contains?: InputMaybe<Scalars['String']['input']>;
    showLess_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showMore?: InputMaybe<Scalars['String']['input']>;
    showMore_contains?: InputMaybe<Scalars['String']['input']>;
    showMore_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showMore_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showMore_not?: InputMaybe<Scalars['String']['input']>;
    showMore_not_contains?: InputMaybe<Scalars['String']['input']>;
    showMore_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show_contains?: InputMaybe<Scalars['String']['input']>;
    show_exists?: InputMaybe<Scalars['Boolean']['input']>;
    show_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show_not?: InputMaybe<Scalars['String']['input']>;
    show_not_contains?: InputMaybe<Scalars['String']['input']>;
    show_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    trackOrder?: InputMaybe<Scalars['String']['input']>;
    trackOrder_contains?: InputMaybe<Scalars['String']['input']>;
    trackOrder_exists?: InputMaybe<Scalars['Boolean']['input']>;
    trackOrder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    trackOrder_not?: InputMaybe<Scalars['String']['input']>;
    trackOrder_not_contains?: InputMaybe<Scalars['String']['input']>;
    trackOrder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DataActionsLinkingCollections = {
    configurableTextsCollection?: Maybe<ConfigurableTextsCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type DataActionsLinkingCollectionsConfigurableTextsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataActionsLinkingCollectionsConfigurableTextsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type DataActionsLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DataActionsLinkingCollectionsConfigurableTextsCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum DataActionsOrder {
    ApplyAsc = 'apply_ASC',
    ApplyDesc = 'apply_DESC',
    CancelAsc = 'cancel_ASC',
    CancelDesc = 'cancel_DESC',
    ClearAsc = 'clear_ASC',
    ClearDesc = 'clear_DESC',
    ClickToSelectAsc = 'clickToSelect_ASC',
    ClickToSelectDesc = 'clickToSelect_DESC',
    CloseAsc = 'close_ASC',
    CloseDesc = 'close_DESC',
    DeleteAsc = 'delete_ASC',
    DeleteDesc = 'delete_DESC',
    DetailsAsc = 'details_ASC',
    DetailsDesc = 'details_DESC',
    EditAsc = 'edit_ASC',
    EditDesc = 'edit_DESC',
    HideAsc = 'hide_ASC',
    HideDesc = 'hide_DESC',
    LogInAsc = 'logIn_ASC',
    LogInDesc = 'logIn_DESC',
    LogOutAsc = 'logOut_ASC',
    LogOutDesc = 'logOut_DESC',
    OffAsc = 'off_ASC',
    OffDesc = 'off_DESC',
    OnAsc = 'on_ASC',
    OnDesc = 'on_DESC',
    PayOnlineAsc = 'payOnline_ASC',
    PayOnlineDesc = 'payOnline_DESC',
    RenewAsc = 'renew_ASC',
    RenewDesc = 'renew_DESC',
    ReorderAsc = 'reorder_ASC',
    ReorderDesc = 'reorder_DESC',
    SaveAsc = 'save_ASC',
    SaveDesc = 'save_DESC',
    SeeAllArticlesAsc = 'seeAllArticles_ASC',
    SeeAllArticlesDesc = 'seeAllArticles_DESC',
    SettingsAsc = 'settings_ASC',
    SettingsDesc = 'settings_DESC',
    ShowAllArticlesAsc = 'showAllArticles_ASC',
    ShowAllArticlesDesc = 'showAllArticles_DESC',
    ShowLessAsc = 'showLess_ASC',
    ShowLessDesc = 'showLess_DESC',
    ShowMoreAsc = 'showMore_ASC',
    ShowMoreDesc = 'showMore_DESC',
    ShowAsc = 'show_ASC',
    ShowDesc = 'show_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TrackOrderAsc = 'trackOrder_ASC',
    TrackOrderDesc = 'trackOrder_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTexts = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        apply?: Maybe<Scalars['String']['output']>;
        cancel?: Maybe<Scalars['String']['output']>;
        clear?: Maybe<Scalars['String']['output']>;
        contentfulMetadata: ContentfulMetadata;
        delete?: Maybe<Scalars['String']['output']>;
        edit?: Maybe<Scalars['String']['output']>;
        hide?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<DataConfigurableTextsLinkingCollections>;
        logIn?: Maybe<Scalars['String']['output']>;
        logOut?: Maybe<Scalars['String']['output']>;
        renew?: Maybe<Scalars['String']['output']>;
        save?: Maybe<Scalars['String']['output']>;
        settings?: Maybe<Scalars['String']['output']>;
        show?: Maybe<Scalars['String']['output']>;
        showLess?: Maybe<Scalars['String']['output']>;
        showMore?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        yesterday?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsApplyArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsCancelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsClearArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsDeleteArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsEditArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsHideArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsLogInArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsLogOutArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsRenewArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsSaveArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsSettingsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsShowArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsShowLessArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsShowMoreArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataConfigurableTexts) */
export type DataConfigurableTextsYesterdayArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type DataConfigurableTextsCollection = {
    items: Array<Maybe<DataConfigurableTexts>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type DataConfigurableTextsFilter = {
    AND?: InputMaybe<Array<InputMaybe<DataConfigurableTextsFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<DataConfigurableTextsFilter>>>;
    apply?: InputMaybe<Scalars['String']['input']>;
    apply_contains?: InputMaybe<Scalars['String']['input']>;
    apply_exists?: InputMaybe<Scalars['Boolean']['input']>;
    apply_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    apply_not?: InputMaybe<Scalars['String']['input']>;
    apply_not_contains?: InputMaybe<Scalars['String']['input']>;
    apply_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    cancel?: InputMaybe<Scalars['String']['input']>;
    cancel_contains?: InputMaybe<Scalars['String']['input']>;
    cancel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    cancel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    cancel_not?: InputMaybe<Scalars['String']['input']>;
    cancel_not_contains?: InputMaybe<Scalars['String']['input']>;
    cancel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clear?: InputMaybe<Scalars['String']['input']>;
    clear_contains?: InputMaybe<Scalars['String']['input']>;
    clear_exists?: InputMaybe<Scalars['Boolean']['input']>;
    clear_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clear_not?: InputMaybe<Scalars['String']['input']>;
    clear_not_contains?: InputMaybe<Scalars['String']['input']>;
    clear_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    delete?: InputMaybe<Scalars['String']['input']>;
    delete_contains?: InputMaybe<Scalars['String']['input']>;
    delete_exists?: InputMaybe<Scalars['Boolean']['input']>;
    delete_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    delete_not?: InputMaybe<Scalars['String']['input']>;
    delete_not_contains?: InputMaybe<Scalars['String']['input']>;
    delete_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    edit?: InputMaybe<Scalars['String']['input']>;
    edit_contains?: InputMaybe<Scalars['String']['input']>;
    edit_exists?: InputMaybe<Scalars['Boolean']['input']>;
    edit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    edit_not?: InputMaybe<Scalars['String']['input']>;
    edit_not_contains?: InputMaybe<Scalars['String']['input']>;
    edit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    hide?: InputMaybe<Scalars['String']['input']>;
    hide_contains?: InputMaybe<Scalars['String']['input']>;
    hide_exists?: InputMaybe<Scalars['Boolean']['input']>;
    hide_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    hide_not?: InputMaybe<Scalars['String']['input']>;
    hide_not_contains?: InputMaybe<Scalars['String']['input']>;
    hide_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logIn?: InputMaybe<Scalars['String']['input']>;
    logIn_contains?: InputMaybe<Scalars['String']['input']>;
    logIn_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logIn_not?: InputMaybe<Scalars['String']['input']>;
    logIn_not_contains?: InputMaybe<Scalars['String']['input']>;
    logIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logOut?: InputMaybe<Scalars['String']['input']>;
    logOut_contains?: InputMaybe<Scalars['String']['input']>;
    logOut_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logOut_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logOut_not?: InputMaybe<Scalars['String']['input']>;
    logOut_not_contains?: InputMaybe<Scalars['String']['input']>;
    logOut_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    renew?: InputMaybe<Scalars['String']['input']>;
    renew_contains?: InputMaybe<Scalars['String']['input']>;
    renew_exists?: InputMaybe<Scalars['Boolean']['input']>;
    renew_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    renew_not?: InputMaybe<Scalars['String']['input']>;
    renew_not_contains?: InputMaybe<Scalars['String']['input']>;
    renew_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    save?: InputMaybe<Scalars['String']['input']>;
    save_contains?: InputMaybe<Scalars['String']['input']>;
    save_exists?: InputMaybe<Scalars['Boolean']['input']>;
    save_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    save_not?: InputMaybe<Scalars['String']['input']>;
    save_not_contains?: InputMaybe<Scalars['String']['input']>;
    save_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    settings?: InputMaybe<Scalars['String']['input']>;
    settings_contains?: InputMaybe<Scalars['String']['input']>;
    settings_exists?: InputMaybe<Scalars['Boolean']['input']>;
    settings_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    settings_not?: InputMaybe<Scalars['String']['input']>;
    settings_not_contains?: InputMaybe<Scalars['String']['input']>;
    settings_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show?: InputMaybe<Scalars['String']['input']>;
    showLess?: InputMaybe<Scalars['String']['input']>;
    showLess_contains?: InputMaybe<Scalars['String']['input']>;
    showLess_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showLess_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showLess_not?: InputMaybe<Scalars['String']['input']>;
    showLess_not_contains?: InputMaybe<Scalars['String']['input']>;
    showLess_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showMore?: InputMaybe<Scalars['String']['input']>;
    showMore_contains?: InputMaybe<Scalars['String']['input']>;
    showMore_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showMore_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showMore_not?: InputMaybe<Scalars['String']['input']>;
    showMore_not_contains?: InputMaybe<Scalars['String']['input']>;
    showMore_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show_contains?: InputMaybe<Scalars['String']['input']>;
    show_exists?: InputMaybe<Scalars['Boolean']['input']>;
    show_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show_not?: InputMaybe<Scalars['String']['input']>;
    show_not_contains?: InputMaybe<Scalars['String']['input']>;
    show_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    yesterday?: InputMaybe<Scalars['String']['input']>;
    yesterday_contains?: InputMaybe<Scalars['String']['input']>;
    yesterday_exists?: InputMaybe<Scalars['Boolean']['input']>;
    yesterday_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    yesterday_not?: InputMaybe<Scalars['String']['input']>;
    yesterday_not_contains?: InputMaybe<Scalars['String']['input']>;
    yesterday_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DataConfigurableTextsLinkingCollections = {
    blockTicketListCollection?: Maybe<BlockTicketListCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type DataConfigurableTextsLinkingCollectionsBlockTicketListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataConfigurableTextsLinkingCollectionsBlockTicketListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type DataConfigurableTextsLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DataConfigurableTextsLinkingCollectionsBlockTicketListCollectionOrder {
    DetailsUrlAsc = 'detailsUrl_ASC',
    DetailsUrlDesc = 'detailsUrl_DESC',
    SubTitleAsc = 'subTitle_ASC',
    SubTitleDesc = 'subTitle_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum DataConfigurableTextsOrder {
    ApplyAsc = 'apply_ASC',
    ApplyDesc = 'apply_DESC',
    CancelAsc = 'cancel_ASC',
    CancelDesc = 'cancel_DESC',
    ClearAsc = 'clear_ASC',
    ClearDesc = 'clear_DESC',
    DeleteAsc = 'delete_ASC',
    DeleteDesc = 'delete_DESC',
    EditAsc = 'edit_ASC',
    EditDesc = 'edit_DESC',
    HideAsc = 'hide_ASC',
    HideDesc = 'hide_DESC',
    LogInAsc = 'logIn_ASC',
    LogInDesc = 'logIn_DESC',
    LogOutAsc = 'logOut_ASC',
    LogOutDesc = 'logOut_DESC',
    RenewAsc = 'renew_ASC',
    RenewDesc = 'renew_DESC',
    SaveAsc = 'save_ASC',
    SaveDesc = 'save_DESC',
    SettingsAsc = 'settings_ASC',
    SettingsDesc = 'settings_DESC',
    ShowLessAsc = 'showLess_ASC',
    ShowLessDesc = 'showLess_DESC',
    ShowMoreAsc = 'showMore_ASC',
    ShowMoreDesc = 'showMore_DESC',
    ShowAsc = 'show_ASC',
    ShowDesc = 'show_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    YesterdayAsc = 'yesterday_ASC',
    YesterdayDesc = 'yesterday_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataDates) */
export type DataDates = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<DataDatesLinkingCollections>;
        sys: Sys;
        today?: Maybe<Scalars['String']['output']>;
        yesterday?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataDates) */
export type DataDatesLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataDates) */
export type DataDatesTodayArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataDates) */
export type DataDatesYesterdayArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type DataDatesCollection = {
    items: Array<Maybe<DataDates>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type DataDatesFilter = {
    AND?: InputMaybe<Array<InputMaybe<DataDatesFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<DataDatesFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    today?: InputMaybe<Scalars['String']['input']>;
    today_contains?: InputMaybe<Scalars['String']['input']>;
    today_exists?: InputMaybe<Scalars['Boolean']['input']>;
    today_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    today_not?: InputMaybe<Scalars['String']['input']>;
    today_not_contains?: InputMaybe<Scalars['String']['input']>;
    today_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    yesterday?: InputMaybe<Scalars['String']['input']>;
    yesterday_contains?: InputMaybe<Scalars['String']['input']>;
    yesterday_exists?: InputMaybe<Scalars['Boolean']['input']>;
    yesterday_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    yesterday_not?: InputMaybe<Scalars['String']['input']>;
    yesterday_not_contains?: InputMaybe<Scalars['String']['input']>;
    yesterday_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DataDatesLinkingCollections = {
    configurableTextsCollection?: Maybe<ConfigurableTextsCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type DataDatesLinkingCollectionsConfigurableTextsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataDatesLinkingCollectionsConfigurableTextsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type DataDatesLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DataDatesLinkingCollectionsConfigurableTextsCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum DataDatesOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TodayAsc = 'today_ASC',
    TodayDesc = 'today_DESC',
    YesterdayAsc = 'yesterday_ASC',
    YesterdayDesc = 'yesterday_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataErrors) */
export type DataErrors = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<DataErrorsLinkingCollections>;
        name?: Maybe<Scalars['String']['output']>;
        requestError?: Maybe<ComponentMessageSimple>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataErrors) */
export type DataErrorsLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataErrors) */
export type DataErrorsNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataErrors) */
export type DataErrorsRequestErrorArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<ComponentMessageSimpleFilter>;
};

export type DataErrorsCollection = {
    items: Array<Maybe<DataErrors>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type DataErrorsFilter = {
    AND?: InputMaybe<Array<InputMaybe<DataErrorsFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<DataErrorsFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    requestError?: InputMaybe<CfComponentMessageSimpleNestedFilter>;
    requestError_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
};

export type DataErrorsLinkingCollections = {
    configurableTextsCollection?: Maybe<ConfigurableTextsCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type DataErrorsLinkingCollectionsConfigurableTextsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataErrorsLinkingCollectionsConfigurableTextsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type DataErrorsLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DataErrorsLinkingCollectionsConfigurableTextsCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum DataErrorsOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataValidation) */
export type DataValidation = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        isOptional?: Maybe<Scalars['String']['output']>;
        isRequired?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<DataValidationLinkingCollections>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataValidation) */
export type DataValidationIsOptionalArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataValidation) */
export type DataValidationIsRequiredArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/dataValidation) */
export type DataValidationLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DataValidationCollection = {
    items: Array<Maybe<DataValidation>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type DataValidationFilter = {
    AND?: InputMaybe<Array<InputMaybe<DataValidationFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<DataValidationFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    isOptional?: InputMaybe<Scalars['String']['input']>;
    isOptional_contains?: InputMaybe<Scalars['String']['input']>;
    isOptional_exists?: InputMaybe<Scalars['Boolean']['input']>;
    isOptional_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    isOptional_not?: InputMaybe<Scalars['String']['input']>;
    isOptional_not_contains?: InputMaybe<Scalars['String']['input']>;
    isOptional_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    isRequired?: InputMaybe<Scalars['String']['input']>;
    isRequired_contains?: InputMaybe<Scalars['String']['input']>;
    isRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
    isRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    isRequired_not?: InputMaybe<Scalars['String']['input']>;
    isRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
    isRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type DataValidationLinkingCollections = {
    configurableTextsCollection?: Maybe<ConfigurableTextsCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type DataValidationLinkingCollectionsConfigurableTextsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataValidationLinkingCollectionsConfigurableTextsCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type DataValidationLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DataValidationLinkingCollectionsConfigurableTextsCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum DataValidationOrder {
    IsOptionalAsc = 'isOptional_ASC',
    IsOptionalDesc = 'isOptional_DESC',
    IsRequiredAsc = 'isRequired_ASC',
    IsRequiredDesc = 'isRequired_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Entry = {
    contentfulMetadata: ContentfulMetadata;
    sys: Sys;
};

export type EntryCollection = {
    items: Array<Maybe<Entry>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type EntryFilter = {
    AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/footer) */
export type Footer = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        copyright?: Maybe<Scalars['String']['output']>;
        itemsCollection?: Maybe<FooterItemsCollection>;
        linkedFrom?: Maybe<FooterLinkingCollections>;
        logo?: Maybe<Asset>;
        logoLabel?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/footer) */
export type FooterCopyrightArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/footer) */
export type FooterItemsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<FooterItemsFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/footer) */
export type FooterLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/footer) */
export type FooterLogoArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/footer) */
export type FooterLogoLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/footer) */
export type FooterTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type FooterCollection = {
    items: Array<Maybe<Footer>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type FooterFilter = {
    AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    copyright?: InputMaybe<Scalars['String']['input']>;
    copyright_contains?: InputMaybe<Scalars['String']['input']>;
    copyright_exists?: InputMaybe<Scalars['Boolean']['input']>;
    copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    copyright_not?: InputMaybe<Scalars['String']['input']>;
    copyright_not_contains?: InputMaybe<Scalars['String']['input']>;
    copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    items?: InputMaybe<CfitemsMultiTypeNestedFilter>;
    itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logoLabel?: InputMaybe<Scalars['String']['input']>;
    logoLabel_contains?: InputMaybe<Scalars['String']['input']>;
    logoLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logoLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logoLabel_not?: InputMaybe<Scalars['String']['input']>;
    logoLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    logoLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterItemsCollection = {
    items: Array<Maybe<FooterItemsItem>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type FooterItemsFilter = {
    AND?: InputMaybe<Array<InputMaybe<FooterItemsFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<FooterItemsFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    page_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    url?: InputMaybe<Scalars['String']['input']>;
    url_contains?: InputMaybe<Scalars['String']['input']>;
    url_exists?: InputMaybe<Scalars['Boolean']['input']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url_not?: InputMaybe<Scalars['String']['input']>;
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterItemsItem = ComponentNavigationGroup | ComponentNavigationItem;

export type FooterLinkingCollections = {
    appConfigCollection?: Maybe<AppConfigCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type FooterLinkingCollectionsAppConfigCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<FooterLinkingCollectionsAppConfigCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type FooterLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FooterLinkingCollectionsAppConfigCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum FooterOrder {
    CopyrightAsc = 'copyright_ASC',
    CopyrightDesc = 'copyright_DESC',
    LogoLabelAsc = 'logoLabel_ASC',
    LogoLabelDesc = 'logoLabel_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type Header = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        closeMobileMenuLabel?: Maybe<Scalars['String']['output']>;
        contentfulMetadata: ContentfulMetadata;
        itemsCollection?: Maybe<HeaderItemsCollection>;
        languageSwitcherLabel?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<HeaderLinkingCollections>;
        logo?: Maybe<Asset>;
        logoLabel?: Maybe<Scalars['String']['output']>;
        notification?: Maybe<Page>;
        openMobileMenuLabel?: Maybe<Scalars['String']['output']>;
        showContextSwitcher?: Maybe<Scalars['Boolean']['output']>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
        userInfo?: Maybe<Page>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderCloseMobileMenuLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderItemsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<HeaderItemsFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderLanguageSwitcherLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderLogoArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderLogoLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderNotificationArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderOpenMobileMenuLabelArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderShowContextSwitcherArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/header) */
export type HeaderUserInfoArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

export type HeaderCollection = {
    items: Array<Maybe<Header>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type HeaderFilter = {
    AND?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
    closeMobileMenuLabel?: InputMaybe<Scalars['String']['input']>;
    closeMobileMenuLabel_contains?: InputMaybe<Scalars['String']['input']>;
    closeMobileMenuLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    closeMobileMenuLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    closeMobileMenuLabel_not?: InputMaybe<Scalars['String']['input']>;
    closeMobileMenuLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    closeMobileMenuLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    items?: InputMaybe<CfitemsMultiTypeNestedFilter>;
    itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    languageSwitcherLabel?: InputMaybe<Scalars['String']['input']>;
    languageSwitcherLabel_contains?: InputMaybe<Scalars['String']['input']>;
    languageSwitcherLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    languageSwitcherLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    languageSwitcherLabel_not?: InputMaybe<Scalars['String']['input']>;
    languageSwitcherLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    languageSwitcherLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logoLabel?: InputMaybe<Scalars['String']['input']>;
    logoLabel_contains?: InputMaybe<Scalars['String']['input']>;
    logoLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logoLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logoLabel_not?: InputMaybe<Scalars['String']['input']>;
    logoLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    logoLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    notification?: InputMaybe<CfPageNestedFilter>;
    notification_exists?: InputMaybe<Scalars['Boolean']['input']>;
    openMobileMenuLabel?: InputMaybe<Scalars['String']['input']>;
    openMobileMenuLabel_contains?: InputMaybe<Scalars['String']['input']>;
    openMobileMenuLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    openMobileMenuLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    openMobileMenuLabel_not?: InputMaybe<Scalars['String']['input']>;
    openMobileMenuLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    openMobileMenuLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showContextSwitcher?: InputMaybe<Scalars['Boolean']['input']>;
    showContextSwitcher_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showContextSwitcher_not?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    userInfo?: InputMaybe<CfPageNestedFilter>;
    userInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderItemsCollection = {
    items: Array<Maybe<HeaderItemsItem>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type HeaderItemsFilter = {
    AND?: InputMaybe<Array<InputMaybe<HeaderItemsFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<HeaderItemsFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    page_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    url?: InputMaybe<Scalars['String']['input']>;
    url_contains?: InputMaybe<Scalars['String']['input']>;
    url_exists?: InputMaybe<Scalars['Boolean']['input']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url_not?: InputMaybe<Scalars['String']['input']>;
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeaderItemsItem = ComponentNavigationGroup | ComponentNavigationItem;

export type HeaderLinkingCollections = {
    appConfigCollection?: Maybe<AppConfigCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type HeaderLinkingCollectionsAppConfigCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<HeaderLinkingCollectionsAppConfigCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type HeaderLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeaderLinkingCollectionsAppConfigCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum HeaderOrder {
    CloseMobileMenuLabelAsc = 'closeMobileMenuLabel_ASC',
    CloseMobileMenuLabelDesc = 'closeMobileMenuLabel_DESC',
    LanguageSwitcherLabelAsc = 'languageSwitcherLabel_ASC',
    LanguageSwitcherLabelDesc = 'languageSwitcherLabel_DESC',
    LogoLabelAsc = 'logoLabel_ASC',
    LogoLabelDesc = 'logoLabel_DESC',
    OpenMobileMenuLabelAsc = 'openMobileMenuLabel_ASC',
    OpenMobileMenuLabelDesc = 'openMobileMenuLabel_DESC',
    ShowContextSwitcherAsc = 'showContextSwitcher_ASC',
    ShowContextSwitcherDesc = 'showContextSwitcher_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum ImageFormat {
    /** AVIF image format. */
    Avif = 'AVIF',
    /** JPG image format. */
    Jpg = 'JPG',
    /**
     * Progressive JPG format stores multiple passes of an image in progressively higher detail.
     *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
     *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
     *         early as possible to make the layout look as designed.
     */
    JpgProgressive = 'JPG_PROGRESSIVE',
    /** PNG image format */
    Png = 'PNG',
    /**
     * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
     *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
     */
    Png8 = 'PNG8',
    /** WebP image format. */
    Webp = 'WEBP',
}

export enum ImageResizeFocus {
    /** Focus the resizing on the bottom. */
    Bottom = 'BOTTOM',
    /** Focus the resizing on the bottom left. */
    BottomLeft = 'BOTTOM_LEFT',
    /** Focus the resizing on the bottom right. */
    BottomRight = 'BOTTOM_RIGHT',
    /** Focus the resizing on the center. */
    Center = 'CENTER',
    /** Focus the resizing on the largest face. */
    Face = 'FACE',
    /** Focus the resizing on the area containing all the faces. */
    Faces = 'FACES',
    /** Focus the resizing on the left. */
    Left = 'LEFT',
    /** Focus the resizing on the right. */
    Right = 'RIGHT',
    /** Focus the resizing on the top. */
    Top = 'TOP',
    /** Focus the resizing on the top left. */
    TopLeft = 'TOP_LEFT',
    /** Focus the resizing on the top right. */
    TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
    /** Crops a part of the original image to fit into the specified dimensions. */
    Crop = 'CROP',
    /** Resizes the image to the specified dimensions, cropping the image if needed. */
    Fill = 'FILL',
    /** Resizes the image to fit into the specified dimensions. */
    Fit = 'FIT',
    /**
     * Resizes the image to the specified dimensions, padding the image if needed.
     *         Uses desired background color as padding color.
     */
    Pad = 'PAD',
    /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
    Scale = 'SCALE',
    /** Creates a thumbnail from the image. */
    Thumb = 'THUMB',
}

export type ImageTransformOptions = {
    /**
     * Desired background color, used with corner radius or `PAD` resize strategy.
     *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
     */
    backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
    /**
     * Desired corner radius in pixels.
     *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
     *         Defaults to `0`. Uses desired background color as padding color,
     *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
     */
    cornerRadius?: InputMaybe<Scalars['Int']['input']>;
    /** Desired image format. Defaults to the original image format. */
    format?: InputMaybe<ImageFormat>;
    /** Desired height in pixels. Defaults to the original image height. */
    height?: InputMaybe<Scalars['Dimension']['input']>;
    /**
     * Desired quality of the image in percents.
     *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
     */
    quality?: InputMaybe<Scalars['Quality']['input']>;
    /** Desired resize focus area. Defaults to `CENTER`. */
    resizeFocus?: InputMaybe<ImageResizeFocus>;
    /** Desired resize strategy. Defaults to `FIT`. */
    resizeStrategy?: InputMaybe<ImageResizeStrategy>;
    /** Desired width in pixels. Defaults to the original image width. */
    width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/page) */
export type Page = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        hasOwnTitle?: Maybe<Scalars['Boolean']['output']>;
        linkedFrom?: Maybe<PageLinkingCollections>;
        parent?: Maybe<Page>;
        permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        seo?: Maybe<PageSeo>;
        slug?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        template?: Maybe<PageTemplate>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/page) */
export type PageHasOwnTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/page) */
export type PageLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/page) */
export type PageParentArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/page) */
export type PagePermissionsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/page) */
export type PageSeoArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    where?: InputMaybe<PageSeoFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/page) */
export type PageSlugArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/page) */
export type PageTemplateArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageCollection = {
    items: Array<Maybe<Page>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type PageFilter = {
    AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    hasOwnTitle?: InputMaybe<Scalars['Boolean']['input']>;
    hasOwnTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
    hasOwnTitle_not?: InputMaybe<Scalars['Boolean']['input']>;
    parent?: InputMaybe<CfPageNestedFilter>;
    parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
    permissions_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    permissions_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    permissions_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    permissions_exists?: InputMaybe<Scalars['Boolean']['input']>;
    seo?: InputMaybe<CfPageSeoNestedFilter>;
    seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    template_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageLinkingCollections = {
    articleCollection?: Maybe<ArticleCollection>;
    blockArticleListCollection?: Maybe<BlockArticleListCollection>;
    blockCategoryCollection?: Maybe<BlockCategoryCollection>;
    blockCategoryListCollection?: Maybe<BlockCategoryListCollection>;
    componentCategoryCollection?: Maybe<ComponentCategoryCollection>;
    componentLinkCollection?: Maybe<ComponentLinkCollection>;
    componentNavigationGroupCollection?: Maybe<ComponentNavigationGroupCollection>;
    componentNavigationItemCollection?: Maybe<ComponentNavigationItemCollection>;
    entryCollection?: Maybe<EntryCollection>;
    headerCollection?: Maybe<HeaderCollection>;
    pageCollection?: Maybe<PageCollection>;
};

export type PageLinkingCollectionsArticleCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsArticleCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsBlockArticleListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsBlockArticleListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsBlockCategoryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsBlockCategoryCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsBlockCategoryListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsBlockCategoryListCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsComponentCategoryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentCategoryCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsComponentLinkCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentLinkCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsComponentNavigationGroupCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentNavigationGroupCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsComponentNavigationItemCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentNavigationItemCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsHeaderCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsHeaderCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsPageCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsPageCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageLinkingCollectionsArticleCollectionOrder {
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum PageLinkingCollectionsBlockArticleListCollectionOrder {
    ArticlesToShowAsc = 'articlesToShow_ASC',
    ArticlesToShowDesc = 'articlesToShow_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum PageLinkingCollectionsBlockCategoryCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum PageLinkingCollectionsBlockCategoryListCollectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum PageLinkingCollectionsComponentCategoryCollectionOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum PageLinkingCollectionsComponentLinkCollectionOrder {
    IconAsc = 'icon_ASC',
    IconDesc = 'icon_DESC',
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

export enum PageLinkingCollectionsComponentNavigationGroupCollectionOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

export enum PageLinkingCollectionsComponentNavigationItemCollectionOrder {
    LabelAsc = 'label_ASC',
    LabelDesc = 'label_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    UrlAsc = 'url_ASC',
    UrlDesc = 'url_DESC',
}

export enum PageLinkingCollectionsHeaderCollectionOrder {
    CloseMobileMenuLabelAsc = 'closeMobileMenuLabel_ASC',
    CloseMobileMenuLabelDesc = 'closeMobileMenuLabel_DESC',
    LanguageSwitcherLabelAsc = 'languageSwitcherLabel_ASC',
    LanguageSwitcherLabelDesc = 'languageSwitcherLabel_DESC',
    LogoLabelAsc = 'logoLabel_ASC',
    LogoLabelDesc = 'logoLabel_DESC',
    OpenMobileMenuLabelAsc = 'openMobileMenuLabel_ASC',
    OpenMobileMenuLabelDesc = 'openMobileMenuLabel_DESC',
    ShowContextSwitcherAsc = 'showContextSwitcher_ASC',
    ShowContextSwitcherDesc = 'showContextSwitcher_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum PageLinkingCollectionsPageCollectionOrder {
    HasOwnTitleAsc = 'hasOwnTitle_ASC',
    HasOwnTitleDesc = 'hasOwnTitle_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageOneColumnTemplate) */
export type PageOneColumnTemplate = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<PageOneColumnTemplateLinkingCollections>;
        mainSlotCollection?: Maybe<PageOneColumnTemplateMainSlotCollection>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageOneColumnTemplate) */
export type PageOneColumnTemplateLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageOneColumnTemplate) */
export type PageOneColumnTemplateMainSlotCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageOneColumnTemplateMainSlotCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageOneColumnTemplate) */
export type PageOneColumnTemplateTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageOneColumnTemplateCollection = {
    items: Array<Maybe<PageOneColumnTemplate>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type PageOneColumnTemplateFilter = {
    AND?: InputMaybe<Array<InputMaybe<PageOneColumnTemplateFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<PageOneColumnTemplateFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    mainSlot?: InputMaybe<CfBlockNestedFilter>;
    mainSlotCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageOneColumnTemplateLinkingCollections = {
    entryCollection?: Maybe<EntryCollection>;
    pageCollection?: Maybe<PageCollection>;
};

export type PageOneColumnTemplateLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageOneColumnTemplateLinkingCollectionsPageCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageOneColumnTemplateLinkingCollectionsPageCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageOneColumnTemplateLinkingCollectionsPageCollectionOrder {
    HasOwnTitleAsc = 'hasOwnTitle_ASC',
    HasOwnTitleDesc = 'hasOwnTitle_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type PageOneColumnTemplateMainSlotCollection = {
    items: Array<Maybe<Block>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum PageOneColumnTemplateMainSlotCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export enum PageOneColumnTemplateOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export enum PageOrder {
    HasOwnTitleAsc = 'hasOwnTitle_ASC',
    HasOwnTitleDesc = 'hasOwnTitle_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageSeo) */
export type PageSeo = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        description?: Maybe<Scalars['String']['output']>;
        image?: Maybe<Asset>;
        keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
        linkedFrom?: Maybe<PageSeoLinkingCollections>;
        noFollow?: Maybe<Scalars['Boolean']['output']>;
        noIndex?: Maybe<Scalars['Boolean']['output']>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageSeo) */
export type PageSeoDescriptionArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageSeo) */
export type PageSeoImageArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageSeo) */
export type PageSeoKeywordsArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageSeo) */
export type PageSeoLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageSeo) */
export type PageSeoNoFollowArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageSeo) */
export type PageSeoNoIndexArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageSeo) */
export type PageSeoTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageSeoCollection = {
    items: Array<Maybe<PageSeo>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type PageSeoFilter = {
    AND?: InputMaybe<Array<InputMaybe<PageSeoFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<PageSeoFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    image_exists?: InputMaybe<Scalars['Boolean']['input']>;
    keywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    keywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    keywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
    noFollow?: InputMaybe<Scalars['Boolean']['input']>;
    noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
    noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
    noIndex?: InputMaybe<Scalars['Boolean']['input']>;
    noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
    noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageSeoLinkingCollections = {
    articleCollection?: Maybe<ArticleCollection>;
    entryCollection?: Maybe<EntryCollection>;
    pageCollection?: Maybe<PageCollection>;
};

export type PageSeoLinkingCollectionsArticleCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageSeoLinkingCollectionsArticleCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageSeoLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageSeoLinkingCollectionsPageCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageSeoLinkingCollectionsPageCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageSeoLinkingCollectionsArticleCollectionOrder {
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum PageSeoLinkingCollectionsPageCollectionOrder {
    HasOwnTitleAsc = 'hasOwnTitle_ASC',
    HasOwnTitleDesc = 'hasOwnTitle_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum PageSeoOrder {
    NoFollowAsc = 'noFollow_ASC',
    NoFollowDesc = 'noFollow_DESC',
    NoIndexAsc = 'noIndex_ASC',
    NoIndexDesc = 'noIndex_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export type PageTemplate = PageOneColumnTemplate | PageTwoColumnTemplate;

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageTwoColumnTemplate) */
export type PageTwoColumnTemplate = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        bottomSlotCollection?: Maybe<PageTwoColumnTemplateBottomSlotCollection>;
        contentfulMetadata: ContentfulMetadata;
        leftSlotCollection?: Maybe<PageTwoColumnTemplateLeftSlotCollection>;
        linkedFrom?: Maybe<PageTwoColumnTemplateLinkingCollections>;
        rightSlotCollection?: Maybe<PageTwoColumnTemplateRightSlotCollection>;
        sys: Sys;
        title?: Maybe<Scalars['String']['output']>;
        topSlotCollection?: Maybe<PageTwoColumnTemplateTopSlotCollection>;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageTwoColumnTemplate) */
export type PageTwoColumnTemplateBottomSlotCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageTwoColumnTemplateBottomSlotCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageTwoColumnTemplate) */
export type PageTwoColumnTemplateLeftSlotCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageTwoColumnTemplateLeftSlotCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageTwoColumnTemplate) */
export type PageTwoColumnTemplateLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageTwoColumnTemplate) */
export type PageTwoColumnTemplateRightSlotCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageTwoColumnTemplateRightSlotCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageTwoColumnTemplate) */
export type PageTwoColumnTemplateTitleArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/pageTwoColumnTemplate) */
export type PageTwoColumnTemplateTopSlotCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageTwoColumnTemplateTopSlotCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockFilter>;
};

export type PageTwoColumnTemplateBottomSlotCollection = {
    items: Array<Maybe<Block>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum PageTwoColumnTemplateBottomSlotCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export type PageTwoColumnTemplateCollection = {
    items: Array<Maybe<PageTwoColumnTemplate>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type PageTwoColumnTemplateFilter = {
    AND?: InputMaybe<Array<InputMaybe<PageTwoColumnTemplateFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<PageTwoColumnTemplateFilter>>>;
    bottomSlot?: InputMaybe<CfBlockNestedFilter>;
    bottomSlotCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    leftSlot?: InputMaybe<CfBlockNestedFilter>;
    leftSlotCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    rightSlot?: InputMaybe<CfBlockNestedFilter>;
    rightSlotCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    topSlot?: InputMaybe<CfBlockNestedFilter>;
    topSlotCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageTwoColumnTemplateLeftSlotCollection = {
    items: Array<Maybe<Block>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum PageTwoColumnTemplateLeftSlotCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export type PageTwoColumnTemplateLinkingCollections = {
    entryCollection?: Maybe<EntryCollection>;
    pageCollection?: Maybe<PageCollection>;
};

export type PageTwoColumnTemplateLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageTwoColumnTemplateLinkingCollectionsPageCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageTwoColumnTemplateLinkingCollectionsPageCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageTwoColumnTemplateLinkingCollectionsPageCollectionOrder {
    HasOwnTitleAsc = 'hasOwnTitle_ASC',
    HasOwnTitleDesc = 'hasOwnTitle_DESC',
    SlugAsc = 'slug_ASC',
    SlugDesc = 'slug_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum PageTwoColumnTemplateOrder {
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    TitleAsc = 'title_ASC',
    TitleDesc = 'title_DESC',
}

export type PageTwoColumnTemplateRightSlotCollection = {
    items: Array<Maybe<Block>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum PageTwoColumnTemplateRightSlotCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export type PageTwoColumnTemplateTopSlotCollection = {
    items: Array<Maybe<Block>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export enum PageTwoColumnTemplateTopSlotCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export type Query = {
    _node?: Maybe<_Node>;
    _nodes: Array<Maybe<_Node>>;
    appConfig?: Maybe<AppConfig>;
    appConfigCollection?: Maybe<AppConfigCollection>;
    article?: Maybe<Article>;
    articleCollection?: Maybe<ArticleCollection>;
    asset?: Maybe<Asset>;
    assetCollection?: Maybe<AssetCollection>;
    author?: Maybe<Author>;
    authorCollection?: Maybe<AuthorCollection>;
    block?: Maybe<Block>;
    blockArticleList?: Maybe<BlockArticleList>;
    blockArticleListCollection?: Maybe<BlockArticleListCollection>;
    blockCategory?: Maybe<BlockCategory>;
    blockCategoryCollection?: Maybe<BlockCategoryCollection>;
    blockCategoryList?: Maybe<BlockCategoryList>;
    blockCategoryListCollection?: Maybe<BlockCategoryListCollection>;
    blockCollection?: Maybe<BlockCollection>;
    blockFaq?: Maybe<BlockFaq>;
    blockFaqCollection?: Maybe<BlockFaqCollection>;
    blockQuickLinks?: Maybe<BlockQuickLinks>;
    blockQuickLinksCollection?: Maybe<BlockQuickLinksCollection>;
    blockTicketList?: Maybe<BlockTicketList>;
    blockTicketListCollection?: Maybe<BlockTicketListCollection>;
    componentArticle?: Maybe<ComponentArticle>;
    componentArticleCollection?: Maybe<ComponentArticleCollection>;
    componentArticleSection?: Maybe<ComponentArticleSection>;
    componentArticleSectionCollection?: Maybe<ComponentArticleSectionCollection>;
    componentBanner?: Maybe<ComponentBanner>;
    componentBannerCollection?: Maybe<ComponentBannerCollection>;
    componentCategory?: Maybe<ComponentCategory>;
    componentCategoryCollection?: Maybe<ComponentCategoryCollection>;
    componentFaqItem?: Maybe<ComponentFaqItem>;
    componentFaqItemCollection?: Maybe<ComponentFaqItemCollection>;
    componentFieldMapping?: Maybe<ComponentFieldMapping>;
    componentFieldMappingCollection?: Maybe<ComponentFieldMappingCollection>;
    componentKeyValue?: Maybe<ComponentKeyValue>;
    componentKeyValueCollection?: Maybe<ComponentKeyValueCollection>;
    componentLink?: Maybe<ComponentLink>;
    componentLinkCollection?: Maybe<ComponentLinkCollection>;
    componentMessageSimple?: Maybe<ComponentMessageSimple>;
    componentMessageSimpleCollection?: Maybe<ComponentMessageSimpleCollection>;
    componentNavigationGroup?: Maybe<ComponentNavigationGroup>;
    componentNavigationGroupCollection?: Maybe<ComponentNavigationGroupCollection>;
    componentNavigationItem?: Maybe<ComponentNavigationItem>;
    componentNavigationItemCollection?: Maybe<ComponentNavigationItemCollection>;
    componentNoResult?: Maybe<ComponentNoResult>;
    componentNoResultCollection?: Maybe<ComponentNoResultCollection>;
    componentPagination?: Maybe<ComponentPagination>;
    componentPaginationCollection?: Maybe<ComponentPaginationCollection>;
    componentRoles?: Maybe<ComponentRoles>;
    componentRolesCollection?: Maybe<ComponentRolesCollection>;
    componentTable?: Maybe<ComponentTable>;
    componentTableCollection?: Maybe<ComponentTableCollection>;
    componentTableColumn?: Maybe<ComponentTableColumn>;
    componentTableColumnCollection?: Maybe<ComponentTableColumnCollection>;
    configurableTexts?: Maybe<ConfigurableTexts>;
    configurableTextsCollection?: Maybe<ConfigurableTextsCollection>;
    dataActions?: Maybe<DataActions>;
    dataActionsCollection?: Maybe<DataActionsCollection>;
    dataConfigurableTexts?: Maybe<DataConfigurableTexts>;
    dataConfigurableTextsCollection?: Maybe<DataConfigurableTextsCollection>;
    dataDates?: Maybe<DataDates>;
    dataDatesCollection?: Maybe<DataDatesCollection>;
    dataErrors?: Maybe<DataErrors>;
    dataErrorsCollection?: Maybe<DataErrorsCollection>;
    dataValidation?: Maybe<DataValidation>;
    dataValidationCollection?: Maybe<DataValidationCollection>;
    entryCollection?: Maybe<EntryCollection>;
    footer?: Maybe<Footer>;
    footerCollection?: Maybe<FooterCollection>;
    header?: Maybe<Header>;
    headerCollection?: Maybe<HeaderCollection>;
    page?: Maybe<Page>;
    pageCollection?: Maybe<PageCollection>;
    pageOneColumnTemplate?: Maybe<PageOneColumnTemplate>;
    pageOneColumnTemplateCollection?: Maybe<PageOneColumnTemplateCollection>;
    pageSeo?: Maybe<PageSeo>;
    pageSeoCollection?: Maybe<PageSeoCollection>;
    pageTwoColumnTemplate?: Maybe<PageTwoColumnTemplate>;
    pageTwoColumnTemplateCollection?: Maybe<PageTwoColumnTemplateCollection>;
    theme?: Maybe<Theme>;
    themeCollection?: Maybe<ThemeCollection>;
};

export type Query_NodeArgs = {
    id: Scalars['ID']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query_NodesArgs = {
    ids: Array<Scalars['ID']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAppConfigArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAppConfigCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<AppConfigOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<AppConfigFilter>;
};

export type QueryArticleArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryArticleCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ArticleOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ArticleFilter>;
};

export type QueryAssetArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAssetCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<AssetFilter>;
};

export type QueryAuthorArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAuthorCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<AuthorFilter>;
};

export type QueryBlockArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryBlockArticleListArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryBlockArticleListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockArticleListOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockArticleListFilter>;
};

export type QueryBlockCategoryArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryBlockCategoryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockCategoryOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockCategoryFilter>;
};

export type QueryBlockCategoryListArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryBlockCategoryListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockCategoryListOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockCategoryListFilter>;
};

export type QueryBlockCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockFilter>;
};

export type QueryBlockFaqArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryBlockFaqCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockFaqOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockFaqFilter>;
};

export type QueryBlockQuickLinksArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryBlockQuickLinksCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockQuickLinksOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockQuickLinksFilter>;
};

export type QueryBlockTicketListArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryBlockTicketListCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockTicketListOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<BlockTicketListFilter>;
};

export type QueryComponentArticleArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentArticleCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentArticleOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentArticleFilter>;
};

export type QueryComponentArticleSectionArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentArticleSectionCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentArticleSectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentArticleSectionFilter>;
};

export type QueryComponentBannerArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentBannerCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentBannerOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentBannerFilter>;
};

export type QueryComponentCategoryArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentCategoryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentCategoryOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentCategoryFilter>;
};

export type QueryComponentFaqItemArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentFaqItemCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentFaqItemOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentFaqItemFilter>;
};

export type QueryComponentFieldMappingArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentFieldMappingCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentFieldMappingOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentFieldMappingFilter>;
};

export type QueryComponentKeyValueArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentKeyValueCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentKeyValueOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentKeyValueFilter>;
};

export type QueryComponentLinkArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentLinkCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentLinkOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentLinkFilter>;
};

export type QueryComponentMessageSimpleArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentMessageSimpleCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentMessageSimpleOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentMessageSimpleFilter>;
};

export type QueryComponentNavigationGroupArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentNavigationGroupCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentNavigationGroupOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentNavigationGroupFilter>;
};

export type QueryComponentNavigationItemArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentNavigationItemCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentNavigationItemOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentNavigationItemFilter>;
};

export type QueryComponentNoResultArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentNoResultCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentNoResultOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentNoResultFilter>;
};

export type QueryComponentPaginationArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentPaginationCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentPaginationOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentPaginationFilter>;
};

export type QueryComponentRolesArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentRolesCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentRolesOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentRolesFilter>;
};

export type QueryComponentTableArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentTableCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentTableOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentTableFilter>;
};

export type QueryComponentTableColumnArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentTableColumnCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ComponentTableColumnOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ComponentTableColumnFilter>;
};

export type QueryConfigurableTextsArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryConfigurableTextsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ConfigurableTextsOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ConfigurableTextsFilter>;
};

export type QueryDataActionsArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryDataActionsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataActionsOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<DataActionsFilter>;
};

export type QueryDataConfigurableTextsArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryDataConfigurableTextsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataConfigurableTextsOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<DataConfigurableTextsFilter>;
};

export type QueryDataDatesArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryDataDatesCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataDatesOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<DataDatesFilter>;
};

export type QueryDataErrorsArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryDataErrorsCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataErrorsOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<DataErrorsFilter>;
};

export type QueryDataValidationArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryDataValidationCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<DataValidationOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<DataValidationFilter>;
};

export type QueryEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<EntryFilter>;
};

export type QueryFooterArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryFooterCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<FooterFilter>;
};

export type QueryHeaderArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryHeaderCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<HeaderFilter>;
};

export type QueryPageArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryPageCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PageFilter>;
};

export type QueryPageOneColumnTemplateArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryPageOneColumnTemplateCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageOneColumnTemplateOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PageOneColumnTemplateFilter>;
};

export type QueryPageSeoArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryPageSeoCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageSeoOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PageSeoFilter>;
};

export type QueryPageTwoColumnTemplateArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryPageTwoColumnTemplateCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageTwoColumnTemplateOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PageTwoColumnTemplateFilter>;
};

export type QueryThemeArgs = {
    id: Scalars['String']['input'];
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryThemeCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ThemeOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<ThemeFilter>;
};

export type Sys = {
    environmentId: Scalars['String']['output'];
    firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
    id: Scalars['String']['output'];
    /** The locale that was requested. */
    locale?: Maybe<Scalars['String']['output']>;
    publishedAt?: Maybe<Scalars['DateTime']['output']>;
    publishedVersion?: Maybe<Scalars['Int']['output']>;
    spaceId: Scalars['String']['output'];
};

export type SysFilter = {
    firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
    firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_exists?: InputMaybe<Scalars['Boolean']['input']>;
    id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
    publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
    publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
    publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
    publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
    publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
    publishedVersion?: InputMaybe<Scalars['Float']['input']>;
    publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
    publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
    publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
    publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
    publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
    publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
    publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
    publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
    id?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/theme) */
export type Theme = Entry &
    _Node & {
        _id: Scalars['ID']['output'];
        contentfulMetadata: ContentfulMetadata;
        linkedFrom?: Maybe<ThemeLinkingCollections>;
        logo?: Maybe<Asset>;
        name?: Maybe<Scalars['String']['output']>;
        sys: Sys;
    };

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/theme) */
export type ThemeLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/theme) */
export type ThemeLogoArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/x7lexi1yira0/content_types/theme) */
export type ThemeNameArgs = {
    locale?: InputMaybe<Scalars['String']['input']>;
};

export type ThemeCollection = {
    items: Array<Maybe<Theme>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type ThemeFilter = {
    AND?: InputMaybe<Array<InputMaybe<ThemeFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<ThemeFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type ThemeLinkingCollections = {
    appConfigCollection?: Maybe<AppConfigCollection>;
    blockCollection?: Maybe<BlockCollection>;
    entryCollection?: Maybe<EntryCollection>;
};

export type ThemeLinkingCollectionsAppConfigCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ThemeLinkingCollectionsAppConfigCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ThemeLinkingCollectionsBlockCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<ThemeLinkingCollectionsBlockCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ThemeLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ThemeLinkingCollectionsAppConfigCollectionOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ThemeLinkingCollectionsBlockCollectionOrder {
    BackgroundAsc = 'background_ASC',
    BackgroundDesc = 'background_DESC',
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SpacingAsc = 'spacing_ASC',
    SpacingDesc = 'spacing_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
    VariantAsc = 'variant_ASC',
    VariantDesc = 'variant_DESC',
}

export enum ThemeOrder {
    NameAsc = 'name_ASC',
    NameDesc = 'name_DESC',
    SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
    SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
    SysIdAsc = 'sys_id_ASC',
    SysIdDesc = 'sys_id_DESC',
    SysPublishedAtAsc = 'sys_publishedAt_ASC',
    SysPublishedAtDesc = 'sys_publishedAt_DESC',
    SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
    SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type TimelineFilterInput = {
    /** Preview content starting from a given release date */
    release_lte?: InputMaybe<Scalars['String']['input']>;
    /** Preview content starting from a given timestamp */
    timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type _Node = {
    _id: Scalars['ID']['output'];
};

export type CfArticleNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfArticleNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfArticleNestedFilter>>>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
    seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type CfAuthorNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
    avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    position?: InputMaybe<Scalars['String']['input']>;
    position_contains?: InputMaybe<Scalars['String']['input']>;
    position_exists?: InputMaybe<Scalars['Boolean']['input']>;
    position_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    position_not?: InputMaybe<Scalars['String']['input']>;
    position_not_contains?: InputMaybe<Scalars['String']['input']>;
    position_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type CfBlockNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfBlockNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfBlockNestedFilter>>>;
    background?: InputMaybe<Scalars['String']['input']>;
    background_contains?: InputMaybe<Scalars['String']['input']>;
    background_exists?: InputMaybe<Scalars['Boolean']['input']>;
    background_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    background_not?: InputMaybe<Scalars['String']['input']>;
    background_not_contains?: InputMaybe<Scalars['String']['input']>;
    background_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    spacing?: InputMaybe<Scalars['String']['input']>;
    spacing_contains?: InputMaybe<Scalars['String']['input']>;
    spacing_exists?: InputMaybe<Scalars['Boolean']['input']>;
    spacing_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    spacing_not?: InputMaybe<Scalars['String']['input']>;
    spacing_not_contains?: InputMaybe<Scalars['String']['input']>;
    spacing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    theme_exists?: InputMaybe<Scalars['Boolean']['input']>;
    variant?: InputMaybe<Scalars['String']['input']>;
    variant_contains?: InputMaybe<Scalars['String']['input']>;
    variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
    variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    variant_not?: InputMaybe<Scalars['String']['input']>;
    variant_not_contains?: InputMaybe<Scalars['String']['input']>;
    variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentArticleNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentArticleNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentArticleNestedFilter>>>;
    author_exists?: InputMaybe<Scalars['Boolean']['input']>;
    category_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
};

export type CfComponentArticleSectionNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentArticleSectionNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentArticleSectionNestedFilter>>>;
    content?: InputMaybe<Scalars['String']['input']>;
    content_contains?: InputMaybe<Scalars['String']['input']>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    content_not?: InputMaybe<Scalars['String']['input']>;
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentBannerNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentBannerNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentBannerNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    link_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentCategoryNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentCategoryNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentCategoryNestedFilter>>>;
    componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    icon?: InputMaybe<Scalars['String']['input']>;
    icon_contains?: InputMaybe<Scalars['String']['input']>;
    icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
    icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    icon_not?: InputMaybe<Scalars['String']['input']>;
    icon_not_contains?: InputMaybe<Scalars['String']['input']>;
    icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type CfComponentFaqItemNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentFaqItemNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentFaqItemNestedFilter>>>;
    content?: InputMaybe<Scalars['String']['input']>;
    content_contains?: InputMaybe<Scalars['String']['input']>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    content_not?: InputMaybe<Scalars['String']['input']>;
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentFieldMappingNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentFieldMappingNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentFieldMappingNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    valuesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfComponentKeyValueNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentKeyValueNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentKeyValueNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    key?: InputMaybe<Scalars['String']['input']>;
    key_contains?: InputMaybe<Scalars['String']['input']>;
    key_exists?: InputMaybe<Scalars['Boolean']['input']>;
    key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    key_not?: InputMaybe<Scalars['String']['input']>;
    key_not_contains?: InputMaybe<Scalars['String']['input']>;
    key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    value?: InputMaybe<Scalars['String']['input']>;
    value_contains?: InputMaybe<Scalars['String']['input']>;
    value_exists?: InputMaybe<Scalars['Boolean']['input']>;
    value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    value_not?: InputMaybe<Scalars['String']['input']>;
    value_not_contains?: InputMaybe<Scalars['String']['input']>;
    value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentLinkNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentLinkNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentLinkNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    icon?: InputMaybe<Scalars['String']['input']>;
    icon_contains?: InputMaybe<Scalars['String']['input']>;
    icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
    icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    icon_not?: InputMaybe<Scalars['String']['input']>;
    icon_not_contains?: InputMaybe<Scalars['String']['input']>;
    icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    label?: InputMaybe<Scalars['String']['input']>;
    label_contains?: InputMaybe<Scalars['String']['input']>;
    label_exists?: InputMaybe<Scalars['Boolean']['input']>;
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    label_not?: InputMaybe<Scalars['String']['input']>;
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    page_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    url?: InputMaybe<Scalars['String']['input']>;
    url_contains?: InputMaybe<Scalars['String']['input']>;
    url_exists?: InputMaybe<Scalars['Boolean']['input']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url_not?: InputMaybe<Scalars['String']['input']>;
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentMessageSimpleNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentMessageSimpleNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentMessageSimpleNestedFilter>>>;
    content?: InputMaybe<Scalars['String']['input']>;
    content_contains?: InputMaybe<Scalars['String']['input']>;
    content_exists?: InputMaybe<Scalars['Boolean']['input']>;
    content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    content_not?: InputMaybe<Scalars['String']['input']>;
    content_not_contains?: InputMaybe<Scalars['String']['input']>;
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentNavigationItemNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentNavigationItemNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentNavigationItemNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    label?: InputMaybe<Scalars['String']['input']>;
    label_contains?: InputMaybe<Scalars['String']['input']>;
    label_exists?: InputMaybe<Scalars['Boolean']['input']>;
    label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    label_not?: InputMaybe<Scalars['String']['input']>;
    label_not_contains?: InputMaybe<Scalars['String']['input']>;
    label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    page_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    url?: InputMaybe<Scalars['String']['input']>;
    url_contains?: InputMaybe<Scalars['String']['input']>;
    url_exists?: InputMaybe<Scalars['Boolean']['input']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url_not?: InputMaybe<Scalars['String']['input']>;
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentNoResultNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentNoResultNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentNoResultNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentPaginationNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentPaginationNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentPaginationNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    nextLabel?: InputMaybe<Scalars['String']['input']>;
    nextLabel_contains?: InputMaybe<Scalars['String']['input']>;
    nextLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    nextLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    nextLabel_not?: InputMaybe<Scalars['String']['input']>;
    nextLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    nextLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    perPage?: InputMaybe<Scalars['Int']['input']>;
    perPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
    perPage_gt?: InputMaybe<Scalars['Int']['input']>;
    perPage_gte?: InputMaybe<Scalars['Int']['input']>;
    perPage_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    perPage_lt?: InputMaybe<Scalars['Int']['input']>;
    perPage_lte?: InputMaybe<Scalars['Int']['input']>;
    perPage_not?: InputMaybe<Scalars['Int']['input']>;
    perPage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    previousLabel?: InputMaybe<Scalars['String']['input']>;
    previousLabel_contains?: InputMaybe<Scalars['String']['input']>;
    previousLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    previousLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    previousLabel_not?: InputMaybe<Scalars['String']['input']>;
    previousLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    previousLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    selectPageLabel?: InputMaybe<Scalars['String']['input']>;
    selectPageLabel_contains?: InputMaybe<Scalars['String']['input']>;
    selectPageLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    selectPageLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    selectPageLabel_not?: InputMaybe<Scalars['String']['input']>;
    selectPageLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    selectPageLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type CfComponentTableColumnNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentTableColumnNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentTableColumnNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    field?: InputMaybe<Scalars['String']['input']>;
    field_contains?: InputMaybe<Scalars['String']['input']>;
    field_exists?: InputMaybe<Scalars['Boolean']['input']>;
    field_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    field_not?: InputMaybe<Scalars['String']['input']>;
    field_not_contains?: InputMaybe<Scalars['String']['input']>;
    field_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentTableNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfComponentTableNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfComponentTableNestedFilter>>>;
    actionsLabel?: InputMaybe<Scalars['String']['input']>;
    actionsLabel_contains?: InputMaybe<Scalars['String']['input']>;
    actionsLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    actionsLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    actionsLabel_not?: InputMaybe<Scalars['String']['input']>;
    actionsLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    actionsLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    actionsTitle?: InputMaybe<Scalars['String']['input']>;
    actionsTitle_contains?: InputMaybe<Scalars['String']['input']>;
    actionsTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
    actionsTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    actionsTitle_not?: InputMaybe<Scalars['String']['input']>;
    actionsTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
    actionsTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    columnsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
};

export type CfDataActionsNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfDataActionsNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfDataActionsNestedFilter>>>;
    apply?: InputMaybe<Scalars['String']['input']>;
    apply_contains?: InputMaybe<Scalars['String']['input']>;
    apply_exists?: InputMaybe<Scalars['Boolean']['input']>;
    apply_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    apply_not?: InputMaybe<Scalars['String']['input']>;
    apply_not_contains?: InputMaybe<Scalars['String']['input']>;
    apply_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    cancel?: InputMaybe<Scalars['String']['input']>;
    cancel_contains?: InputMaybe<Scalars['String']['input']>;
    cancel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    cancel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    cancel_not?: InputMaybe<Scalars['String']['input']>;
    cancel_not_contains?: InputMaybe<Scalars['String']['input']>;
    cancel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clear?: InputMaybe<Scalars['String']['input']>;
    clear_contains?: InputMaybe<Scalars['String']['input']>;
    clear_exists?: InputMaybe<Scalars['Boolean']['input']>;
    clear_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clear_not?: InputMaybe<Scalars['String']['input']>;
    clear_not_contains?: InputMaybe<Scalars['String']['input']>;
    clear_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clickToSelect?: InputMaybe<Scalars['String']['input']>;
    clickToSelect_contains?: InputMaybe<Scalars['String']['input']>;
    clickToSelect_exists?: InputMaybe<Scalars['Boolean']['input']>;
    clickToSelect_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clickToSelect_not?: InputMaybe<Scalars['String']['input']>;
    clickToSelect_not_contains?: InputMaybe<Scalars['String']['input']>;
    clickToSelect_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    close?: InputMaybe<Scalars['String']['input']>;
    close_contains?: InputMaybe<Scalars['String']['input']>;
    close_exists?: InputMaybe<Scalars['Boolean']['input']>;
    close_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    close_not?: InputMaybe<Scalars['String']['input']>;
    close_not_contains?: InputMaybe<Scalars['String']['input']>;
    close_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    delete?: InputMaybe<Scalars['String']['input']>;
    delete_contains?: InputMaybe<Scalars['String']['input']>;
    delete_exists?: InputMaybe<Scalars['Boolean']['input']>;
    delete_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    delete_not?: InputMaybe<Scalars['String']['input']>;
    delete_not_contains?: InputMaybe<Scalars['String']['input']>;
    delete_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    details?: InputMaybe<Scalars['String']['input']>;
    details_contains?: InputMaybe<Scalars['String']['input']>;
    details_exists?: InputMaybe<Scalars['Boolean']['input']>;
    details_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    details_not?: InputMaybe<Scalars['String']['input']>;
    details_not_contains?: InputMaybe<Scalars['String']['input']>;
    details_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    edit?: InputMaybe<Scalars['String']['input']>;
    edit_contains?: InputMaybe<Scalars['String']['input']>;
    edit_exists?: InputMaybe<Scalars['Boolean']['input']>;
    edit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    edit_not?: InputMaybe<Scalars['String']['input']>;
    edit_not_contains?: InputMaybe<Scalars['String']['input']>;
    edit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    hide?: InputMaybe<Scalars['String']['input']>;
    hide_contains?: InputMaybe<Scalars['String']['input']>;
    hide_exists?: InputMaybe<Scalars['Boolean']['input']>;
    hide_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    hide_not?: InputMaybe<Scalars['String']['input']>;
    hide_not_contains?: InputMaybe<Scalars['String']['input']>;
    hide_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logIn?: InputMaybe<Scalars['String']['input']>;
    logIn_contains?: InputMaybe<Scalars['String']['input']>;
    logIn_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logIn_not?: InputMaybe<Scalars['String']['input']>;
    logIn_not_contains?: InputMaybe<Scalars['String']['input']>;
    logIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logOut?: InputMaybe<Scalars['String']['input']>;
    logOut_contains?: InputMaybe<Scalars['String']['input']>;
    logOut_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logOut_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logOut_not?: InputMaybe<Scalars['String']['input']>;
    logOut_not_contains?: InputMaybe<Scalars['String']['input']>;
    logOut_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    off?: InputMaybe<Scalars['String']['input']>;
    off_contains?: InputMaybe<Scalars['String']['input']>;
    off_exists?: InputMaybe<Scalars['Boolean']['input']>;
    off_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    off_not?: InputMaybe<Scalars['String']['input']>;
    off_not_contains?: InputMaybe<Scalars['String']['input']>;
    off_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    on?: InputMaybe<Scalars['String']['input']>;
    on_contains?: InputMaybe<Scalars['String']['input']>;
    on_exists?: InputMaybe<Scalars['Boolean']['input']>;
    on_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    on_not?: InputMaybe<Scalars['String']['input']>;
    on_not_contains?: InputMaybe<Scalars['String']['input']>;
    on_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    payOnline?: InputMaybe<Scalars['String']['input']>;
    payOnline_contains?: InputMaybe<Scalars['String']['input']>;
    payOnline_exists?: InputMaybe<Scalars['Boolean']['input']>;
    payOnline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    payOnline_not?: InputMaybe<Scalars['String']['input']>;
    payOnline_not_contains?: InputMaybe<Scalars['String']['input']>;
    payOnline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    renew?: InputMaybe<Scalars['String']['input']>;
    renew_contains?: InputMaybe<Scalars['String']['input']>;
    renew_exists?: InputMaybe<Scalars['Boolean']['input']>;
    renew_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    renew_not?: InputMaybe<Scalars['String']['input']>;
    renew_not_contains?: InputMaybe<Scalars['String']['input']>;
    renew_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    reorder?: InputMaybe<Scalars['String']['input']>;
    reorder_contains?: InputMaybe<Scalars['String']['input']>;
    reorder_exists?: InputMaybe<Scalars['Boolean']['input']>;
    reorder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    reorder_not?: InputMaybe<Scalars['String']['input']>;
    reorder_not_contains?: InputMaybe<Scalars['String']['input']>;
    reorder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    save?: InputMaybe<Scalars['String']['input']>;
    save_contains?: InputMaybe<Scalars['String']['input']>;
    save_exists?: InputMaybe<Scalars['Boolean']['input']>;
    save_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    save_not?: InputMaybe<Scalars['String']['input']>;
    save_not_contains?: InputMaybe<Scalars['String']['input']>;
    save_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    seeAllArticles?: InputMaybe<Scalars['String']['input']>;
    seeAllArticles_contains?: InputMaybe<Scalars['String']['input']>;
    seeAllArticles_exists?: InputMaybe<Scalars['Boolean']['input']>;
    seeAllArticles_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    seeAllArticles_not?: InputMaybe<Scalars['String']['input']>;
    seeAllArticles_not_contains?: InputMaybe<Scalars['String']['input']>;
    seeAllArticles_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    settings?: InputMaybe<Scalars['String']['input']>;
    settings_contains?: InputMaybe<Scalars['String']['input']>;
    settings_exists?: InputMaybe<Scalars['Boolean']['input']>;
    settings_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    settings_not?: InputMaybe<Scalars['String']['input']>;
    settings_not_contains?: InputMaybe<Scalars['String']['input']>;
    settings_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show?: InputMaybe<Scalars['String']['input']>;
    showAllArticles?: InputMaybe<Scalars['String']['input']>;
    showAllArticles_contains?: InputMaybe<Scalars['String']['input']>;
    showAllArticles_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showAllArticles_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showAllArticles_not?: InputMaybe<Scalars['String']['input']>;
    showAllArticles_not_contains?: InputMaybe<Scalars['String']['input']>;
    showAllArticles_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showLess?: InputMaybe<Scalars['String']['input']>;
    showLess_contains?: InputMaybe<Scalars['String']['input']>;
    showLess_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showLess_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showLess_not?: InputMaybe<Scalars['String']['input']>;
    showLess_not_contains?: InputMaybe<Scalars['String']['input']>;
    showLess_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showMore?: InputMaybe<Scalars['String']['input']>;
    showMore_contains?: InputMaybe<Scalars['String']['input']>;
    showMore_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showMore_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showMore_not?: InputMaybe<Scalars['String']['input']>;
    showMore_not_contains?: InputMaybe<Scalars['String']['input']>;
    showMore_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show_contains?: InputMaybe<Scalars['String']['input']>;
    show_exists?: InputMaybe<Scalars['Boolean']['input']>;
    show_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show_not?: InputMaybe<Scalars['String']['input']>;
    show_not_contains?: InputMaybe<Scalars['String']['input']>;
    show_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    trackOrder?: InputMaybe<Scalars['String']['input']>;
    trackOrder_contains?: InputMaybe<Scalars['String']['input']>;
    trackOrder_exists?: InputMaybe<Scalars['Boolean']['input']>;
    trackOrder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    trackOrder_not?: InputMaybe<Scalars['String']['input']>;
    trackOrder_not_contains?: InputMaybe<Scalars['String']['input']>;
    trackOrder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfDataConfigurableTextsNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfDataConfigurableTextsNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfDataConfigurableTextsNestedFilter>>>;
    apply?: InputMaybe<Scalars['String']['input']>;
    apply_contains?: InputMaybe<Scalars['String']['input']>;
    apply_exists?: InputMaybe<Scalars['Boolean']['input']>;
    apply_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    apply_not?: InputMaybe<Scalars['String']['input']>;
    apply_not_contains?: InputMaybe<Scalars['String']['input']>;
    apply_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    cancel?: InputMaybe<Scalars['String']['input']>;
    cancel_contains?: InputMaybe<Scalars['String']['input']>;
    cancel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    cancel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    cancel_not?: InputMaybe<Scalars['String']['input']>;
    cancel_not_contains?: InputMaybe<Scalars['String']['input']>;
    cancel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clear?: InputMaybe<Scalars['String']['input']>;
    clear_contains?: InputMaybe<Scalars['String']['input']>;
    clear_exists?: InputMaybe<Scalars['Boolean']['input']>;
    clear_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    clear_not?: InputMaybe<Scalars['String']['input']>;
    clear_not_contains?: InputMaybe<Scalars['String']['input']>;
    clear_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    delete?: InputMaybe<Scalars['String']['input']>;
    delete_contains?: InputMaybe<Scalars['String']['input']>;
    delete_exists?: InputMaybe<Scalars['Boolean']['input']>;
    delete_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    delete_not?: InputMaybe<Scalars['String']['input']>;
    delete_not_contains?: InputMaybe<Scalars['String']['input']>;
    delete_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    edit?: InputMaybe<Scalars['String']['input']>;
    edit_contains?: InputMaybe<Scalars['String']['input']>;
    edit_exists?: InputMaybe<Scalars['Boolean']['input']>;
    edit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    edit_not?: InputMaybe<Scalars['String']['input']>;
    edit_not_contains?: InputMaybe<Scalars['String']['input']>;
    edit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    hide?: InputMaybe<Scalars['String']['input']>;
    hide_contains?: InputMaybe<Scalars['String']['input']>;
    hide_exists?: InputMaybe<Scalars['Boolean']['input']>;
    hide_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    hide_not?: InputMaybe<Scalars['String']['input']>;
    hide_not_contains?: InputMaybe<Scalars['String']['input']>;
    hide_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logIn?: InputMaybe<Scalars['String']['input']>;
    logIn_contains?: InputMaybe<Scalars['String']['input']>;
    logIn_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logIn_not?: InputMaybe<Scalars['String']['input']>;
    logIn_not_contains?: InputMaybe<Scalars['String']['input']>;
    logIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logOut?: InputMaybe<Scalars['String']['input']>;
    logOut_contains?: InputMaybe<Scalars['String']['input']>;
    logOut_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logOut_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logOut_not?: InputMaybe<Scalars['String']['input']>;
    logOut_not_contains?: InputMaybe<Scalars['String']['input']>;
    logOut_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    renew?: InputMaybe<Scalars['String']['input']>;
    renew_contains?: InputMaybe<Scalars['String']['input']>;
    renew_exists?: InputMaybe<Scalars['Boolean']['input']>;
    renew_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    renew_not?: InputMaybe<Scalars['String']['input']>;
    renew_not_contains?: InputMaybe<Scalars['String']['input']>;
    renew_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    save?: InputMaybe<Scalars['String']['input']>;
    save_contains?: InputMaybe<Scalars['String']['input']>;
    save_exists?: InputMaybe<Scalars['Boolean']['input']>;
    save_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    save_not?: InputMaybe<Scalars['String']['input']>;
    save_not_contains?: InputMaybe<Scalars['String']['input']>;
    save_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    settings?: InputMaybe<Scalars['String']['input']>;
    settings_contains?: InputMaybe<Scalars['String']['input']>;
    settings_exists?: InputMaybe<Scalars['Boolean']['input']>;
    settings_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    settings_not?: InputMaybe<Scalars['String']['input']>;
    settings_not_contains?: InputMaybe<Scalars['String']['input']>;
    settings_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show?: InputMaybe<Scalars['String']['input']>;
    showLess?: InputMaybe<Scalars['String']['input']>;
    showLess_contains?: InputMaybe<Scalars['String']['input']>;
    showLess_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showLess_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showLess_not?: InputMaybe<Scalars['String']['input']>;
    showLess_not_contains?: InputMaybe<Scalars['String']['input']>;
    showLess_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showMore?: InputMaybe<Scalars['String']['input']>;
    showMore_contains?: InputMaybe<Scalars['String']['input']>;
    showMore_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showMore_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showMore_not?: InputMaybe<Scalars['String']['input']>;
    showMore_not_contains?: InputMaybe<Scalars['String']['input']>;
    showMore_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show_contains?: InputMaybe<Scalars['String']['input']>;
    show_exists?: InputMaybe<Scalars['Boolean']['input']>;
    show_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    show_not?: InputMaybe<Scalars['String']['input']>;
    show_not_contains?: InputMaybe<Scalars['String']['input']>;
    show_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    yesterday?: InputMaybe<Scalars['String']['input']>;
    yesterday_contains?: InputMaybe<Scalars['String']['input']>;
    yesterday_exists?: InputMaybe<Scalars['Boolean']['input']>;
    yesterday_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    yesterday_not?: InputMaybe<Scalars['String']['input']>;
    yesterday_not_contains?: InputMaybe<Scalars['String']['input']>;
    yesterday_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfDataDatesNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfDataDatesNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfDataDatesNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    today?: InputMaybe<Scalars['String']['input']>;
    today_contains?: InputMaybe<Scalars['String']['input']>;
    today_exists?: InputMaybe<Scalars['Boolean']['input']>;
    today_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    today_not?: InputMaybe<Scalars['String']['input']>;
    today_not_contains?: InputMaybe<Scalars['String']['input']>;
    today_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    yesterday?: InputMaybe<Scalars['String']['input']>;
    yesterday_contains?: InputMaybe<Scalars['String']['input']>;
    yesterday_exists?: InputMaybe<Scalars['Boolean']['input']>;
    yesterday_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    yesterday_not?: InputMaybe<Scalars['String']['input']>;
    yesterday_not_contains?: InputMaybe<Scalars['String']['input']>;
    yesterday_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfDataErrorsNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfDataErrorsNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfDataErrorsNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    requestError_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
};

export type CfDataValidationNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfDataValidationNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfDataValidationNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    isOptional?: InputMaybe<Scalars['String']['input']>;
    isOptional_contains?: InputMaybe<Scalars['String']['input']>;
    isOptional_exists?: InputMaybe<Scalars['Boolean']['input']>;
    isOptional_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    isOptional_not?: InputMaybe<Scalars['String']['input']>;
    isOptional_not_contains?: InputMaybe<Scalars['String']['input']>;
    isOptional_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    isRequired?: InputMaybe<Scalars['String']['input']>;
    isRequired_contains?: InputMaybe<Scalars['String']['input']>;
    isRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
    isRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    isRequired_not?: InputMaybe<Scalars['String']['input']>;
    isRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
    isRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type CfFooterNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    copyright?: InputMaybe<Scalars['String']['input']>;
    copyright_contains?: InputMaybe<Scalars['String']['input']>;
    copyright_exists?: InputMaybe<Scalars['Boolean']['input']>;
    copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    copyright_not?: InputMaybe<Scalars['String']['input']>;
    copyright_not_contains?: InputMaybe<Scalars['String']['input']>;
    copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logoLabel?: InputMaybe<Scalars['String']['input']>;
    logoLabel_contains?: InputMaybe<Scalars['String']['input']>;
    logoLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logoLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logoLabel_not?: InputMaybe<Scalars['String']['input']>;
    logoLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    logoLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfHeaderNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
    closeMobileMenuLabel?: InputMaybe<Scalars['String']['input']>;
    closeMobileMenuLabel_contains?: InputMaybe<Scalars['String']['input']>;
    closeMobileMenuLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    closeMobileMenuLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    closeMobileMenuLabel_not?: InputMaybe<Scalars['String']['input']>;
    closeMobileMenuLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    closeMobileMenuLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
    languageSwitcherLabel?: InputMaybe<Scalars['String']['input']>;
    languageSwitcherLabel_contains?: InputMaybe<Scalars['String']['input']>;
    languageSwitcherLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    languageSwitcherLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    languageSwitcherLabel_not?: InputMaybe<Scalars['String']['input']>;
    languageSwitcherLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    languageSwitcherLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logoLabel?: InputMaybe<Scalars['String']['input']>;
    logoLabel_contains?: InputMaybe<Scalars['String']['input']>;
    logoLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    logoLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logoLabel_not?: InputMaybe<Scalars['String']['input']>;
    logoLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    logoLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    notification_exists?: InputMaybe<Scalars['Boolean']['input']>;
    openMobileMenuLabel?: InputMaybe<Scalars['String']['input']>;
    openMobileMenuLabel_contains?: InputMaybe<Scalars['String']['input']>;
    openMobileMenuLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
    openMobileMenuLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    openMobileMenuLabel_not?: InputMaybe<Scalars['String']['input']>;
    openMobileMenuLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
    openMobileMenuLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    showContextSwitcher?: InputMaybe<Scalars['Boolean']['input']>;
    showContextSwitcher_exists?: InputMaybe<Scalars['Boolean']['input']>;
    showContextSwitcher_not?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    userInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfPageNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    hasOwnTitle?: InputMaybe<Scalars['Boolean']['input']>;
    hasOwnTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
    hasOwnTitle_not?: InputMaybe<Scalars['Boolean']['input']>;
    parent_exists?: InputMaybe<Scalars['Boolean']['input']>;
    permissions_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    permissions_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    permissions_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    permissions_exists?: InputMaybe<Scalars['Boolean']['input']>;
    seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    slug_contains?: InputMaybe<Scalars['String']['input']>;
    slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
    slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    slug_not?: InputMaybe<Scalars['String']['input']>;
    slug_not_contains?: InputMaybe<Scalars['String']['input']>;
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
    template_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfPageSeoNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfPageSeoNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfPageSeoNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    description?: InputMaybe<Scalars['String']['input']>;
    description_contains?: InputMaybe<Scalars['String']['input']>;
    description_exists?: InputMaybe<Scalars['Boolean']['input']>;
    description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description_not?: InputMaybe<Scalars['String']['input']>;
    description_not_contains?: InputMaybe<Scalars['String']['input']>;
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    image_exists?: InputMaybe<Scalars['Boolean']['input']>;
    keywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    keywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    keywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
    noFollow?: InputMaybe<Scalars['Boolean']['input']>;
    noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
    noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
    noIndex?: InputMaybe<Scalars['Boolean']['input']>;
    noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
    noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfThemeNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfThemeNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfThemeNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    name_contains?: InputMaybe<Scalars['String']['input']>;
    name_exists?: InputMaybe<Scalars['Boolean']['input']>;
    name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name_not?: InputMaybe<Scalars['String']['input']>;
    name_not_contains?: InputMaybe<Scalars['String']['input']>;
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    sys?: InputMaybe<SysFilter>;
};

export type CfcomponentsMultiTypeNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfcomponentsMultiTypeNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfcomponentsMultiTypeNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    sys?: InputMaybe<SysFilter>;
    title?: InputMaybe<Scalars['String']['input']>;
    title_contains?: InputMaybe<Scalars['String']['input']>;
    title_exists?: InputMaybe<Scalars['Boolean']['input']>;
    title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    title_not?: InputMaybe<Scalars['String']['input']>;
    title_not_contains?: InputMaybe<Scalars['String']['input']>;
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfitemsMultiTypeNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfitemsMultiTypeNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfitemsMultiTypeNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    page_exists?: InputMaybe<Scalars['Boolean']['input']>;
    sys?: InputMaybe<SysFilter>;
    url?: InputMaybe<Scalars['String']['input']>;
    url_contains?: InputMaybe<Scalars['String']['input']>;
    url_exists?: InputMaybe<Scalars['Boolean']['input']>;
    url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    url_not?: InputMaybe<Scalars['String']['input']>;
    url_not_contains?: InputMaybe<Scalars['String']['input']>;
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
    BlockContent:
        | (Omit<BlockArticleList, 'articlesCollection' | 'category' | 'linkedFrom' | 'parent'> & {
              articlesCollection?: Maybe<_RefType['BlockArticleListArticlesCollection']>;
              category?: Maybe<_RefType['ComponentCategory']>;
              linkedFrom?: Maybe<_RefType['BlockArticleListLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockCategory, 'category' | 'linkedFrom' | 'parent'> & {
              category?: Maybe<_RefType['ComponentCategory']>;
              linkedFrom?: Maybe<_RefType['BlockCategoryLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockCategoryList, 'categoriesCollection' | 'linkedFrom' | 'parent'> & {
              categoriesCollection?: Maybe<_RefType['BlockCategoryListCategoriesCollection']>;
              linkedFrom?: Maybe<_RefType['BlockCategoryListLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockFaq, 'banner' | 'itemsCollection' | 'linkedFrom'> & {
              banner?: Maybe<_RefType['ComponentBanner']>;
              itemsCollection?: Maybe<_RefType['BlockFaqItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockFaqLinkingCollections']>;
          })
        | (Omit<BlockQuickLinks, 'itemsCollection' | 'linkedFrom'> & {
              itemsCollection?: Maybe<_RefType['BlockQuickLinksItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockQuickLinksLinkingCollections']>;
          })
        | (Omit<
              BlockTicketList,
              'fieldsCollection' | 'labels' | 'linkedFrom' | 'noResults' | 'pagination' | 'table'
          > & {
              fieldsCollection?: Maybe<_RefType['BlockTicketListFieldsCollection']>;
              labels?: Maybe<_RefType['DataConfigurableTexts']>;
              linkedFrom?: Maybe<_RefType['BlockTicketListLinkingCollections']>;
              noResults?: Maybe<_RefType['ComponentNoResult']>;
              pagination?: Maybe<_RefType['ComponentPagination']>;
              table?: Maybe<_RefType['ComponentTable']>;
          });
    ComponentCategoryComponentsItem:
        | (Omit<BlockCategoryList, 'categoriesCollection' | 'linkedFrom' | 'parent'> & {
              categoriesCollection?: Maybe<_RefType['BlockCategoryListCategoriesCollection']>;
              linkedFrom?: Maybe<_RefType['BlockCategoryListLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockFaq, 'banner' | 'itemsCollection' | 'linkedFrom'> & {
              banner?: Maybe<_RefType['ComponentBanner']>;
              itemsCollection?: Maybe<_RefType['BlockFaqItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockFaqLinkingCollections']>;
          })
        | (Omit<BlockQuickLinks, 'itemsCollection' | 'linkedFrom'> & {
              itemsCollection?: Maybe<_RefType['BlockQuickLinksItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockQuickLinksLinkingCollections']>;
          })
        | (Omit<
              BlockTicketList,
              'fieldsCollection' | 'labels' | 'linkedFrom' | 'noResults' | 'pagination' | 'table'
          > & {
              fieldsCollection?: Maybe<_RefType['BlockTicketListFieldsCollection']>;
              labels?: Maybe<_RefType['DataConfigurableTexts']>;
              linkedFrom?: Maybe<_RefType['BlockTicketListLinkingCollections']>;
              noResults?: Maybe<_RefType['ComponentNoResult']>;
              pagination?: Maybe<_RefType['ComponentPagination']>;
              table?: Maybe<_RefType['ComponentTable']>;
          });
    FooterItemsItem:
        | (Omit<ComponentNavigationGroup, 'itemsCollection' | 'linkedFrom' | 'page'> & {
              itemsCollection?: Maybe<_RefType['ComponentNavigationGroupItemsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentNavigationGroupLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentNavigationItem, 'linkedFrom' | 'page'> & {
              linkedFrom?: Maybe<_RefType['ComponentNavigationItemLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          });
    HeaderItemsItem:
        | (Omit<ComponentNavigationGroup, 'itemsCollection' | 'linkedFrom' | 'page'> & {
              itemsCollection?: Maybe<_RefType['ComponentNavigationGroupItemsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentNavigationGroupLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentNavigationItem, 'linkedFrom' | 'page'> & {
              linkedFrom?: Maybe<_RefType['ComponentNavigationItemLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          });
    PageTemplate:
        | (Omit<PageOneColumnTemplate, 'linkedFrom' | 'mainSlotCollection'> & {
              linkedFrom?: Maybe<_RefType['PageOneColumnTemplateLinkingCollections']>;
              mainSlotCollection?: Maybe<_RefType['PageOneColumnTemplateMainSlotCollection']>;
          })
        | (Omit<
              PageTwoColumnTemplate,
              'bottomSlotCollection' | 'leftSlotCollection' | 'linkedFrom' | 'rightSlotCollection' | 'topSlotCollection'
          > & {
              bottomSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateBottomSlotCollection']>;
              leftSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateLeftSlotCollection']>;
              linkedFrom?: Maybe<_RefType['PageTwoColumnTemplateLinkingCollections']>;
              rightSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateRightSlotCollection']>;
              topSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateTopSlotCollection']>;
          });
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
    Entry:
        | (Omit<
              AppConfig,
              | 'linkedFrom'
              | 'signedInFooter'
              | 'signedInHeader'
              | 'signedOutFooter'
              | 'signedOutHeader'
              | 'themesCollection'
          > & {
              linkedFrom?: Maybe<_RefType['AppConfigLinkingCollections']>;
              signedInFooter?: Maybe<_RefType['Footer']>;
              signedInHeader?: Maybe<_RefType['Header']>;
              signedOutFooter?: Maybe<_RefType['Footer']>;
              signedOutHeader?: Maybe<_RefType['Header']>;
              themesCollection?: Maybe<_RefType['AppConfigThemesCollection']>;
          })
        | (Omit<Article, 'content' | 'linkedFrom' | 'parent' | 'seo'> & {
              content?: Maybe<_RefType['ComponentArticle']>;
              linkedFrom?: Maybe<_RefType['ArticleLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
              seo?: Maybe<_RefType['PageSeo']>;
          })
        | (Omit<Author, 'avatar' | 'linkedFrom'> & {
              avatar?: Maybe<_RefType['Asset']>;
              linkedFrom?: Maybe<_RefType['AuthorLinkingCollections']>;
          })
        | (Omit<Block, 'content' | 'linkedFrom' | 'theme'> & {
              content?: Maybe<_RefType['BlockContent']>;
              linkedFrom?: Maybe<_RefType['BlockLinkingCollections']>;
              theme?: Maybe<_RefType['Theme']>;
          })
        | (Omit<BlockArticleList, 'articlesCollection' | 'category' | 'linkedFrom' | 'parent'> & {
              articlesCollection?: Maybe<_RefType['BlockArticleListArticlesCollection']>;
              category?: Maybe<_RefType['ComponentCategory']>;
              linkedFrom?: Maybe<_RefType['BlockArticleListLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockCategory, 'category' | 'linkedFrom' | 'parent'> & {
              category?: Maybe<_RefType['ComponentCategory']>;
              linkedFrom?: Maybe<_RefType['BlockCategoryLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockCategoryList, 'categoriesCollection' | 'linkedFrom' | 'parent'> & {
              categoriesCollection?: Maybe<_RefType['BlockCategoryListCategoriesCollection']>;
              linkedFrom?: Maybe<_RefType['BlockCategoryListLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockFaq, 'banner' | 'itemsCollection' | 'linkedFrom'> & {
              banner?: Maybe<_RefType['ComponentBanner']>;
              itemsCollection?: Maybe<_RefType['BlockFaqItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockFaqLinkingCollections']>;
          })
        | (Omit<BlockQuickLinks, 'itemsCollection' | 'linkedFrom'> & {
              itemsCollection?: Maybe<_RefType['BlockQuickLinksItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockQuickLinksLinkingCollections']>;
          })
        | (Omit<
              BlockTicketList,
              'fieldsCollection' | 'labels' | 'linkedFrom' | 'noResults' | 'pagination' | 'table'
          > & {
              fieldsCollection?: Maybe<_RefType['BlockTicketListFieldsCollection']>;
              labels?: Maybe<_RefType['DataConfigurableTexts']>;
              linkedFrom?: Maybe<_RefType['BlockTicketListLinkingCollections']>;
              noResults?: Maybe<_RefType['ComponentNoResult']>;
              pagination?: Maybe<_RefType['ComponentPagination']>;
              table?: Maybe<_RefType['ComponentTable']>;
          })
        | (Omit<ComponentArticle, 'author' | 'category' | 'linkedFrom' | 'sectionsCollection'> & {
              author?: Maybe<_RefType['Author']>;
              category?: Maybe<_RefType['ComponentCategory']>;
              linkedFrom?: Maybe<_RefType['ComponentArticleLinkingCollections']>;
              sectionsCollection?: Maybe<_RefType['ComponentArticleSectionsCollection']>;
          })
        | (Omit<ComponentArticleSection, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentArticleSectionLinkingCollections']>;
          })
        | (Omit<ComponentBanner, 'link' | 'linkedFrom'> & {
              link?: Maybe<_RefType['ComponentLink']>;
              linkedFrom?: Maybe<_RefType['ComponentBannerLinkingCollections']>;
          })
        | (Omit<ComponentCategory, 'componentsCollection' | 'linkedFrom' | 'parent'> & {
              componentsCollection?: Maybe<_RefType['ComponentCategoryComponentsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentCategoryLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentFaqItem, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentFaqItemLinkingCollections']>;
          })
        | (Omit<ComponentFieldMapping, 'linkedFrom' | 'valuesCollection'> & {
              linkedFrom?: Maybe<_RefType['ComponentFieldMappingLinkingCollections']>;
              valuesCollection?: Maybe<_RefType['ComponentFieldMappingValuesCollection']>;
          })
        | (Omit<ComponentKeyValue, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentKeyValueLinkingCollections']>;
          })
        | (Omit<ComponentLink, 'linkedFrom' | 'page'> & {
              linkedFrom?: Maybe<_RefType['ComponentLinkLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentMessageSimple, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentMessageSimpleLinkingCollections']>;
          })
        | (Omit<ComponentNavigationGroup, 'itemsCollection' | 'linkedFrom' | 'page'> & {
              itemsCollection?: Maybe<_RefType['ComponentNavigationGroupItemsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentNavigationGroupLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentNavigationItem, 'linkedFrom' | 'page'> & {
              linkedFrom?: Maybe<_RefType['ComponentNavigationItemLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentNoResult, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentNoResultLinkingCollections']>;
          })
        | (Omit<ComponentPagination, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentPaginationLinkingCollections']>;
          })
        | (Omit<ComponentRoles, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentRolesLinkingCollections']> })
        | (Omit<ComponentTable, 'columnsCollection' | 'linkedFrom'> & {
              columnsCollection?: Maybe<_RefType['ComponentTableColumnsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentTableLinkingCollections']>;
          })
        | (Omit<ComponentTableColumn, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentTableColumnLinkingCollections']>;
          })
        | (Omit<ConfigurableTexts, 'actions' | 'dates' | 'errors' | 'linkedFrom' | 'validation'> & {
              actions?: Maybe<_RefType['DataActions']>;
              dates?: Maybe<_RefType['DataDates']>;
              errors?: Maybe<_RefType['DataErrors']>;
              linkedFrom?: Maybe<_RefType['ConfigurableTextsLinkingCollections']>;
              validation?: Maybe<_RefType['DataValidation']>;
          })
        | (Omit<DataActions, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['DataActionsLinkingCollections']> })
        | (Omit<DataConfigurableTexts, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['DataConfigurableTextsLinkingCollections']>;
          })
        | (Omit<DataDates, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['DataDatesLinkingCollections']> })
        | (Omit<DataErrors, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['DataErrorsLinkingCollections']> })
        | (Omit<DataValidation, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['DataValidationLinkingCollections']> })
        | (Omit<Footer, 'itemsCollection' | 'linkedFrom' | 'logo'> & {
              itemsCollection?: Maybe<_RefType['FooterItemsCollection']>;
              linkedFrom?: Maybe<_RefType['FooterLinkingCollections']>;
              logo?: Maybe<_RefType['Asset']>;
          })
        | (Omit<Header, 'itemsCollection' | 'linkedFrom' | 'logo' | 'notification' | 'userInfo'> & {
              itemsCollection?: Maybe<_RefType['HeaderItemsCollection']>;
              linkedFrom?: Maybe<_RefType['HeaderLinkingCollections']>;
              logo?: Maybe<_RefType['Asset']>;
              notification?: Maybe<_RefType['Page']>;
              userInfo?: Maybe<_RefType['Page']>;
          })
        | (Omit<Page, 'linkedFrom' | 'parent' | 'seo' | 'template'> & {
              linkedFrom?: Maybe<_RefType['PageLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
              seo?: Maybe<_RefType['PageSeo']>;
              template?: Maybe<_RefType['PageTemplate']>;
          })
        | (Omit<PageOneColumnTemplate, 'linkedFrom' | 'mainSlotCollection'> & {
              linkedFrom?: Maybe<_RefType['PageOneColumnTemplateLinkingCollections']>;
              mainSlotCollection?: Maybe<_RefType['PageOneColumnTemplateMainSlotCollection']>;
          })
        | (Omit<PageSeo, 'image' | 'linkedFrom'> & {
              image?: Maybe<_RefType['Asset']>;
              linkedFrom?: Maybe<_RefType['PageSeoLinkingCollections']>;
          })
        | (Omit<
              PageTwoColumnTemplate,
              'bottomSlotCollection' | 'leftSlotCollection' | 'linkedFrom' | 'rightSlotCollection' | 'topSlotCollection'
          > & {
              bottomSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateBottomSlotCollection']>;
              leftSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateLeftSlotCollection']>;
              linkedFrom?: Maybe<_RefType['PageTwoColumnTemplateLinkingCollections']>;
              rightSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateRightSlotCollection']>;
              topSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateTopSlotCollection']>;
          })
        | (Omit<Theme, 'linkedFrom' | 'logo'> & {
              linkedFrom?: Maybe<_RefType['ThemeLinkingCollections']>;
              logo?: Maybe<_RefType['Asset']>;
          });
    _Node:
        | (Omit<
              AppConfig,
              | 'linkedFrom'
              | 'signedInFooter'
              | 'signedInHeader'
              | 'signedOutFooter'
              | 'signedOutHeader'
              | 'themesCollection'
          > & {
              linkedFrom?: Maybe<_RefType['AppConfigLinkingCollections']>;
              signedInFooter?: Maybe<_RefType['Footer']>;
              signedInHeader?: Maybe<_RefType['Header']>;
              signedOutFooter?: Maybe<_RefType['Footer']>;
              signedOutHeader?: Maybe<_RefType['Header']>;
              themesCollection?: Maybe<_RefType['AppConfigThemesCollection']>;
          })
        | (Omit<Article, 'content' | 'linkedFrom' | 'parent' | 'seo'> & {
              content?: Maybe<_RefType['ComponentArticle']>;
              linkedFrom?: Maybe<_RefType['ArticleLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
              seo?: Maybe<_RefType['PageSeo']>;
          })
        | (Omit<Author, 'avatar' | 'linkedFrom'> & {
              avatar?: Maybe<_RefType['Asset']>;
              linkedFrom?: Maybe<_RefType['AuthorLinkingCollections']>;
          })
        | (Omit<Block, 'content' | 'linkedFrom' | 'theme'> & {
              content?: Maybe<_RefType['BlockContent']>;
              linkedFrom?: Maybe<_RefType['BlockLinkingCollections']>;
              theme?: Maybe<_RefType['Theme']>;
          })
        | (Omit<BlockArticleList, 'articlesCollection' | 'category' | 'linkedFrom' | 'parent'> & {
              articlesCollection?: Maybe<_RefType['BlockArticleListArticlesCollection']>;
              category?: Maybe<_RefType['ComponentCategory']>;
              linkedFrom?: Maybe<_RefType['BlockArticleListLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockCategory, 'category' | 'linkedFrom' | 'parent'> & {
              category?: Maybe<_RefType['ComponentCategory']>;
              linkedFrom?: Maybe<_RefType['BlockCategoryLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockCategoryList, 'categoriesCollection' | 'linkedFrom' | 'parent'> & {
              categoriesCollection?: Maybe<_RefType['BlockCategoryListCategoriesCollection']>;
              linkedFrom?: Maybe<_RefType['BlockCategoryListLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<BlockFaq, 'banner' | 'itemsCollection' | 'linkedFrom'> & {
              banner?: Maybe<_RefType['ComponentBanner']>;
              itemsCollection?: Maybe<_RefType['BlockFaqItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockFaqLinkingCollections']>;
          })
        | (Omit<BlockQuickLinks, 'itemsCollection' | 'linkedFrom'> & {
              itemsCollection?: Maybe<_RefType['BlockQuickLinksItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockQuickLinksLinkingCollections']>;
          })
        | (Omit<
              BlockTicketList,
              'fieldsCollection' | 'labels' | 'linkedFrom' | 'noResults' | 'pagination' | 'table'
          > & {
              fieldsCollection?: Maybe<_RefType['BlockTicketListFieldsCollection']>;
              labels?: Maybe<_RefType['DataConfigurableTexts']>;
              linkedFrom?: Maybe<_RefType['BlockTicketListLinkingCollections']>;
              noResults?: Maybe<_RefType['ComponentNoResult']>;
              pagination?: Maybe<_RefType['ComponentPagination']>;
              table?: Maybe<_RefType['ComponentTable']>;
          })
        | (Omit<ComponentArticle, 'author' | 'category' | 'linkedFrom' | 'sectionsCollection'> & {
              author?: Maybe<_RefType['Author']>;
              category?: Maybe<_RefType['ComponentCategory']>;
              linkedFrom?: Maybe<_RefType['ComponentArticleLinkingCollections']>;
              sectionsCollection?: Maybe<_RefType['ComponentArticleSectionsCollection']>;
          })
        | (Omit<ComponentArticleSection, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentArticleSectionLinkingCollections']>;
          })
        | (Omit<ComponentBanner, 'link' | 'linkedFrom'> & {
              link?: Maybe<_RefType['ComponentLink']>;
              linkedFrom?: Maybe<_RefType['ComponentBannerLinkingCollections']>;
          })
        | (Omit<ComponentCategory, 'componentsCollection' | 'linkedFrom' | 'parent'> & {
              componentsCollection?: Maybe<_RefType['ComponentCategoryComponentsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentCategoryLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentFaqItem, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentFaqItemLinkingCollections']>;
          })
        | (Omit<ComponentFieldMapping, 'linkedFrom' | 'valuesCollection'> & {
              linkedFrom?: Maybe<_RefType['ComponentFieldMappingLinkingCollections']>;
              valuesCollection?: Maybe<_RefType['ComponentFieldMappingValuesCollection']>;
          })
        | (Omit<ComponentKeyValue, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentKeyValueLinkingCollections']>;
          })
        | (Omit<ComponentLink, 'linkedFrom' | 'page'> & {
              linkedFrom?: Maybe<_RefType['ComponentLinkLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentMessageSimple, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentMessageSimpleLinkingCollections']>;
          })
        | (Omit<ComponentNavigationGroup, 'itemsCollection' | 'linkedFrom' | 'page'> & {
              itemsCollection?: Maybe<_RefType['ComponentNavigationGroupItemsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentNavigationGroupLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentNavigationItem, 'linkedFrom' | 'page'> & {
              linkedFrom?: Maybe<_RefType['ComponentNavigationItemLinkingCollections']>;
              page?: Maybe<_RefType['Page']>;
          })
        | (Omit<ComponentNoResult, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentNoResultLinkingCollections']>;
          })
        | (Omit<ComponentPagination, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentPaginationLinkingCollections']>;
          })
        | (Omit<ComponentRoles, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentRolesLinkingCollections']> })
        | (Omit<ComponentTable, 'columnsCollection' | 'linkedFrom'> & {
              columnsCollection?: Maybe<_RefType['ComponentTableColumnsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentTableLinkingCollections']>;
          })
        | (Omit<ComponentTableColumn, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentTableColumnLinkingCollections']>;
          })
        | (Omit<ConfigurableTexts, 'actions' | 'dates' | 'errors' | 'linkedFrom' | 'validation'> & {
              actions?: Maybe<_RefType['DataActions']>;
              dates?: Maybe<_RefType['DataDates']>;
              errors?: Maybe<_RefType['DataErrors']>;
              linkedFrom?: Maybe<_RefType['ConfigurableTextsLinkingCollections']>;
              validation?: Maybe<_RefType['DataValidation']>;
          })
        | (Omit<DataActions, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['DataActionsLinkingCollections']> })
        | (Omit<DataConfigurableTexts, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['DataConfigurableTextsLinkingCollections']>;
          })
        | (Omit<DataDates, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['DataDatesLinkingCollections']> })
        | (Omit<DataErrors, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['DataErrorsLinkingCollections']> })
        | (Omit<DataValidation, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['DataValidationLinkingCollections']> })
        | (Omit<Footer, 'itemsCollection' | 'linkedFrom' | 'logo'> & {
              itemsCollection?: Maybe<_RefType['FooterItemsCollection']>;
              linkedFrom?: Maybe<_RefType['FooterLinkingCollections']>;
              logo?: Maybe<_RefType['Asset']>;
          })
        | (Omit<Header, 'itemsCollection' | 'linkedFrom' | 'logo' | 'notification' | 'userInfo'> & {
              itemsCollection?: Maybe<_RefType['HeaderItemsCollection']>;
              linkedFrom?: Maybe<_RefType['HeaderLinkingCollections']>;
              logo?: Maybe<_RefType['Asset']>;
              notification?: Maybe<_RefType['Page']>;
              userInfo?: Maybe<_RefType['Page']>;
          })
        | (Omit<Page, 'linkedFrom' | 'parent' | 'seo' | 'template'> & {
              linkedFrom?: Maybe<_RefType['PageLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
              seo?: Maybe<_RefType['PageSeo']>;
              template?: Maybe<_RefType['PageTemplate']>;
          })
        | (Omit<PageOneColumnTemplate, 'linkedFrom' | 'mainSlotCollection'> & {
              linkedFrom?: Maybe<_RefType['PageOneColumnTemplateLinkingCollections']>;
              mainSlotCollection?: Maybe<_RefType['PageOneColumnTemplateMainSlotCollection']>;
          })
        | (Omit<PageSeo, 'image' | 'linkedFrom'> & {
              image?: Maybe<_RefType['Asset']>;
              linkedFrom?: Maybe<_RefType['PageSeoLinkingCollections']>;
          })
        | (Omit<
              PageTwoColumnTemplate,
              'bottomSlotCollection' | 'leftSlotCollection' | 'linkedFrom' | 'rightSlotCollection' | 'topSlotCollection'
          > & {
              bottomSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateBottomSlotCollection']>;
              leftSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateLeftSlotCollection']>;
              linkedFrom?: Maybe<_RefType['PageTwoColumnTemplateLinkingCollections']>;
              rightSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateRightSlotCollection']>;
              topSlotCollection?: Maybe<_RefType['PageTwoColumnTemplateTopSlotCollection']>;
          })
        | (Omit<Theme, 'linkedFrom' | 'logo'> & {
              linkedFrom?: Maybe<_RefType['ThemeLinkingCollections']>;
              logo?: Maybe<_RefType['Asset']>;
          });
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    AppConfig: ResolverTypeWrapper<
        Omit<
            AppConfig,
            | 'linkedFrom'
            | 'signedInFooter'
            | 'signedInHeader'
            | 'signedOutFooter'
            | 'signedOutHeader'
            | 'themesCollection'
        > & {
            linkedFrom?: Maybe<ResolversTypes['AppConfigLinkingCollections']>;
            signedInFooter?: Maybe<ResolversTypes['Footer']>;
            signedInHeader?: Maybe<ResolversTypes['Header']>;
            signedOutFooter?: Maybe<ResolversTypes['Footer']>;
            signedOutHeader?: Maybe<ResolversTypes['Header']>;
            themesCollection?: Maybe<ResolversTypes['AppConfigThemesCollection']>;
        }
    >;
    AppConfigCollection: ResolverTypeWrapper<
        Omit<AppConfigCollection, 'items'> & { items: Array<Maybe<ResolversTypes['AppConfig']>> }
    >;
    AppConfigFilter: AppConfigFilter;
    AppConfigLinkingCollections: ResolverTypeWrapper<
        Omit<AppConfigLinkingCollections, 'entryCollection'> & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    AppConfigOrder: AppConfigOrder;
    AppConfigThemesCollection: ResolverTypeWrapper<
        Omit<AppConfigThemesCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Theme']>> }
    >;
    AppConfigThemesCollectionOrder: AppConfigThemesCollectionOrder;
    Article: ResolverTypeWrapper<
        Omit<Article, 'content' | 'linkedFrom' | 'parent' | 'seo'> & {
            content?: Maybe<ResolversTypes['ComponentArticle']>;
            linkedFrom?: Maybe<ResolversTypes['ArticleLinkingCollections']>;
            parent?: Maybe<ResolversTypes['Page']>;
            seo?: Maybe<ResolversTypes['PageSeo']>;
        }
    >;
    ArticleCollection: ResolverTypeWrapper<
        Omit<ArticleCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Article']>> }
    >;
    ArticleFilter: ArticleFilter;
    ArticleLinkingCollections: ResolverTypeWrapper<
        Omit<ArticleLinkingCollections, 'blockArticleListCollection' | 'entryCollection'> & {
            blockArticleListCollection?: Maybe<ResolversTypes['BlockArticleListCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ArticleLinkingCollectionsBlockArticleListCollectionOrder: ArticleLinkingCollectionsBlockArticleListCollectionOrder;
    ArticleOrder: ArticleOrder;
    Asset: ResolverTypeWrapper<
        Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['AssetLinkingCollections']> }
    >;
    AssetCollection: ResolverTypeWrapper<
        Omit<AssetCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Asset']>> }
    >;
    AssetFilter: AssetFilter;
    AssetLinkingCollections: ResolverTypeWrapper<
        Omit<
            AssetLinkingCollections,
            | 'authorCollection'
            | 'entryCollection'
            | 'footerCollection'
            | 'headerCollection'
            | 'pageSeoCollection'
            | 'themeCollection'
        > & {
            authorCollection?: Maybe<ResolversTypes['AuthorCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
            footerCollection?: Maybe<ResolversTypes['FooterCollection']>;
            headerCollection?: Maybe<ResolversTypes['HeaderCollection']>;
            pageSeoCollection?: Maybe<ResolversTypes['PageSeoCollection']>;
            themeCollection?: Maybe<ResolversTypes['ThemeCollection']>;
        }
    >;
    AssetOrder: AssetOrder;
    Author: ResolverTypeWrapper<
        Omit<Author, 'avatar' | 'linkedFrom'> & {
            avatar?: Maybe<ResolversTypes['Asset']>;
            linkedFrom?: Maybe<ResolversTypes['AuthorLinkingCollections']>;
        }
    >;
    AuthorCollection: ResolverTypeWrapper<
        Omit<AuthorCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Author']>> }
    >;
    AuthorFilter: AuthorFilter;
    AuthorLinkingCollections: ResolverTypeWrapper<
        Omit<AuthorLinkingCollections, 'componentArticleCollection' | 'entryCollection'> & {
            componentArticleCollection?: Maybe<ResolversTypes['ComponentArticleCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    AuthorLinkingCollectionsComponentArticleCollectionOrder: AuthorLinkingCollectionsComponentArticleCollectionOrder;
    AuthorOrder: AuthorOrder;
    Block: ResolverTypeWrapper<
        Omit<Block, 'content' | 'linkedFrom' | 'theme'> & {
            content?: Maybe<ResolversTypes['BlockContent']>;
            linkedFrom?: Maybe<ResolversTypes['BlockLinkingCollections']>;
            theme?: Maybe<ResolversTypes['Theme']>;
        }
    >;
    BlockArticleList: ResolverTypeWrapper<
        Omit<BlockArticleList, 'articlesCollection' | 'category' | 'linkedFrom' | 'parent'> & {
            articlesCollection?: Maybe<ResolversTypes['BlockArticleListArticlesCollection']>;
            category?: Maybe<ResolversTypes['ComponentCategory']>;
            linkedFrom?: Maybe<ResolversTypes['BlockArticleListLinkingCollections']>;
            parent?: Maybe<ResolversTypes['Page']>;
        }
    >;
    BlockArticleListArticlesCollection: ResolverTypeWrapper<
        Omit<BlockArticleListArticlesCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Article']>> }
    >;
    BlockArticleListArticlesCollectionOrder: BlockArticleListArticlesCollectionOrder;
    BlockArticleListCollection: ResolverTypeWrapper<
        Omit<BlockArticleListCollection, 'items'> & { items: Array<Maybe<ResolversTypes['BlockArticleList']>> }
    >;
    BlockArticleListFilter: BlockArticleListFilter;
    BlockArticleListLinkingCollections: ResolverTypeWrapper<
        Omit<BlockArticleListLinkingCollections, 'blockCollection' | 'entryCollection'> & {
            blockCollection?: Maybe<ResolversTypes['BlockCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    BlockArticleListLinkingCollectionsBlockCollectionOrder: BlockArticleListLinkingCollectionsBlockCollectionOrder;
    BlockArticleListOrder: BlockArticleListOrder;
    BlockCategory: ResolverTypeWrapper<
        Omit<BlockCategory, 'category' | 'linkedFrom' | 'parent'> & {
            category?: Maybe<ResolversTypes['ComponentCategory']>;
            linkedFrom?: Maybe<ResolversTypes['BlockCategoryLinkingCollections']>;
            parent?: Maybe<ResolversTypes['Page']>;
        }
    >;
    BlockCategoryCollection: ResolverTypeWrapper<
        Omit<BlockCategoryCollection, 'items'> & { items: Array<Maybe<ResolversTypes['BlockCategory']>> }
    >;
    BlockCategoryFilter: BlockCategoryFilter;
    BlockCategoryLinkingCollections: ResolverTypeWrapper<
        Omit<BlockCategoryLinkingCollections, 'blockCollection' | 'entryCollection'> & {
            blockCollection?: Maybe<ResolversTypes['BlockCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    BlockCategoryLinkingCollectionsBlockCollectionOrder: BlockCategoryLinkingCollectionsBlockCollectionOrder;
    BlockCategoryList: ResolverTypeWrapper<
        Omit<BlockCategoryList, 'categoriesCollection' | 'linkedFrom' | 'parent'> & {
            categoriesCollection?: Maybe<ResolversTypes['BlockCategoryListCategoriesCollection']>;
            linkedFrom?: Maybe<ResolversTypes['BlockCategoryListLinkingCollections']>;
            parent?: Maybe<ResolversTypes['Page']>;
        }
    >;
    BlockCategoryListCategoriesCollection: ResolverTypeWrapper<
        Omit<BlockCategoryListCategoriesCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentCategory']>>;
        }
    >;
    BlockCategoryListCategoriesCollectionOrder: BlockCategoryListCategoriesCollectionOrder;
    BlockCategoryListCollection: ResolverTypeWrapper<
        Omit<BlockCategoryListCollection, 'items'> & { items: Array<Maybe<ResolversTypes['BlockCategoryList']>> }
    >;
    BlockCategoryListFilter: BlockCategoryListFilter;
    BlockCategoryListLinkingCollections: ResolverTypeWrapper<
        Omit<
            BlockCategoryListLinkingCollections,
            'blockCollection' | 'componentCategoryCollection' | 'entryCollection'
        > & {
            blockCollection?: Maybe<ResolversTypes['BlockCollection']>;
            componentCategoryCollection?: Maybe<ResolversTypes['ComponentCategoryCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    BlockCategoryListLinkingCollectionsBlockCollectionOrder: BlockCategoryListLinkingCollectionsBlockCollectionOrder;
    BlockCategoryListLinkingCollectionsComponentCategoryCollectionOrder: BlockCategoryListLinkingCollectionsComponentCategoryCollectionOrder;
    BlockCategoryListOrder: BlockCategoryListOrder;
    BlockCategoryOrder: BlockCategoryOrder;
    BlockCollection: ResolverTypeWrapper<
        Omit<BlockCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Block']>> }
    >;
    BlockContent: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['BlockContent']>;
    BlockFaq: ResolverTypeWrapper<
        Omit<BlockFaq, 'banner' | 'itemsCollection' | 'linkedFrom'> & {
            banner?: Maybe<ResolversTypes['ComponentBanner']>;
            itemsCollection?: Maybe<ResolversTypes['BlockFaqItemsCollection']>;
            linkedFrom?: Maybe<ResolversTypes['BlockFaqLinkingCollections']>;
        }
    >;
    BlockFaqCollection: ResolverTypeWrapper<
        Omit<BlockFaqCollection, 'items'> & { items: Array<Maybe<ResolversTypes['BlockFaq']>> }
    >;
    BlockFaqFilter: BlockFaqFilter;
    BlockFaqItemsCollection: ResolverTypeWrapper<
        Omit<BlockFaqItemsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentFaqItem']>> }
    >;
    BlockFaqItemsCollectionOrder: BlockFaqItemsCollectionOrder;
    BlockFaqLinkingCollections: ResolverTypeWrapper<
        Omit<BlockFaqLinkingCollections, 'blockCollection' | 'componentCategoryCollection' | 'entryCollection'> & {
            blockCollection?: Maybe<ResolversTypes['BlockCollection']>;
            componentCategoryCollection?: Maybe<ResolversTypes['ComponentCategoryCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    BlockFaqLinkingCollectionsBlockCollectionOrder: BlockFaqLinkingCollectionsBlockCollectionOrder;
    BlockFaqLinkingCollectionsComponentCategoryCollectionOrder: BlockFaqLinkingCollectionsComponentCategoryCollectionOrder;
    BlockFaqOrder: BlockFaqOrder;
    BlockFilter: BlockFilter;
    BlockLinkingCollections: ResolverTypeWrapper<
        Omit<
            BlockLinkingCollections,
            'entryCollection' | 'pageOneColumnTemplateCollection' | 'pageTwoColumnTemplateCollection'
        > & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
            pageOneColumnTemplateCollection?: Maybe<ResolversTypes['PageOneColumnTemplateCollection']>;
            pageTwoColumnTemplateCollection?: Maybe<ResolversTypes['PageTwoColumnTemplateCollection']>;
        }
    >;
    BlockLinkingCollectionsPageOneColumnTemplateCollectionOrder: BlockLinkingCollectionsPageOneColumnTemplateCollectionOrder;
    BlockLinkingCollectionsPageTwoColumnTemplateCollectionOrder: BlockLinkingCollectionsPageTwoColumnTemplateCollectionOrder;
    BlockOrder: BlockOrder;
    BlockQuickLinks: ResolverTypeWrapper<
        Omit<BlockQuickLinks, 'itemsCollection' | 'linkedFrom'> & {
            itemsCollection?: Maybe<ResolversTypes['BlockQuickLinksItemsCollection']>;
            linkedFrom?: Maybe<ResolversTypes['BlockQuickLinksLinkingCollections']>;
        }
    >;
    BlockQuickLinksCollection: ResolverTypeWrapper<
        Omit<BlockQuickLinksCollection, 'items'> & { items: Array<Maybe<ResolversTypes['BlockQuickLinks']>> }
    >;
    BlockQuickLinksFilter: BlockQuickLinksFilter;
    BlockQuickLinksItemsCollection: ResolverTypeWrapper<
        Omit<BlockQuickLinksItemsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentLink']>> }
    >;
    BlockQuickLinksItemsCollectionOrder: BlockQuickLinksItemsCollectionOrder;
    BlockQuickLinksLinkingCollections: ResolverTypeWrapper<
        Omit<
            BlockQuickLinksLinkingCollections,
            'blockCollection' | 'componentCategoryCollection' | 'entryCollection'
        > & {
            blockCollection?: Maybe<ResolversTypes['BlockCollection']>;
            componentCategoryCollection?: Maybe<ResolversTypes['ComponentCategoryCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    BlockQuickLinksLinkingCollectionsBlockCollectionOrder: BlockQuickLinksLinkingCollectionsBlockCollectionOrder;
    BlockQuickLinksLinkingCollectionsComponentCategoryCollectionOrder: BlockQuickLinksLinkingCollectionsComponentCategoryCollectionOrder;
    BlockQuickLinksOrder: BlockQuickLinksOrder;
    BlockTicketList: ResolverTypeWrapper<
        Omit<BlockTicketList, 'fieldsCollection' | 'labels' | 'linkedFrom' | 'noResults' | 'pagination' | 'table'> & {
            fieldsCollection?: Maybe<ResolversTypes['BlockTicketListFieldsCollection']>;
            labels?: Maybe<ResolversTypes['DataConfigurableTexts']>;
            linkedFrom?: Maybe<ResolversTypes['BlockTicketListLinkingCollections']>;
            noResults?: Maybe<ResolversTypes['ComponentNoResult']>;
            pagination?: Maybe<ResolversTypes['ComponentPagination']>;
            table?: Maybe<ResolversTypes['ComponentTable']>;
        }
    >;
    BlockTicketListCollection: ResolverTypeWrapper<
        Omit<BlockTicketListCollection, 'items'> & { items: Array<Maybe<ResolversTypes['BlockTicketList']>> }
    >;
    BlockTicketListFieldsCollection: ResolverTypeWrapper<
        Omit<BlockTicketListFieldsCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentFieldMapping']>>;
        }
    >;
    BlockTicketListFieldsCollectionOrder: BlockTicketListFieldsCollectionOrder;
    BlockTicketListFilter: BlockTicketListFilter;
    BlockTicketListLinkingCollections: ResolverTypeWrapper<
        Omit<
            BlockTicketListLinkingCollections,
            'blockCollection' | 'componentCategoryCollection' | 'entryCollection'
        > & {
            blockCollection?: Maybe<ResolversTypes['BlockCollection']>;
            componentCategoryCollection?: Maybe<ResolversTypes['ComponentCategoryCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    BlockTicketListLinkingCollectionsBlockCollectionOrder: BlockTicketListLinkingCollectionsBlockCollectionOrder;
    BlockTicketListLinkingCollectionsComponentCategoryCollectionOrder: BlockTicketListLinkingCollectionsComponentCategoryCollectionOrder;
    BlockTicketListOrder: BlockTicketListOrder;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    ComponentArticle: ResolverTypeWrapper<
        Omit<ComponentArticle, 'author' | 'category' | 'linkedFrom' | 'sectionsCollection'> & {
            author?: Maybe<ResolversTypes['Author']>;
            category?: Maybe<ResolversTypes['ComponentCategory']>;
            linkedFrom?: Maybe<ResolversTypes['ComponentArticleLinkingCollections']>;
            sectionsCollection?: Maybe<ResolversTypes['ComponentArticleSectionsCollection']>;
        }
    >;
    ComponentArticleCollection: ResolverTypeWrapper<
        Omit<ComponentArticleCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentArticle']>> }
    >;
    ComponentArticleFilter: ComponentArticleFilter;
    ComponentArticleLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentArticleLinkingCollections, 'articleCollection' | 'entryCollection'> & {
            articleCollection?: Maybe<ResolversTypes['ArticleCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentArticleLinkingCollectionsArticleCollectionOrder: ComponentArticleLinkingCollectionsArticleCollectionOrder;
    ComponentArticleOrder: ComponentArticleOrder;
    ComponentArticleSection: ResolverTypeWrapper<
        Omit<ComponentArticleSection, 'linkedFrom'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentArticleSectionLinkingCollections']>;
        }
    >;
    ComponentArticleSectionCollection: ResolverTypeWrapper<
        Omit<ComponentArticleSectionCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentArticleSection']>>;
        }
    >;
    ComponentArticleSectionFilter: ComponentArticleSectionFilter;
    ComponentArticleSectionLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentArticleSectionLinkingCollections, 'componentArticleCollection' | 'entryCollection'> & {
            componentArticleCollection?: Maybe<ResolversTypes['ComponentArticleCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentArticleSectionLinkingCollectionsComponentArticleCollectionOrder: ComponentArticleSectionLinkingCollectionsComponentArticleCollectionOrder;
    ComponentArticleSectionOrder: ComponentArticleSectionOrder;
    ComponentArticleSectionsCollection: ResolverTypeWrapper<
        Omit<ComponentArticleSectionsCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentArticleSection']>>;
        }
    >;
    ComponentArticleSectionsCollectionOrder: ComponentArticleSectionsCollectionOrder;
    ComponentBanner: ResolverTypeWrapper<
        Omit<ComponentBanner, 'link' | 'linkedFrom'> & {
            link?: Maybe<ResolversTypes['ComponentLink']>;
            linkedFrom?: Maybe<ResolversTypes['ComponentBannerLinkingCollections']>;
        }
    >;
    ComponentBannerCollection: ResolverTypeWrapper<
        Omit<ComponentBannerCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentBanner']>> }
    >;
    ComponentBannerFilter: ComponentBannerFilter;
    ComponentBannerLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentBannerLinkingCollections, 'blockFaqCollection' | 'entryCollection'> & {
            blockFaqCollection?: Maybe<ResolversTypes['BlockFaqCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentBannerLinkingCollectionsBlockFaqCollectionOrder: ComponentBannerLinkingCollectionsBlockFaqCollectionOrder;
    ComponentBannerOrder: ComponentBannerOrder;
    ComponentCategory: ResolverTypeWrapper<
        Omit<ComponentCategory, 'componentsCollection' | 'linkedFrom' | 'parent'> & {
            componentsCollection?: Maybe<ResolversTypes['ComponentCategoryComponentsCollection']>;
            linkedFrom?: Maybe<ResolversTypes['ComponentCategoryLinkingCollections']>;
            parent?: Maybe<ResolversTypes['Page']>;
        }
    >;
    ComponentCategoryCollection: ResolverTypeWrapper<
        Omit<ComponentCategoryCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentCategory']>> }
    >;
    ComponentCategoryComponentsCollection: ResolverTypeWrapper<
        Omit<ComponentCategoryComponentsCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentCategoryComponentsItem']>>;
        }
    >;
    ComponentCategoryComponentsFilter: ComponentCategoryComponentsFilter;
    ComponentCategoryComponentsItem: ResolverTypeWrapper<
        ResolversUnionTypes<ResolversTypes>['ComponentCategoryComponentsItem']
    >;
    ComponentCategoryFilter: ComponentCategoryFilter;
    ComponentCategoryLinkingCollections: ResolverTypeWrapper<
        Omit<
            ComponentCategoryLinkingCollections,
            | 'blockArticleListCollection'
            | 'blockCategoryCollection'
            | 'blockCategoryListCollection'
            | 'componentArticleCollection'
            | 'entryCollection'
        > & {
            blockArticleListCollection?: Maybe<ResolversTypes['BlockArticleListCollection']>;
            blockCategoryCollection?: Maybe<ResolversTypes['BlockCategoryCollection']>;
            blockCategoryListCollection?: Maybe<ResolversTypes['BlockCategoryListCollection']>;
            componentArticleCollection?: Maybe<ResolversTypes['ComponentArticleCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentCategoryLinkingCollectionsBlockArticleListCollectionOrder: ComponentCategoryLinkingCollectionsBlockArticleListCollectionOrder;
    ComponentCategoryLinkingCollectionsBlockCategoryCollectionOrder: ComponentCategoryLinkingCollectionsBlockCategoryCollectionOrder;
    ComponentCategoryLinkingCollectionsBlockCategoryListCollectionOrder: ComponentCategoryLinkingCollectionsBlockCategoryListCollectionOrder;
    ComponentCategoryLinkingCollectionsComponentArticleCollectionOrder: ComponentCategoryLinkingCollectionsComponentArticleCollectionOrder;
    ComponentCategoryOrder: ComponentCategoryOrder;
    ComponentFaqItem: ResolverTypeWrapper<
        Omit<ComponentFaqItem, 'linkedFrom'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentFaqItemLinkingCollections']>;
        }
    >;
    ComponentFaqItemCollection: ResolverTypeWrapper<
        Omit<ComponentFaqItemCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentFaqItem']>> }
    >;
    ComponentFaqItemFilter: ComponentFaqItemFilter;
    ComponentFaqItemLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentFaqItemLinkingCollections, 'blockFaqCollection' | 'entryCollection'> & {
            blockFaqCollection?: Maybe<ResolversTypes['BlockFaqCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentFaqItemLinkingCollectionsBlockFaqCollectionOrder: ComponentFaqItemLinkingCollectionsBlockFaqCollectionOrder;
    ComponentFaqItemOrder: ComponentFaqItemOrder;
    ComponentFieldMapping: ResolverTypeWrapper<
        Omit<ComponentFieldMapping, 'linkedFrom' | 'valuesCollection'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentFieldMappingLinkingCollections']>;
            valuesCollection?: Maybe<ResolversTypes['ComponentFieldMappingValuesCollection']>;
        }
    >;
    ComponentFieldMappingCollection: ResolverTypeWrapper<
        Omit<ComponentFieldMappingCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentFieldMapping']>>;
        }
    >;
    ComponentFieldMappingFilter: ComponentFieldMappingFilter;
    ComponentFieldMappingLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentFieldMappingLinkingCollections, 'blockTicketListCollection' | 'entryCollection'> & {
            blockTicketListCollection?: Maybe<ResolversTypes['BlockTicketListCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentFieldMappingLinkingCollectionsBlockTicketListCollectionOrder: ComponentFieldMappingLinkingCollectionsBlockTicketListCollectionOrder;
    ComponentFieldMappingOrder: ComponentFieldMappingOrder;
    ComponentFieldMappingValuesCollection: ResolverTypeWrapper<
        Omit<ComponentFieldMappingValuesCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentKeyValue']>>;
        }
    >;
    ComponentFieldMappingValuesCollectionOrder: ComponentFieldMappingValuesCollectionOrder;
    ComponentKeyValue: ResolverTypeWrapper<
        Omit<ComponentKeyValue, 'linkedFrom'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentKeyValueLinkingCollections']>;
        }
    >;
    ComponentKeyValueCollection: ResolverTypeWrapper<
        Omit<ComponentKeyValueCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentKeyValue']>> }
    >;
    ComponentKeyValueFilter: ComponentKeyValueFilter;
    ComponentKeyValueLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentKeyValueLinkingCollections, 'componentFieldMappingCollection' | 'entryCollection'> & {
            componentFieldMappingCollection?: Maybe<ResolversTypes['ComponentFieldMappingCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentKeyValueLinkingCollectionsComponentFieldMappingCollectionOrder: ComponentKeyValueLinkingCollectionsComponentFieldMappingCollectionOrder;
    ComponentKeyValueOrder: ComponentKeyValueOrder;
    ComponentLink: ResolverTypeWrapper<
        Omit<ComponentLink, 'linkedFrom' | 'page'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentLinkLinkingCollections']>;
            page?: Maybe<ResolversTypes['Page']>;
        }
    >;
    ComponentLinkCollection: ResolverTypeWrapper<
        Omit<ComponentLinkCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentLink']>> }
    >;
    ComponentLinkFilter: ComponentLinkFilter;
    ComponentLinkLinkingCollections: ResolverTypeWrapper<
        Omit<
            ComponentLinkLinkingCollections,
            'blockQuickLinksCollection' | 'componentBannerCollection' | 'entryCollection'
        > & {
            blockQuickLinksCollection?: Maybe<ResolversTypes['BlockQuickLinksCollection']>;
            componentBannerCollection?: Maybe<ResolversTypes['ComponentBannerCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentLinkLinkingCollectionsBlockQuickLinksCollectionOrder: ComponentLinkLinkingCollectionsBlockQuickLinksCollectionOrder;
    ComponentLinkLinkingCollectionsComponentBannerCollectionOrder: ComponentLinkLinkingCollectionsComponentBannerCollectionOrder;
    ComponentLinkOrder: ComponentLinkOrder;
    ComponentMessageSimple: ResolverTypeWrapper<
        Omit<ComponentMessageSimple, 'linkedFrom'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentMessageSimpleLinkingCollections']>;
        }
    >;
    ComponentMessageSimpleCollection: ResolverTypeWrapper<ComponentMessageSimpleCollection>;
    ComponentMessageSimpleFilter: ComponentMessageSimpleFilter;
    ComponentMessageSimpleLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentMessageSimpleLinkingCollections, 'dataErrorsCollection' | 'entryCollection'> & {
            dataErrorsCollection?: Maybe<ResolversTypes['DataErrorsCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentMessageSimpleLinkingCollectionsDataErrorsCollectionOrder: ComponentMessageSimpleLinkingCollectionsDataErrorsCollectionOrder;
    ComponentMessageSimpleOrder: ComponentMessageSimpleOrder;
    ComponentNavigationGroup: ResolverTypeWrapper<
        Omit<ComponentNavigationGroup, 'itemsCollection' | 'linkedFrom' | 'page'> & {
            itemsCollection?: Maybe<ResolversTypes['ComponentNavigationGroupItemsCollection']>;
            linkedFrom?: Maybe<ResolversTypes['ComponentNavigationGroupLinkingCollections']>;
            page?: Maybe<ResolversTypes['Page']>;
        }
    >;
    ComponentNavigationGroupCollection: ResolverTypeWrapper<
        Omit<ComponentNavigationGroupCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentNavigationGroup']>>;
        }
    >;
    ComponentNavigationGroupFilter: ComponentNavigationGroupFilter;
    ComponentNavigationGroupItemsCollection: ResolverTypeWrapper<
        Omit<ComponentNavigationGroupItemsCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentNavigationItem']>>;
        }
    >;
    ComponentNavigationGroupItemsCollectionOrder: ComponentNavigationGroupItemsCollectionOrder;
    ComponentNavigationGroupLinkingCollections: ResolverTypeWrapper<
        Omit<
            ComponentNavigationGroupLinkingCollections,
            'entryCollection' | 'footerCollection' | 'headerCollection'
        > & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
            footerCollection?: Maybe<ResolversTypes['FooterCollection']>;
            headerCollection?: Maybe<ResolversTypes['HeaderCollection']>;
        }
    >;
    ComponentNavigationGroupLinkingCollectionsFooterCollectionOrder: ComponentNavigationGroupLinkingCollectionsFooterCollectionOrder;
    ComponentNavigationGroupLinkingCollectionsHeaderCollectionOrder: ComponentNavigationGroupLinkingCollectionsHeaderCollectionOrder;
    ComponentNavigationGroupOrder: ComponentNavigationGroupOrder;
    ComponentNavigationItem: ResolverTypeWrapper<
        Omit<ComponentNavigationItem, 'linkedFrom' | 'page'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentNavigationItemLinkingCollections']>;
            page?: Maybe<ResolversTypes['Page']>;
        }
    >;
    ComponentNavigationItemCollection: ResolverTypeWrapper<
        Omit<ComponentNavigationItemCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['ComponentNavigationItem']>>;
        }
    >;
    ComponentNavigationItemFilter: ComponentNavigationItemFilter;
    ComponentNavigationItemLinkingCollections: ResolverTypeWrapper<
        Omit<
            ComponentNavigationItemLinkingCollections,
            'componentNavigationGroupCollection' | 'entryCollection' | 'footerCollection' | 'headerCollection'
        > & {
            componentNavigationGroupCollection?: Maybe<ResolversTypes['ComponentNavigationGroupCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
            footerCollection?: Maybe<ResolversTypes['FooterCollection']>;
            headerCollection?: Maybe<ResolversTypes['HeaderCollection']>;
        }
    >;
    ComponentNavigationItemLinkingCollectionsComponentNavigationGroupCollectionOrder: ComponentNavigationItemLinkingCollectionsComponentNavigationGroupCollectionOrder;
    ComponentNavigationItemLinkingCollectionsFooterCollectionOrder: ComponentNavigationItemLinkingCollectionsFooterCollectionOrder;
    ComponentNavigationItemLinkingCollectionsHeaderCollectionOrder: ComponentNavigationItemLinkingCollectionsHeaderCollectionOrder;
    ComponentNavigationItemOrder: ComponentNavigationItemOrder;
    ComponentNoResult: ResolverTypeWrapper<
        Omit<ComponentNoResult, 'linkedFrom'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentNoResultLinkingCollections']>;
        }
    >;
    ComponentNoResultCollection: ResolverTypeWrapper<
        Omit<ComponentNoResultCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentNoResult']>> }
    >;
    ComponentNoResultFilter: ComponentNoResultFilter;
    ComponentNoResultLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentNoResultLinkingCollections, 'blockTicketListCollection' | 'entryCollection'> & {
            blockTicketListCollection?: Maybe<ResolversTypes['BlockTicketListCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentNoResultLinkingCollectionsBlockTicketListCollectionOrder: ComponentNoResultLinkingCollectionsBlockTicketListCollectionOrder;
    ComponentNoResultOrder: ComponentNoResultOrder;
    ComponentPagination: ResolverTypeWrapper<
        Omit<ComponentPagination, 'linkedFrom'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentPaginationLinkingCollections']>;
        }
    >;
    ComponentPaginationCollection: ResolverTypeWrapper<
        Omit<ComponentPaginationCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentPagination']>> }
    >;
    ComponentPaginationFilter: ComponentPaginationFilter;
    ComponentPaginationLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentPaginationLinkingCollections, 'blockTicketListCollection' | 'entryCollection'> & {
            blockTicketListCollection?: Maybe<ResolversTypes['BlockTicketListCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentPaginationLinkingCollectionsBlockTicketListCollectionOrder: ComponentPaginationLinkingCollectionsBlockTicketListCollectionOrder;
    ComponentPaginationOrder: ComponentPaginationOrder;
    ComponentRoles: ResolverTypeWrapper<
        Omit<ComponentRoles, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['ComponentRolesLinkingCollections']> }
    >;
    ComponentRolesCollection: ResolverTypeWrapper<
        Omit<ComponentRolesCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentRoles']>> }
    >;
    ComponentRolesFilter: ComponentRolesFilter;
    ComponentRolesLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentRolesLinkingCollections, 'entryCollection'> & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentRolesOrder: ComponentRolesOrder;
    ComponentTable: ResolverTypeWrapper<
        Omit<ComponentTable, 'columnsCollection' | 'linkedFrom'> & {
            columnsCollection?: Maybe<ResolversTypes['ComponentTableColumnsCollection']>;
            linkedFrom?: Maybe<ResolversTypes['ComponentTableLinkingCollections']>;
        }
    >;
    ComponentTableCollection: ResolverTypeWrapper<
        Omit<ComponentTableCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentTable']>> }
    >;
    ComponentTableColumn: ResolverTypeWrapper<
        Omit<ComponentTableColumn, 'linkedFrom'> & {
            linkedFrom?: Maybe<ResolversTypes['ComponentTableColumnLinkingCollections']>;
        }
    >;
    ComponentTableColumnCollection: ResolverTypeWrapper<
        Omit<ComponentTableColumnCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentTableColumn']>> }
    >;
    ComponentTableColumnFilter: ComponentTableColumnFilter;
    ComponentTableColumnLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentTableColumnLinkingCollections, 'componentTableCollection' | 'entryCollection'> & {
            componentTableCollection?: Maybe<ResolversTypes['ComponentTableCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentTableColumnLinkingCollectionsComponentTableCollectionOrder: ComponentTableColumnLinkingCollectionsComponentTableCollectionOrder;
    ComponentTableColumnOrder: ComponentTableColumnOrder;
    ComponentTableColumnsCollection: ResolverTypeWrapper<
        Omit<ComponentTableColumnsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentTableColumn']>> }
    >;
    ComponentTableColumnsCollectionOrder: ComponentTableColumnsCollectionOrder;
    ComponentTableFilter: ComponentTableFilter;
    ComponentTableLinkingCollections: ResolverTypeWrapper<
        Omit<ComponentTableLinkingCollections, 'blockTicketListCollection' | 'entryCollection'> & {
            blockTicketListCollection?: Maybe<ResolversTypes['BlockTicketListCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentTableLinkingCollectionsBlockTicketListCollectionOrder: ComponentTableLinkingCollectionsBlockTicketListCollectionOrder;
    ComponentTableOrder: ComponentTableOrder;
    ConfigurableTexts: ResolverTypeWrapper<
        Omit<ConfigurableTexts, 'actions' | 'dates' | 'errors' | 'linkedFrom' | 'validation'> & {
            actions?: Maybe<ResolversTypes['DataActions']>;
            dates?: Maybe<ResolversTypes['DataDates']>;
            errors?: Maybe<ResolversTypes['DataErrors']>;
            linkedFrom?: Maybe<ResolversTypes['ConfigurableTextsLinkingCollections']>;
            validation?: Maybe<ResolversTypes['DataValidation']>;
        }
    >;
    ConfigurableTextsCollection: ResolverTypeWrapper<
        Omit<ConfigurableTextsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ConfigurableTexts']>> }
    >;
    ConfigurableTextsFilter: ConfigurableTextsFilter;
    ConfigurableTextsLinkingCollections: ResolverTypeWrapper<
        Omit<ConfigurableTextsLinkingCollections, 'entryCollection'> & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ConfigurableTextsOrder: ConfigurableTextsOrder;
    ContentfulMetadata: ResolverTypeWrapper<ContentfulMetadata>;
    ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
    ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
    ContentfulMetadataFilter: ContentfulMetadataFilter;
    ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
    ContentfulTag: ResolverTypeWrapper<ContentfulTag>;
    DataActions: ResolverTypeWrapper<
        Omit<DataActions, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['DataActionsLinkingCollections']> }
    >;
    DataActionsCollection: ResolverTypeWrapper<
        Omit<DataActionsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['DataActions']>> }
    >;
    DataActionsFilter: DataActionsFilter;
    DataActionsLinkingCollections: ResolverTypeWrapper<
        Omit<DataActionsLinkingCollections, 'configurableTextsCollection' | 'entryCollection'> & {
            configurableTextsCollection?: Maybe<ResolversTypes['ConfigurableTextsCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    DataActionsLinkingCollectionsConfigurableTextsCollectionOrder: DataActionsLinkingCollectionsConfigurableTextsCollectionOrder;
    DataActionsOrder: DataActionsOrder;
    DataConfigurableTexts: ResolverTypeWrapper<
        Omit<DataConfigurableTexts, 'linkedFrom'> & {
            linkedFrom?: Maybe<ResolversTypes['DataConfigurableTextsLinkingCollections']>;
        }
    >;
    DataConfigurableTextsCollection: ResolverTypeWrapper<
        Omit<DataConfigurableTextsCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['DataConfigurableTexts']>>;
        }
    >;
    DataConfigurableTextsFilter: DataConfigurableTextsFilter;
    DataConfigurableTextsLinkingCollections: ResolverTypeWrapper<
        Omit<DataConfigurableTextsLinkingCollections, 'blockTicketListCollection' | 'entryCollection'> & {
            blockTicketListCollection?: Maybe<ResolversTypes['BlockTicketListCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    DataConfigurableTextsLinkingCollectionsBlockTicketListCollectionOrder: DataConfigurableTextsLinkingCollectionsBlockTicketListCollectionOrder;
    DataConfigurableTextsOrder: DataConfigurableTextsOrder;
    DataDates: ResolverTypeWrapper<
        Omit<DataDates, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['DataDatesLinkingCollections']> }
    >;
    DataDatesCollection: ResolverTypeWrapper<
        Omit<DataDatesCollection, 'items'> & { items: Array<Maybe<ResolversTypes['DataDates']>> }
    >;
    DataDatesFilter: DataDatesFilter;
    DataDatesLinkingCollections: ResolverTypeWrapper<
        Omit<DataDatesLinkingCollections, 'configurableTextsCollection' | 'entryCollection'> & {
            configurableTextsCollection?: Maybe<ResolversTypes['ConfigurableTextsCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    DataDatesLinkingCollectionsConfigurableTextsCollectionOrder: DataDatesLinkingCollectionsConfigurableTextsCollectionOrder;
    DataDatesOrder: DataDatesOrder;
    DataErrors: ResolverTypeWrapper<
        Omit<DataErrors, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['DataErrorsLinkingCollections']> }
    >;
    DataErrorsCollection: ResolverTypeWrapper<
        Omit<DataErrorsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['DataErrors']>> }
    >;
    DataErrorsFilter: DataErrorsFilter;
    DataErrorsLinkingCollections: ResolverTypeWrapper<
        Omit<DataErrorsLinkingCollections, 'configurableTextsCollection' | 'entryCollection'> & {
            configurableTextsCollection?: Maybe<ResolversTypes['ConfigurableTextsCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    DataErrorsLinkingCollectionsConfigurableTextsCollectionOrder: DataErrorsLinkingCollectionsConfigurableTextsCollectionOrder;
    DataErrorsOrder: DataErrorsOrder;
    DataValidation: ResolverTypeWrapper<
        Omit<DataValidation, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['DataValidationLinkingCollections']> }
    >;
    DataValidationCollection: ResolverTypeWrapper<
        Omit<DataValidationCollection, 'items'> & { items: Array<Maybe<ResolversTypes['DataValidation']>> }
    >;
    DataValidationFilter: DataValidationFilter;
    DataValidationLinkingCollections: ResolverTypeWrapper<
        Omit<DataValidationLinkingCollections, 'configurableTextsCollection' | 'entryCollection'> & {
            configurableTextsCollection?: Maybe<ResolversTypes['ConfigurableTextsCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    DataValidationLinkingCollectionsConfigurableTextsCollectionOrder: DataValidationLinkingCollectionsConfigurableTextsCollectionOrder;
    DataValidationOrder: DataValidationOrder;
    DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
    Dimension: ResolverTypeWrapper<Scalars['Dimension']['output']>;
    Entry: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entry']>;
    EntryCollection: ResolverTypeWrapper<
        Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Entry']>> }
    >;
    EntryFilter: EntryFilter;
    EntryOrder: EntryOrder;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    Footer: ResolverTypeWrapper<
        Omit<Footer, 'itemsCollection' | 'linkedFrom' | 'logo'> & {
            itemsCollection?: Maybe<ResolversTypes['FooterItemsCollection']>;
            linkedFrom?: Maybe<ResolversTypes['FooterLinkingCollections']>;
            logo?: Maybe<ResolversTypes['Asset']>;
        }
    >;
    FooterCollection: ResolverTypeWrapper<
        Omit<FooterCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Footer']>> }
    >;
    FooterFilter: FooterFilter;
    FooterItemsCollection: ResolverTypeWrapper<
        Omit<FooterItemsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['FooterItemsItem']>> }
    >;
    FooterItemsFilter: FooterItemsFilter;
    FooterItemsItem: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['FooterItemsItem']>;
    FooterLinkingCollections: ResolverTypeWrapper<
        Omit<FooterLinkingCollections, 'appConfigCollection' | 'entryCollection'> & {
            appConfigCollection?: Maybe<ResolversTypes['AppConfigCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    FooterLinkingCollectionsAppConfigCollectionOrder: FooterLinkingCollectionsAppConfigCollectionOrder;
    FooterOrder: FooterOrder;
    Header: ResolverTypeWrapper<
        Omit<Header, 'itemsCollection' | 'linkedFrom' | 'logo' | 'notification' | 'userInfo'> & {
            itemsCollection?: Maybe<ResolversTypes['HeaderItemsCollection']>;
            linkedFrom?: Maybe<ResolversTypes['HeaderLinkingCollections']>;
            logo?: Maybe<ResolversTypes['Asset']>;
            notification?: Maybe<ResolversTypes['Page']>;
            userInfo?: Maybe<ResolversTypes['Page']>;
        }
    >;
    HeaderCollection: ResolverTypeWrapper<
        Omit<HeaderCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Header']>> }
    >;
    HeaderFilter: HeaderFilter;
    HeaderItemsCollection: ResolverTypeWrapper<
        Omit<HeaderItemsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['HeaderItemsItem']>> }
    >;
    HeaderItemsFilter: HeaderItemsFilter;
    HeaderItemsItem: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['HeaderItemsItem']>;
    HeaderLinkingCollections: ResolverTypeWrapper<
        Omit<HeaderLinkingCollections, 'appConfigCollection' | 'entryCollection'> & {
            appConfigCollection?: Maybe<ResolversTypes['AppConfigCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    HeaderLinkingCollectionsAppConfigCollectionOrder: HeaderLinkingCollectionsAppConfigCollectionOrder;
    HeaderOrder: HeaderOrder;
    HexColor: ResolverTypeWrapper<Scalars['HexColor']['output']>;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    ImageFormat: ImageFormat;
    ImageResizeFocus: ImageResizeFocus;
    ImageResizeStrategy: ImageResizeStrategy;
    ImageTransformOptions: ImageTransformOptions;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    Page: ResolverTypeWrapper<
        Omit<Page, 'linkedFrom' | 'parent' | 'seo' | 'template'> & {
            linkedFrom?: Maybe<ResolversTypes['PageLinkingCollections']>;
            parent?: Maybe<ResolversTypes['Page']>;
            seo?: Maybe<ResolversTypes['PageSeo']>;
            template?: Maybe<ResolversTypes['PageTemplate']>;
        }
    >;
    PageCollection: ResolverTypeWrapper<
        Omit<PageCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Page']>> }
    >;
    PageFilter: PageFilter;
    PageLinkingCollections: ResolverTypeWrapper<
        Omit<
            PageLinkingCollections,
            | 'articleCollection'
            | 'blockArticleListCollection'
            | 'blockCategoryCollection'
            | 'blockCategoryListCollection'
            | 'componentCategoryCollection'
            | 'componentLinkCollection'
            | 'componentNavigationGroupCollection'
            | 'componentNavigationItemCollection'
            | 'entryCollection'
            | 'headerCollection'
        > & {
            articleCollection?: Maybe<ResolversTypes['ArticleCollection']>;
            blockArticleListCollection?: Maybe<ResolversTypes['BlockArticleListCollection']>;
            blockCategoryCollection?: Maybe<ResolversTypes['BlockCategoryCollection']>;
            blockCategoryListCollection?: Maybe<ResolversTypes['BlockCategoryListCollection']>;
            componentCategoryCollection?: Maybe<ResolversTypes['ComponentCategoryCollection']>;
            componentLinkCollection?: Maybe<ResolversTypes['ComponentLinkCollection']>;
            componentNavigationGroupCollection?: Maybe<ResolversTypes['ComponentNavigationGroupCollection']>;
            componentNavigationItemCollection?: Maybe<ResolversTypes['ComponentNavigationItemCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
            headerCollection?: Maybe<ResolversTypes['HeaderCollection']>;
        }
    >;
    PageLinkingCollectionsArticleCollectionOrder: PageLinkingCollectionsArticleCollectionOrder;
    PageLinkingCollectionsBlockArticleListCollectionOrder: PageLinkingCollectionsBlockArticleListCollectionOrder;
    PageLinkingCollectionsBlockCategoryCollectionOrder: PageLinkingCollectionsBlockCategoryCollectionOrder;
    PageLinkingCollectionsBlockCategoryListCollectionOrder: PageLinkingCollectionsBlockCategoryListCollectionOrder;
    PageLinkingCollectionsComponentCategoryCollectionOrder: PageLinkingCollectionsComponentCategoryCollectionOrder;
    PageLinkingCollectionsComponentLinkCollectionOrder: PageLinkingCollectionsComponentLinkCollectionOrder;
    PageLinkingCollectionsComponentNavigationGroupCollectionOrder: PageLinkingCollectionsComponentNavigationGroupCollectionOrder;
    PageLinkingCollectionsComponentNavigationItemCollectionOrder: PageLinkingCollectionsComponentNavigationItemCollectionOrder;
    PageLinkingCollectionsHeaderCollectionOrder: PageLinkingCollectionsHeaderCollectionOrder;
    PageLinkingCollectionsPageCollectionOrder: PageLinkingCollectionsPageCollectionOrder;
    PageOneColumnTemplate: ResolverTypeWrapper<
        Omit<PageOneColumnTemplate, 'linkedFrom' | 'mainSlotCollection'> & {
            linkedFrom?: Maybe<ResolversTypes['PageOneColumnTemplateLinkingCollections']>;
            mainSlotCollection?: Maybe<ResolversTypes['PageOneColumnTemplateMainSlotCollection']>;
        }
    >;
    PageOneColumnTemplateCollection: ResolverTypeWrapper<
        Omit<PageOneColumnTemplateCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['PageOneColumnTemplate']>>;
        }
    >;
    PageOneColumnTemplateFilter: PageOneColumnTemplateFilter;
    PageOneColumnTemplateLinkingCollections: ResolverTypeWrapper<
        Omit<PageOneColumnTemplateLinkingCollections, 'entryCollection'> & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    PageOneColumnTemplateLinkingCollectionsPageCollectionOrder: PageOneColumnTemplateLinkingCollectionsPageCollectionOrder;
    PageOneColumnTemplateMainSlotCollection: ResolverTypeWrapper<
        Omit<PageOneColumnTemplateMainSlotCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Block']>> }
    >;
    PageOneColumnTemplateMainSlotCollectionOrder: PageOneColumnTemplateMainSlotCollectionOrder;
    PageOneColumnTemplateOrder: PageOneColumnTemplateOrder;
    PageOrder: PageOrder;
    PageSeo: ResolverTypeWrapper<
        Omit<PageSeo, 'image' | 'linkedFrom'> & {
            image?: Maybe<ResolversTypes['Asset']>;
            linkedFrom?: Maybe<ResolversTypes['PageSeoLinkingCollections']>;
        }
    >;
    PageSeoCollection: ResolverTypeWrapper<
        Omit<PageSeoCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageSeo']>> }
    >;
    PageSeoFilter: PageSeoFilter;
    PageSeoLinkingCollections: ResolverTypeWrapper<
        Omit<PageSeoLinkingCollections, 'articleCollection' | 'entryCollection'> & {
            articleCollection?: Maybe<ResolversTypes['ArticleCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    PageSeoLinkingCollectionsArticleCollectionOrder: PageSeoLinkingCollectionsArticleCollectionOrder;
    PageSeoLinkingCollectionsPageCollectionOrder: PageSeoLinkingCollectionsPageCollectionOrder;
    PageSeoOrder: PageSeoOrder;
    PageTemplate: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['PageTemplate']>;
    PageTwoColumnTemplate: ResolverTypeWrapper<
        Omit<
            PageTwoColumnTemplate,
            'bottomSlotCollection' | 'leftSlotCollection' | 'linkedFrom' | 'rightSlotCollection' | 'topSlotCollection'
        > & {
            bottomSlotCollection?: Maybe<ResolversTypes['PageTwoColumnTemplateBottomSlotCollection']>;
            leftSlotCollection?: Maybe<ResolversTypes['PageTwoColumnTemplateLeftSlotCollection']>;
            linkedFrom?: Maybe<ResolversTypes['PageTwoColumnTemplateLinkingCollections']>;
            rightSlotCollection?: Maybe<ResolversTypes['PageTwoColumnTemplateRightSlotCollection']>;
            topSlotCollection?: Maybe<ResolversTypes['PageTwoColumnTemplateTopSlotCollection']>;
        }
    >;
    PageTwoColumnTemplateBottomSlotCollection: ResolverTypeWrapper<
        Omit<PageTwoColumnTemplateBottomSlotCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Block']>> }
    >;
    PageTwoColumnTemplateBottomSlotCollectionOrder: PageTwoColumnTemplateBottomSlotCollectionOrder;
    PageTwoColumnTemplateCollection: ResolverTypeWrapper<
        Omit<PageTwoColumnTemplateCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['PageTwoColumnTemplate']>>;
        }
    >;
    PageTwoColumnTemplateFilter: PageTwoColumnTemplateFilter;
    PageTwoColumnTemplateLeftSlotCollection: ResolverTypeWrapper<
        Omit<PageTwoColumnTemplateLeftSlotCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Block']>> }
    >;
    PageTwoColumnTemplateLeftSlotCollectionOrder: PageTwoColumnTemplateLeftSlotCollectionOrder;
    PageTwoColumnTemplateLinkingCollections: ResolverTypeWrapper<
        Omit<PageTwoColumnTemplateLinkingCollections, 'entryCollection'> & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    PageTwoColumnTemplateLinkingCollectionsPageCollectionOrder: PageTwoColumnTemplateLinkingCollectionsPageCollectionOrder;
    PageTwoColumnTemplateOrder: PageTwoColumnTemplateOrder;
    PageTwoColumnTemplateRightSlotCollection: ResolverTypeWrapper<
        Omit<PageTwoColumnTemplateRightSlotCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Block']>> }
    >;
    PageTwoColumnTemplateRightSlotCollectionOrder: PageTwoColumnTemplateRightSlotCollectionOrder;
    PageTwoColumnTemplateTopSlotCollection: ResolverTypeWrapper<
        Omit<PageTwoColumnTemplateTopSlotCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Block']>> }
    >;
    PageTwoColumnTemplateTopSlotCollectionOrder: PageTwoColumnTemplateTopSlotCollectionOrder;
    Quality: ResolverTypeWrapper<Scalars['Quality']['output']>;
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    Sys: ResolverTypeWrapper<Sys>;
    SysFilter: SysFilter;
    TaxonomyConcept: ResolverTypeWrapper<TaxonomyConcept>;
    Theme: ResolverTypeWrapper<
        Omit<Theme, 'linkedFrom' | 'logo'> & {
            linkedFrom?: Maybe<ResolversTypes['ThemeLinkingCollections']>;
            logo?: Maybe<ResolversTypes['Asset']>;
        }
    >;
    ThemeCollection: ResolverTypeWrapper<
        Omit<ThemeCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Theme']>> }
    >;
    ThemeFilter: ThemeFilter;
    ThemeLinkingCollections: ResolverTypeWrapper<
        Omit<ThemeLinkingCollections, 'appConfigCollection' | 'blockCollection' | 'entryCollection'> & {
            appConfigCollection?: Maybe<ResolversTypes['AppConfigCollection']>;
            blockCollection?: Maybe<ResolversTypes['BlockCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ThemeLinkingCollectionsAppConfigCollectionOrder: ThemeLinkingCollectionsAppConfigCollectionOrder;
    ThemeLinkingCollectionsBlockCollectionOrder: ThemeLinkingCollectionsBlockCollectionOrder;
    ThemeOrder: ThemeOrder;
    TimelineFilterInput: TimelineFilterInput;
    _Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['_Node']>;
    cfArticleNestedFilter: CfArticleNestedFilter;
    cfAuthorNestedFilter: CfAuthorNestedFilter;
    cfBlockNestedFilter: CfBlockNestedFilter;
    cfComponentArticleNestedFilter: CfComponentArticleNestedFilter;
    cfComponentArticleSectionNestedFilter: CfComponentArticleSectionNestedFilter;
    cfComponentBannerNestedFilter: CfComponentBannerNestedFilter;
    cfComponentCategoryNestedFilter: CfComponentCategoryNestedFilter;
    cfComponentFaqItemNestedFilter: CfComponentFaqItemNestedFilter;
    cfComponentFieldMappingNestedFilter: CfComponentFieldMappingNestedFilter;
    cfComponentKeyValueNestedFilter: CfComponentKeyValueNestedFilter;
    cfComponentLinkNestedFilter: CfComponentLinkNestedFilter;
    cfComponentMessageSimpleNestedFilter: CfComponentMessageSimpleNestedFilter;
    cfComponentNavigationItemNestedFilter: CfComponentNavigationItemNestedFilter;
    cfComponentNoResultNestedFilter: CfComponentNoResultNestedFilter;
    cfComponentPaginationNestedFilter: CfComponentPaginationNestedFilter;
    cfComponentTableColumnNestedFilter: CfComponentTableColumnNestedFilter;
    cfComponentTableNestedFilter: CfComponentTableNestedFilter;
    cfDataActionsNestedFilter: CfDataActionsNestedFilter;
    cfDataConfigurableTextsNestedFilter: CfDataConfigurableTextsNestedFilter;
    cfDataDatesNestedFilter: CfDataDatesNestedFilter;
    cfDataErrorsNestedFilter: CfDataErrorsNestedFilter;
    cfDataValidationNestedFilter: CfDataValidationNestedFilter;
    cfFooterNestedFilter: CfFooterNestedFilter;
    cfHeaderNestedFilter: CfHeaderNestedFilter;
    cfPageNestedFilter: CfPageNestedFilter;
    cfPageSeoNestedFilter: CfPageSeoNestedFilter;
    cfThemeNestedFilter: CfThemeNestedFilter;
    cfcomponentsMultiTypeNestedFilter: CfcomponentsMultiTypeNestedFilter;
    cfitemsMultiTypeNestedFilter: CfitemsMultiTypeNestedFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    AppConfig: Omit<
        AppConfig,
        'linkedFrom' | 'signedInFooter' | 'signedInHeader' | 'signedOutFooter' | 'signedOutHeader' | 'themesCollection'
    > & {
        linkedFrom?: Maybe<ResolversParentTypes['AppConfigLinkingCollections']>;
        signedInFooter?: Maybe<ResolversParentTypes['Footer']>;
        signedInHeader?: Maybe<ResolversParentTypes['Header']>;
        signedOutFooter?: Maybe<ResolversParentTypes['Footer']>;
        signedOutHeader?: Maybe<ResolversParentTypes['Header']>;
        themesCollection?: Maybe<ResolversParentTypes['AppConfigThemesCollection']>;
    };
    AppConfigCollection: Omit<AppConfigCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['AppConfig']>>;
    };
    AppConfigFilter: AppConfigFilter;
    AppConfigLinkingCollections: Omit<AppConfigLinkingCollections, 'entryCollection'> & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    AppConfigThemesCollection: Omit<AppConfigThemesCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['Theme']>>;
    };
    Article: Omit<Article, 'content' | 'linkedFrom' | 'parent' | 'seo'> & {
        content?: Maybe<ResolversParentTypes['ComponentArticle']>;
        linkedFrom?: Maybe<ResolversParentTypes['ArticleLinkingCollections']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
        seo?: Maybe<ResolversParentTypes['PageSeo']>;
    };
    ArticleCollection: Omit<ArticleCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Article']>> };
    ArticleFilter: ArticleFilter;
    ArticleLinkingCollections: Omit<ArticleLinkingCollections, 'blockArticleListCollection' | 'entryCollection'> & {
        blockArticleListCollection?: Maybe<ResolversParentTypes['BlockArticleListCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    Asset: Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['AssetLinkingCollections']> };
    AssetCollection: Omit<AssetCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Asset']>> };
    AssetFilter: AssetFilter;
    AssetLinkingCollections: Omit<
        AssetLinkingCollections,
        | 'authorCollection'
        | 'entryCollection'
        | 'footerCollection'
        | 'headerCollection'
        | 'pageSeoCollection'
        | 'themeCollection'
    > & {
        authorCollection?: Maybe<ResolversParentTypes['AuthorCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
        footerCollection?: Maybe<ResolversParentTypes['FooterCollection']>;
        headerCollection?: Maybe<ResolversParentTypes['HeaderCollection']>;
        pageSeoCollection?: Maybe<ResolversParentTypes['PageSeoCollection']>;
        themeCollection?: Maybe<ResolversParentTypes['ThemeCollection']>;
    };
    Author: Omit<Author, 'avatar' | 'linkedFrom'> & {
        avatar?: Maybe<ResolversParentTypes['Asset']>;
        linkedFrom?: Maybe<ResolversParentTypes['AuthorLinkingCollections']>;
    };
    AuthorCollection: Omit<AuthorCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Author']>> };
    AuthorFilter: AuthorFilter;
    AuthorLinkingCollections: Omit<AuthorLinkingCollections, 'componentArticleCollection' | 'entryCollection'> & {
        componentArticleCollection?: Maybe<ResolversParentTypes['ComponentArticleCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    Block: Omit<Block, 'content' | 'linkedFrom' | 'theme'> & {
        content?: Maybe<ResolversParentTypes['BlockContent']>;
        linkedFrom?: Maybe<ResolversParentTypes['BlockLinkingCollections']>;
        theme?: Maybe<ResolversParentTypes['Theme']>;
    };
    BlockArticleList: Omit<BlockArticleList, 'articlesCollection' | 'category' | 'linkedFrom' | 'parent'> & {
        articlesCollection?: Maybe<ResolversParentTypes['BlockArticleListArticlesCollection']>;
        category?: Maybe<ResolversParentTypes['ComponentCategory']>;
        linkedFrom?: Maybe<ResolversParentTypes['BlockArticleListLinkingCollections']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
    };
    BlockArticleListArticlesCollection: Omit<BlockArticleListArticlesCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['Article']>>;
    };
    BlockArticleListCollection: Omit<BlockArticleListCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['BlockArticleList']>>;
    };
    BlockArticleListFilter: BlockArticleListFilter;
    BlockArticleListLinkingCollections: Omit<
        BlockArticleListLinkingCollections,
        'blockCollection' | 'entryCollection'
    > & {
        blockCollection?: Maybe<ResolversParentTypes['BlockCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    BlockCategory: Omit<BlockCategory, 'category' | 'linkedFrom' | 'parent'> & {
        category?: Maybe<ResolversParentTypes['ComponentCategory']>;
        linkedFrom?: Maybe<ResolversParentTypes['BlockCategoryLinkingCollections']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
    };
    BlockCategoryCollection: Omit<BlockCategoryCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['BlockCategory']>>;
    };
    BlockCategoryFilter: BlockCategoryFilter;
    BlockCategoryLinkingCollections: Omit<BlockCategoryLinkingCollections, 'blockCollection' | 'entryCollection'> & {
        blockCollection?: Maybe<ResolversParentTypes['BlockCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    BlockCategoryList: Omit<BlockCategoryList, 'categoriesCollection' | 'linkedFrom' | 'parent'> & {
        categoriesCollection?: Maybe<ResolversParentTypes['BlockCategoryListCategoriesCollection']>;
        linkedFrom?: Maybe<ResolversParentTypes['BlockCategoryListLinkingCollections']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
    };
    BlockCategoryListCategoriesCollection: Omit<BlockCategoryListCategoriesCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentCategory']>>;
    };
    BlockCategoryListCollection: Omit<BlockCategoryListCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['BlockCategoryList']>>;
    };
    BlockCategoryListFilter: BlockCategoryListFilter;
    BlockCategoryListLinkingCollections: Omit<
        BlockCategoryListLinkingCollections,
        'blockCollection' | 'componentCategoryCollection' | 'entryCollection'
    > & {
        blockCollection?: Maybe<ResolversParentTypes['BlockCollection']>;
        componentCategoryCollection?: Maybe<ResolversParentTypes['ComponentCategoryCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    BlockCollection: Omit<BlockCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Block']>> };
    BlockContent: ResolversUnionTypes<ResolversParentTypes>['BlockContent'];
    BlockFaq: Omit<BlockFaq, 'banner' | 'itemsCollection' | 'linkedFrom'> & {
        banner?: Maybe<ResolversParentTypes['ComponentBanner']>;
        itemsCollection?: Maybe<ResolversParentTypes['BlockFaqItemsCollection']>;
        linkedFrom?: Maybe<ResolversParentTypes['BlockFaqLinkingCollections']>;
    };
    BlockFaqCollection: Omit<BlockFaqCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['BlockFaq']>> };
    BlockFaqFilter: BlockFaqFilter;
    BlockFaqItemsCollection: Omit<BlockFaqItemsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentFaqItem']>>;
    };
    BlockFaqLinkingCollections: Omit<
        BlockFaqLinkingCollections,
        'blockCollection' | 'componentCategoryCollection' | 'entryCollection'
    > & {
        blockCollection?: Maybe<ResolversParentTypes['BlockCollection']>;
        componentCategoryCollection?: Maybe<ResolversParentTypes['ComponentCategoryCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    BlockFilter: BlockFilter;
    BlockLinkingCollections: Omit<
        BlockLinkingCollections,
        'entryCollection' | 'pageOneColumnTemplateCollection' | 'pageTwoColumnTemplateCollection'
    > & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
        pageOneColumnTemplateCollection?: Maybe<ResolversParentTypes['PageOneColumnTemplateCollection']>;
        pageTwoColumnTemplateCollection?: Maybe<ResolversParentTypes['PageTwoColumnTemplateCollection']>;
    };
    BlockQuickLinks: Omit<BlockQuickLinks, 'itemsCollection' | 'linkedFrom'> & {
        itemsCollection?: Maybe<ResolversParentTypes['BlockQuickLinksItemsCollection']>;
        linkedFrom?: Maybe<ResolversParentTypes['BlockQuickLinksLinkingCollections']>;
    };
    BlockQuickLinksCollection: Omit<BlockQuickLinksCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['BlockQuickLinks']>>;
    };
    BlockQuickLinksFilter: BlockQuickLinksFilter;
    BlockQuickLinksItemsCollection: Omit<BlockQuickLinksItemsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentLink']>>;
    };
    BlockQuickLinksLinkingCollections: Omit<
        BlockQuickLinksLinkingCollections,
        'blockCollection' | 'componentCategoryCollection' | 'entryCollection'
    > & {
        blockCollection?: Maybe<ResolversParentTypes['BlockCollection']>;
        componentCategoryCollection?: Maybe<ResolversParentTypes['ComponentCategoryCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    BlockTicketList: Omit<
        BlockTicketList,
        'fieldsCollection' | 'labels' | 'linkedFrom' | 'noResults' | 'pagination' | 'table'
    > & {
        fieldsCollection?: Maybe<ResolversParentTypes['BlockTicketListFieldsCollection']>;
        labels?: Maybe<ResolversParentTypes['DataConfigurableTexts']>;
        linkedFrom?: Maybe<ResolversParentTypes['BlockTicketListLinkingCollections']>;
        noResults?: Maybe<ResolversParentTypes['ComponentNoResult']>;
        pagination?: Maybe<ResolversParentTypes['ComponentPagination']>;
        table?: Maybe<ResolversParentTypes['ComponentTable']>;
    };
    BlockTicketListCollection: Omit<BlockTicketListCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['BlockTicketList']>>;
    };
    BlockTicketListFieldsCollection: Omit<BlockTicketListFieldsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentFieldMapping']>>;
    };
    BlockTicketListFilter: BlockTicketListFilter;
    BlockTicketListLinkingCollections: Omit<
        BlockTicketListLinkingCollections,
        'blockCollection' | 'componentCategoryCollection' | 'entryCollection'
    > & {
        blockCollection?: Maybe<ResolversParentTypes['BlockCollection']>;
        componentCategoryCollection?: Maybe<ResolversParentTypes['ComponentCategoryCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    Boolean: Scalars['Boolean']['output'];
    ComponentArticle: Omit<ComponentArticle, 'author' | 'category' | 'linkedFrom' | 'sectionsCollection'> & {
        author?: Maybe<ResolversParentTypes['Author']>;
        category?: Maybe<ResolversParentTypes['ComponentCategory']>;
        linkedFrom?: Maybe<ResolversParentTypes['ComponentArticleLinkingCollections']>;
        sectionsCollection?: Maybe<ResolversParentTypes['ComponentArticleSectionsCollection']>;
    };
    ComponentArticleCollection: Omit<ComponentArticleCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentArticle']>>;
    };
    ComponentArticleFilter: ComponentArticleFilter;
    ComponentArticleLinkingCollections: Omit<
        ComponentArticleLinkingCollections,
        'articleCollection' | 'entryCollection'
    > & {
        articleCollection?: Maybe<ResolversParentTypes['ArticleCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentArticleSection: Omit<ComponentArticleSection, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentArticleSectionLinkingCollections']>;
    };
    ComponentArticleSectionCollection: Omit<ComponentArticleSectionCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentArticleSection']>>;
    };
    ComponentArticleSectionFilter: ComponentArticleSectionFilter;
    ComponentArticleSectionLinkingCollections: Omit<
        ComponentArticleSectionLinkingCollections,
        'componentArticleCollection' | 'entryCollection'
    > & {
        componentArticleCollection?: Maybe<ResolversParentTypes['ComponentArticleCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentArticleSectionsCollection: Omit<ComponentArticleSectionsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentArticleSection']>>;
    };
    ComponentBanner: Omit<ComponentBanner, 'link' | 'linkedFrom'> & {
        link?: Maybe<ResolversParentTypes['ComponentLink']>;
        linkedFrom?: Maybe<ResolversParentTypes['ComponentBannerLinkingCollections']>;
    };
    ComponentBannerCollection: Omit<ComponentBannerCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentBanner']>>;
    };
    ComponentBannerFilter: ComponentBannerFilter;
    ComponentBannerLinkingCollections: Omit<
        ComponentBannerLinkingCollections,
        'blockFaqCollection' | 'entryCollection'
    > & {
        blockFaqCollection?: Maybe<ResolversParentTypes['BlockFaqCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentCategory: Omit<ComponentCategory, 'componentsCollection' | 'linkedFrom' | 'parent'> & {
        componentsCollection?: Maybe<ResolversParentTypes['ComponentCategoryComponentsCollection']>;
        linkedFrom?: Maybe<ResolversParentTypes['ComponentCategoryLinkingCollections']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
    };
    ComponentCategoryCollection: Omit<ComponentCategoryCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentCategory']>>;
    };
    ComponentCategoryComponentsCollection: Omit<ComponentCategoryComponentsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentCategoryComponentsItem']>>;
    };
    ComponentCategoryComponentsFilter: ComponentCategoryComponentsFilter;
    ComponentCategoryComponentsItem: ResolversUnionTypes<ResolversParentTypes>['ComponentCategoryComponentsItem'];
    ComponentCategoryFilter: ComponentCategoryFilter;
    ComponentCategoryLinkingCollections: Omit<
        ComponentCategoryLinkingCollections,
        | 'blockArticleListCollection'
        | 'blockCategoryCollection'
        | 'blockCategoryListCollection'
        | 'componentArticleCollection'
        | 'entryCollection'
    > & {
        blockArticleListCollection?: Maybe<ResolversParentTypes['BlockArticleListCollection']>;
        blockCategoryCollection?: Maybe<ResolversParentTypes['BlockCategoryCollection']>;
        blockCategoryListCollection?: Maybe<ResolversParentTypes['BlockCategoryListCollection']>;
        componentArticleCollection?: Maybe<ResolversParentTypes['ComponentArticleCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentFaqItem: Omit<ComponentFaqItem, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentFaqItemLinkingCollections']>;
    };
    ComponentFaqItemCollection: Omit<ComponentFaqItemCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentFaqItem']>>;
    };
    ComponentFaqItemFilter: ComponentFaqItemFilter;
    ComponentFaqItemLinkingCollections: Omit<
        ComponentFaqItemLinkingCollections,
        'blockFaqCollection' | 'entryCollection'
    > & {
        blockFaqCollection?: Maybe<ResolversParentTypes['BlockFaqCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentFieldMapping: Omit<ComponentFieldMapping, 'linkedFrom' | 'valuesCollection'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentFieldMappingLinkingCollections']>;
        valuesCollection?: Maybe<ResolversParentTypes['ComponentFieldMappingValuesCollection']>;
    };
    ComponentFieldMappingCollection: Omit<ComponentFieldMappingCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentFieldMapping']>>;
    };
    ComponentFieldMappingFilter: ComponentFieldMappingFilter;
    ComponentFieldMappingLinkingCollections: Omit<
        ComponentFieldMappingLinkingCollections,
        'blockTicketListCollection' | 'entryCollection'
    > & {
        blockTicketListCollection?: Maybe<ResolversParentTypes['BlockTicketListCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentFieldMappingValuesCollection: Omit<ComponentFieldMappingValuesCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentKeyValue']>>;
    };
    ComponentKeyValue: Omit<ComponentKeyValue, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentKeyValueLinkingCollections']>;
    };
    ComponentKeyValueCollection: Omit<ComponentKeyValueCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentKeyValue']>>;
    };
    ComponentKeyValueFilter: ComponentKeyValueFilter;
    ComponentKeyValueLinkingCollections: Omit<
        ComponentKeyValueLinkingCollections,
        'componentFieldMappingCollection' | 'entryCollection'
    > & {
        componentFieldMappingCollection?: Maybe<ResolversParentTypes['ComponentFieldMappingCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentLink: Omit<ComponentLink, 'linkedFrom' | 'page'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentLinkLinkingCollections']>;
        page?: Maybe<ResolversParentTypes['Page']>;
    };
    ComponentLinkCollection: Omit<ComponentLinkCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentLink']>>;
    };
    ComponentLinkFilter: ComponentLinkFilter;
    ComponentLinkLinkingCollections: Omit<
        ComponentLinkLinkingCollections,
        'blockQuickLinksCollection' | 'componentBannerCollection' | 'entryCollection'
    > & {
        blockQuickLinksCollection?: Maybe<ResolversParentTypes['BlockQuickLinksCollection']>;
        componentBannerCollection?: Maybe<ResolversParentTypes['ComponentBannerCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentMessageSimple: Omit<ComponentMessageSimple, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentMessageSimpleLinkingCollections']>;
    };
    ComponentMessageSimpleCollection: ComponentMessageSimpleCollection;
    ComponentMessageSimpleFilter: ComponentMessageSimpleFilter;
    ComponentMessageSimpleLinkingCollections: Omit<
        ComponentMessageSimpleLinkingCollections,
        'dataErrorsCollection' | 'entryCollection'
    > & {
        dataErrorsCollection?: Maybe<ResolversParentTypes['DataErrorsCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentNavigationGroup: Omit<ComponentNavigationGroup, 'itemsCollection' | 'linkedFrom' | 'page'> & {
        itemsCollection?: Maybe<ResolversParentTypes['ComponentNavigationGroupItemsCollection']>;
        linkedFrom?: Maybe<ResolversParentTypes['ComponentNavigationGroupLinkingCollections']>;
        page?: Maybe<ResolversParentTypes['Page']>;
    };
    ComponentNavigationGroupCollection: Omit<ComponentNavigationGroupCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentNavigationGroup']>>;
    };
    ComponentNavigationGroupFilter: ComponentNavigationGroupFilter;
    ComponentNavigationGroupItemsCollection: Omit<ComponentNavigationGroupItemsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentNavigationItem']>>;
    };
    ComponentNavigationGroupLinkingCollections: Omit<
        ComponentNavigationGroupLinkingCollections,
        'entryCollection' | 'footerCollection' | 'headerCollection'
    > & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
        footerCollection?: Maybe<ResolversParentTypes['FooterCollection']>;
        headerCollection?: Maybe<ResolversParentTypes['HeaderCollection']>;
    };
    ComponentNavigationItem: Omit<ComponentNavigationItem, 'linkedFrom' | 'page'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentNavigationItemLinkingCollections']>;
        page?: Maybe<ResolversParentTypes['Page']>;
    };
    ComponentNavigationItemCollection: Omit<ComponentNavigationItemCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentNavigationItem']>>;
    };
    ComponentNavigationItemFilter: ComponentNavigationItemFilter;
    ComponentNavigationItemLinkingCollections: Omit<
        ComponentNavigationItemLinkingCollections,
        'componentNavigationGroupCollection' | 'entryCollection' | 'footerCollection' | 'headerCollection'
    > & {
        componentNavigationGroupCollection?: Maybe<ResolversParentTypes['ComponentNavigationGroupCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
        footerCollection?: Maybe<ResolversParentTypes['FooterCollection']>;
        headerCollection?: Maybe<ResolversParentTypes['HeaderCollection']>;
    };
    ComponentNoResult: Omit<ComponentNoResult, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentNoResultLinkingCollections']>;
    };
    ComponentNoResultCollection: Omit<ComponentNoResultCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentNoResult']>>;
    };
    ComponentNoResultFilter: ComponentNoResultFilter;
    ComponentNoResultLinkingCollections: Omit<
        ComponentNoResultLinkingCollections,
        'blockTicketListCollection' | 'entryCollection'
    > & {
        blockTicketListCollection?: Maybe<ResolversParentTypes['BlockTicketListCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentPagination: Omit<ComponentPagination, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentPaginationLinkingCollections']>;
    };
    ComponentPaginationCollection: Omit<ComponentPaginationCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentPagination']>>;
    };
    ComponentPaginationFilter: ComponentPaginationFilter;
    ComponentPaginationLinkingCollections: Omit<
        ComponentPaginationLinkingCollections,
        'blockTicketListCollection' | 'entryCollection'
    > & {
        blockTicketListCollection?: Maybe<ResolversParentTypes['BlockTicketListCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentRoles: Omit<ComponentRoles, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentRolesLinkingCollections']>;
    };
    ComponentRolesCollection: Omit<ComponentRolesCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentRoles']>>;
    };
    ComponentRolesFilter: ComponentRolesFilter;
    ComponentRolesLinkingCollections: Omit<ComponentRolesLinkingCollections, 'entryCollection'> & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentTable: Omit<ComponentTable, 'columnsCollection' | 'linkedFrom'> & {
        columnsCollection?: Maybe<ResolversParentTypes['ComponentTableColumnsCollection']>;
        linkedFrom?: Maybe<ResolversParentTypes['ComponentTableLinkingCollections']>;
    };
    ComponentTableCollection: Omit<ComponentTableCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentTable']>>;
    };
    ComponentTableColumn: Omit<ComponentTableColumn, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ComponentTableColumnLinkingCollections']>;
    };
    ComponentTableColumnCollection: Omit<ComponentTableColumnCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentTableColumn']>>;
    };
    ComponentTableColumnFilter: ComponentTableColumnFilter;
    ComponentTableColumnLinkingCollections: Omit<
        ComponentTableColumnLinkingCollections,
        'componentTableCollection' | 'entryCollection'
    > & {
        componentTableCollection?: Maybe<ResolversParentTypes['ComponentTableCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ComponentTableColumnsCollection: Omit<ComponentTableColumnsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ComponentTableColumn']>>;
    };
    ComponentTableFilter: ComponentTableFilter;
    ComponentTableLinkingCollections: Omit<
        ComponentTableLinkingCollections,
        'blockTicketListCollection' | 'entryCollection'
    > & {
        blockTicketListCollection?: Maybe<ResolversParentTypes['BlockTicketListCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ConfigurableTexts: Omit<ConfigurableTexts, 'actions' | 'dates' | 'errors' | 'linkedFrom' | 'validation'> & {
        actions?: Maybe<ResolversParentTypes['DataActions']>;
        dates?: Maybe<ResolversParentTypes['DataDates']>;
        errors?: Maybe<ResolversParentTypes['DataErrors']>;
        linkedFrom?: Maybe<ResolversParentTypes['ConfigurableTextsLinkingCollections']>;
        validation?: Maybe<ResolversParentTypes['DataValidation']>;
    };
    ConfigurableTextsCollection: Omit<ConfigurableTextsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['ConfigurableTexts']>>;
    };
    ConfigurableTextsFilter: ConfigurableTextsFilter;
    ConfigurableTextsLinkingCollections: Omit<ConfigurableTextsLinkingCollections, 'entryCollection'> & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    ContentfulMetadata: ContentfulMetadata;
    ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
    ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
    ContentfulMetadataFilter: ContentfulMetadataFilter;
    ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
    ContentfulTag: ContentfulTag;
    DataActions: Omit<DataActions, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['DataActionsLinkingCollections']>;
    };
    DataActionsCollection: Omit<DataActionsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['DataActions']>>;
    };
    DataActionsFilter: DataActionsFilter;
    DataActionsLinkingCollections: Omit<
        DataActionsLinkingCollections,
        'configurableTextsCollection' | 'entryCollection'
    > & {
        configurableTextsCollection?: Maybe<ResolversParentTypes['ConfigurableTextsCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    DataConfigurableTexts: Omit<DataConfigurableTexts, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['DataConfigurableTextsLinkingCollections']>;
    };
    DataConfigurableTextsCollection: Omit<DataConfigurableTextsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['DataConfigurableTexts']>>;
    };
    DataConfigurableTextsFilter: DataConfigurableTextsFilter;
    DataConfigurableTextsLinkingCollections: Omit<
        DataConfigurableTextsLinkingCollections,
        'blockTicketListCollection' | 'entryCollection'
    > & {
        blockTicketListCollection?: Maybe<ResolversParentTypes['BlockTicketListCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    DataDates: Omit<DataDates, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['DataDatesLinkingCollections']>;
    };
    DataDatesCollection: Omit<DataDatesCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['DataDates']>>;
    };
    DataDatesFilter: DataDatesFilter;
    DataDatesLinkingCollections: Omit<
        DataDatesLinkingCollections,
        'configurableTextsCollection' | 'entryCollection'
    > & {
        configurableTextsCollection?: Maybe<ResolversParentTypes['ConfigurableTextsCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    DataErrors: Omit<DataErrors, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['DataErrorsLinkingCollections']>;
    };
    DataErrorsCollection: Omit<DataErrorsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['DataErrors']>>;
    };
    DataErrorsFilter: DataErrorsFilter;
    DataErrorsLinkingCollections: Omit<
        DataErrorsLinkingCollections,
        'configurableTextsCollection' | 'entryCollection'
    > & {
        configurableTextsCollection?: Maybe<ResolversParentTypes['ConfigurableTextsCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    DataValidation: Omit<DataValidation, 'linkedFrom'> & {
        linkedFrom?: Maybe<ResolversParentTypes['DataValidationLinkingCollections']>;
    };
    DataValidationCollection: Omit<DataValidationCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['DataValidation']>>;
    };
    DataValidationFilter: DataValidationFilter;
    DataValidationLinkingCollections: Omit<
        DataValidationLinkingCollections,
        'configurableTextsCollection' | 'entryCollection'
    > & {
        configurableTextsCollection?: Maybe<ResolversParentTypes['ConfigurableTextsCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    DateTime: Scalars['DateTime']['output'];
    Dimension: Scalars['Dimension']['output'];
    Entry: ResolversInterfaceTypes<ResolversParentTypes>['Entry'];
    EntryCollection: Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Entry']>> };
    EntryFilter: EntryFilter;
    Float: Scalars['Float']['output'];
    Footer: Omit<Footer, 'itemsCollection' | 'linkedFrom' | 'logo'> & {
        itemsCollection?: Maybe<ResolversParentTypes['FooterItemsCollection']>;
        linkedFrom?: Maybe<ResolversParentTypes['FooterLinkingCollections']>;
        logo?: Maybe<ResolversParentTypes['Asset']>;
    };
    FooterCollection: Omit<FooterCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Footer']>> };
    FooterFilter: FooterFilter;
    FooterItemsCollection: Omit<FooterItemsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['FooterItemsItem']>>;
    };
    FooterItemsFilter: FooterItemsFilter;
    FooterItemsItem: ResolversUnionTypes<ResolversParentTypes>['FooterItemsItem'];
    FooterLinkingCollections: Omit<FooterLinkingCollections, 'appConfigCollection' | 'entryCollection'> & {
        appConfigCollection?: Maybe<ResolversParentTypes['AppConfigCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    Header: Omit<Header, 'itemsCollection' | 'linkedFrom' | 'logo' | 'notification' | 'userInfo'> & {
        itemsCollection?: Maybe<ResolversParentTypes['HeaderItemsCollection']>;
        linkedFrom?: Maybe<ResolversParentTypes['HeaderLinkingCollections']>;
        logo?: Maybe<ResolversParentTypes['Asset']>;
        notification?: Maybe<ResolversParentTypes['Page']>;
        userInfo?: Maybe<ResolversParentTypes['Page']>;
    };
    HeaderCollection: Omit<HeaderCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Header']>> };
    HeaderFilter: HeaderFilter;
    HeaderItemsCollection: Omit<HeaderItemsCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['HeaderItemsItem']>>;
    };
    HeaderItemsFilter: HeaderItemsFilter;
    HeaderItemsItem: ResolversUnionTypes<ResolversParentTypes>['HeaderItemsItem'];
    HeaderLinkingCollections: Omit<HeaderLinkingCollections, 'appConfigCollection' | 'entryCollection'> & {
        appConfigCollection?: Maybe<ResolversParentTypes['AppConfigCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    HexColor: Scalars['HexColor']['output'];
    ID: Scalars['ID']['output'];
    ImageTransformOptions: ImageTransformOptions;
    Int: Scalars['Int']['output'];
    Page: Omit<Page, 'linkedFrom' | 'parent' | 'seo' | 'template'> & {
        linkedFrom?: Maybe<ResolversParentTypes['PageLinkingCollections']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
        seo?: Maybe<ResolversParentTypes['PageSeo']>;
        template?: Maybe<ResolversParentTypes['PageTemplate']>;
    };
    PageCollection: Omit<PageCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Page']>> };
    PageFilter: PageFilter;
    PageLinkingCollections: Omit<
        PageLinkingCollections,
        | 'articleCollection'
        | 'blockArticleListCollection'
        | 'blockCategoryCollection'
        | 'blockCategoryListCollection'
        | 'componentCategoryCollection'
        | 'componentLinkCollection'
        | 'componentNavigationGroupCollection'
        | 'componentNavigationItemCollection'
        | 'entryCollection'
        | 'headerCollection'
    > & {
        articleCollection?: Maybe<ResolversParentTypes['ArticleCollection']>;
        blockArticleListCollection?: Maybe<ResolversParentTypes['BlockArticleListCollection']>;
        blockCategoryCollection?: Maybe<ResolversParentTypes['BlockCategoryCollection']>;
        blockCategoryListCollection?: Maybe<ResolversParentTypes['BlockCategoryListCollection']>;
        componentCategoryCollection?: Maybe<ResolversParentTypes['ComponentCategoryCollection']>;
        componentLinkCollection?: Maybe<ResolversParentTypes['ComponentLinkCollection']>;
        componentNavigationGroupCollection?: Maybe<ResolversParentTypes['ComponentNavigationGroupCollection']>;
        componentNavigationItemCollection?: Maybe<ResolversParentTypes['ComponentNavigationItemCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
        headerCollection?: Maybe<ResolversParentTypes['HeaderCollection']>;
    };
    PageOneColumnTemplate: Omit<PageOneColumnTemplate, 'linkedFrom' | 'mainSlotCollection'> & {
        linkedFrom?: Maybe<ResolversParentTypes['PageOneColumnTemplateLinkingCollections']>;
        mainSlotCollection?: Maybe<ResolversParentTypes['PageOneColumnTemplateMainSlotCollection']>;
    };
    PageOneColumnTemplateCollection: Omit<PageOneColumnTemplateCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['PageOneColumnTemplate']>>;
    };
    PageOneColumnTemplateFilter: PageOneColumnTemplateFilter;
    PageOneColumnTemplateLinkingCollections: Omit<PageOneColumnTemplateLinkingCollections, 'entryCollection'> & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    PageOneColumnTemplateMainSlotCollection: Omit<PageOneColumnTemplateMainSlotCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['Block']>>;
    };
    PageSeo: Omit<PageSeo, 'image' | 'linkedFrom'> & {
        image?: Maybe<ResolversParentTypes['Asset']>;
        linkedFrom?: Maybe<ResolversParentTypes['PageSeoLinkingCollections']>;
    };
    PageSeoCollection: Omit<PageSeoCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageSeo']>> };
    PageSeoFilter: PageSeoFilter;
    PageSeoLinkingCollections: Omit<PageSeoLinkingCollections, 'articleCollection' | 'entryCollection'> & {
        articleCollection?: Maybe<ResolversParentTypes['ArticleCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    PageTemplate: ResolversUnionTypes<ResolversParentTypes>['PageTemplate'];
    PageTwoColumnTemplate: Omit<
        PageTwoColumnTemplate,
        'bottomSlotCollection' | 'leftSlotCollection' | 'linkedFrom' | 'rightSlotCollection' | 'topSlotCollection'
    > & {
        bottomSlotCollection?: Maybe<ResolversParentTypes['PageTwoColumnTemplateBottomSlotCollection']>;
        leftSlotCollection?: Maybe<ResolversParentTypes['PageTwoColumnTemplateLeftSlotCollection']>;
        linkedFrom?: Maybe<ResolversParentTypes['PageTwoColumnTemplateLinkingCollections']>;
        rightSlotCollection?: Maybe<ResolversParentTypes['PageTwoColumnTemplateRightSlotCollection']>;
        topSlotCollection?: Maybe<ResolversParentTypes['PageTwoColumnTemplateTopSlotCollection']>;
    };
    PageTwoColumnTemplateBottomSlotCollection: Omit<PageTwoColumnTemplateBottomSlotCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['Block']>>;
    };
    PageTwoColumnTemplateCollection: Omit<PageTwoColumnTemplateCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['PageTwoColumnTemplate']>>;
    };
    PageTwoColumnTemplateFilter: PageTwoColumnTemplateFilter;
    PageTwoColumnTemplateLeftSlotCollection: Omit<PageTwoColumnTemplateLeftSlotCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['Block']>>;
    };
    PageTwoColumnTemplateLinkingCollections: Omit<PageTwoColumnTemplateLinkingCollections, 'entryCollection'> & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    PageTwoColumnTemplateRightSlotCollection: Omit<PageTwoColumnTemplateRightSlotCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['Block']>>;
    };
    PageTwoColumnTemplateTopSlotCollection: Omit<PageTwoColumnTemplateTopSlotCollection, 'items'> & {
        items: Array<Maybe<ResolversParentTypes['Block']>>;
    };
    Quality: Scalars['Quality']['output'];
    Query: {};
    String: Scalars['String']['output'];
    Sys: Sys;
    SysFilter: SysFilter;
    TaxonomyConcept: TaxonomyConcept;
    Theme: Omit<Theme, 'linkedFrom' | 'logo'> & {
        linkedFrom?: Maybe<ResolversParentTypes['ThemeLinkingCollections']>;
        logo?: Maybe<ResolversParentTypes['Asset']>;
    };
    ThemeCollection: Omit<ThemeCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Theme']>> };
    ThemeFilter: ThemeFilter;
    ThemeLinkingCollections: Omit<
        ThemeLinkingCollections,
        'appConfigCollection' | 'blockCollection' | 'entryCollection'
    > & {
        appConfigCollection?: Maybe<ResolversParentTypes['AppConfigCollection']>;
        blockCollection?: Maybe<ResolversParentTypes['BlockCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    TimelineFilterInput: TimelineFilterInput;
    _Node: ResolversInterfaceTypes<ResolversParentTypes>['_Node'];
    cfArticleNestedFilter: CfArticleNestedFilter;
    cfAuthorNestedFilter: CfAuthorNestedFilter;
    cfBlockNestedFilter: CfBlockNestedFilter;
    cfComponentArticleNestedFilter: CfComponentArticleNestedFilter;
    cfComponentArticleSectionNestedFilter: CfComponentArticleSectionNestedFilter;
    cfComponentBannerNestedFilter: CfComponentBannerNestedFilter;
    cfComponentCategoryNestedFilter: CfComponentCategoryNestedFilter;
    cfComponentFaqItemNestedFilter: CfComponentFaqItemNestedFilter;
    cfComponentFieldMappingNestedFilter: CfComponentFieldMappingNestedFilter;
    cfComponentKeyValueNestedFilter: CfComponentKeyValueNestedFilter;
    cfComponentLinkNestedFilter: CfComponentLinkNestedFilter;
    cfComponentMessageSimpleNestedFilter: CfComponentMessageSimpleNestedFilter;
    cfComponentNavigationItemNestedFilter: CfComponentNavigationItemNestedFilter;
    cfComponentNoResultNestedFilter: CfComponentNoResultNestedFilter;
    cfComponentPaginationNestedFilter: CfComponentPaginationNestedFilter;
    cfComponentTableColumnNestedFilter: CfComponentTableColumnNestedFilter;
    cfComponentTableNestedFilter: CfComponentTableNestedFilter;
    cfDataActionsNestedFilter: CfDataActionsNestedFilter;
    cfDataConfigurableTextsNestedFilter: CfDataConfigurableTextsNestedFilter;
    cfDataDatesNestedFilter: CfDataDatesNestedFilter;
    cfDataErrorsNestedFilter: CfDataErrorsNestedFilter;
    cfDataValidationNestedFilter: CfDataValidationNestedFilter;
    cfFooterNestedFilter: CfFooterNestedFilter;
    cfHeaderNestedFilter: CfHeaderNestedFilter;
    cfPageNestedFilter: CfPageNestedFilter;
    cfPageSeoNestedFilter: CfPageSeoNestedFilter;
    cfThemeNestedFilter: CfThemeNestedFilter;
    cfcomponentsMultiTypeNestedFilter: CfcomponentsMultiTypeNestedFilter;
    cfitemsMultiTypeNestedFilter: CfitemsMultiTypeNestedFilter;
};

export type ContentSourceMapsDirectiveArgs = {};

export type ContentSourceMapsDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = ContentSourceMapsDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TimelineDirectiveArgs = {
    where: TimelineFilterInput;
};

export type TimelineDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = TimelineDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AppConfigResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['AppConfig'] = ResolversParentTypes['AppConfig'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['AppConfigLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<AppConfigLinkedFromArgs>
    >;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AppConfigNameArgs>>;
    signedInFooter?: Resolver<
        Maybe<ResolversTypes['Footer']>,
        ParentType,
        ContextType,
        Partial<AppConfigSignedInFooterArgs>
    >;
    signedInHeader?: Resolver<
        Maybe<ResolversTypes['Header']>,
        ParentType,
        ContextType,
        Partial<AppConfigSignedInHeaderArgs>
    >;
    signedOutFooter?: Resolver<
        Maybe<ResolversTypes['Footer']>,
        ParentType,
        ContextType,
        Partial<AppConfigSignedOutFooterArgs>
    >;
    signedOutHeader?: Resolver<
        Maybe<ResolversTypes['Header']>,
        ParentType,
        ContextType,
        Partial<AppConfigSignedOutHeaderArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    themesCollection?: Resolver<
        Maybe<ResolversTypes['AppConfigThemesCollection']>,
        ParentType,
        ContextType,
        RequireFields<AppConfigThemesCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppConfigCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['AppConfigCollection'] = ResolversParentTypes['AppConfigCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['AppConfig']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppConfigLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['AppConfigLinkingCollections'] = ResolversParentTypes['AppConfigLinkingCollections'],
> = {
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<AppConfigLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppConfigThemesCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['AppConfigThemesCollection'] = ResolversParentTypes['AppConfigThemesCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Theme']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    content?: Resolver<Maybe<ResolversTypes['ComponentArticle']>, ParentType, ContextType, Partial<ArticleContentArgs>>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ArticleLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ArticleLinkedFromArgs>
    >;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<ArticleParentArgs>>;
    seo?: Resolver<Maybe<ResolversTypes['PageSeo']>, ParentType, ContextType, Partial<ArticleSeoArgs>>;
    slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ArticleSlugArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ArticleCollection'] = ResolversParentTypes['ArticleCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Article']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ArticleLinkingCollections'] = ResolversParentTypes['ArticleLinkingCollections'],
> = {
    blockArticleListCollection?: Resolver<
        Maybe<ResolversTypes['BlockArticleListCollection']>,
        ParentType,
        ContextType,
        RequireFields<ArticleLinkingCollectionsBlockArticleListCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ArticleLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset'],
> = {
    contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetContentTypeArgs>>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetDescriptionArgs>>;
    fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetFileNameArgs>>;
    height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetHeightArgs>>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['AssetLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<AssetLinkedFromArgs>
    >;
    size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetSizeArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetTitleArgs>>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetUrlArgs>>;
    width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetWidthArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['AssetCollection'] = ResolversParentTypes['AssetCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['AssetLinkingCollections'] = ResolversParentTypes['AssetLinkingCollections'],
> = {
    authorCollection?: Resolver<
        Maybe<ResolversTypes['AuthorCollection']>,
        ParentType,
        ContextType,
        RequireFields<AssetLinkingCollectionsAuthorCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<AssetLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    footerCollection?: Resolver<
        Maybe<ResolversTypes['FooterCollection']>,
        ParentType,
        ContextType,
        RequireFields<AssetLinkingCollectionsFooterCollectionArgs, 'limit' | 'skip'>
    >;
    headerCollection?: Resolver<
        Maybe<ResolversTypes['HeaderCollection']>,
        ParentType,
        ContextType,
        RequireFields<AssetLinkingCollectionsHeaderCollectionArgs, 'limit' | 'skip'>
    >;
    pageSeoCollection?: Resolver<
        Maybe<ResolversTypes['PageSeoCollection']>,
        ParentType,
        ContextType,
        RequireFields<AssetLinkingCollectionsPageSeoCollectionArgs, 'limit' | 'skip'>
    >;
    themeCollection?: Resolver<
        Maybe<ResolversTypes['ThemeCollection']>,
        ParentType,
        ContextType,
        RequireFields<AssetLinkingCollectionsThemeCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    avatar?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<AuthorAvatarArgs>>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['AuthorLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<AuthorLinkedFromArgs>
    >;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AuthorNameArgs>>;
    position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AuthorPositionArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['AuthorCollection'] = ResolversParentTypes['AuthorCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Author']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['AuthorLinkingCollections'] = ResolversParentTypes['AuthorLinkingCollections'],
> = {
    componentArticleCollection?: Resolver<
        Maybe<ResolversTypes['ComponentArticleCollection']>,
        ParentType,
        ContextType,
        RequireFields<AuthorLinkingCollectionsComponentArticleCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<AuthorLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    background?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockBackgroundArgs>>;
    content?: Resolver<Maybe<ResolversTypes['BlockContent']>, ParentType, ContextType, Partial<BlockContentArgs>>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['BlockLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<BlockLinkedFromArgs>
    >;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockNameArgs>>;
    spacing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockSpacingArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    theme?: Resolver<Maybe<ResolversTypes['Theme']>, ParentType, ContextType, Partial<BlockThemeArgs>>;
    variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockVariantArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockArticleListResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['BlockArticleList'] = ResolversParentTypes['BlockArticleList'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    articlesCollection?: Resolver<
        Maybe<ResolversTypes['BlockArticleListArticlesCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockArticleListArticlesCollectionArgs, 'limit' | 'skip'>
    >;
    articlesToShow?: Resolver<
        Maybe<ResolversTypes['Int']>,
        ParentType,
        ContextType,
        Partial<BlockArticleListArticlesToShowArgs>
    >;
    category?: Resolver<
        Maybe<ResolversTypes['ComponentCategory']>,
        ParentType,
        ContextType,
        Partial<BlockArticleListCategoryArgs>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<BlockArticleListDescriptionArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['BlockArticleListLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<BlockArticleListLinkedFromArgs>
    >;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<BlockArticleListParentArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockArticleListTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockArticleListArticlesCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockArticleListArticlesCollection'] = ResolversParentTypes['BlockArticleListArticlesCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Article']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockArticleListCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockArticleListCollection'] = ResolversParentTypes['BlockArticleListCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['BlockArticleList']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockArticleListLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockArticleListLinkingCollections'] = ResolversParentTypes['BlockArticleListLinkingCollections'],
> = {
    blockCollection?: Resolver<
        Maybe<ResolversTypes['BlockCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockArticleListLinkingCollectionsBlockCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockArticleListLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCategoryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['BlockCategory'] = ResolversParentTypes['BlockCategory'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    category?: Resolver<
        Maybe<ResolversTypes['ComponentCategory']>,
        ParentType,
        ContextType,
        Partial<BlockCategoryCategoryArgs>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['BlockCategoryLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<BlockCategoryLinkedFromArgs>
    >;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockCategoryNameArgs>>;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<BlockCategoryParentArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCategoryCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockCategoryCollection'] = ResolversParentTypes['BlockCategoryCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['BlockCategory']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCategoryLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockCategoryLinkingCollections'] = ResolversParentTypes['BlockCategoryLinkingCollections'],
> = {
    blockCollection?: Resolver<
        Maybe<ResolversTypes['BlockCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockCategoryLinkingCollectionsBlockCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockCategoryLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCategoryListResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['BlockCategoryList'] = ResolversParentTypes['BlockCategoryList'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    categoriesCollection?: Resolver<
        Maybe<ResolversTypes['BlockCategoryListCategoriesCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockCategoryListCategoriesCollectionArgs, 'limit' | 'skip'>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<BlockCategoryListDescriptionArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['BlockCategoryListLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<BlockCategoryListLinkedFromArgs>
    >;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<BlockCategoryListParentArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockCategoryListTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCategoryListCategoriesCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockCategoryListCategoriesCollection'] = ResolversParentTypes['BlockCategoryListCategoriesCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentCategory']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCategoryListCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockCategoryListCollection'] = ResolversParentTypes['BlockCategoryListCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['BlockCategoryList']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCategoryListLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockCategoryListLinkingCollections'] = ResolversParentTypes['BlockCategoryListLinkingCollections'],
> = {
    blockCollection?: Resolver<
        Maybe<ResolversTypes['BlockCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockCategoryListLinkingCollectionsBlockCollectionArgs, 'limit' | 'skip'>
    >;
    componentCategoryCollection?: Resolver<
        Maybe<ResolversTypes['ComponentCategoryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockCategoryListLinkingCollectionsComponentCategoryCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockCategoryListLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['BlockCollection'] = ResolversParentTypes['BlockCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockContentResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['BlockContent'] = ResolversParentTypes['BlockContent'],
> = {
    __resolveType: TypeResolveFn<
        'BlockArticleList' | 'BlockCategory' | 'BlockCategoryList' | 'BlockFaq' | 'BlockQuickLinks' | 'BlockTicketList',
        ParentType,
        ContextType
    >;
};

export type BlockFaqResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['BlockFaq'] = ResolversParentTypes['BlockFaq'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    banner?: Resolver<Maybe<ResolversTypes['ComponentBanner']>, ParentType, ContextType, Partial<BlockFaqBannerArgs>>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    itemsCollection?: Resolver<
        Maybe<ResolversTypes['BlockFaqItemsCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockFaqItemsCollectionArgs, 'limit' | 'skip'>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['BlockFaqLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<BlockFaqLinkedFromArgs>
    >;
    subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockFaqSubtitleArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockFaqTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockFaqCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['BlockFaqCollection'] = ResolversParentTypes['BlockFaqCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['BlockFaq']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockFaqItemsCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockFaqItemsCollection'] = ResolversParentTypes['BlockFaqItemsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentFaqItem']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockFaqLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockFaqLinkingCollections'] = ResolversParentTypes['BlockFaqLinkingCollections'],
> = {
    blockCollection?: Resolver<
        Maybe<ResolversTypes['BlockCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockFaqLinkingCollectionsBlockCollectionArgs, 'limit' | 'skip'>
    >;
    componentCategoryCollection?: Resolver<
        Maybe<ResolversTypes['ComponentCategoryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockFaqLinkingCollectionsComponentCategoryCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockFaqLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockLinkingCollections'] = ResolversParentTypes['BlockLinkingCollections'],
> = {
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    pageOneColumnTemplateCollection?: Resolver<
        Maybe<ResolversTypes['PageOneColumnTemplateCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockLinkingCollectionsPageOneColumnTemplateCollectionArgs, 'limit' | 'skip'>
    >;
    pageTwoColumnTemplateCollection?: Resolver<
        Maybe<ResolversTypes['PageTwoColumnTemplateCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockLinkingCollectionsPageTwoColumnTemplateCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockQuickLinksResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['BlockQuickLinks'] = ResolversParentTypes['BlockQuickLinks'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<BlockQuickLinksDescriptionArgs>
    >;
    itemsCollection?: Resolver<
        Maybe<ResolversTypes['BlockQuickLinksItemsCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockQuickLinksItemsCollectionArgs, 'limit' | 'skip'>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['BlockQuickLinksLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<BlockQuickLinksLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockQuickLinksTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockQuickLinksCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockQuickLinksCollection'] = ResolversParentTypes['BlockQuickLinksCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['BlockQuickLinks']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockQuickLinksItemsCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockQuickLinksItemsCollection'] = ResolversParentTypes['BlockQuickLinksItemsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentLink']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockQuickLinksLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockQuickLinksLinkingCollections'] = ResolversParentTypes['BlockQuickLinksLinkingCollections'],
> = {
    blockCollection?: Resolver<
        Maybe<ResolversTypes['BlockCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockQuickLinksLinkingCollectionsBlockCollectionArgs, 'limit' | 'skip'>
    >;
    componentCategoryCollection?: Resolver<
        Maybe<ResolversTypes['ComponentCategoryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockQuickLinksLinkingCollectionsComponentCategoryCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockQuickLinksLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockTicketListResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['BlockTicketList'] = ResolversParentTypes['BlockTicketList'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    detailsUrl?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<BlockTicketListDetailsUrlArgs>
    >;
    fieldsCollection?: Resolver<
        Maybe<ResolversTypes['BlockTicketListFieldsCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockTicketListFieldsCollectionArgs, 'limit' | 'skip'>
    >;
    labels?: Resolver<
        Maybe<ResolversTypes['DataConfigurableTexts']>,
        ParentType,
        ContextType,
        Partial<BlockTicketListLabelsArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['BlockTicketListLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<BlockTicketListLinkedFromArgs>
    >;
    noResults?: Resolver<
        Maybe<ResolversTypes['ComponentNoResult']>,
        ParentType,
        ContextType,
        Partial<BlockTicketListNoResultsArgs>
    >;
    pagination?: Resolver<
        Maybe<ResolversTypes['ComponentPagination']>,
        ParentType,
        ContextType,
        Partial<BlockTicketListPaginationArgs>
    >;
    subTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockTicketListSubTitleArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    table?: Resolver<
        Maybe<ResolversTypes['ComponentTable']>,
        ParentType,
        ContextType,
        Partial<BlockTicketListTableArgs>
    >;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<BlockTicketListTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockTicketListCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockTicketListCollection'] = ResolversParentTypes['BlockTicketListCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['BlockTicketList']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockTicketListFieldsCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockTicketListFieldsCollection'] = ResolversParentTypes['BlockTicketListFieldsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentFieldMapping']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlockTicketListLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['BlockTicketListLinkingCollections'] = ResolversParentTypes['BlockTicketListLinkingCollections'],
> = {
    blockCollection?: Resolver<
        Maybe<ResolversTypes['BlockCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockTicketListLinkingCollectionsBlockCollectionArgs, 'limit' | 'skip'>
    >;
    componentCategoryCollection?: Resolver<
        Maybe<ResolversTypes['ComponentCategoryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockTicketListLinkingCollectionsComponentCategoryCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockTicketListLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentArticleResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentArticle'] = ResolversParentTypes['ComponentArticle'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, Partial<ComponentArticleAuthorArgs>>;
    category?: Resolver<
        Maybe<ResolversTypes['ComponentCategory']>,
        ParentType,
        ContextType,
        Partial<ComponentArticleCategoryArgs>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentArticleLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentArticleLinkedFromArgs>
    >;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentArticleNameArgs>>;
    sectionsCollection?: Resolver<
        Maybe<ResolversTypes['ComponentArticleSectionsCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentArticleSectionsCollectionArgs, 'limit' | 'skip'>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentArticleCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentArticleCollection'] = ResolversParentTypes['ComponentArticleCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentArticle']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentArticleLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentArticleLinkingCollections'] = ResolversParentTypes['ComponentArticleLinkingCollections'],
> = {
    articleCollection?: Resolver<
        Maybe<ResolversTypes['ArticleCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentArticleLinkingCollectionsArticleCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentArticleLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentArticleSectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentArticleSection'] = ResolversParentTypes['ComponentArticleSection'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    content?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentArticleSectionContentArgs>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentArticleSectionLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentArticleSectionLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentArticleSectionTitleArgs>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentArticleSectionCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentArticleSectionCollection'] = ResolversParentTypes['ComponentArticleSectionCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentArticleSection']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentArticleSectionLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentArticleSectionLinkingCollections'] = ResolversParentTypes['ComponentArticleSectionLinkingCollections'],
> = {
    componentArticleCollection?: Resolver<
        Maybe<ResolversTypes['ComponentArticleCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentArticleSectionLinkingCollectionsComponentArticleCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentArticleSectionLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentArticleSectionsCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentArticleSectionsCollection'] = ResolversParentTypes['ComponentArticleSectionsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentArticleSection']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentBannerResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentBanner'] = ResolversParentTypes['ComponentBanner'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentBannerDescriptionArgs>
    >;
    link?: Resolver<Maybe<ResolversTypes['ComponentLink']>, ParentType, ContextType, Partial<ComponentBannerLinkArgs>>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentBannerLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentBannerLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentBannerTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentBannerCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentBannerCollection'] = ResolversParentTypes['ComponentBannerCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentBanner']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentBannerLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentBannerLinkingCollections'] = ResolversParentTypes['ComponentBannerLinkingCollections'],
> = {
    blockFaqCollection?: Resolver<
        Maybe<ResolversTypes['BlockFaqCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentBannerLinkingCollectionsBlockFaqCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentBannerLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCategoryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentCategory'] = ResolversParentTypes['ComponentCategory'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    componentsCollection?: Resolver<
        Maybe<ResolversTypes['ComponentCategoryComponentsCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentCategoryComponentsCollectionArgs, 'limit' | 'skip'>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentCategoryDescriptionArgs>
    >;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCategoryIconArgs>>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentCategoryLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentCategoryLinkedFromArgs>
    >;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCategoryNameArgs>>;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<ComponentCategoryParentArgs>>;
    slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCategorySlugArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCategoryCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentCategoryCollection'] = ResolversParentTypes['ComponentCategoryCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentCategory']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCategoryComponentsCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentCategoryComponentsCollection'] = ResolversParentTypes['ComponentCategoryComponentsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentCategoryComponentsItem']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCategoryComponentsItemResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentCategoryComponentsItem'] = ResolversParentTypes['ComponentCategoryComponentsItem'],
> = {
    __resolveType: TypeResolveFn<
        'BlockCategoryList' | 'BlockFaq' | 'BlockQuickLinks' | 'BlockTicketList',
        ParentType,
        ContextType
    >;
};

export type ComponentCategoryLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentCategoryLinkingCollections'] = ResolversParentTypes['ComponentCategoryLinkingCollections'],
> = {
    blockArticleListCollection?: Resolver<
        Maybe<ResolversTypes['BlockArticleListCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentCategoryLinkingCollectionsBlockArticleListCollectionArgs, 'limit' | 'skip'>
    >;
    blockCategoryCollection?: Resolver<
        Maybe<ResolversTypes['BlockCategoryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentCategoryLinkingCollectionsBlockCategoryCollectionArgs, 'limit' | 'skip'>
    >;
    blockCategoryListCollection?: Resolver<
        Maybe<ResolversTypes['BlockCategoryListCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentCategoryLinkingCollectionsBlockCategoryListCollectionArgs, 'limit' | 'skip'>
    >;
    componentArticleCollection?: Resolver<
        Maybe<ResolversTypes['ComponentArticleCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentCategoryLinkingCollectionsComponentArticleCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentCategoryLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFaqItemResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentFaqItem'] = ResolversParentTypes['ComponentFaqItem'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFaqItemContentArgs>>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentFaqItemLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentFaqItemLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFaqItemTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFaqItemCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentFaqItemCollection'] = ResolversParentTypes['ComponentFaqItemCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentFaqItem']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFaqItemLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentFaqItemLinkingCollections'] = ResolversParentTypes['ComponentFaqItemLinkingCollections'],
> = {
    blockFaqCollection?: Resolver<
        Maybe<ResolversTypes['BlockFaqCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentFaqItemLinkingCollectionsBlockFaqCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentFaqItemLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFieldMappingResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentFieldMapping'] = ResolversParentTypes['ComponentFieldMapping'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentFieldMappingLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentFieldMappingLinkedFromArgs>
    >;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFieldMappingNameArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    valuesCollection?: Resolver<
        Maybe<ResolversTypes['ComponentFieldMappingValuesCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentFieldMappingValuesCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFieldMappingCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentFieldMappingCollection'] = ResolversParentTypes['ComponentFieldMappingCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentFieldMapping']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFieldMappingLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentFieldMappingLinkingCollections'] = ResolversParentTypes['ComponentFieldMappingLinkingCollections'],
> = {
    blockTicketListCollection?: Resolver<
        Maybe<ResolversTypes['BlockTicketListCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentFieldMappingLinkingCollectionsBlockTicketListCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentFieldMappingLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFieldMappingValuesCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentFieldMappingValuesCollection'] = ResolversParentTypes['ComponentFieldMappingValuesCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentKeyValue']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentKeyValueResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentKeyValue'] = ResolversParentTypes['ComponentKeyValue'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentKeyValueKeyArgs>>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentKeyValueLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentKeyValueLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentKeyValueValueArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentKeyValueCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentKeyValueCollection'] = ResolversParentTypes['ComponentKeyValueCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentKeyValue']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentKeyValueLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentKeyValueLinkingCollections'] = ResolversParentTypes['ComponentKeyValueLinkingCollections'],
> = {
    componentFieldMappingCollection?: Resolver<
        Maybe<ResolversTypes['ComponentFieldMappingCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentKeyValueLinkingCollectionsComponentFieldMappingCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentKeyValueLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLinkResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentLink'] = ResolversParentTypes['ComponentLink'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentLinkIconArgs>>;
    label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentLinkLabelArgs>>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentLinkLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentLinkLinkedFromArgs>
    >;
    page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<ComponentLinkPageArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentLinkUrlArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLinkCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentLinkCollection'] = ResolversParentTypes['ComponentLinkCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentLink']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLinkLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentLinkLinkingCollections'] = ResolversParentTypes['ComponentLinkLinkingCollections'],
> = {
    blockQuickLinksCollection?: Resolver<
        Maybe<ResolversTypes['BlockQuickLinksCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentLinkLinkingCollectionsBlockQuickLinksCollectionArgs, 'limit' | 'skip'>
    >;
    componentBannerCollection?: Resolver<
        Maybe<ResolversTypes['ComponentBannerCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentLinkLinkingCollectionsComponentBannerCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentLinkLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentMessageSimpleResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentMessageSimple'] = ResolversParentTypes['ComponentMessageSimple'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    content?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentMessageSimpleContentArgs>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentMessageSimpleLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentMessageSimpleLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentMessageSimpleTitleArgs>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentMessageSimpleCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentMessageSimpleCollection'] = ResolversParentTypes['ComponentMessageSimpleCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentMessageSimple']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentMessageSimpleLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentMessageSimpleLinkingCollections'] = ResolversParentTypes['ComponentMessageSimpleLinkingCollections'],
> = {
    dataErrorsCollection?: Resolver<
        Maybe<ResolversTypes['DataErrorsCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentMessageSimpleLinkingCollectionsDataErrorsCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentMessageSimpleLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationGroupResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentNavigationGroup'] = ResolversParentTypes['ComponentNavigationGroup'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    itemsCollection?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationGroupItemsCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNavigationGroupItemsCollectionArgs, 'limit' | 'skip'>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationGroupLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentNavigationGroupLinkedFromArgs>
    >;
    page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<ComponentNavigationGroupPageArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentNavigationGroupTitleArgs>
    >;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentNavigationGroupUrlArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationGroupCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentNavigationGroupCollection'] = ResolversParentTypes['ComponentNavigationGroupCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentNavigationGroup']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationGroupItemsCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentNavigationGroupItemsCollection'] = ResolversParentTypes['ComponentNavigationGroupItemsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentNavigationItem']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationGroupLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentNavigationGroupLinkingCollections'] = ResolversParentTypes['ComponentNavigationGroupLinkingCollections'],
> = {
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNavigationGroupLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    footerCollection?: Resolver<
        Maybe<ResolversTypes['FooterCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNavigationGroupLinkingCollectionsFooterCollectionArgs, 'limit' | 'skip'>
    >;
    headerCollection?: Resolver<
        Maybe<ResolversTypes['HeaderCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNavigationGroupLinkingCollectionsHeaderCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationItemResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentNavigationItem'] = ResolversParentTypes['ComponentNavigationItem'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentNavigationItemDescriptionArgs>
    >;
    label?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentNavigationItemLabelArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationItemLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentNavigationItemLinkedFromArgs>
    >;
    page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<ComponentNavigationItemPageArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentNavigationItemUrlArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationItemCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentNavigationItemCollection'] = ResolversParentTypes['ComponentNavigationItemCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentNavigationItem']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationItemLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentNavigationItemLinkingCollections'] = ResolversParentTypes['ComponentNavigationItemLinkingCollections'],
> = {
    componentNavigationGroupCollection?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationGroupCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNavigationItemLinkingCollectionsComponentNavigationGroupCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNavigationItemLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    footerCollection?: Resolver<
        Maybe<ResolversTypes['FooterCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNavigationItemLinkingCollectionsFooterCollectionArgs, 'limit' | 'skip'>
    >;
    headerCollection?: Resolver<
        Maybe<ResolversTypes['HeaderCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNavigationItemLinkingCollectionsHeaderCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNoResultResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentNoResult'] = ResolversParentTypes['ComponentNoResult'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentNoResultDescriptionArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentNoResultLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentNoResultLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentNoResultTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNoResultCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentNoResultCollection'] = ResolversParentTypes['ComponentNoResultCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentNoResult']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNoResultLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentNoResultLinkingCollections'] = ResolversParentTypes['ComponentNoResultLinkingCollections'],
> = {
    blockTicketListCollection?: Resolver<
        Maybe<ResolversTypes['BlockTicketListCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNoResultLinkingCollectionsBlockTicketListCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentNoResultLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentPaginationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentPagination'] = ResolversParentTypes['ComponentPagination'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentPaginationDescriptionArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentPaginationLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentPaginationLinkedFromArgs>
    >;
    nextLabel?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentPaginationNextLabelArgs>
    >;
    perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<ComponentPaginationPerPageArgs>>;
    previousLabel?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentPaginationPreviousLabelArgs>
    >;
    selectPageLabel?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentPaginationSelectPageLabelArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentPaginationCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentPaginationCollection'] = ResolversParentTypes['ComponentPaginationCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentPagination']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentPaginationLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentPaginationLinkingCollections'] = ResolversParentTypes['ComponentPaginationLinkingCollections'],
> = {
    blockTicketListCollection?: Resolver<
        Maybe<ResolversTypes['BlockTicketListCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentPaginationLinkingCollectionsBlockTicketListCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentPaginationLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentRolesResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentRoles'] = ResolversParentTypes['ComponentRoles'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentRolesLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentRolesLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentRolesCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentRolesCollection'] = ResolversParentTypes['ComponentRolesCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentRoles']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentRolesLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentRolesLinkingCollections'] = ResolversParentTypes['ComponentRolesLinkingCollections'],
> = {
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentRolesLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTableResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentTable'] = ResolversParentTypes['ComponentTable'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    actionsLabel?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentTableActionsLabelArgs>
    >;
    actionsTitle?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<ComponentTableActionsTitleArgs>
    >;
    columnsCollection?: Resolver<
        Maybe<ResolversTypes['ComponentTableColumnsCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTableColumnsCollectionArgs, 'limit' | 'skip'>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentTableLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentTableLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTableCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentTableCollection'] = ResolversParentTypes['ComponentTableCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentTable']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTableColumnResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ComponentTableColumn'] = ResolversParentTypes['ComponentTableColumn'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentTableColumnFieldArgs>>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ComponentTableColumnLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ComponentTableColumnLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentTableColumnTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTableColumnCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentTableColumnCollection'] = ResolversParentTypes['ComponentTableColumnCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentTableColumn']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTableColumnLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentTableColumnLinkingCollections'] = ResolversParentTypes['ComponentTableColumnLinkingCollections'],
> = {
    componentTableCollection?: Resolver<
        Maybe<ResolversTypes['ComponentTableCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTableColumnLinkingCollectionsComponentTableCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTableColumnLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTableColumnsCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentTableColumnsCollection'] = ResolversParentTypes['ComponentTableColumnsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ComponentTableColumn']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTableLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ComponentTableLinkingCollections'] = ResolversParentTypes['ComponentTableLinkingCollections'],
> = {
    blockTicketListCollection?: Resolver<
        Maybe<ResolversTypes['BlockTicketListCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTableLinkingCollectionsBlockTicketListCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ComponentTableLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableTextsResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ConfigurableTexts'] = ResolversParentTypes['ConfigurableTexts'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    actions?: Resolver<
        Maybe<ResolversTypes['DataActions']>,
        ParentType,
        ContextType,
        Partial<ConfigurableTextsActionsArgs>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    dates?: Resolver<Maybe<ResolversTypes['DataDates']>, ParentType, ContextType, Partial<ConfigurableTextsDatesArgs>>;
    errors?: Resolver<
        Maybe<ResolversTypes['DataErrors']>,
        ParentType,
        ContextType,
        Partial<ConfigurableTextsErrorsArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ConfigurableTextsLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ConfigurableTextsLinkedFromArgs>
    >;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ConfigurableTextsNameArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    validation?: Resolver<
        Maybe<ResolversTypes['DataValidation']>,
        ParentType,
        ContextType,
        Partial<ConfigurableTextsValidationArgs>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableTextsCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ConfigurableTextsCollection'] = ResolversParentTypes['ConfigurableTextsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['ConfigurableTexts']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableTextsLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ConfigurableTextsLinkingCollections'] = ResolversParentTypes['ConfigurableTextsLinkingCollections'],
> = {
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ConfigurableTextsLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulMetadataResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ContentfulMetadata'] = ResolversParentTypes['ContentfulMetadata'],
> = {
    concepts?: Resolver<Array<Maybe<ResolversTypes['TaxonomyConcept']>>, ParentType, ContextType>;
    tags?: Resolver<Array<Maybe<ResolversTypes['ContentfulTag']>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulTagResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ContentfulTag'] = ResolversParentTypes['ContentfulTag'],
> = {
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataActionsResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['DataActions'] = ResolversParentTypes['DataActions'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    apply?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsApplyArgs>>;
    cancel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsCancelArgs>>;
    clear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsClearArgs>>;
    clickToSelect?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataActionsClickToSelectArgs>
    >;
    close?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsCloseArgs>>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    delete?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsDeleteArgs>>;
    details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsDetailsArgs>>;
    edit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsEditArgs>>;
    hide?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsHideArgs>>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['DataActionsLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<DataActionsLinkedFromArgs>
    >;
    logIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsLogInArgs>>;
    logOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsLogOutArgs>>;
    off?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsOffArgs>>;
    on?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsOnArgs>>;
    payOnline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsPayOnlineArgs>>;
    renew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsRenewArgs>>;
    reorder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsReorderArgs>>;
    save?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsSaveArgs>>;
    seeAllArticles?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataActionsSeeAllArticlesArgs>
    >;
    settings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsSettingsArgs>>;
    show?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsShowArgs>>;
    showAllArticles?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataActionsShowAllArticlesArgs>
    >;
    showLess?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsShowLessArgs>>;
    showMore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsShowMoreArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    trackOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataActionsTrackOrderArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataActionsCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['DataActionsCollection'] = ResolversParentTypes['DataActionsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['DataActions']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataActionsLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['DataActionsLinkingCollections'] = ResolversParentTypes['DataActionsLinkingCollections'],
> = {
    configurableTextsCollection?: Resolver<
        Maybe<ResolversTypes['ConfigurableTextsCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataActionsLinkingCollectionsConfigurableTextsCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataActionsLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataConfigurableTextsResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['DataConfigurableTexts'] = ResolversParentTypes['DataConfigurableTexts'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    apply?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataConfigurableTextsApplyArgs>>;
    cancel?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataConfigurableTextsCancelArgs>
    >;
    clear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataConfigurableTextsClearArgs>>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    delete?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataConfigurableTextsDeleteArgs>
    >;
    edit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataConfigurableTextsEditArgs>>;
    hide?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataConfigurableTextsHideArgs>>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['DataConfigurableTextsLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<DataConfigurableTextsLinkedFromArgs>
    >;
    logIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataConfigurableTextsLogInArgs>>;
    logOut?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataConfigurableTextsLogOutArgs>
    >;
    renew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataConfigurableTextsRenewArgs>>;
    save?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataConfigurableTextsSaveArgs>>;
    settings?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataConfigurableTextsSettingsArgs>
    >;
    show?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataConfigurableTextsShowArgs>>;
    showLess?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataConfigurableTextsShowLessArgs>
    >;
    showMore?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataConfigurableTextsShowMoreArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    yesterday?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataConfigurableTextsYesterdayArgs>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataConfigurableTextsCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['DataConfigurableTextsCollection'] = ResolversParentTypes['DataConfigurableTextsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['DataConfigurableTexts']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataConfigurableTextsLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['DataConfigurableTextsLinkingCollections'] = ResolversParentTypes['DataConfigurableTextsLinkingCollections'],
> = {
    blockTicketListCollection?: Resolver<
        Maybe<ResolversTypes['BlockTicketListCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataConfigurableTextsLinkingCollectionsBlockTicketListCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataConfigurableTextsLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataDatesResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['DataDates'] = ResolversParentTypes['DataDates'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['DataDatesLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<DataDatesLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    today?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataDatesTodayArgs>>;
    yesterday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataDatesYesterdayArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataDatesCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['DataDatesCollection'] = ResolversParentTypes['DataDatesCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['DataDates']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataDatesLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['DataDatesLinkingCollections'] = ResolversParentTypes['DataDatesLinkingCollections'],
> = {
    configurableTextsCollection?: Resolver<
        Maybe<ResolversTypes['ConfigurableTextsCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataDatesLinkingCollectionsConfigurableTextsCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataDatesLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataErrorsResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['DataErrors'] = ResolversParentTypes['DataErrors'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['DataErrorsLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<DataErrorsLinkedFromArgs>
    >;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataErrorsNameArgs>>;
    requestError?: Resolver<
        Maybe<ResolversTypes['ComponentMessageSimple']>,
        ParentType,
        ContextType,
        Partial<DataErrorsRequestErrorArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataErrorsCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['DataErrorsCollection'] = ResolversParentTypes['DataErrorsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['DataErrors']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataErrorsLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['DataErrorsLinkingCollections'] = ResolversParentTypes['DataErrorsLinkingCollections'],
> = {
    configurableTextsCollection?: Resolver<
        Maybe<ResolversTypes['ConfigurableTextsCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataErrorsLinkingCollectionsConfigurableTextsCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataErrorsLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataValidationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['DataValidation'] = ResolversParentTypes['DataValidation'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    isOptional?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataValidationIsOptionalArgs>
    >;
    isRequired?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<DataValidationIsRequiredArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['DataValidationLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<DataValidationLinkedFromArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataValidationCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['DataValidationCollection'] = ResolversParentTypes['DataValidationCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['DataValidation']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataValidationLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['DataValidationLinkingCollections'] = ResolversParentTypes['DataValidationLinkingCollections'],
> = {
    configurableTextsCollection?: Resolver<
        Maybe<ResolversTypes['ConfigurableTextsCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataValidationLinkingCollectionsConfigurableTextsCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<DataValidationLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
    name: 'DateTime';
}

export interface DimensionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Dimension'], any> {
    name: 'Dimension';
}

export type EntryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry'],
> = {
    __resolveType: TypeResolveFn<
        | 'AppConfig'
        | 'Article'
        | 'Author'
        | 'Block'
        | 'BlockArticleList'
        | 'BlockCategory'
        | 'BlockCategoryList'
        | 'BlockFaq'
        | 'BlockQuickLinks'
        | 'BlockTicketList'
        | 'ComponentArticle'
        | 'ComponentArticleSection'
        | 'ComponentBanner'
        | 'ComponentCategory'
        | 'ComponentFaqItem'
        | 'ComponentFieldMapping'
        | 'ComponentKeyValue'
        | 'ComponentLink'
        | 'ComponentMessageSimple'
        | 'ComponentNavigationGroup'
        | 'ComponentNavigationItem'
        | 'ComponentNoResult'
        | 'ComponentPagination'
        | 'ComponentRoles'
        | 'ComponentTable'
        | 'ComponentTableColumn'
        | 'ConfigurableTexts'
        | 'DataActions'
        | 'DataConfigurableTexts'
        | 'DataDates'
        | 'DataErrors'
        | 'DataValidation'
        | 'Footer'
        | 'Header'
        | 'Page'
        | 'PageOneColumnTemplate'
        | 'PageSeo'
        | 'PageTwoColumnTemplate'
        | 'Theme',
        ParentType,
        ContextType
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
};

export type EntryCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['EntryCollection'] = ResolversParentTypes['EntryCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Footer'] = ResolversParentTypes['Footer'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    copyright?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<FooterCopyrightArgs>>;
    itemsCollection?: Resolver<
        Maybe<ResolversTypes['FooterItemsCollection']>,
        ParentType,
        ContextType,
        RequireFields<FooterItemsCollectionArgs, 'limit' | 'skip'>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['FooterLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<FooterLinkedFromArgs>
    >;
    logo?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<FooterLogoArgs>>;
    logoLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<FooterLogoLabelArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<FooterTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['FooterCollection'] = ResolversParentTypes['FooterCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Footer']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterItemsCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['FooterItemsCollection'] = ResolversParentTypes['FooterItemsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['FooterItemsItem']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterItemsItemResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['FooterItemsItem'] = ResolversParentTypes['FooterItemsItem'],
> = {
    __resolveType: TypeResolveFn<'ComponentNavigationGroup' | 'ComponentNavigationItem', ParentType, ContextType>;
};

export type FooterLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['FooterLinkingCollections'] = ResolversParentTypes['FooterLinkingCollections'],
> = {
    appConfigCollection?: Resolver<
        Maybe<ResolversTypes['AppConfigCollection']>,
        ParentType,
        ContextType,
        RequireFields<FooterLinkingCollectionsAppConfigCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<FooterLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Header'] = ResolversParentTypes['Header'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    closeMobileMenuLabel?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<HeaderCloseMobileMenuLabelArgs>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    itemsCollection?: Resolver<
        Maybe<ResolversTypes['HeaderItemsCollection']>,
        ParentType,
        ContextType,
        RequireFields<HeaderItemsCollectionArgs, 'limit' | 'skip'>
    >;
    languageSwitcherLabel?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<HeaderLanguageSwitcherLabelArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['HeaderLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<HeaderLinkedFromArgs>
    >;
    logo?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<HeaderLogoArgs>>;
    logoLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<HeaderLogoLabelArgs>>;
    notification?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<HeaderNotificationArgs>>;
    openMobileMenuLabel?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType,
        Partial<HeaderOpenMobileMenuLabelArgs>
    >;
    showContextSwitcher?: Resolver<
        Maybe<ResolversTypes['Boolean']>,
        ParentType,
        ContextType,
        Partial<HeaderShowContextSwitcherArgs>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<HeaderTitleArgs>>;
    userInfo?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<HeaderUserInfoArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['HeaderCollection'] = ResolversParentTypes['HeaderCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Header']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderItemsCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['HeaderItemsCollection'] = ResolversParentTypes['HeaderItemsCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['HeaderItemsItem']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderItemsItemResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['HeaderItemsItem'] = ResolversParentTypes['HeaderItemsItem'],
> = {
    __resolveType: TypeResolveFn<'ComponentNavigationGroup' | 'ComponentNavigationItem', ParentType, ContextType>;
};

export type HeaderLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['HeaderLinkingCollections'] = ResolversParentTypes['HeaderLinkingCollections'],
> = {
    appConfigCollection?: Resolver<
        Maybe<ResolversTypes['AppConfigCollection']>,
        ParentType,
        ContextType,
        RequireFields<HeaderLinkingCollectionsAppConfigCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<HeaderLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexColorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColor'], any> {
    name: 'HexColor';
}

export type PageResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    hasOwnTitle?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<PageHasOwnTitleArgs>>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['PageLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<PageLinkedFromArgs>
    >;
    parent?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, Partial<PageParentArgs>>;
    permissions?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['String']>>>,
        ParentType,
        ContextType,
        Partial<PagePermissionsArgs>
    >;
    seo?: Resolver<Maybe<ResolversTypes['PageSeo']>, ParentType, ContextType, Partial<PageSeoArgs>>;
    slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageSlugArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    template?: Resolver<Maybe<ResolversTypes['PageTemplate']>, ParentType, ContextType, Partial<PageTemplateArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageCollection'] = ResolversParentTypes['PageCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Page']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageLinkingCollections'] = ResolversParentTypes['PageLinkingCollections'],
> = {
    articleCollection?: Resolver<
        Maybe<ResolversTypes['ArticleCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsArticleCollectionArgs, 'limit' | 'skip'>
    >;
    blockArticleListCollection?: Resolver<
        Maybe<ResolversTypes['BlockArticleListCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsBlockArticleListCollectionArgs, 'limit' | 'skip'>
    >;
    blockCategoryCollection?: Resolver<
        Maybe<ResolversTypes['BlockCategoryCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsBlockCategoryCollectionArgs, 'limit' | 'skip'>
    >;
    blockCategoryListCollection?: Resolver<
        Maybe<ResolversTypes['BlockCategoryListCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsBlockCategoryListCollectionArgs, 'limit' | 'skip'>
    >;
    componentCategoryCollection?: Resolver<
        Maybe<ResolversTypes['ComponentCategoryCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsComponentCategoryCollectionArgs, 'limit' | 'skip'>
    >;
    componentLinkCollection?: Resolver<
        Maybe<ResolversTypes['ComponentLinkCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsComponentLinkCollectionArgs, 'limit' | 'skip'>
    >;
    componentNavigationGroupCollection?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationGroupCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsComponentNavigationGroupCollectionArgs, 'limit' | 'skip'>
    >;
    componentNavigationItemCollection?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationItemCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsComponentNavigationItemCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    headerCollection?: Resolver<
        Maybe<ResolversTypes['HeaderCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsHeaderCollectionArgs, 'limit' | 'skip'>
    >;
    pageCollection?: Resolver<
        Maybe<ResolversTypes['PageCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsPageCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageOneColumnTemplateResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageOneColumnTemplate'] = ResolversParentTypes['PageOneColumnTemplate'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['PageOneColumnTemplateLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<PageOneColumnTemplateLinkedFromArgs>
    >;
    mainSlotCollection?: Resolver<
        Maybe<ResolversTypes['PageOneColumnTemplateMainSlotCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageOneColumnTemplateMainSlotCollectionArgs, 'limit' | 'skip'>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageOneColumnTemplateTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageOneColumnTemplateCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageOneColumnTemplateCollection'] = ResolversParentTypes['PageOneColumnTemplateCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['PageOneColumnTemplate']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageOneColumnTemplateLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageOneColumnTemplateLinkingCollections'] = ResolversParentTypes['PageOneColumnTemplateLinkingCollections'],
> = {
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageOneColumnTemplateLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    pageCollection?: Resolver<
        Maybe<ResolversTypes['PageCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageOneColumnTemplateLinkingCollectionsPageCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageOneColumnTemplateMainSlotCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageOneColumnTemplateMainSlotCollection'] = ResolversParentTypes['PageOneColumnTemplateMainSlotCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageSeoResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageSeo'] = ResolversParentTypes['PageSeo'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageSeoDescriptionArgs>>;
    image?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<PageSeoImageArgs>>;
    keywords?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['String']>>>,
        ParentType,
        ContextType,
        Partial<PageSeoKeywordsArgs>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['PageSeoLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<PageSeoLinkedFromArgs>
    >;
    noFollow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<PageSeoNoFollowArgs>>;
    noIndex?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<PageSeoNoIndexArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageSeoTitleArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageSeoCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageSeoCollection'] = ResolversParentTypes['PageSeoCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['PageSeo']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageSeoLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageSeoLinkingCollections'] = ResolversParentTypes['PageSeoLinkingCollections'],
> = {
    articleCollection?: Resolver<
        Maybe<ResolversTypes['ArticleCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageSeoLinkingCollectionsArticleCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageSeoLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    pageCollection?: Resolver<
        Maybe<ResolversTypes['PageCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageSeoLinkingCollectionsPageCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageTemplateResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageTemplate'] = ResolversParentTypes['PageTemplate'],
> = {
    __resolveType: TypeResolveFn<'PageOneColumnTemplate' | 'PageTwoColumnTemplate', ParentType, ContextType>;
};

export type PageTwoColumnTemplateResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageTwoColumnTemplate'] = ResolversParentTypes['PageTwoColumnTemplate'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    bottomSlotCollection?: Resolver<
        Maybe<ResolversTypes['PageTwoColumnTemplateBottomSlotCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageTwoColumnTemplateBottomSlotCollectionArgs, 'limit' | 'skip'>
    >;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    leftSlotCollection?: Resolver<
        Maybe<ResolversTypes['PageTwoColumnTemplateLeftSlotCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageTwoColumnTemplateLeftSlotCollectionArgs, 'limit' | 'skip'>
    >;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['PageTwoColumnTemplateLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<PageTwoColumnTemplateLinkedFromArgs>
    >;
    rightSlotCollection?: Resolver<
        Maybe<ResolversTypes['PageTwoColumnTemplateRightSlotCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageTwoColumnTemplateRightSlotCollectionArgs, 'limit' | 'skip'>
    >;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageTwoColumnTemplateTitleArgs>>;
    topSlotCollection?: Resolver<
        Maybe<ResolversTypes['PageTwoColumnTemplateTopSlotCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageTwoColumnTemplateTopSlotCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageTwoColumnTemplateBottomSlotCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageTwoColumnTemplateBottomSlotCollection'] = ResolversParentTypes['PageTwoColumnTemplateBottomSlotCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageTwoColumnTemplateCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageTwoColumnTemplateCollection'] = ResolversParentTypes['PageTwoColumnTemplateCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['PageTwoColumnTemplate']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageTwoColumnTemplateLeftSlotCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageTwoColumnTemplateLeftSlotCollection'] = ResolversParentTypes['PageTwoColumnTemplateLeftSlotCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageTwoColumnTemplateLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageTwoColumnTemplateLinkingCollections'] = ResolversParentTypes['PageTwoColumnTemplateLinkingCollections'],
> = {
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageTwoColumnTemplateLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    pageCollection?: Resolver<
        Maybe<ResolversTypes['PageCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageTwoColumnTemplateLinkingCollectionsPageCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageTwoColumnTemplateRightSlotCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageTwoColumnTemplateRightSlotCollection'] = ResolversParentTypes['PageTwoColumnTemplateRightSlotCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageTwoColumnTemplateTopSlotCollectionResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageTwoColumnTemplateTopSlotCollection'] = ResolversParentTypes['PageTwoColumnTemplateTopSlotCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface QualityScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Quality'], any> {
    name: 'Quality';
}

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
    _node?: Resolver<Maybe<ResolversTypes['_Node']>, ParentType, ContextType, RequireFields<Query_NodeArgs, 'id'>>;
    _nodes?: Resolver<
        Array<Maybe<ResolversTypes['_Node']>>,
        ParentType,
        ContextType,
        RequireFields<Query_NodesArgs, 'ids'>
    >;
    appConfig?: Resolver<
        Maybe<ResolversTypes['AppConfig']>,
        ParentType,
        ContextType,
        RequireFields<QueryAppConfigArgs, 'id'>
    >;
    appConfigCollection?: Resolver<
        Maybe<ResolversTypes['AppConfigCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryAppConfigCollectionArgs, 'limit' | 'skip'>
    >;
    article?: Resolver<
        Maybe<ResolversTypes['Article']>,
        ParentType,
        ContextType,
        RequireFields<QueryArticleArgs, 'id'>
    >;
    articleCollection?: Resolver<
        Maybe<ResolversTypes['ArticleCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryArticleCollectionArgs, 'limit' | 'skip'>
    >;
    asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
    assetCollection?: Resolver<
        Maybe<ResolversTypes['AssetCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryAssetCollectionArgs, 'limit' | 'skip'>
    >;
    author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryAuthorArgs, 'id'>>;
    authorCollection?: Resolver<
        Maybe<ResolversTypes['AuthorCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryAuthorCollectionArgs, 'limit' | 'skip'>
    >;
    block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlockArgs, 'id'>>;
    blockArticleList?: Resolver<
        Maybe<ResolversTypes['BlockArticleList']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockArticleListArgs, 'id'>
    >;
    blockArticleListCollection?: Resolver<
        Maybe<ResolversTypes['BlockArticleListCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockArticleListCollectionArgs, 'limit' | 'skip'>
    >;
    blockCategory?: Resolver<
        Maybe<ResolversTypes['BlockCategory']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockCategoryArgs, 'id'>
    >;
    blockCategoryCollection?: Resolver<
        Maybe<ResolversTypes['BlockCategoryCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockCategoryCollectionArgs, 'limit' | 'skip'>
    >;
    blockCategoryList?: Resolver<
        Maybe<ResolversTypes['BlockCategoryList']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockCategoryListArgs, 'id'>
    >;
    blockCategoryListCollection?: Resolver<
        Maybe<ResolversTypes['BlockCategoryListCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockCategoryListCollectionArgs, 'limit' | 'skip'>
    >;
    blockCollection?: Resolver<
        Maybe<ResolversTypes['BlockCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockCollectionArgs, 'limit' | 'skip'>
    >;
    blockFaq?: Resolver<
        Maybe<ResolversTypes['BlockFaq']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockFaqArgs, 'id'>
    >;
    blockFaqCollection?: Resolver<
        Maybe<ResolversTypes['BlockFaqCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockFaqCollectionArgs, 'limit' | 'skip'>
    >;
    blockQuickLinks?: Resolver<
        Maybe<ResolversTypes['BlockQuickLinks']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockQuickLinksArgs, 'id'>
    >;
    blockQuickLinksCollection?: Resolver<
        Maybe<ResolversTypes['BlockQuickLinksCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockQuickLinksCollectionArgs, 'limit' | 'skip'>
    >;
    blockTicketList?: Resolver<
        Maybe<ResolversTypes['BlockTicketList']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockTicketListArgs, 'id'>
    >;
    blockTicketListCollection?: Resolver<
        Maybe<ResolversTypes['BlockTicketListCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryBlockTicketListCollectionArgs, 'limit' | 'skip'>
    >;
    componentArticle?: Resolver<
        Maybe<ResolversTypes['ComponentArticle']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentArticleArgs, 'id'>
    >;
    componentArticleCollection?: Resolver<
        Maybe<ResolversTypes['ComponentArticleCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentArticleCollectionArgs, 'limit' | 'skip'>
    >;
    componentArticleSection?: Resolver<
        Maybe<ResolversTypes['ComponentArticleSection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentArticleSectionArgs, 'id'>
    >;
    componentArticleSectionCollection?: Resolver<
        Maybe<ResolversTypes['ComponentArticleSectionCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentArticleSectionCollectionArgs, 'limit' | 'skip'>
    >;
    componentBanner?: Resolver<
        Maybe<ResolversTypes['ComponentBanner']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentBannerArgs, 'id'>
    >;
    componentBannerCollection?: Resolver<
        Maybe<ResolversTypes['ComponentBannerCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentBannerCollectionArgs, 'limit' | 'skip'>
    >;
    componentCategory?: Resolver<
        Maybe<ResolversTypes['ComponentCategory']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentCategoryArgs, 'id'>
    >;
    componentCategoryCollection?: Resolver<
        Maybe<ResolversTypes['ComponentCategoryCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentCategoryCollectionArgs, 'limit' | 'skip'>
    >;
    componentFaqItem?: Resolver<
        Maybe<ResolversTypes['ComponentFaqItem']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentFaqItemArgs, 'id'>
    >;
    componentFaqItemCollection?: Resolver<
        Maybe<ResolversTypes['ComponentFaqItemCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentFaqItemCollectionArgs, 'limit' | 'skip'>
    >;
    componentFieldMapping?: Resolver<
        Maybe<ResolversTypes['ComponentFieldMapping']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentFieldMappingArgs, 'id'>
    >;
    componentFieldMappingCollection?: Resolver<
        Maybe<ResolversTypes['ComponentFieldMappingCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentFieldMappingCollectionArgs, 'limit' | 'skip'>
    >;
    componentKeyValue?: Resolver<
        Maybe<ResolversTypes['ComponentKeyValue']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentKeyValueArgs, 'id'>
    >;
    componentKeyValueCollection?: Resolver<
        Maybe<ResolversTypes['ComponentKeyValueCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentKeyValueCollectionArgs, 'limit' | 'skip'>
    >;
    componentLink?: Resolver<
        Maybe<ResolversTypes['ComponentLink']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentLinkArgs, 'id'>
    >;
    componentLinkCollection?: Resolver<
        Maybe<ResolversTypes['ComponentLinkCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentLinkCollectionArgs, 'limit' | 'skip'>
    >;
    componentMessageSimple?: Resolver<
        Maybe<ResolversTypes['ComponentMessageSimple']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentMessageSimpleArgs, 'id'>
    >;
    componentMessageSimpleCollection?: Resolver<
        Maybe<ResolversTypes['ComponentMessageSimpleCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentMessageSimpleCollectionArgs, 'limit' | 'skip'>
    >;
    componentNavigationGroup?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationGroup']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentNavigationGroupArgs, 'id'>
    >;
    componentNavigationGroupCollection?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationGroupCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentNavigationGroupCollectionArgs, 'limit' | 'skip'>
    >;
    componentNavigationItem?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationItem']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentNavigationItemArgs, 'id'>
    >;
    componentNavigationItemCollection?: Resolver<
        Maybe<ResolversTypes['ComponentNavigationItemCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentNavigationItemCollectionArgs, 'limit' | 'skip'>
    >;
    componentNoResult?: Resolver<
        Maybe<ResolversTypes['ComponentNoResult']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentNoResultArgs, 'id'>
    >;
    componentNoResultCollection?: Resolver<
        Maybe<ResolversTypes['ComponentNoResultCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentNoResultCollectionArgs, 'limit' | 'skip'>
    >;
    componentPagination?: Resolver<
        Maybe<ResolversTypes['ComponentPagination']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentPaginationArgs, 'id'>
    >;
    componentPaginationCollection?: Resolver<
        Maybe<ResolversTypes['ComponentPaginationCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentPaginationCollectionArgs, 'limit' | 'skip'>
    >;
    componentRoles?: Resolver<
        Maybe<ResolversTypes['ComponentRoles']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentRolesArgs, 'id'>
    >;
    componentRolesCollection?: Resolver<
        Maybe<ResolversTypes['ComponentRolesCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentRolesCollectionArgs, 'limit' | 'skip'>
    >;
    componentTable?: Resolver<
        Maybe<ResolversTypes['ComponentTable']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentTableArgs, 'id'>
    >;
    componentTableCollection?: Resolver<
        Maybe<ResolversTypes['ComponentTableCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentTableCollectionArgs, 'limit' | 'skip'>
    >;
    componentTableColumn?: Resolver<
        Maybe<ResolversTypes['ComponentTableColumn']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentTableColumnArgs, 'id'>
    >;
    componentTableColumnCollection?: Resolver<
        Maybe<ResolversTypes['ComponentTableColumnCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryComponentTableColumnCollectionArgs, 'limit' | 'skip'>
    >;
    configurableTexts?: Resolver<
        Maybe<ResolversTypes['ConfigurableTexts']>,
        ParentType,
        ContextType,
        RequireFields<QueryConfigurableTextsArgs, 'id'>
    >;
    configurableTextsCollection?: Resolver<
        Maybe<ResolversTypes['ConfigurableTextsCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryConfigurableTextsCollectionArgs, 'limit' | 'skip'>
    >;
    dataActions?: Resolver<
        Maybe<ResolversTypes['DataActions']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataActionsArgs, 'id'>
    >;
    dataActionsCollection?: Resolver<
        Maybe<ResolversTypes['DataActionsCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataActionsCollectionArgs, 'limit' | 'skip'>
    >;
    dataConfigurableTexts?: Resolver<
        Maybe<ResolversTypes['DataConfigurableTexts']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataConfigurableTextsArgs, 'id'>
    >;
    dataConfigurableTextsCollection?: Resolver<
        Maybe<ResolversTypes['DataConfigurableTextsCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataConfigurableTextsCollectionArgs, 'limit' | 'skip'>
    >;
    dataDates?: Resolver<
        Maybe<ResolversTypes['DataDates']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataDatesArgs, 'id'>
    >;
    dataDatesCollection?: Resolver<
        Maybe<ResolversTypes['DataDatesCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataDatesCollectionArgs, 'limit' | 'skip'>
    >;
    dataErrors?: Resolver<
        Maybe<ResolversTypes['DataErrors']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataErrorsArgs, 'id'>
    >;
    dataErrorsCollection?: Resolver<
        Maybe<ResolversTypes['DataErrorsCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataErrorsCollectionArgs, 'limit' | 'skip'>
    >;
    dataValidation?: Resolver<
        Maybe<ResolversTypes['DataValidation']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataValidationArgs, 'id'>
    >;
    dataValidationCollection?: Resolver<
        Maybe<ResolversTypes['DataValidationCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryDataValidationCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryEntryCollectionArgs, 'limit' | 'skip'>
    >;
    footer?: Resolver<Maybe<ResolversTypes['Footer']>, ParentType, ContextType, RequireFields<QueryFooterArgs, 'id'>>;
    footerCollection?: Resolver<
        Maybe<ResolversTypes['FooterCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryFooterCollectionArgs, 'limit' | 'skip'>
    >;
    header?: Resolver<Maybe<ResolversTypes['Header']>, ParentType, ContextType, RequireFields<QueryHeaderArgs, 'id'>>;
    headerCollection?: Resolver<
        Maybe<ResolversTypes['HeaderCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryHeaderCollectionArgs, 'limit' | 'skip'>
    >;
    page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryPageArgs, 'id'>>;
    pageCollection?: Resolver<
        Maybe<ResolversTypes['PageCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryPageCollectionArgs, 'limit' | 'skip'>
    >;
    pageOneColumnTemplate?: Resolver<
        Maybe<ResolversTypes['PageOneColumnTemplate']>,
        ParentType,
        ContextType,
        RequireFields<QueryPageOneColumnTemplateArgs, 'id'>
    >;
    pageOneColumnTemplateCollection?: Resolver<
        Maybe<ResolversTypes['PageOneColumnTemplateCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryPageOneColumnTemplateCollectionArgs, 'limit' | 'skip'>
    >;
    pageSeo?: Resolver<
        Maybe<ResolversTypes['PageSeo']>,
        ParentType,
        ContextType,
        RequireFields<QueryPageSeoArgs, 'id'>
    >;
    pageSeoCollection?: Resolver<
        Maybe<ResolversTypes['PageSeoCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryPageSeoCollectionArgs, 'limit' | 'skip'>
    >;
    pageTwoColumnTemplate?: Resolver<
        Maybe<ResolversTypes['PageTwoColumnTemplate']>,
        ParentType,
        ContextType,
        RequireFields<QueryPageTwoColumnTemplateArgs, 'id'>
    >;
    pageTwoColumnTemplateCollection?: Resolver<
        Maybe<ResolversTypes['PageTwoColumnTemplateCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryPageTwoColumnTemplateCollectionArgs, 'limit' | 'skip'>
    >;
    theme?: Resolver<Maybe<ResolversTypes['Theme']>, ParentType, ContextType, RequireFields<QueryThemeArgs, 'id'>>;
    themeCollection?: Resolver<
        Maybe<ResolversTypes['ThemeCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryThemeCollectionArgs, 'limit' | 'skip'>
    >;
};

export type SysResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Sys'] = ResolversParentTypes['Sys'],
> = {
    environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    firstPublishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
    publishedVersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    spaceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxonomyConceptResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['TaxonomyConcept'] = ResolversParentTypes['TaxonomyConcept'],
> = {
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThemeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Theme'] = ResolversParentTypes['Theme'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    linkedFrom?: Resolver<
        Maybe<ResolversTypes['ThemeLinkingCollections']>,
        ParentType,
        ContextType,
        Partial<ThemeLinkedFromArgs>
    >;
    logo?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ThemeLogoArgs>>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ThemeNameArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThemeCollectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ThemeCollection'] = ResolversParentTypes['ThemeCollection'],
> = {
    items?: Resolver<Array<Maybe<ResolversTypes['Theme']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThemeLinkingCollectionsResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['ThemeLinkingCollections'] = ResolversParentTypes['ThemeLinkingCollections'],
> = {
    appConfigCollection?: Resolver<
        Maybe<ResolversTypes['AppConfigCollection']>,
        ParentType,
        ContextType,
        RequireFields<ThemeLinkingCollectionsAppConfigCollectionArgs, 'limit' | 'skip'>
    >;
    blockCollection?: Resolver<
        Maybe<ResolversTypes['BlockCollection']>,
        ParentType,
        ContextType,
        RequireFields<ThemeLinkingCollectionsBlockCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<ThemeLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _NodeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['_Node'] = ResolversParentTypes['_Node'],
> = {
    __resolveType: TypeResolveFn<
        | 'AppConfig'
        | 'Article'
        | 'Author'
        | 'Block'
        | 'BlockArticleList'
        | 'BlockCategory'
        | 'BlockCategoryList'
        | 'BlockFaq'
        | 'BlockQuickLinks'
        | 'BlockTicketList'
        | 'ComponentArticle'
        | 'ComponentArticleSection'
        | 'ComponentBanner'
        | 'ComponentCategory'
        | 'ComponentFaqItem'
        | 'ComponentFieldMapping'
        | 'ComponentKeyValue'
        | 'ComponentLink'
        | 'ComponentMessageSimple'
        | 'ComponentNavigationGroup'
        | 'ComponentNavigationItem'
        | 'ComponentNoResult'
        | 'ComponentPagination'
        | 'ComponentRoles'
        | 'ComponentTable'
        | 'ComponentTableColumn'
        | 'ConfigurableTexts'
        | 'DataActions'
        | 'DataConfigurableTexts'
        | 'DataDates'
        | 'DataErrors'
        | 'DataValidation'
        | 'Footer'
        | 'Header'
        | 'Page'
        | 'PageOneColumnTemplate'
        | 'PageSeo'
        | 'PageTwoColumnTemplate'
        | 'Theme',
        ParentType,
        ContextType
    >;
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    AppConfig?: AppConfigResolvers<ContextType>;
    AppConfigCollection?: AppConfigCollectionResolvers<ContextType>;
    AppConfigLinkingCollections?: AppConfigLinkingCollectionsResolvers<ContextType>;
    AppConfigThemesCollection?: AppConfigThemesCollectionResolvers<ContextType>;
    Article?: ArticleResolvers<ContextType>;
    ArticleCollection?: ArticleCollectionResolvers<ContextType>;
    ArticleLinkingCollections?: ArticleLinkingCollectionsResolvers<ContextType>;
    Asset?: AssetResolvers<ContextType>;
    AssetCollection?: AssetCollectionResolvers<ContextType>;
    AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>;
    Author?: AuthorResolvers<ContextType>;
    AuthorCollection?: AuthorCollectionResolvers<ContextType>;
    AuthorLinkingCollections?: AuthorLinkingCollectionsResolvers<ContextType>;
    Block?: BlockResolvers<ContextType>;
    BlockArticleList?: BlockArticleListResolvers<ContextType>;
    BlockArticleListArticlesCollection?: BlockArticleListArticlesCollectionResolvers<ContextType>;
    BlockArticleListCollection?: BlockArticleListCollectionResolvers<ContextType>;
    BlockArticleListLinkingCollections?: BlockArticleListLinkingCollectionsResolvers<ContextType>;
    BlockCategory?: BlockCategoryResolvers<ContextType>;
    BlockCategoryCollection?: BlockCategoryCollectionResolvers<ContextType>;
    BlockCategoryLinkingCollections?: BlockCategoryLinkingCollectionsResolvers<ContextType>;
    BlockCategoryList?: BlockCategoryListResolvers<ContextType>;
    BlockCategoryListCategoriesCollection?: BlockCategoryListCategoriesCollectionResolvers<ContextType>;
    BlockCategoryListCollection?: BlockCategoryListCollectionResolvers<ContextType>;
    BlockCategoryListLinkingCollections?: BlockCategoryListLinkingCollectionsResolvers<ContextType>;
    BlockCollection?: BlockCollectionResolvers<ContextType>;
    BlockContent?: BlockContentResolvers<ContextType>;
    BlockFaq?: BlockFaqResolvers<ContextType>;
    BlockFaqCollection?: BlockFaqCollectionResolvers<ContextType>;
    BlockFaqItemsCollection?: BlockFaqItemsCollectionResolvers<ContextType>;
    BlockFaqLinkingCollections?: BlockFaqLinkingCollectionsResolvers<ContextType>;
    BlockLinkingCollections?: BlockLinkingCollectionsResolvers<ContextType>;
    BlockQuickLinks?: BlockQuickLinksResolvers<ContextType>;
    BlockQuickLinksCollection?: BlockQuickLinksCollectionResolvers<ContextType>;
    BlockQuickLinksItemsCollection?: BlockQuickLinksItemsCollectionResolvers<ContextType>;
    BlockQuickLinksLinkingCollections?: BlockQuickLinksLinkingCollectionsResolvers<ContextType>;
    BlockTicketList?: BlockTicketListResolvers<ContextType>;
    BlockTicketListCollection?: BlockTicketListCollectionResolvers<ContextType>;
    BlockTicketListFieldsCollection?: BlockTicketListFieldsCollectionResolvers<ContextType>;
    BlockTicketListLinkingCollections?: BlockTicketListLinkingCollectionsResolvers<ContextType>;
    ComponentArticle?: ComponentArticleResolvers<ContextType>;
    ComponentArticleCollection?: ComponentArticleCollectionResolvers<ContextType>;
    ComponentArticleLinkingCollections?: ComponentArticleLinkingCollectionsResolvers<ContextType>;
    ComponentArticleSection?: ComponentArticleSectionResolvers<ContextType>;
    ComponentArticleSectionCollection?: ComponentArticleSectionCollectionResolvers<ContextType>;
    ComponentArticleSectionLinkingCollections?: ComponentArticleSectionLinkingCollectionsResolvers<ContextType>;
    ComponentArticleSectionsCollection?: ComponentArticleSectionsCollectionResolvers<ContextType>;
    ComponentBanner?: ComponentBannerResolvers<ContextType>;
    ComponentBannerCollection?: ComponentBannerCollectionResolvers<ContextType>;
    ComponentBannerLinkingCollections?: ComponentBannerLinkingCollectionsResolvers<ContextType>;
    ComponentCategory?: ComponentCategoryResolvers<ContextType>;
    ComponentCategoryCollection?: ComponentCategoryCollectionResolvers<ContextType>;
    ComponentCategoryComponentsCollection?: ComponentCategoryComponentsCollectionResolvers<ContextType>;
    ComponentCategoryComponentsItem?: ComponentCategoryComponentsItemResolvers<ContextType>;
    ComponentCategoryLinkingCollections?: ComponentCategoryLinkingCollectionsResolvers<ContextType>;
    ComponentFaqItem?: ComponentFaqItemResolvers<ContextType>;
    ComponentFaqItemCollection?: ComponentFaqItemCollectionResolvers<ContextType>;
    ComponentFaqItemLinkingCollections?: ComponentFaqItemLinkingCollectionsResolvers<ContextType>;
    ComponentFieldMapping?: ComponentFieldMappingResolvers<ContextType>;
    ComponentFieldMappingCollection?: ComponentFieldMappingCollectionResolvers<ContextType>;
    ComponentFieldMappingLinkingCollections?: ComponentFieldMappingLinkingCollectionsResolvers<ContextType>;
    ComponentFieldMappingValuesCollection?: ComponentFieldMappingValuesCollectionResolvers<ContextType>;
    ComponentKeyValue?: ComponentKeyValueResolvers<ContextType>;
    ComponentKeyValueCollection?: ComponentKeyValueCollectionResolvers<ContextType>;
    ComponentKeyValueLinkingCollections?: ComponentKeyValueLinkingCollectionsResolvers<ContextType>;
    ComponentLink?: ComponentLinkResolvers<ContextType>;
    ComponentLinkCollection?: ComponentLinkCollectionResolvers<ContextType>;
    ComponentLinkLinkingCollections?: ComponentLinkLinkingCollectionsResolvers<ContextType>;
    ComponentMessageSimple?: ComponentMessageSimpleResolvers<ContextType>;
    ComponentMessageSimpleCollection?: ComponentMessageSimpleCollectionResolvers<ContextType>;
    ComponentMessageSimpleLinkingCollections?: ComponentMessageSimpleLinkingCollectionsResolvers<ContextType>;
    ComponentNavigationGroup?: ComponentNavigationGroupResolvers<ContextType>;
    ComponentNavigationGroupCollection?: ComponentNavigationGroupCollectionResolvers<ContextType>;
    ComponentNavigationGroupItemsCollection?: ComponentNavigationGroupItemsCollectionResolvers<ContextType>;
    ComponentNavigationGroupLinkingCollections?: ComponentNavigationGroupLinkingCollectionsResolvers<ContextType>;
    ComponentNavigationItem?: ComponentNavigationItemResolvers<ContextType>;
    ComponentNavigationItemCollection?: ComponentNavigationItemCollectionResolvers<ContextType>;
    ComponentNavigationItemLinkingCollections?: ComponentNavigationItemLinkingCollectionsResolvers<ContextType>;
    ComponentNoResult?: ComponentNoResultResolvers<ContextType>;
    ComponentNoResultCollection?: ComponentNoResultCollectionResolvers<ContextType>;
    ComponentNoResultLinkingCollections?: ComponentNoResultLinkingCollectionsResolvers<ContextType>;
    ComponentPagination?: ComponentPaginationResolvers<ContextType>;
    ComponentPaginationCollection?: ComponentPaginationCollectionResolvers<ContextType>;
    ComponentPaginationLinkingCollections?: ComponentPaginationLinkingCollectionsResolvers<ContextType>;
    ComponentRoles?: ComponentRolesResolvers<ContextType>;
    ComponentRolesCollection?: ComponentRolesCollectionResolvers<ContextType>;
    ComponentRolesLinkingCollections?: ComponentRolesLinkingCollectionsResolvers<ContextType>;
    ComponentTable?: ComponentTableResolvers<ContextType>;
    ComponentTableCollection?: ComponentTableCollectionResolvers<ContextType>;
    ComponentTableColumn?: ComponentTableColumnResolvers<ContextType>;
    ComponentTableColumnCollection?: ComponentTableColumnCollectionResolvers<ContextType>;
    ComponentTableColumnLinkingCollections?: ComponentTableColumnLinkingCollectionsResolvers<ContextType>;
    ComponentTableColumnsCollection?: ComponentTableColumnsCollectionResolvers<ContextType>;
    ComponentTableLinkingCollections?: ComponentTableLinkingCollectionsResolvers<ContextType>;
    ConfigurableTexts?: ConfigurableTextsResolvers<ContextType>;
    ConfigurableTextsCollection?: ConfigurableTextsCollectionResolvers<ContextType>;
    ConfigurableTextsLinkingCollections?: ConfigurableTextsLinkingCollectionsResolvers<ContextType>;
    ContentfulMetadata?: ContentfulMetadataResolvers<ContextType>;
    ContentfulTag?: ContentfulTagResolvers<ContextType>;
    DataActions?: DataActionsResolvers<ContextType>;
    DataActionsCollection?: DataActionsCollectionResolvers<ContextType>;
    DataActionsLinkingCollections?: DataActionsLinkingCollectionsResolvers<ContextType>;
    DataConfigurableTexts?: DataConfigurableTextsResolvers<ContextType>;
    DataConfigurableTextsCollection?: DataConfigurableTextsCollectionResolvers<ContextType>;
    DataConfigurableTextsLinkingCollections?: DataConfigurableTextsLinkingCollectionsResolvers<ContextType>;
    DataDates?: DataDatesResolvers<ContextType>;
    DataDatesCollection?: DataDatesCollectionResolvers<ContextType>;
    DataDatesLinkingCollections?: DataDatesLinkingCollectionsResolvers<ContextType>;
    DataErrors?: DataErrorsResolvers<ContextType>;
    DataErrorsCollection?: DataErrorsCollectionResolvers<ContextType>;
    DataErrorsLinkingCollections?: DataErrorsLinkingCollectionsResolvers<ContextType>;
    DataValidation?: DataValidationResolvers<ContextType>;
    DataValidationCollection?: DataValidationCollectionResolvers<ContextType>;
    DataValidationLinkingCollections?: DataValidationLinkingCollectionsResolvers<ContextType>;
    DateTime?: GraphQLScalarType;
    Dimension?: GraphQLScalarType;
    Entry?: EntryResolvers<ContextType>;
    EntryCollection?: EntryCollectionResolvers<ContextType>;
    Footer?: FooterResolvers<ContextType>;
    FooterCollection?: FooterCollectionResolvers<ContextType>;
    FooterItemsCollection?: FooterItemsCollectionResolvers<ContextType>;
    FooterItemsItem?: FooterItemsItemResolvers<ContextType>;
    FooterLinkingCollections?: FooterLinkingCollectionsResolvers<ContextType>;
    Header?: HeaderResolvers<ContextType>;
    HeaderCollection?: HeaderCollectionResolvers<ContextType>;
    HeaderItemsCollection?: HeaderItemsCollectionResolvers<ContextType>;
    HeaderItemsItem?: HeaderItemsItemResolvers<ContextType>;
    HeaderLinkingCollections?: HeaderLinkingCollectionsResolvers<ContextType>;
    HexColor?: GraphQLScalarType;
    Page?: PageResolvers<ContextType>;
    PageCollection?: PageCollectionResolvers<ContextType>;
    PageLinkingCollections?: PageLinkingCollectionsResolvers<ContextType>;
    PageOneColumnTemplate?: PageOneColumnTemplateResolvers<ContextType>;
    PageOneColumnTemplateCollection?: PageOneColumnTemplateCollectionResolvers<ContextType>;
    PageOneColumnTemplateLinkingCollections?: PageOneColumnTemplateLinkingCollectionsResolvers<ContextType>;
    PageOneColumnTemplateMainSlotCollection?: PageOneColumnTemplateMainSlotCollectionResolvers<ContextType>;
    PageSeo?: PageSeoResolvers<ContextType>;
    PageSeoCollection?: PageSeoCollectionResolvers<ContextType>;
    PageSeoLinkingCollections?: PageSeoLinkingCollectionsResolvers<ContextType>;
    PageTemplate?: PageTemplateResolvers<ContextType>;
    PageTwoColumnTemplate?: PageTwoColumnTemplateResolvers<ContextType>;
    PageTwoColumnTemplateBottomSlotCollection?: PageTwoColumnTemplateBottomSlotCollectionResolvers<ContextType>;
    PageTwoColumnTemplateCollection?: PageTwoColumnTemplateCollectionResolvers<ContextType>;
    PageTwoColumnTemplateLeftSlotCollection?: PageTwoColumnTemplateLeftSlotCollectionResolvers<ContextType>;
    PageTwoColumnTemplateLinkingCollections?: PageTwoColumnTemplateLinkingCollectionsResolvers<ContextType>;
    PageTwoColumnTemplateRightSlotCollection?: PageTwoColumnTemplateRightSlotCollectionResolvers<ContextType>;
    PageTwoColumnTemplateTopSlotCollection?: PageTwoColumnTemplateTopSlotCollectionResolvers<ContextType>;
    Quality?: GraphQLScalarType;
    Query?: QueryResolvers<ContextType>;
    Sys?: SysResolvers<ContextType>;
    TaxonomyConcept?: TaxonomyConceptResolvers<ContextType>;
    Theme?: ThemeResolvers<ContextType>;
    ThemeCollection?: ThemeCollectionResolvers<ContextType>;
    ThemeLinkingCollections?: ThemeLinkingCollectionsResolvers<ContextType>;
    _Node?: _NodeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
    contentSourceMaps?: ContentSourceMapsDirectiveResolver<any, any, ContextType>;
    timeline?: TimelineDirectiveResolver<any, any, ContextType>;
};

export type AppConfigFragment = {
    sys: { id: string };
    signedInHeader?: { sys: { id: string } };
    signedInFooter?: { sys: { id: string } };
    themesCollection?: {
        items: Array<{
            name?: string;
            logo?: { url?: string; title?: string; width?: number; height?: number; description?: string };
        }>;
    };
};

export type ComponentFragment = {
    __typename: 'Block';
    spacing?: string;
    background?: string;
    variant?: string;
    content?:
        | {
              __typename: 'BlockArticleList';
              title?: string;
              description?: string;
              articlesToShow?: number;
              sys: { id: string };
              category?: { slug?: string };
              articlesCollection?: { items: Array<{ slug?: string }> };
              parent?: { slug?: string };
          }
        | {
              __typename: 'BlockCategory';
              sys: { id: string };
              category?: {
                  name?: string;
                  slug?: string;
                  description?: string;
                  icon?: string;
                  sys: { id: string };
                  parent?: { slug?: string };
              };
              parent?: { slug?: string };
          }
        | {
              __typename: 'BlockCategoryList';
              title?: string;
              description?: string;
              sys: { id: string };
              categoriesCollection?: { items: Array<{ slug?: string }> };
              parent?: { slug?: string };
          }
        | {
              __typename: 'BlockFaq';
              title?: string;
              subtitle?: string;
              sys: { id: string };
              itemsCollection?: { items: Array<{ title?: string; content?: string; sys: { id: string } }> };
              banner?: {
                  title?: string;
                  description?: string;
                  sys: { id: string };
                  link?: { label?: string; url?: string };
              };
          }
        | {
              __typename: 'BlockQuickLinks';
              title?: string;
              description?: string;
              sys: { id: string };
              itemsCollection?: {
                  items: Array<{
                      label?: string;
                      url?: string;
                      icon?: string;
                      sys: { id: string };
                      page?: { slug?: string; seo?: { title?: string; description?: string } };
                  }>;
              };
          }
        | {
              __typename: 'BlockTicketList';
              title?: string;
              subTitle?: string;
              detailsUrl?: string;
              sys: { id: string };
              fieldsCollection?: {
                  items: Array<{
                      name?: string;
                      sys: { id: string };
                      valuesCollection?: { items: Array<{ key?: string; value?: string; sys: { id: string } }> };
                  }>;
              };
              table?: {
                  actionsTitle?: string;
                  actionsLabel?: string;
                  sys: { id: string };
                  columnsCollection?: { items: Array<{ title?: string; field?: string; sys: { id: string } }> };
              };
              pagination?: {
                  description?: string;
                  previousLabel?: string;
                  nextLabel?: string;
                  perPage?: number;
                  selectPageLabel?: string;
                  sys: { id: string };
              };
              noResults?: { title?: string; description?: string; sys: { id: string } };
          };
    sys: { id: string };
    theme?: { name?: string };
};

export type ComponentBaseFragment = {
    __typename: 'Block';
    spacing?: string;
    background?: string;
    variant?: string;
    sys: { id: string };
    content?:
        | { __typename: 'BlockArticleList' }
        | { __typename: 'BlockCategory' }
        | { __typename: 'BlockCategoryList' }
        | { __typename: 'BlockFaq' }
        | { __typename: 'BlockQuickLinks' }
        | { __typename: 'BlockTicketList' };
    theme?: { name?: string };
};

export type FooterFragment = {
    title?: string;
    copyright?: string;
    logoLabel?: string;
    sys: { id: string };
    logo?: { url?: string; title?: string; width?: number; height?: number; description?: string };
    itemsCollection?: {
        items: Array<
            | {
                  __typename: 'ComponentNavigationGroup';
                  title?: string;
                  url?: string;
                  itemsCollection?: {
                      items: Array<{
                          __typename: 'ComponentNavigationItem';
                          label?: string;
                          url?: string;
                          description?: string;
                          page?: { slug?: string; seo?: { title?: string } };
                      }>;
                  };
                  page?: { slug?: string; seo?: { title?: string } };
              }
            | {
                  __typename: 'ComponentNavigationItem';
                  label?: string;
                  url?: string;
                  description?: string;
                  page?: { slug?: string; seo?: { title?: string } };
              }
        >;
    };
};

export type HeaderFragment = {
    title?: string;
    showContextSwitcher?: boolean;
    languageSwitcherLabel?: string;
    openMobileMenuLabel?: string;
    closeMobileMenuLabel?: string;
    logoLabel?: string;
    sys: { id: string };
    logo?: { url?: string; title?: string; width?: number; height?: number; description?: string };
    itemsCollection?: {
        items: Array<
            | {
                  __typename: 'ComponentNavigationGroup';
                  title?: string;
                  url?: string;
                  itemsCollection?: {
                      items: Array<{
                          __typename: 'ComponentNavigationItem';
                          label?: string;
                          url?: string;
                          description?: string;
                          page?: { slug?: string; seo?: { title?: string } };
                      }>;
                  };
                  page?: { slug?: string; seo?: { title?: string } };
              }
            | {
                  __typename: 'ComponentNavigationItem';
                  label?: string;
                  url?: string;
                  description?: string;
                  page?: { slug?: string; seo?: { title?: string } };
              }
        >;
    };
    notification?: { slug?: string; seo?: { title?: string } };
    userInfo?: { slug?: string; seo?: { title?: string } };
};

export type PageFragment = {
    slug?: string;
    hasOwnTitle?: boolean;
    permissions?: Array<string>;
    sys: { locale?: string; publishedAt?: any; id: string };
    seo?: {
        title?: string;
        noIndex?: boolean;
        noFollow?: boolean;
        description?: string;
        keywords?: Array<string>;
        image?: { url?: string; title?: string; width?: number; height?: number; description?: string };
    };
    parent?: {
        slug?: string;
        seo?: { title?: string };
        parent?: { slug?: string; seo?: { title?: string }; parent?: { slug?: string; seo?: { title?: string } } };
    };
    template?:
        | {
              __typename: 'PageOneColumnTemplate';
              mainSlotCollection?: {
                  items: Array<{
                      __typename: 'Block';
                      spacing?: string;
                      background?: string;
                      variant?: string;
                      sys: { id: string };
                      content?:
                          | { __typename: 'BlockArticleList' }
                          | { __typename: 'BlockCategory' }
                          | { __typename: 'BlockCategoryList' }
                          | { __typename: 'BlockFaq' }
                          | { __typename: 'BlockQuickLinks' }
                          | { __typename: 'BlockTicketList' };
                      theme?: { name?: string };
                  }>;
              };
          }
        | {
              __typename: 'PageTwoColumnTemplate';
              topSlotCollection?: {
                  items: Array<{
                      __typename: 'Block';
                      spacing?: string;
                      background?: string;
                      variant?: string;
                      sys: { id: string };
                      content?:
                          | { __typename: 'BlockArticleList' }
                          | { __typename: 'BlockCategory' }
                          | { __typename: 'BlockCategoryList' }
                          | { __typename: 'BlockFaq' }
                          | { __typename: 'BlockQuickLinks' }
                          | { __typename: 'BlockTicketList' };
                      theme?: { name?: string };
                  }>;
              };
              leftSlotCollection?: {
                  items: Array<{
                      __typename: 'Block';
                      spacing?: string;
                      background?: string;
                      variant?: string;
                      sys: { id: string };
                      content?:
                          | { __typename: 'BlockArticleList' }
                          | { __typename: 'BlockCategory' }
                          | { __typename: 'BlockCategoryList' }
                          | { __typename: 'BlockFaq' }
                          | { __typename: 'BlockQuickLinks' }
                          | { __typename: 'BlockTicketList' };
                      theme?: { name?: string };
                  }>;
              };
              rightSlotCollection?: {
                  items: Array<{
                      __typename: 'Block';
                      spacing?: string;
                      background?: string;
                      variant?: string;
                      sys: { id: string };
                      content?:
                          | { __typename: 'BlockArticleList' }
                          | { __typename: 'BlockCategory' }
                          | { __typename: 'BlockCategoryList' }
                          | { __typename: 'BlockFaq' }
                          | { __typename: 'BlockQuickLinks' }
                          | { __typename: 'BlockTicketList' };
                      theme?: { name?: string };
                  }>;
              };
              bottomSlotCollection?: {
                  items: Array<{
                      __typename: 'Block';
                      spacing?: string;
                      background?: string;
                      variant?: string;
                      sys: { id: string };
                      content?:
                          | { __typename: 'BlockArticleList' }
                          | { __typename: 'BlockCategory' }
                          | { __typename: 'BlockCategoryList' }
                          | { __typename: 'BlockFaq' }
                          | { __typename: 'BlockQuickLinks' }
                          | { __typename: 'BlockTicketList' };
                      theme?: { name?: string };
                  }>;
              };
          };
};

export type SysFragment = { id: string };

export type ArticleListComponentFragment = {
    __typename: 'BlockArticleList';
    title?: string;
    description?: string;
    articlesToShow?: number;
    sys: { id: string };
    category?: { slug?: string };
    articlesCollection?: { items: Array<{ slug?: string }> };
    parent?: { slug?: string };
};

export type CategoryComponentFragment = {
    __typename: 'BlockCategory';
    sys: { id: string };
    category?: {
        name?: string;
        slug?: string;
        description?: string;
        icon?: string;
        sys: { id: string };
        parent?: { slug?: string };
    };
    parent?: { slug?: string };
};

export type CategoryListComponentFragment = {
    __typename: 'BlockCategoryList';
    title?: string;
    description?: string;
    sys: { id: string };
    categoriesCollection?: { items: Array<{ slug?: string }> };
    parent?: { slug?: string };
};

export type FaqComponentFragment = {
    __typename: 'BlockFaq';
    title?: string;
    subtitle?: string;
    sys: { id: string };
    itemsCollection?: { items: Array<{ title?: string; content?: string; sys: { id: string } }> };
    banner?: { title?: string; description?: string; sys: { id: string }; link?: { label?: string; url?: string } };
};

export type QuickLinksComponentFragment = {
    __typename: 'BlockQuickLinks';
    title?: string;
    description?: string;
    sys: { id: string };
    itemsCollection?: {
        items: Array<{
            label?: string;
            url?: string;
            icon?: string;
            sys: { id: string };
            page?: { slug?: string; seo?: { title?: string; description?: string } };
        }>;
    };
};

export type TicketListComponentFragment = {
    __typename: 'BlockTicketList';
    title?: string;
    subTitle?: string;
    detailsUrl?: string;
    sys: { id: string };
    fieldsCollection?: {
        items: Array<{
            name?: string;
            sys: { id: string };
            valuesCollection?: { items: Array<{ key?: string; value?: string; sys: { id: string } }> };
        }>;
    };
    table?: {
        actionsTitle?: string;
        actionsLabel?: string;
        sys: { id: string };
        columnsCollection?: { items: Array<{ title?: string; field?: string; sys: { id: string } }> };
    };
    pagination?: {
        description?: string;
        previousLabel?: string;
        nextLabel?: string;
        perPage?: number;
        selectPageLabel?: string;
        sys: { id: string };
    };
    noResults?: { title?: string; description?: string; sys: { id: string } };
};

export type BannerFragment = {
    title?: string;
    description?: string;
    sys: { id: string };
    link?: { label?: string; url?: string };
};

export type CategoryFragment = {
    name?: string;
    slug?: string;
    description?: string;
    icon?: string;
    sys: { id: string };
    parent?: { slug?: string };
};

export type FieldMappingFragment = {
    name?: string;
    sys: { id: string };
    valuesCollection?: { items: Array<{ key?: string; value?: string; sys: { id: string } }> };
};

export type LinkFragment = {
    label?: string;
    url?: string;
    icon?: string;
    sys: { id: string };
    page?: { slug?: string; seo?: { title?: string; description?: string } };
};

export type MediaFragment = { url?: string; title?: string; width?: number; height?: number; description?: string };

export type NavigationGroupFragment = {
    __typename: 'ComponentNavigationGroup';
    title?: string;
    url?: string;
    itemsCollection?: {
        items: Array<{
            __typename: 'ComponentNavigationItem';
            label?: string;
            url?: string;
            description?: string;
            page?: { slug?: string; seo?: { title?: string } };
        }>;
    };
    page?: { slug?: string; seo?: { title?: string } };
};

export type NavigationItemFragment = {
    __typename: 'ComponentNavigationItem';
    label?: string;
    url?: string;
    description?: string;
    page?: { slug?: string; seo?: { title?: string } };
};

export type PaginationFragment = {
    description?: string;
    previousLabel?: string;
    nextLabel?: string;
    perPage?: number;
    selectPageLabel?: string;
    sys: { id: string };
};

export type SeoFragment = {
    title?: string;
    noIndex?: boolean;
    noFollow?: boolean;
    description?: string;
    keywords?: Array<string>;
    image?: { url?: string; title?: string; width?: number; height?: number; description?: string };
};

export type TableFragment = {
    actionsTitle?: string;
    actionsLabel?: string;
    sys: { id: string };
    columnsCollection?: { items: Array<{ title?: string; field?: string; sys: { id: string } }> };
};

export type LayoutSectionFragment = {
    spacing?: string;
    background?: string;
    variant?: string;
    theme?: { name?: string };
};

export type OneColumnTemplateFragment = {
    __typename: 'PageOneColumnTemplate';
    mainSlotCollection?: {
        items: Array<{
            __typename: 'Block';
            spacing?: string;
            background?: string;
            variant?: string;
            sys: { id: string };
            content?:
                | { __typename: 'BlockArticleList' }
                | { __typename: 'BlockCategory' }
                | { __typename: 'BlockCategoryList' }
                | { __typename: 'BlockFaq' }
                | { __typename: 'BlockQuickLinks' }
                | { __typename: 'BlockTicketList' };
            theme?: { name?: string };
        }>;
    };
};

export type TwoColumnTemplateFragment = {
    __typename: 'PageTwoColumnTemplate';
    topSlotCollection?: {
        items: Array<{
            __typename: 'Block';
            spacing?: string;
            background?: string;
            variant?: string;
            sys: { id: string };
            content?:
                | { __typename: 'BlockArticleList' }
                | { __typename: 'BlockCategory' }
                | { __typename: 'BlockCategoryList' }
                | { __typename: 'BlockFaq' }
                | { __typename: 'BlockQuickLinks' }
                | { __typename: 'BlockTicketList' };
            theme?: { name?: string };
        }>;
    };
    leftSlotCollection?: {
        items: Array<{
            __typename: 'Block';
            spacing?: string;
            background?: string;
            variant?: string;
            sys: { id: string };
            content?:
                | { __typename: 'BlockArticleList' }
                | { __typename: 'BlockCategory' }
                | { __typename: 'BlockCategoryList' }
                | { __typename: 'BlockFaq' }
                | { __typename: 'BlockQuickLinks' }
                | { __typename: 'BlockTicketList' };
            theme?: { name?: string };
        }>;
    };
    rightSlotCollection?: {
        items: Array<{
            __typename: 'Block';
            spacing?: string;
            background?: string;
            variant?: string;
            sys: { id: string };
            content?:
                | { __typename: 'BlockArticleList' }
                | { __typename: 'BlockCategory' }
                | { __typename: 'BlockCategoryList' }
                | { __typename: 'BlockFaq' }
                | { __typename: 'BlockQuickLinks' }
                | { __typename: 'BlockTicketList' };
            theme?: { name?: string };
        }>;
    };
    bottomSlotCollection?: {
        items: Array<{
            __typename: 'Block';
            spacing?: string;
            background?: string;
            variant?: string;
            sys: { id: string };
            content?:
                | { __typename: 'BlockArticleList' }
                | { __typename: 'BlockCategory' }
                | { __typename: 'BlockCategoryList' }
                | { __typename: 'BlockFaq' }
                | { __typename: 'BlockQuickLinks' }
                | { __typename: 'BlockTicketList' };
            theme?: { name?: string };
        }>;
    };
};

export type GetAppConfigQueryVariables = Exact<{
    locale: Scalars['String']['input'];
    preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetAppConfigQuery = {
    appConfigCollection?: {
        items: Array<{
            sys: { id: string };
            signedInHeader?: { sys: { id: string } };
            signedInFooter?: { sys: { id: string } };
            themesCollection?: {
                items: Array<{
                    name?: string;
                    logo?: { url?: string; title?: string; width?: number; height?: number; description?: string };
                }>;
            };
        }>;
    };
    configurableTexts?: {
        items: Array<{
            errors?: { requestError?: { title?: string; content?: string } };
            dates?: { today?: string; yesterday?: string };
            actions?: {
                showMore?: string;
                showLess?: string;
                show?: string;
                hide?: string;
                edit?: string;
                save?: string;
                cancel?: string;
                delete?: string;
                logOut?: string;
                settings?: string;
                renew?: string;
                details?: string;
            };
        }>;
    };
};

export type GetComponentQueryVariables = Exact<{
    id: Scalars['String']['input'];
    locale: Scalars['String']['input'];
    preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetComponentQuery = {
    block?: {
        __typename: 'Block';
        spacing?: string;
        background?: string;
        variant?: string;
        content?:
            | {
                  __typename: 'BlockArticleList';
                  title?: string;
                  description?: string;
                  articlesToShow?: number;
                  sys: { id: string };
                  category?: { slug?: string };
                  articlesCollection?: { items: Array<{ slug?: string }> };
                  parent?: { slug?: string };
              }
            | {
                  __typename: 'BlockCategory';
                  sys: { id: string };
                  category?: {
                      name?: string;
                      slug?: string;
                      description?: string;
                      icon?: string;
                      sys: { id: string };
                      parent?: { slug?: string };
                  };
                  parent?: { slug?: string };
              }
            | {
                  __typename: 'BlockCategoryList';
                  title?: string;
                  description?: string;
                  sys: { id: string };
                  categoriesCollection?: { items: Array<{ slug?: string }> };
                  parent?: { slug?: string };
              }
            | {
                  __typename: 'BlockFaq';
                  title?: string;
                  subtitle?: string;
                  sys: { id: string };
                  itemsCollection?: { items: Array<{ title?: string; content?: string; sys: { id: string } }> };
                  banner?: {
                      title?: string;
                      description?: string;
                      sys: { id: string };
                      link?: { label?: string; url?: string };
                  };
              }
            | {
                  __typename: 'BlockQuickLinks';
                  title?: string;
                  description?: string;
                  sys: { id: string };
                  itemsCollection?: {
                      items: Array<{
                          label?: string;
                          url?: string;
                          icon?: string;
                          sys: { id: string };
                          page?: { slug?: string; seo?: { title?: string; description?: string } };
                      }>;
                  };
              }
            | {
                  __typename: 'BlockTicketList';
                  title?: string;
                  subTitle?: string;
                  detailsUrl?: string;
                  sys: { id: string };
                  fieldsCollection?: {
                      items: Array<{
                          name?: string;
                          sys: { id: string };
                          valuesCollection?: { items: Array<{ key?: string; value?: string; sys: { id: string } }> };
                      }>;
                  };
                  table?: {
                      actionsTitle?: string;
                      actionsLabel?: string;
                      sys: { id: string };
                      columnsCollection?: { items: Array<{ title?: string; field?: string; sys: { id: string } }> };
                  };
                  pagination?: {
                      description?: string;
                      previousLabel?: string;
                      nextLabel?: string;
                      perPage?: number;
                      selectPageLabel?: string;
                      sys: { id: string };
                  };
                  noResults?: { title?: string; description?: string; sys: { id: string } };
              };
        sys: { id: string };
        theme?: { name?: string };
    };
    configurableTexts?: {
        items: Array<{
            dates?: { today?: string; yesterday?: string };
            actions?: {
                showMore?: string;
                showLess?: string;
                show?: string;
                hide?: string;
                edit?: string;
                save?: string;
                cancel?: string;
                delete?: string;
                logOut?: string;
                settings?: string;
                renew?: string;
                details?: string;
                reorder?: string;
                clickToSelect?: string;
                payOnline?: string;
                close?: string;
                trackOrder?: string;
                showAllArticles?: string;
                on?: string;
                off?: string;
            };
            errors?: { requestError?: { title?: string; content?: string } };
        }>;
    };
};

export type GetFooterQueryVariables = Exact<{
    id: Scalars['String']['input'];
    locale: Scalars['String']['input'];
    preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetFooterQuery = {
    footerCollection?: {
        items: Array<{
            title?: string;
            copyright?: string;
            logoLabel?: string;
            sys: { id: string };
            logo?: { url?: string; title?: string; width?: number; height?: number; description?: string };
            itemsCollection?: {
                items: Array<
                    | {
                          __typename: 'ComponentNavigationGroup';
                          title?: string;
                          url?: string;
                          itemsCollection?: {
                              items: Array<{
                                  __typename: 'ComponentNavigationItem';
                                  label?: string;
                                  url?: string;
                                  description?: string;
                                  page?: { slug?: string; seo?: { title?: string } };
                              }>;
                          };
                          page?: { slug?: string; seo?: { title?: string } };
                      }
                    | {
                          __typename: 'ComponentNavigationItem';
                          label?: string;
                          url?: string;
                          description?: string;
                          page?: { slug?: string; seo?: { title?: string } };
                      }
                >;
            };
        }>;
    };
};

export type GetHeaderQueryVariables = Exact<{
    id: Scalars['String']['input'];
    locale: Scalars['String']['input'];
    preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetHeaderQuery = {
    headerCollection?: {
        items: Array<{
            title?: string;
            showContextSwitcher?: boolean;
            languageSwitcherLabel?: string;
            openMobileMenuLabel?: string;
            closeMobileMenuLabel?: string;
            logoLabel?: string;
            sys: { id: string };
            logo?: { url?: string; title?: string; width?: number; height?: number; description?: string };
            itemsCollection?: {
                items: Array<
                    | {
                          __typename: 'ComponentNavigationGroup';
                          title?: string;
                          url?: string;
                          itemsCollection?: {
                              items: Array<{
                                  __typename: 'ComponentNavigationItem';
                                  label?: string;
                                  url?: string;
                                  description?: string;
                                  page?: { slug?: string; seo?: { title?: string } };
                              }>;
                          };
                          page?: { slug?: string; seo?: { title?: string } };
                      }
                    | {
                          __typename: 'ComponentNavigationItem';
                          label?: string;
                          url?: string;
                          description?: string;
                          page?: { slug?: string; seo?: { title?: string } };
                      }
                >;
            };
            notification?: { slug?: string; seo?: { title?: string } };
            userInfo?: { slug?: string; seo?: { title?: string } };
        }>;
    };
    configurableTexts?: { items: Array<{ actions?: { close?: string } }> };
};

export type GetPageQueryVariables = Exact<{
    slug: Scalars['String']['input'];
    locale: Scalars['String']['input'];
    preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetPageQuery = {
    pageCollection?: {
        items: Array<{
            slug?: string;
            hasOwnTitle?: boolean;
            permissions?: Array<string>;
            sys: { locale?: string; publishedAt?: any; id: string };
            seo?: {
                title?: string;
                noIndex?: boolean;
                noFollow?: boolean;
                description?: string;
                keywords?: Array<string>;
                image?: { url?: string; title?: string; width?: number; height?: number; description?: string };
            };
            parent?: {
                slug?: string;
                seo?: { title?: string };
                parent?: {
                    slug?: string;
                    seo?: { title?: string };
                    parent?: { slug?: string; seo?: { title?: string } };
                };
            };
            template?:
                | {
                      __typename: 'PageOneColumnTemplate';
                      mainSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                  }
                | {
                      __typename: 'PageTwoColumnTemplate';
                      topSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                      leftSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                      rightSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                      bottomSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                  };
        }>;
    };
};

export type GetPagesQueryVariables = Exact<{
    locale: Scalars['String']['input'];
    preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetPagesQuery = {
    pageCollection?: {
        items: Array<{
            slug?: string;
            hasOwnTitle?: boolean;
            permissions?: Array<string>;
            sys: { locale?: string; publishedAt?: any; id: string };
            seo?: {
                title?: string;
                noIndex?: boolean;
                noFollow?: boolean;
                description?: string;
                keywords?: Array<string>;
                image?: { url?: string; title?: string; width?: number; height?: number; description?: string };
            };
            parent?: {
                slug?: string;
                seo?: { title?: string };
                parent?: {
                    slug?: string;
                    seo?: { title?: string };
                    parent?: { slug?: string; seo?: { title?: string } };
                };
            };
            template?:
                | {
                      __typename: 'PageOneColumnTemplate';
                      mainSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                  }
                | {
                      __typename: 'PageTwoColumnTemplate';
                      topSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                      leftSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                      rightSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                      bottomSlotCollection?: {
                          items: Array<{
                              __typename: 'Block';
                              spacing?: string;
                              background?: string;
                              variant?: string;
                              sys: { id: string };
                              content?:
                                  | { __typename: 'BlockArticleList' }
                                  | { __typename: 'BlockCategory' }
                                  | { __typename: 'BlockCategoryList' }
                                  | { __typename: 'BlockFaq' }
                                  | { __typename: 'BlockQuickLinks' }
                                  | { __typename: 'BlockTicketList' };
                              theme?: { name?: string };
                          }>;
                      };
                  };
        }>;
    };
};

export const SysFragmentDoc = gql`
    fragment Sys on Sys {
        id
    }
`;
export const MediaFragmentDoc = gql`
    fragment Media on Asset {
        url
        title
        width
        height
        description
    }
`;
export const AppConfigFragmentDoc = gql`
    fragment AppConfig on AppConfig {
        sys {
            ...Sys
        }
        signedInHeader {
            sys {
                ...Sys
            }
        }
        signedInFooter {
            sys {
                ...Sys
            }
        }
        themesCollection {
            items {
                name
                logo {
                    ...Media
                }
            }
        }
    }
    ${SysFragmentDoc}
    ${MediaFragmentDoc}
`;
export const LayoutSectionFragmentDoc = gql`
    fragment LayoutSection on Block {
        spacing
        background
        variant
        theme {
            name
        }
    }
`;
export const ComponentBaseFragmentDoc = gql`
    fragment ComponentBase on Block {
        __typename
        sys {
            ...Sys
        }
        ...LayoutSection
        content {
            __typename
        }
    }
    ${SysFragmentDoc}
    ${LayoutSectionFragmentDoc}
`;
export const BannerFragmentDoc = gql`
    fragment Banner on ComponentBanner {
        sys {
            ...Sys
        }
        title
        description
        link {
            label
            url
        }
    }
    ${SysFragmentDoc}
`;
export const FaqComponentFragmentDoc = gql`
    fragment FaqComponent on BlockFaq {
        __typename
        sys {
            ...Sys
        }
        title
        subtitle
        itemsCollection {
            items {
                sys {
                    ...Sys
                }
                title
                content
            }
        }
        banner {
            ... on ComponentBanner {
                ...Banner
            }
        }
    }
    ${SysFragmentDoc}
    ${BannerFragmentDoc}
`;
export const FieldMappingFragmentDoc = gql`
    fragment FieldMapping on ComponentFieldMapping {
        sys {
            ...Sys
        }
        name
        valuesCollection {
            items {
                sys {
                    ...Sys
                }
                key
                value
            }
        }
    }
    ${SysFragmentDoc}
`;
export const TableFragmentDoc = gql`
    fragment Table on ComponentTable {
        sys {
            ...Sys
        }
        columnsCollection {
            items {
                sys {
                    ...Sys
                }
                title
                field
            }
        }
        actionsTitle
        actionsLabel
    }
    ${SysFragmentDoc}
`;
export const PaginationFragmentDoc = gql`
    fragment Pagination on ComponentPagination {
        sys {
            ...Sys
        }
        description
        previousLabel
        nextLabel
        perPage
        selectPageLabel
    }
    ${SysFragmentDoc}
`;
export const TicketListComponentFragmentDoc = gql`
    fragment TicketListComponent on BlockTicketList {
        __typename
        sys {
            ...Sys
        }
        title
        subTitle
        fieldsCollection {
            items {
                ...FieldMapping
            }
        }
        table {
            ...Table
        }
        pagination {
            ...Pagination
        }
        noResults {
            sys {
                ...Sys
            }
            title
            description
        }
        detailsUrl
    }
    ${SysFragmentDoc}
    ${FieldMappingFragmentDoc}
    ${TableFragmentDoc}
    ${PaginationFragmentDoc}
`;
export const LinkFragmentDoc = gql`
    fragment Link on ComponentLink {
        sys {
            ...Sys
        }
        label
        url
        page {
            slug
            seo {
                title
                description
            }
        }
        icon
    }
    ${SysFragmentDoc}
`;
export const QuickLinksComponentFragmentDoc = gql`
    fragment QuickLinksComponent on BlockQuickLinks {
        __typename
        sys {
            ...Sys
        }
        title
        description
        itemsCollection {
            items {
                ...Link
            }
        }
    }
    ${SysFragmentDoc}
    ${LinkFragmentDoc}
`;
export const CategoryListComponentFragmentDoc = gql`
    fragment CategoryListComponent on BlockCategoryList {
        __typename
        sys {
            ...Sys
        }
        title
        description
        categoriesCollection {
            items {
                slug
            }
        }
        parent {
            slug
        }
    }
    ${SysFragmentDoc}
`;
export const CategoryFragmentDoc = gql`
    fragment Category on ComponentCategory {
        sys {
            ...Sys
        }
        name
        slug
        description
        icon
        parent {
            slug
        }
    }
    ${SysFragmentDoc}
`;
export const CategoryComponentFragmentDoc = gql`
    fragment CategoryComponent on BlockCategory {
        __typename
        sys {
            ...Sys
        }
        category {
            ...Category
        }
        parent {
            slug
        }
    }
    ${SysFragmentDoc}
    ${CategoryFragmentDoc}
`;
export const ArticleListComponentFragmentDoc = gql`
    fragment ArticleListComponent on BlockArticleList {
        __typename
        sys {
            ...Sys
        }
        title
        description
        category {
            slug
        }
        articlesCollection {
            items {
                slug
            }
        }
        articlesToShow
        parent {
            slug
        }
    }
    ${SysFragmentDoc}
`;
export const ComponentFragmentDoc = gql`
    fragment Component on Block {
        ...ComponentBase
        content {
            __typename
            ... on BlockFaq {
                ...FaqComponent
            }
            ... on BlockTicketList {
                ...TicketListComponent
            }
            ... on BlockQuickLinks {
                ...QuickLinksComponent
            }
            ... on BlockCategoryList {
                ...CategoryListComponent
            }
            ... on BlockCategory {
                ...CategoryComponent
            }
            ... on BlockArticleList {
                ...ArticleListComponent
            }
        }
    }
    ${ComponentBaseFragmentDoc}
    ${FaqComponentFragmentDoc}
    ${TicketListComponentFragmentDoc}
    ${QuickLinksComponentFragmentDoc}
    ${CategoryListComponentFragmentDoc}
    ${CategoryComponentFragmentDoc}
    ${ArticleListComponentFragmentDoc}
`;
export const NavigationItemFragmentDoc = gql`
    fragment NavigationItem on ComponentNavigationItem {
        __typename
        label
        url
        description
        page {
            slug
            seo {
                title
            }
        }
    }
`;
export const NavigationGroupFragmentDoc = gql`
    fragment NavigationGroup on ComponentNavigationGroup {
        __typename
        title
        itemsCollection {
            items {
                ... on ComponentNavigationItem {
                    ...NavigationItem
                }
            }
        }
        url
        page {
            slug
            seo {
                title
            }
        }
    }
    ${NavigationItemFragmentDoc}
`;
export const FooterFragmentDoc = gql`
    fragment Footer on Footer {
        sys {
            ...Sys
        }
        title
        logo {
            ...Media
        }
        itemsCollection {
            items {
                ... on ComponentNavigationGroup {
                    ...NavigationGroup
                }
                ... on ComponentNavigationItem {
                    ...NavigationItem
                }
            }
        }
        copyright
        logoLabel
    }
    ${SysFragmentDoc}
    ${MediaFragmentDoc}
    ${NavigationGroupFragmentDoc}
    ${NavigationItemFragmentDoc}
`;
export const HeaderFragmentDoc = gql`
    fragment Header on Header {
        sys {
            ...Sys
        }
        title
        logo {
            ...Media
        }
        itemsCollection {
            items {
                ... on ComponentNavigationGroup {
                    ...NavigationGroup
                }
                ... on ComponentNavigationItem {
                    ...NavigationItem
                }
            }
        }
        notification {
            slug
            seo {
                title
            }
        }
        showContextSwitcher
        languageSwitcherLabel
        userInfo {
            slug
            seo {
                title
            }
        }
        openMobileMenuLabel
        closeMobileMenuLabel
        logoLabel
    }
    ${SysFragmentDoc}
    ${MediaFragmentDoc}
    ${NavigationGroupFragmentDoc}
    ${NavigationItemFragmentDoc}
`;
export const SeoFragmentDoc = gql`
    fragment Seo on PageSeo {
        title
        noIndex
        noFollow
        description
        keywords
        image {
            ...Media
        }
    }
    ${MediaFragmentDoc}
`;
export const OneColumnTemplateFragmentDoc = gql`
    fragment OneColumnTemplate on PageOneColumnTemplate {
        __typename
        mainSlotCollection {
            items {
                __typename
                ... on Block {
                    ...ComponentBase
                }
            }
        }
    }
    ${ComponentBaseFragmentDoc}
`;
export const TwoColumnTemplateFragmentDoc = gql`
    fragment TwoColumnTemplate on PageTwoColumnTemplate {
        __typename
        topSlotCollection {
            items {
                __typename
                ... on Block {
                    ...ComponentBase
                }
            }
        }
        leftSlotCollection {
            items {
                __typename
                ... on Block {
                    ...ComponentBase
                }
            }
        }
        rightSlotCollection {
            items {
                __typename
                ... on Block {
                    ...ComponentBase
                }
            }
        }
        bottomSlotCollection {
            items {
                __typename
                ... on Block {
                    ...ComponentBase
                }
            }
        }
    }
    ${ComponentBaseFragmentDoc}
`;
export const PageFragmentDoc = gql`
    fragment Page on Page {
        slug
        sys {
            ...Sys
            locale
            publishedAt
        }
        hasOwnTitle
        seo {
            ...Seo
        }
        parent {
            slug
            seo {
                title
            }
            parent {
                slug
                seo {
                    title
                }
                parent {
                    slug
                    seo {
                        title
                    }
                }
            }
        }
        template {
            __typename
            ... on PageOneColumnTemplate {
                ...OneColumnTemplate
            }
            ... on PageTwoColumnTemplate {
                ...TwoColumnTemplate
            }
        }
        permissions
    }
    ${SysFragmentDoc}
    ${SeoFragmentDoc}
    ${OneColumnTemplateFragmentDoc}
    ${TwoColumnTemplateFragmentDoc}
`;
export const GetAppConfigDocument = gql`
    query getAppConfig($locale: String!, $preview: Boolean) {
        appConfigCollection(locale: $locale, limit: 1, preview: $preview) {
            items {
                ...AppConfig
            }
        }
        configurableTexts: configurableTextsCollection(locale: $locale, limit: 1, skip: 0, preview: $preview) {
            items {
                errors {
                    requestError {
                        title
                        content
                    }
                }
                dates {
                    today
                    yesterday
                }
                actions {
                    showMore
                    showLess
                    show
                    hide
                    edit
                    save
                    cancel
                    delete
                    logOut
                    settings
                    renew
                    details
                }
            }
        }
    }
    ${AppConfigFragmentDoc}
`;
export const GetComponentDocument = gql`
    query getComponent($id: String!, $locale: String!, $preview: Boolean) {
        block(id: $id, locale: $locale, preview: $preview) {
            ...Component
        }
        configurableTexts: configurableTextsCollection(locale: $locale, limit: 1, skip: 0, preview: $preview) {
            items {
                dates {
                    today
                    yesterday
                }
                actions {
                    showMore
                    showLess
                    show
                    hide
                    edit
                    save
                    cancel
                    delete
                    logOut
                    settings
                    renew
                    details
                    reorder
                    clickToSelect
                    payOnline
                    close
                    trackOrder
                    showAllArticles
                    on
                    off
                }
                errors {
                    requestError {
                        title
                        content
                    }
                }
            }
        }
    }
    ${ComponentFragmentDoc}
`;
export const GetFooterDocument = gql`
    query getFooter($id: String!, $locale: String!, $preview: Boolean) {
        footerCollection(where: { sys: { id: $id } }, locale: $locale, limit: 1, preview: $preview) {
            items {
                ...Footer
            }
        }
    }
    ${FooterFragmentDoc}
`;
export const GetHeaderDocument = gql`
    query getHeader($id: String!, $locale: String!, $preview: Boolean) {
        headerCollection(where: { sys: { id: $id } }, locale: $locale, limit: 1, preview: $preview) {
            items {
                ...Header
            }
        }
        configurableTexts: configurableTextsCollection(locale: $locale, limit: 1, skip: 0, preview: $preview) {
            items {
                actions {
                    close
                }
            }
        }
    }
    ${HeaderFragmentDoc}
`;
export const GetPageDocument = gql`
    query getPage($slug: String!, $locale: String!, $preview: Boolean) {
        pageCollection(locale: $locale, where: { slug: $slug }, limit: 1, preview: $preview) {
            items {
                ...Page
            }
        }
    }
    ${PageFragmentDoc}
`;
export const GetPagesDocument = gql`
    query getPages($locale: String!, $preview: Boolean) {
        pageCollection(locale: $locale, preview: $preview) {
            items {
                ...Page
            }
        }
    }
    ${PageFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string,
    variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const GetAppConfigDocumentString = print(GetAppConfigDocument);
const GetComponentDocumentString = print(GetComponentDocument);
const GetFooterDocumentString = print(GetFooterDocument);
const GetHeaderDocumentString = print(GetHeaderDocument);
const GetPageDocumentString = print(GetPageDocument);
const GetPagesDocumentString = print(GetPagesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        getAppConfig(
            variables: GetAppConfigQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetAppConfigQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetAppConfigQuery>(GetAppConfigDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getAppConfig',
                'query',
                variables,
            );
        },
        getComponent(
            variables: GetComponentQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetComponentQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetComponentQuery>(GetComponentDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getComponent',
                'query',
                variables,
            );
        },
        getFooter(
            variables: GetFooterQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetFooterQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetFooterQuery>(GetFooterDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getFooter',
                'query',
                variables,
            );
        },
        getHeader(
            variables: GetHeaderQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetHeaderQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetHeaderQuery>(GetHeaderDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getHeader',
                'query',
                variables,
            );
        },
        getPage(
            variables: GetPageQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetPageQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetPageQuery>(GetPageDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getPage',
                'query',
                variables,
            );
        },
        getPages(
            variables: GetPagesQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: GetPagesQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<GetPagesQuery>(GetPagesDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'getPages',
                'query',
                variables,
            );
        },
    };
}
export type Sdk = ReturnType<typeof getSdk>;
