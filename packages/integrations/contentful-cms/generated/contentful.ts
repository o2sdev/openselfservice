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
    JSON: { input: any; output: any };
    Quality: { input: any; output: any };
};

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
    entryCollection?: Maybe<EntryCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
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
    entryCollection?: Maybe<EntryCollection>;
    pageOneColumnTemplateCollection?: Maybe<PageOneColumnTemplateCollection>;
};

export type BlockFaqLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockFaqLinkingCollectionsPageOneColumnTemplateCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockFaqLinkingCollectionsPageOneColumnTemplateCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockFaqLinkingCollectionsPageOneColumnTemplateCollectionOrder {
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
    entryCollection?: Maybe<EntryCollection>;
    pageOneColumnTemplateCollection?: Maybe<PageOneColumnTemplateCollection>;
};

export type BlockTicketListLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockTicketListLinkingCollectionsPageOneColumnTemplateCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<BlockTicketListLinkingCollectionsPageOneColumnTemplateCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockTicketListLinkingCollectionsPageOneColumnTemplateCollectionOrder {
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
        label?: Maybe<Scalars['String']['output']>;
        linkedFrom?: Maybe<ComponentLinkLinkingCollections>;
        page?: Maybe<Page>;
        sys: Sys;
        url?: Maybe<Scalars['String']['output']>;
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
    componentBannerCollection?: Maybe<ComponentBannerCollection>;
    entryCollection?: Maybe<EntryCollection>;
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
        today?: Maybe<Scalars['String']['output']>;
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
export type DataConfigurableTextsTodayArgs = {
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
    TodayAsc = 'today_ASC',
    TodayDesc = 'today_DESC',
    YesterdayAsc = 'yesterday_ASC',
    YesterdayDesc = 'yesterday_DESC',
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
        seo?: Maybe<PageSeo>;
        slug?: Maybe<Scalars['String']['output']>;
        sys: Sys;
        template?: Maybe<PageOneColumnTemplate>;
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
    where?: InputMaybe<PageOneColumnTemplateFilter>;
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
    template?: InputMaybe<CfPageOneColumnTemplateNestedFilter>;
    template_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageLinkingCollections = {
    componentLinkCollection?: Maybe<ComponentLinkCollection>;
    entryCollection?: Maybe<EntryCollection>;
    pageCollection?: Maybe<PageCollection>;
};

export type PageLinkingCollectionsComponentLinkCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentLinkCollectionOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
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

export enum PageLinkingCollectionsComponentLinkCollectionOrder {
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
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<PageOneColumnTemplateMainSlotFilter>;
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
    mainSlot?: InputMaybe<CfmainSlotMultiTypeNestedFilter>;
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
    items: Array<Maybe<PageOneColumnTemplateMainSlotItem>>;
    limit: Scalars['Int']['output'];
    skip: Scalars['Int']['output'];
    total: Scalars['Int']['output'];
};

export type PageOneColumnTemplateMainSlotFilter = {
    AND?: InputMaybe<Array<InputMaybe<PageOneColumnTemplateMainSlotFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<PageOneColumnTemplateMainSlotFilter>>>;
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

export type PageOneColumnTemplateMainSlotItem = BlockFaq | BlockTicketList;

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
    entryCollection?: Maybe<EntryCollection>;
    pageCollection?: Maybe<PageCollection>;
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

export type Query = {
    _node?: Maybe<_Node>;
    _nodes: Array<Maybe<_Node>>;
    asset?: Maybe<Asset>;
    assetCollection?: Maybe<AssetCollection>;
    blockFaq?: Maybe<BlockFaq>;
    blockFaqCollection?: Maybe<BlockFaqCollection>;
    blockTicketList?: Maybe<BlockTicketList>;
    blockTicketListCollection?: Maybe<BlockTicketListCollection>;
    componentBanner?: Maybe<ComponentBanner>;
    componentBannerCollection?: Maybe<ComponentBannerCollection>;
    componentFaqItem?: Maybe<ComponentFaqItem>;
    componentFaqItemCollection?: Maybe<ComponentFaqItemCollection>;
    componentFieldMapping?: Maybe<ComponentFieldMapping>;
    componentFieldMappingCollection?: Maybe<ComponentFieldMappingCollection>;
    componentKeyValue?: Maybe<ComponentKeyValue>;
    componentKeyValueCollection?: Maybe<ComponentKeyValueCollection>;
    componentLink?: Maybe<ComponentLink>;
    componentLinkCollection?: Maybe<ComponentLinkCollection>;
    componentNoResult?: Maybe<ComponentNoResult>;
    componentNoResultCollection?: Maybe<ComponentNoResultCollection>;
    componentPagination?: Maybe<ComponentPagination>;
    componentPaginationCollection?: Maybe<ComponentPaginationCollection>;
    componentTable?: Maybe<ComponentTable>;
    componentTableCollection?: Maybe<ComponentTableCollection>;
    componentTableColumn?: Maybe<ComponentTableColumn>;
    componentTableColumnCollection?: Maybe<ComponentTableColumnCollection>;
    dataConfigurableTexts?: Maybe<DataConfigurableTexts>;
    dataConfigurableTextsCollection?: Maybe<DataConfigurableTextsCollection>;
    entryCollection?: Maybe<EntryCollection>;
    page?: Maybe<Page>;
    pageCollection?: Maybe<PageCollection>;
    pageOneColumnTemplate?: Maybe<PageOneColumnTemplate>;
    pageOneColumnTemplateCollection?: Maybe<PageOneColumnTemplateCollection>;
    pageSeo?: Maybe<PageSeo>;
    pageSeoCollection?: Maybe<PageSeoCollection>;
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

export type QueryEntryCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<EntryFilter>;
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

export type TimelineFilterInput = {
    /** Preview content starting from a given release date */
    release_lte?: InputMaybe<Scalars['String']['input']>;
    /** Preview content starting from a given timestamp */
    timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type _Node = {
    _id: Scalars['ID']['output'];
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

export type CfPageNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
    hasOwnTitle?: InputMaybe<Scalars['Boolean']['input']>;
    hasOwnTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
    hasOwnTitle_not?: InputMaybe<Scalars['Boolean']['input']>;
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
    template_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfPageOneColumnTemplateNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfPageOneColumnTemplateNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfPageOneColumnTemplateNestedFilter>>>;
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
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

export type CfmainSlotMultiTypeNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfmainSlotMultiTypeNestedFilter>>>;
    OR?: InputMaybe<Array<InputMaybe<CfmainSlotMultiTypeNestedFilter>>>;
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
    PageOneColumnTemplateMainSlotItem:
        | (Omit<BlockFaq, 'banner' | 'itemsCollection' | 'linkedFrom'> & {
              banner?: Maybe<_RefType['ComponentBanner']>;
              itemsCollection?: Maybe<_RefType['BlockFaqItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockFaqLinkingCollections']>;
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
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
    Entry:
        | (Omit<BlockFaq, 'banner' | 'itemsCollection' | 'linkedFrom'> & {
              banner?: Maybe<_RefType['ComponentBanner']>;
              itemsCollection?: Maybe<_RefType['BlockFaqItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockFaqLinkingCollections']>;
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
        | (Omit<ComponentBanner, 'link' | 'linkedFrom'> & {
              link?: Maybe<_RefType['ComponentLink']>;
              linkedFrom?: Maybe<_RefType['ComponentBannerLinkingCollections']>;
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
        | (Omit<ComponentNoResult, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentNoResultLinkingCollections']>;
          })
        | (Omit<ComponentPagination, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentPaginationLinkingCollections']>;
          })
        | (Omit<ComponentTable, 'columnsCollection' | 'linkedFrom'> & {
              columnsCollection?: Maybe<_RefType['ComponentTableColumnsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentTableLinkingCollections']>;
          })
        | (Omit<ComponentTableColumn, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentTableColumnLinkingCollections']>;
          })
        | (Omit<DataConfigurableTexts, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['DataConfigurableTextsLinkingCollections']>;
          })
        | (Omit<Page, 'linkedFrom' | 'parent' | 'seo' | 'template'> & {
              linkedFrom?: Maybe<_RefType['PageLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
              seo?: Maybe<_RefType['PageSeo']>;
              template?: Maybe<_RefType['PageOneColumnTemplate']>;
          })
        | (Omit<PageOneColumnTemplate, 'linkedFrom' | 'mainSlotCollection'> & {
              linkedFrom?: Maybe<_RefType['PageOneColumnTemplateLinkingCollections']>;
              mainSlotCollection?: Maybe<_RefType['PageOneColumnTemplateMainSlotCollection']>;
          })
        | (Omit<PageSeo, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['PageSeoLinkingCollections']> });
    _Node:
        | (Omit<BlockFaq, 'banner' | 'itemsCollection' | 'linkedFrom'> & {
              banner?: Maybe<_RefType['ComponentBanner']>;
              itemsCollection?: Maybe<_RefType['BlockFaqItemsCollection']>;
              linkedFrom?: Maybe<_RefType['BlockFaqLinkingCollections']>;
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
        | (Omit<ComponentBanner, 'link' | 'linkedFrom'> & {
              link?: Maybe<_RefType['ComponentLink']>;
              linkedFrom?: Maybe<_RefType['ComponentBannerLinkingCollections']>;
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
        | (Omit<ComponentNoResult, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentNoResultLinkingCollections']>;
          })
        | (Omit<ComponentPagination, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentPaginationLinkingCollections']>;
          })
        | (Omit<ComponentTable, 'columnsCollection' | 'linkedFrom'> & {
              columnsCollection?: Maybe<_RefType['ComponentTableColumnsCollection']>;
              linkedFrom?: Maybe<_RefType['ComponentTableLinkingCollections']>;
          })
        | (Omit<ComponentTableColumn, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['ComponentTableColumnLinkingCollections']>;
          })
        | (Omit<DataConfigurableTexts, 'linkedFrom'> & {
              linkedFrom?: Maybe<_RefType['DataConfigurableTextsLinkingCollections']>;
          })
        | (Omit<Page, 'linkedFrom' | 'parent' | 'seo' | 'template'> & {
              linkedFrom?: Maybe<_RefType['PageLinkingCollections']>;
              parent?: Maybe<_RefType['Page']>;
              seo?: Maybe<_RefType['PageSeo']>;
              template?: Maybe<_RefType['PageOneColumnTemplate']>;
          })
        | (Omit<PageOneColumnTemplate, 'linkedFrom' | 'mainSlotCollection'> & {
              linkedFrom?: Maybe<_RefType['PageOneColumnTemplateLinkingCollections']>;
              mainSlotCollection?: Maybe<_RefType['PageOneColumnTemplateMainSlotCollection']>;
          })
        | (Omit<PageSeo, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['PageSeoLinkingCollections']> });
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    Asset: ResolverTypeWrapper<
        Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['AssetLinkingCollections']> }
    >;
    AssetCollection: ResolverTypeWrapper<
        Omit<AssetCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Asset']>> }
    >;
    AssetFilter: AssetFilter;
    AssetLinkingCollections: ResolverTypeWrapper<
        Omit<AssetLinkingCollections, 'entryCollection'> & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    AssetOrder: AssetOrder;
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
        Omit<BlockFaqLinkingCollections, 'entryCollection' | 'pageOneColumnTemplateCollection'> & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
            pageOneColumnTemplateCollection?: Maybe<ResolversTypes['PageOneColumnTemplateCollection']>;
        }
    >;
    BlockFaqLinkingCollectionsPageOneColumnTemplateCollectionOrder: BlockFaqLinkingCollectionsPageOneColumnTemplateCollectionOrder;
    BlockFaqOrder: BlockFaqOrder;
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
        Omit<BlockTicketListLinkingCollections, 'entryCollection' | 'pageOneColumnTemplateCollection'> & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
            pageOneColumnTemplateCollection?: Maybe<ResolversTypes['PageOneColumnTemplateCollection']>;
        }
    >;
    BlockTicketListLinkingCollectionsPageOneColumnTemplateCollectionOrder: BlockTicketListLinkingCollectionsPageOneColumnTemplateCollectionOrder;
    BlockTicketListOrder: BlockTicketListOrder;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
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
        Omit<ComponentLinkLinkingCollections, 'componentBannerCollection' | 'entryCollection'> & {
            componentBannerCollection?: Maybe<ResolversTypes['ComponentBannerCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    ComponentLinkLinkingCollectionsComponentBannerCollectionOrder: ComponentLinkLinkingCollectionsComponentBannerCollectionOrder;
    ComponentLinkOrder: ComponentLinkOrder;
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
    ContentfulMetadata: ResolverTypeWrapper<ContentfulMetadata>;
    ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
    ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
    ContentfulMetadataFilter: ContentfulMetadataFilter;
    ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
    ContentfulTag: ResolverTypeWrapper<ContentfulTag>;
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
    DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
    Dimension: ResolverTypeWrapper<Scalars['Dimension']['output']>;
    Entry: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entry']>;
    EntryCollection: ResolverTypeWrapper<
        Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Entry']>> }
    >;
    EntryFilter: EntryFilter;
    EntryOrder: EntryOrder;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    HexColor: ResolverTypeWrapper<Scalars['HexColor']['output']>;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    ImageFormat: ImageFormat;
    ImageResizeFocus: ImageResizeFocus;
    ImageResizeStrategy: ImageResizeStrategy;
    ImageTransformOptions: ImageTransformOptions;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
    Page: ResolverTypeWrapper<
        Omit<Page, 'linkedFrom' | 'parent' | 'seo' | 'template'> & {
            linkedFrom?: Maybe<ResolversTypes['PageLinkingCollections']>;
            parent?: Maybe<ResolversTypes['Page']>;
            seo?: Maybe<ResolversTypes['PageSeo']>;
            template?: Maybe<ResolversTypes['PageOneColumnTemplate']>;
        }
    >;
    PageCollection: ResolverTypeWrapper<
        Omit<PageCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Page']>> }
    >;
    PageFilter: PageFilter;
    PageLinkingCollections: ResolverTypeWrapper<
        Omit<PageLinkingCollections, 'componentLinkCollection' | 'entryCollection'> & {
            componentLinkCollection?: Maybe<ResolversTypes['ComponentLinkCollection']>;
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    PageLinkingCollectionsComponentLinkCollectionOrder: PageLinkingCollectionsComponentLinkCollectionOrder;
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
        Omit<PageOneColumnTemplateMainSlotCollection, 'items'> & {
            items: Array<Maybe<ResolversTypes['PageOneColumnTemplateMainSlotItem']>>;
        }
    >;
    PageOneColumnTemplateMainSlotFilter: PageOneColumnTemplateMainSlotFilter;
    PageOneColumnTemplateMainSlotItem: ResolverTypeWrapper<
        ResolversUnionTypes<ResolversTypes>['PageOneColumnTemplateMainSlotItem']
    >;
    PageOneColumnTemplateOrder: PageOneColumnTemplateOrder;
    PageOrder: PageOrder;
    PageSeo: ResolverTypeWrapper<
        Omit<PageSeo, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['PageSeoLinkingCollections']> }
    >;
    PageSeoCollection: ResolverTypeWrapper<
        Omit<PageSeoCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageSeo']>> }
    >;
    PageSeoFilter: PageSeoFilter;
    PageSeoLinkingCollections: ResolverTypeWrapper<
        Omit<PageSeoLinkingCollections, 'entryCollection'> & {
            entryCollection?: Maybe<ResolversTypes['EntryCollection']>;
        }
    >;
    PageSeoLinkingCollectionsPageCollectionOrder: PageSeoLinkingCollectionsPageCollectionOrder;
    PageSeoOrder: PageSeoOrder;
    Quality: ResolverTypeWrapper<Scalars['Quality']['output']>;
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    Sys: ResolverTypeWrapper<Sys>;
    SysFilter: SysFilter;
    TaxonomyConcept: ResolverTypeWrapper<TaxonomyConcept>;
    TimelineFilterInput: TimelineFilterInput;
    _Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['_Node']>;
    cfComponentBannerNestedFilter: CfComponentBannerNestedFilter;
    cfComponentFaqItemNestedFilter: CfComponentFaqItemNestedFilter;
    cfComponentFieldMappingNestedFilter: CfComponentFieldMappingNestedFilter;
    cfComponentKeyValueNestedFilter: CfComponentKeyValueNestedFilter;
    cfComponentLinkNestedFilter: CfComponentLinkNestedFilter;
    cfComponentNoResultNestedFilter: CfComponentNoResultNestedFilter;
    cfComponentPaginationNestedFilter: CfComponentPaginationNestedFilter;
    cfComponentTableColumnNestedFilter: CfComponentTableColumnNestedFilter;
    cfComponentTableNestedFilter: CfComponentTableNestedFilter;
    cfDataConfigurableTextsNestedFilter: CfDataConfigurableTextsNestedFilter;
    cfPageNestedFilter: CfPageNestedFilter;
    cfPageOneColumnTemplateNestedFilter: CfPageOneColumnTemplateNestedFilter;
    cfPageSeoNestedFilter: CfPageSeoNestedFilter;
    cfmainSlotMultiTypeNestedFilter: CfmainSlotMultiTypeNestedFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Asset: Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['AssetLinkingCollections']> };
    AssetCollection: Omit<AssetCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Asset']>> };
    AssetFilter: AssetFilter;
    AssetLinkingCollections: Omit<AssetLinkingCollections, 'entryCollection'> & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
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
        'entryCollection' | 'pageOneColumnTemplateCollection'
    > & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
        pageOneColumnTemplateCollection?: Maybe<ResolversParentTypes['PageOneColumnTemplateCollection']>;
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
        'entryCollection' | 'pageOneColumnTemplateCollection'
    > & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
        pageOneColumnTemplateCollection?: Maybe<ResolversParentTypes['PageOneColumnTemplateCollection']>;
    };
    Boolean: Scalars['Boolean']['output'];
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
        'componentBannerCollection' | 'entryCollection'
    > & {
        componentBannerCollection?: Maybe<ResolversParentTypes['ComponentBannerCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
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
    ContentfulMetadata: ContentfulMetadata;
    ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
    ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
    ContentfulMetadataFilter: ContentfulMetadataFilter;
    ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
    ContentfulTag: ContentfulTag;
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
    DateTime: Scalars['DateTime']['output'];
    Dimension: Scalars['Dimension']['output'];
    Entry: ResolversInterfaceTypes<ResolversParentTypes>['Entry'];
    EntryCollection: Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Entry']>> };
    EntryFilter: EntryFilter;
    Float: Scalars['Float']['output'];
    HexColor: Scalars['HexColor']['output'];
    ID: Scalars['ID']['output'];
    ImageTransformOptions: ImageTransformOptions;
    Int: Scalars['Int']['output'];
    JSON: Scalars['JSON']['output'];
    Page: Omit<Page, 'linkedFrom' | 'parent' | 'seo' | 'template'> & {
        linkedFrom?: Maybe<ResolversParentTypes['PageLinkingCollections']>;
        parent?: Maybe<ResolversParentTypes['Page']>;
        seo?: Maybe<ResolversParentTypes['PageSeo']>;
        template?: Maybe<ResolversParentTypes['PageOneColumnTemplate']>;
    };
    PageCollection: Omit<PageCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Page']>> };
    PageFilter: PageFilter;
    PageLinkingCollections: Omit<PageLinkingCollections, 'componentLinkCollection' | 'entryCollection'> & {
        componentLinkCollection?: Maybe<ResolversParentTypes['ComponentLinkCollection']>;
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
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
        items: Array<Maybe<ResolversParentTypes['PageOneColumnTemplateMainSlotItem']>>;
    };
    PageOneColumnTemplateMainSlotFilter: PageOneColumnTemplateMainSlotFilter;
    PageOneColumnTemplateMainSlotItem: ResolversUnionTypes<ResolversParentTypes>['PageOneColumnTemplateMainSlotItem'];
    PageSeo: Omit<PageSeo, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['PageSeoLinkingCollections']> };
    PageSeoCollection: Omit<PageSeoCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageSeo']>> };
    PageSeoFilter: PageSeoFilter;
    PageSeoLinkingCollections: Omit<PageSeoLinkingCollections, 'entryCollection'> & {
        entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>;
    };
    Quality: Scalars['Quality']['output'];
    Query: {};
    String: Scalars['String']['output'];
    Sys: Sys;
    SysFilter: SysFilter;
    TaxonomyConcept: TaxonomyConcept;
    TimelineFilterInput: TimelineFilterInput;
    _Node: ResolversInterfaceTypes<ResolversParentTypes>['_Node'];
    cfComponentBannerNestedFilter: CfComponentBannerNestedFilter;
    cfComponentFaqItemNestedFilter: CfComponentFaqItemNestedFilter;
    cfComponentFieldMappingNestedFilter: CfComponentFieldMappingNestedFilter;
    cfComponentKeyValueNestedFilter: CfComponentKeyValueNestedFilter;
    cfComponentLinkNestedFilter: CfComponentLinkNestedFilter;
    cfComponentNoResultNestedFilter: CfComponentNoResultNestedFilter;
    cfComponentPaginationNestedFilter: CfComponentPaginationNestedFilter;
    cfComponentTableColumnNestedFilter: CfComponentTableColumnNestedFilter;
    cfComponentTableNestedFilter: CfComponentTableNestedFilter;
    cfDataConfigurableTextsNestedFilter: CfDataConfigurableTextsNestedFilter;
    cfPageNestedFilter: CfPageNestedFilter;
    cfPageOneColumnTemplateNestedFilter: CfPageOneColumnTemplateNestedFilter;
    cfPageSeoNestedFilter: CfPageSeoNestedFilter;
    cfmainSlotMultiTypeNestedFilter: CfmainSlotMultiTypeNestedFilter;
};

export type ContentSourceMapsDirectiveArgs = {};

export type ContentSourceMapsDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = ContentSourceMapsDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DelegatedResourceLinkDirectiveArgs = {
    contentTypeId?: Maybe<Scalars['String']['input']>;
    field?: Maybe<Scalars['JSON']['input']>;
};

export type DelegatedResourceLinkDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = DelegatedResourceLinkDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EnumMapperDirectiveArgs = {
    value?: Maybe<Scalars['JSON']['input']>;
};

export type EnumMapperDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = EnumMapperDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FeatureFlagDirectiveArgs = {
    featureName?: Maybe<Scalars['String']['input']>;
};

export type FeatureFlagDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = FeatureFlagDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FieldResolverDirectiveArgs = {
    data?: Maybe<Scalars['JSON']['input']>;
    kind?: Maybe<Scalars['String']['input']>;
};

export type FieldResolverDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = FieldResolverDirectiveArgs,
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

export type TypeIdentifierDirectiveArgs = {
    contentTypeId?: Maybe<Scalars['String']['input']>;
};

export type TypeIdentifierDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = TypeIdentifierDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

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
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<AssetLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockFaqLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    pageOneColumnTemplateCollection?: Resolver<
        Maybe<ResolversTypes['PageOneColumnTemplateCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockFaqLinkingCollectionsPageOneColumnTemplateCollectionArgs, 'limit' | 'skip'>
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
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockTicketListLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
    >;
    pageOneColumnTemplateCollection?: Resolver<
        Maybe<ResolversTypes['PageOneColumnTemplateCollection']>,
        ParentType,
        ContextType,
        RequireFields<BlockTicketListLinkingCollectionsPageOneColumnTemplateCollectionArgs, 'limit' | 'skip'>
    >;
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
    today?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<DataConfigurableTextsTodayArgs>>;
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
        | 'BlockFaq'
        | 'BlockTicketList'
        | 'ComponentBanner'
        | 'ComponentFaqItem'
        | 'ComponentFieldMapping'
        | 'ComponentKeyValue'
        | 'ComponentLink'
        | 'ComponentNoResult'
        | 'ComponentPagination'
        | 'ComponentTable'
        | 'ComponentTableColumn'
        | 'DataConfigurableTexts'
        | 'Page'
        | 'PageOneColumnTemplate'
        | 'PageSeo',
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

export interface HexColorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColor'], any> {
    name: 'HexColor';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
    name: 'JSON';
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
    seo?: Resolver<Maybe<ResolversTypes['PageSeo']>, ParentType, ContextType, Partial<PageSeoArgs>>;
    slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageSlugArgs>>;
    sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
    template?: Resolver<
        Maybe<ResolversTypes['PageOneColumnTemplate']>,
        ParentType,
        ContextType,
        Partial<PageTemplateArgs>
    >;
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
    componentLinkCollection?: Resolver<
        Maybe<ResolversTypes['ComponentLinkCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsComponentLinkCollectionArgs, 'limit' | 'skip'>
    >;
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<PageLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>
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
    items?: Resolver<Array<Maybe<ResolversTypes['PageOneColumnTemplateMainSlotItem']>>, ParentType, ContextType>;
    limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageOneColumnTemplateMainSlotItemResolvers<
    ContextType = any,
    ParentType extends
        ResolversParentTypes['PageOneColumnTemplateMainSlotItem'] = ResolversParentTypes['PageOneColumnTemplateMainSlotItem'],
> = {
    __resolveType: TypeResolveFn<'BlockFaq' | 'BlockTicketList', ParentType, ContextType>;
};

export type PageSeoResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageSeo'] = ResolversParentTypes['PageSeo'],
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageSeoDescriptionArgs>>;
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
    asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
    assetCollection?: Resolver<
        Maybe<ResolversTypes['AssetCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryAssetCollectionArgs, 'limit' | 'skip'>
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
    entryCollection?: Resolver<
        Maybe<ResolversTypes['EntryCollection']>,
        ParentType,
        ContextType,
        RequireFields<QueryEntryCollectionArgs, 'limit' | 'skip'>
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

export type _NodeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['_Node'] = ResolversParentTypes['_Node'],
> = {
    __resolveType: TypeResolveFn<
        | 'BlockFaq'
        | 'BlockTicketList'
        | 'ComponentBanner'
        | 'ComponentFaqItem'
        | 'ComponentFieldMapping'
        | 'ComponentKeyValue'
        | 'ComponentLink'
        | 'ComponentNoResult'
        | 'ComponentPagination'
        | 'ComponentTable'
        | 'ComponentTableColumn'
        | 'DataConfigurableTexts'
        | 'Page'
        | 'PageOneColumnTemplate'
        | 'PageSeo',
        ParentType,
        ContextType
    >;
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    Asset?: AssetResolvers<ContextType>;
    AssetCollection?: AssetCollectionResolvers<ContextType>;
    AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>;
    BlockFaq?: BlockFaqResolvers<ContextType>;
    BlockFaqCollection?: BlockFaqCollectionResolvers<ContextType>;
    BlockFaqItemsCollection?: BlockFaqItemsCollectionResolvers<ContextType>;
    BlockFaqLinkingCollections?: BlockFaqLinkingCollectionsResolvers<ContextType>;
    BlockTicketList?: BlockTicketListResolvers<ContextType>;
    BlockTicketListCollection?: BlockTicketListCollectionResolvers<ContextType>;
    BlockTicketListFieldsCollection?: BlockTicketListFieldsCollectionResolvers<ContextType>;
    BlockTicketListLinkingCollections?: BlockTicketListLinkingCollectionsResolvers<ContextType>;
    ComponentBanner?: ComponentBannerResolvers<ContextType>;
    ComponentBannerCollection?: ComponentBannerCollectionResolvers<ContextType>;
    ComponentBannerLinkingCollections?: ComponentBannerLinkingCollectionsResolvers<ContextType>;
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
    ComponentNoResult?: ComponentNoResultResolvers<ContextType>;
    ComponentNoResultCollection?: ComponentNoResultCollectionResolvers<ContextType>;
    ComponentNoResultLinkingCollections?: ComponentNoResultLinkingCollectionsResolvers<ContextType>;
    ComponentPagination?: ComponentPaginationResolvers<ContextType>;
    ComponentPaginationCollection?: ComponentPaginationCollectionResolvers<ContextType>;
    ComponentPaginationLinkingCollections?: ComponentPaginationLinkingCollectionsResolvers<ContextType>;
    ComponentTable?: ComponentTableResolvers<ContextType>;
    ComponentTableCollection?: ComponentTableCollectionResolvers<ContextType>;
    ComponentTableColumn?: ComponentTableColumnResolvers<ContextType>;
    ComponentTableColumnCollection?: ComponentTableColumnCollectionResolvers<ContextType>;
    ComponentTableColumnLinkingCollections?: ComponentTableColumnLinkingCollectionsResolvers<ContextType>;
    ComponentTableColumnsCollection?: ComponentTableColumnsCollectionResolvers<ContextType>;
    ComponentTableLinkingCollections?: ComponentTableLinkingCollectionsResolvers<ContextType>;
    ContentfulMetadata?: ContentfulMetadataResolvers<ContextType>;
    ContentfulTag?: ContentfulTagResolvers<ContextType>;
    DataConfigurableTexts?: DataConfigurableTextsResolvers<ContextType>;
    DataConfigurableTextsCollection?: DataConfigurableTextsCollectionResolvers<ContextType>;
    DataConfigurableTextsLinkingCollections?: DataConfigurableTextsLinkingCollectionsResolvers<ContextType>;
    DateTime?: GraphQLScalarType;
    Dimension?: GraphQLScalarType;
    Entry?: EntryResolvers<ContextType>;
    EntryCollection?: EntryCollectionResolvers<ContextType>;
    HexColor?: GraphQLScalarType;
    JSON?: GraphQLScalarType;
    Page?: PageResolvers<ContextType>;
    PageCollection?: PageCollectionResolvers<ContextType>;
    PageLinkingCollections?: PageLinkingCollectionsResolvers<ContextType>;
    PageOneColumnTemplate?: PageOneColumnTemplateResolvers<ContextType>;
    PageOneColumnTemplateCollection?: PageOneColumnTemplateCollectionResolvers<ContextType>;
    PageOneColumnTemplateLinkingCollections?: PageOneColumnTemplateLinkingCollectionsResolvers<ContextType>;
    PageOneColumnTemplateMainSlotCollection?: PageOneColumnTemplateMainSlotCollectionResolvers<ContextType>;
    PageOneColumnTemplateMainSlotItem?: PageOneColumnTemplateMainSlotItemResolvers<ContextType>;
    PageSeo?: PageSeoResolvers<ContextType>;
    PageSeoCollection?: PageSeoCollectionResolvers<ContextType>;
    PageSeoLinkingCollections?: PageSeoLinkingCollectionsResolvers<ContextType>;
    Quality?: GraphQLScalarType;
    Query?: QueryResolvers<ContextType>;
    Sys?: SysResolvers<ContextType>;
    TaxonomyConcept?: TaxonomyConceptResolvers<ContextType>;
    _Node?: _NodeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
    contentSourceMaps?: ContentSourceMapsDirectiveResolver<any, any, ContextType>;
    delegatedResourceLink?: DelegatedResourceLinkDirectiveResolver<any, any, ContextType>;
    enumMapper?: EnumMapperDirectiveResolver<any, any, ContextType>;
    featureFlag?: FeatureFlagDirectiveResolver<any, any, ContextType>;
    fieldResolver?: FieldResolverDirectiveResolver<any, any, ContextType>;
    timeline?: TimelineDirectiveResolver<any, any, ContextType>;
    typeIdentifier?: TypeIdentifierDirectiveResolver<any, any, ContextType>;
};

export type PageFragment = {
    slug?: string;
    hasOwnTitle?: boolean;
    sys: { locale?: string; publishedAt?: any; id: string };
    seo?: { title?: string; noIndex?: boolean; noFollow?: boolean; description?: string; keywords?: Array<string> };
    parent?: {
        slug?: string;
        seo?: { title?: string };
        parent?: { slug?: string; seo?: { title?: string }; parent?: { slug?: string; seo?: { title?: string } } };
    };
    template?: {
        __typename: 'PageOneColumnTemplate';
        mainSlotCollection?: {
            items: Array<{ __typename: 'BlockFaq'; _id: string } | { __typename: 'BlockTicketList'; _id: string }>;
        };
    };
};

export type SysFragment = { id: string };

export type FaqComponentFragment = {
    __typename: 'BlockFaq';
    title?: string;
    subtitle?: string;
    sys: { id: string };
    itemsCollection?: { items: Array<{ title?: string; content?: string }> };
    banner?: { title?: string; description?: string; link?: { label?: string; url?: string } };
};

export type TicketListComponentFragment = {
    __typename: 'BlockTicketList';
    title?: string;
    subTitle?: string;
    detailsUrl?: string;
    sys: { id: string };
    fieldsCollection?: {
        items: Array<{ name?: string; valuesCollection?: { items: Array<{ key?: string; value?: string }> } }>;
    };
    table?: {
        actionsTitle?: string;
        actionsLabel?: string;
        columnsCollection?: { items: Array<{ title?: string; field?: string }> };
    };
    pagination?: {
        description?: string;
        previousLabel?: string;
        nextLabel?: string;
        perPage?: number;
        selectPageLabel?: string;
    };
    noResults?: { title?: string; description?: string };
};

export type BannerFragment = { title?: string; description?: string; link?: { label?: string; url?: string } };

export type FieldMappingFragment = {
    name?: string;
    valuesCollection?: { items: Array<{ key?: string; value?: string }> };
};

export type LinkFragment = {
    label?: string;
    url?: string;
    page?: { slug?: string; seo?: { title?: string; description?: string } };
};

export type PaginationFragment = {
    description?: string;
    previousLabel?: string;
    nextLabel?: string;
    perPage?: number;
    selectPageLabel?: string;
};

export type SeoFragment = {
    title?: string;
    noIndex?: boolean;
    noFollow?: boolean;
    description?: string;
    keywords?: Array<string>;
};

export type TableFragment = {
    actionsTitle?: string;
    actionsLabel?: string;
    columnsCollection?: { items: Array<{ title?: string; field?: string }> };
};

export type OneColumnTemplateFragment = {
    __typename: 'PageOneColumnTemplate';
    mainSlotCollection?: {
        items: Array<{ __typename: 'BlockFaq'; _id: string } | { __typename: 'BlockTicketList'; _id: string }>;
    };
};

export type GetComponentQueryVariables = Exact<{
    id: Scalars['ID']['input'];
    locale: Scalars['String']['input'];
}>;

export type GetComponentQuery = {
    _node?:
        | {
              __typename: 'BlockFaq';
              title?: string;
              subtitle?: string;
              sys: { id: string };
              itemsCollection?: { items: Array<{ title?: string; content?: string }> };
              banner?: { title?: string; description?: string; link?: { label?: string; url?: string } };
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
                      valuesCollection?: { items: Array<{ key?: string; value?: string }> };
                  }>;
              };
              table?: {
                  actionsTitle?: string;
                  actionsLabel?: string;
                  columnsCollection?: { items: Array<{ title?: string; field?: string }> };
              };
              pagination?: {
                  description?: string;
                  previousLabel?: string;
                  nextLabel?: string;
                  perPage?: number;
                  selectPageLabel?: string;
              };
              noResults?: { title?: string; description?: string };
          }
        | {};
};

export type GetPageQueryVariables = Exact<{
    slug: Scalars['String']['input'];
    locale: Scalars['String']['input'];
}>;

export type GetPageQuery = {
    pageCollection?: {
        items: Array<{
            slug?: string;
            hasOwnTitle?: boolean;
            sys: { locale?: string; publishedAt?: any; id: string };
            seo?: {
                title?: string;
                noIndex?: boolean;
                noFollow?: boolean;
                description?: string;
                keywords?: Array<string>;
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
            template?: {
                __typename: 'PageOneColumnTemplate';
                mainSlotCollection?: {
                    items: Array<
                        { __typename: 'BlockFaq'; _id: string } | { __typename: 'BlockTicketList'; _id: string }
                    >;
                };
            };
        }>;
    };
};

export type GetPagesQueryVariables = Exact<{
    locale: Scalars['String']['input'];
}>;

export type GetPagesQuery = {
    pageCollection?: {
        items: Array<{
            slug?: string;
            hasOwnTitle?: boolean;
            sys: { locale?: string; publishedAt?: any; id: string };
            seo?: {
                title?: string;
                noIndex?: boolean;
                noFollow?: boolean;
                description?: string;
                keywords?: Array<string>;
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
            template?: {
                __typename: 'PageOneColumnTemplate';
                mainSlotCollection?: {
                    items: Array<
                        { __typename: 'BlockFaq'; _id: string } | { __typename: 'BlockTicketList'; _id: string }
                    >;
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
export const SeoFragmentDoc = gql`
    fragment Seo on PageSeo {
        title
        noIndex
        noFollow
        description
        keywords
    }
`;
export const OneColumnTemplateFragmentDoc = gql`
    fragment OneColumnTemplate on PageOneColumnTemplate {
        __typename
        mainSlotCollection {
            items {
                __typename
                ... on _Node {
                    _id
                    __typename
                }
            }
        }
    }
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
        }
    }
    ${SysFragmentDoc}
    ${SeoFragmentDoc}
    ${OneColumnTemplateFragmentDoc}
`;
export const BannerFragmentDoc = gql`
    fragment Banner on ComponentBanner {
        title
        description
        link {
            label
            url
        }
    }
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
        name
        valuesCollection {
            items {
                key
                value
            }
        }
    }
`;
export const TableFragmentDoc = gql`
    fragment Table on ComponentTable {
        columnsCollection {
            items {
                title
                field
            }
        }
        actionsTitle
        actionsLabel
    }
`;
export const PaginationFragmentDoc = gql`
    fragment Pagination on ComponentPagination {
        description
        previousLabel
        nextLabel
        perPage
        selectPageLabel
    }
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
        label
        url
        page {
            slug
            seo {
                title
                description
            }
        }
    }
`;
export const GetComponentDocument = gql`
    query getComponent($id: ID!, $locale: String!) {
        _node(id: $id, locale: $locale) {
            ... on BlockFaq {
                ...FaqComponent
            }
            ... on BlockTicketList {
                ...TicketListComponent
            }
        }
    }
    ${FaqComponentFragmentDoc}
    ${TicketListComponentFragmentDoc}
`;
export const GetPageDocument = gql`
    query getPage($slug: String!, $locale: String!) {
        pageCollection(locale: $locale, where: { slug: $slug }, limit: 1) {
            items {
                ...Page
            }
        }
    }
    ${PageFragmentDoc}
`;
export const GetPagesDocument = gql`
    query getPages($locale: String!) {
        pageCollection(locale: $locale) {
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
const GetComponentDocumentString = print(GetComponentDocument);
const GetPageDocumentString = print(GetPageDocument);
const GetPagesDocumentString = print(GetPagesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
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
