// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.
import { Entry } from 'contentful';

export interface IBlockFaqFields {
    /** title */
    title: string;

    /** subtitle */
    subtitle: string;

    /** items */
    items: IComponentFaqItem[];

    /** banner */
    banner?: IComponentBanner | undefined;
}

export interface IBlockFaq extends Entry<IBlockFaqFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'blockFaq';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IBlockTicketListFields {
    /** title */
    title: string;

    /** subTitle */
    subTitle: string;

    /** noResults */
    noResults: IComponentNoResult;

    /** detailsUrl */
    detailsUrl: string;

    /** table */
    table: IComponentTable;

    /** pagination */
    pagination: IComponentPagination;

    /** fields */
    fields: IComponentFieldMapping[];
}

export interface IBlockTicketList extends Entry<IBlockTicketListFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'blockTicketList';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IComponentBannerFields {
    /** title */
    title: string;

    /** description */
    description?: string | undefined;

    /** link */
    link?: IComponentLink | undefined;
}

export interface IComponentBanner extends Entry<IComponentBannerFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'componentBanner';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IComponentFaqItemFields {
    /** title */
    title: string;

    /** content */
    content: string;
}

export interface IComponentFaqItem extends Entry<IComponentFaqItemFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'componentFaqItem';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IComponentFieldMappingFields {
    /** name */
    name: string;

    /** values */
    values: IComponentKeyValue[];
}

export interface IComponentFieldMapping extends Entry<IComponentFieldMappingFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'componentFieldMapping';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IComponentKeyValueFields {
    /** key */
    key: string;

    /** value */
    value: string;
}

export interface IComponentKeyValue extends Entry<IComponentKeyValueFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'componentKeyValue';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IComponentLinkFields {
    /** label */
    label: string;

    /** page */
    page?: IPage | undefined;

    /** url */
    url?: string | undefined;
}

export interface IComponentLink extends Entry<IComponentLinkFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'componentLink';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IComponentNoResultFields {
    /** title */
    title: string;

    /** description */
    description: string;
}

export interface IComponentNoResult extends Entry<IComponentNoResultFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'componentNoResult';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IComponentPaginationFields {
    /** description */
    description: string;

    /** perPage */
    perPage: number;

    /** previousLabel */
    previousLabel: string;

    /** nextLabel */
    nextLabel: string;

    /** selectPageLabel */
    selectPageLabel: string;
}

export interface IComponentPagination extends Entry<IComponentPaginationFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'componentPagination';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IComponentTableFields {
    /** columns */
    columns: IComponentTableColumn[];

    /** actionsTitle */
    actionsTitle: string;

    /** actionsLabel */
    actionsLabel: string;
}

export interface IComponentTable extends Entry<IComponentTableFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'componentTable';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IComponentTableColumnFields {
    /** field */
    field: string;

    /** title */
    title: string;
}

export interface IComponentTableColumn extends Entry<IComponentTableColumnFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'componentTableColumn';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IDataConfigurableTextsFields {
    /** today */
    today: string;

    /** yesterday */
    yesterday: string;

    /** showMore */
    showMore: string;

    /** showLess */
    showLess: string;

    /** show */
    show: string;

    /** hide */
    hide: string;

    /** clear */
    clear: string;

    /** apply */
    apply: string;

    /** edit */
    edit: string;

    /** cancel */
    cancel: string;

    /** save */
    save: string;

    /** delete */
    delete: string;

    /** logIn */
    logIn: string;

    /** logOut */
    logOut: string;

    /** renew */
    renew: string;

    /** settings */
    settings: string;
}

export interface IDataConfigurableTexts extends Entry<IDataConfigurableTextsFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'dataConfigurableTexts';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IPageFields {
    /** slug */
    slug: string;

    /** hasOwnTitle */
    hasOwnTitle: boolean;

    /** parent */
    parent?: IPage | undefined;

    /** seo */
    seo?: IPageSeo | undefined;

    /** template */
    template: IPageOneColumnTemplate;
}

export interface IPage extends Entry<IPageFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'page';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IPageOneColumnTemplateFields {
    /** title */
    title: string;

    /** mainSlot */
    mainSlot: (IBlockTicketList | IBlockFaq)[];
}

export interface IPageOneColumnTemplate extends Entry<IPageOneColumnTemplateFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'pageOneColumnTemplate';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export interface IPageSeoFields {
    /** title */
    title: string;

    /** description */
    description: string;

    /** noIndex */
    noIndex: boolean;

    /** noFollow */
    noFollow: boolean;

    /** keywords */
    keywords?: string[] | undefined;
}

export interface IPageSeo extends Entry<IPageSeoFields> {
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        contentType: {
            sys: {
                id: 'pageSeo';
                linkType: 'ContentType';
                type: 'Link';
            };
        };
    };
}

export type CONTENT_TYPE =
    | 'blockFaq'
    | 'blockTicketList'
    | 'componentBanner'
    | 'componentFaqItem'
    | 'componentFieldMapping'
    | 'componentKeyValue'
    | 'componentLink'
    | 'componentNoResult'
    | 'componentPagination'
    | 'componentTable'
    | 'componentTableColumn'
    | 'dataConfigurableTexts'
    | 'page'
    | 'pageOneColumnTemplate'
    | 'pageSeo';

export type IEntry =
    | IBlockFaq
    | IBlockTicketList
    | IComponentBanner
    | IComponentFaqItem
    | IComponentFieldMapping
    | IComponentKeyValue
    | IComponentLink
    | IComponentNoResult
    | IComponentPagination
    | IComponentTable
    | IComponentTableColumn
    | IDataConfigurableTexts
    | IPage
    | IPageOneColumnTemplate
    | IPageSeo;

export type LOCALE_CODE = 'en';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en';
