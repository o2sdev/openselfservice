import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsArticle extends Struct.ComponentSchema {
  collectionName: 'components_components_articles';
  info: {
    description: '';
    displayName: 'Article';
  };
  attributes: {
    author: Schema.Attribute.Relation<'oneToOne', 'api::author.author'>;
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    sections: Schema.Attribute.Component<'content.article-section', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsArticleList extends Struct.ComponentSchema {
  collectionName: 'components_components_article_lists';
  info: {
    description: '';
    displayName: 'Article List';
  };
  attributes: {
    articles_to_show: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    description: Schema.Attribute.RichText;
    pages: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
    parent: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsArticleSearch extends Struct.ComponentSchema {
  collectionName: 'components_components_article_searches';
  info: {
    description: '';
    displayName: 'Article Search';
  };
  attributes: {
    inputLabel: Schema.Attribute.String;
    noResults: Schema.Attribute.Component<'content.banner', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCategory extends Struct.ComponentSchema {
  collectionName: 'components_components_categories';
  info: {
    description: '';
    displayName: 'Category';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    parent: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
  };
}

export interface ComponentsCategoryList extends Struct.ComponentSchema {
  collectionName: 'components_components_category_lists';
  info: {
    description: '';
    displayName: 'Category List';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    description: Schema.Attribute.RichText;
    parent: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFaq extends Struct.ComponentSchema {
  collectionName: 'components_components_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
  };
  attributes: {
    banner: Schema.Attribute.Component<'content.banner', false>;
    items: Schema.Attribute.Component<'content.message', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFeaturedServiceList extends Struct.ComponentSchema {
  collectionName: 'components_components_featured_service_lists';
  info: {
    displayName: 'Featured Service List';
  };
  attributes: {
    detailsLabel: Schema.Attribute.String;
    detailsURL: Schema.Attribute.String;
    noResults: Schema.Attribute.Component<'content.banner', false> &
      Schema.Attribute.Required;
    pagination: Schema.Attribute.Component<'content.pagination', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsInvoiceList extends Struct.ComponentSchema {
  collectionName: 'components_components_invoice_lists';
  info: {
    description: '';
    displayName: 'Invoice List';
  };
  attributes: {
    downloadButtonAriaDescription: Schema.Attribute.String;
    downloadFileName: Schema.Attribute.String;
    fields: Schema.Attribute.Component<'content.field-mapping', true> &
      Schema.Attribute.Required;
    filters: Schema.Attribute.Component<'content.filters', false>;
    noResults: Schema.Attribute.Component<'content.banner', false> &
      Schema.Attribute.Required;
    pagination: Schema.Attribute.Component<'content.pagination', false>;
    table: Schema.Attribute.Component<'content.table', false> &
      Schema.Attribute.Required;
    tableTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsNotificationDetails extends Struct.ComponentSchema {
  collectionName: 'components_components_notification_details';
  info: {
    displayName: 'Notification Details';
  };
  attributes: {
    fields: Schema.Attribute.Component<'content.field-mapping', true>;
    properties: Schema.Attribute.Component<'content.key-value', true>;
  };
}

export interface ComponentsNotificationList extends Struct.ComponentSchema {
  collectionName: 'components_components_notification_lists';
  info: {
    description: '';
    displayName: 'Notification List';
    icon: 'expand';
  };
  attributes: {
    detailsURL: Schema.Attribute.String;
    fields: Schema.Attribute.Component<'content.field-mapping', true> &
      Schema.Attribute.Required;
    filters: Schema.Attribute.Component<'content.filters', false>;
    noResults: Schema.Attribute.Component<'content.banner', false> &
      Schema.Attribute.Required;
    pagination: Schema.Attribute.Component<'content.pagination', false>;
    subtitle: Schema.Attribute.String;
    table: Schema.Attribute.Component<'content.table', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsOrderDetails extends Struct.ComponentSchema {
  collectionName: 'components_components_order_details';
  info: {
    description: '';
    displayName: 'Order Details';
  };
  attributes: {
    createdOrderAt: Schema.Attribute.Component<
      'content.information-card',
      false
    > &
      Schema.Attribute.Required;
    customerComment: Schema.Attribute.Component<
      'content.information-card',
      false
    > &
      Schema.Attribute.Required;
    fields: Schema.Attribute.Component<'content.field-mapping', true> &
      Schema.Attribute.Required;
    filters: Schema.Attribute.Component<'content.filters', false>;
    noResults: Schema.Attribute.Component<'content.banner', false> &
      Schema.Attribute.Required;
    orderStatus: Schema.Attribute.Component<'content.information-card', false> &
      Schema.Attribute.Required;
    overdue: Schema.Attribute.Component<'content.information-card', false> &
      Schema.Attribute.Required;
    pagination: Schema.Attribute.Component<'content.pagination', false>;
    paymentDueDate: Schema.Attribute.Component<
      'content.information-card',
      false
    > &
      Schema.Attribute.Required;
    payOnlineLabel: Schema.Attribute.String;
    productsTitle: Schema.Attribute.String;
    reorderLabel: Schema.Attribute.String;
    statusLadder: Schema.Attribute.Component<'content.message-simple', true> &
      Schema.Attribute.Required;
    table: Schema.Attribute.Component<'content.table', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
    totalValue: Schema.Attribute.Component<'content.information-card', false> &
      Schema.Attribute.Required;
    trackOrderLabel: Schema.Attribute.String;
  };
}

export interface ComponentsOrderList extends Struct.ComponentSchema {
  collectionName: 'components_components_order_lists';
  info: {
    description: '';
    displayName: 'Order List';
  };
  attributes: {
    detailsURL: Schema.Attribute.String;
    fields: Schema.Attribute.Component<'content.field-mapping', true> &
      Schema.Attribute.Required;
    filters: Schema.Attribute.Component<'content.filters', false>;
    noResults: Schema.Attribute.Component<'content.banner', false> &
      Schema.Attribute.Required;
    pagination: Schema.Attribute.Component<'content.pagination', false>;
    reorderLabel: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    table: Schema.Attribute.Component<'content.table', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsOrdersSummary extends Struct.ComponentSchema {
  collectionName: 'components_components_orders_summaries';
  info: {
    description: '';
    displayName: 'Orders Summary';
  };
  attributes: {
    averageNumber: Schema.Attribute.Component<
      'content.information-card',
      false
    > &
      Schema.Attribute.Required;
    averageNumberTitle: Schema.Attribute.String & Schema.Attribute.Required;
    averageValue: Schema.Attribute.Component<
      'content.information-card',
      false
    > &
      Schema.Attribute.Required;
    averageValueTitle: Schema.Attribute.String & Schema.Attribute.Required;
    chartCurrentPeriodLabel: Schema.Attribute.String &
      Schema.Attribute.Required;
    chartPreviousPeriodLabel: Schema.Attribute.String &
      Schema.Attribute.Required;
    chartTitle: Schema.Attribute.String & Schema.Attribute.Required;
    noResults: Schema.Attribute.Component<'content.banner', false> &
      Schema.Attribute.Required;
    ranges: Schema.Attribute.Component<'content.chart-date-range', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    totalValue: Schema.Attribute.Component<'content.information-card', false> &
      Schema.Attribute.Required;
    totalValueTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsPaymentsHistory extends Struct.ComponentSchema {
  collectionName: 'components_components_payments_histories';
  info: {
    description: '';
    displayName: 'Payments History';
  };
  attributes: {
    bottomSegment: Schema.Attribute.String;
    middleSegment: Schema.Attribute.String;
    monthsToShow: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    topSegment: Schema.Attribute.String;
    total: Schema.Attribute.String;
  };
}

export interface ComponentsPaymentsSummary extends Struct.ComponentSchema {
  collectionName: 'components_components_payments_summaries';
  info: {
    description: '';
    displayName: 'Payments Summary';
  };
  attributes: {
    overdue: Schema.Attribute.Component<'content.information-card', false> &
      Schema.Attribute.Required;
    toBePaid: Schema.Attribute.Component<'content.information-card', false> &
      Schema.Attribute.Required;
  };
}

export interface ComponentsQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_components_quick_links';
  info: {
    description: '';
    displayName: 'Quick Links';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    items: Schema.Attribute.Component<'content.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsServiceDetails extends Struct.ComponentSchema {
  collectionName: 'components_components_service_details';
  info: {
    description: '';
    displayName: 'Service Details';
  };
  attributes: {
    fields: Schema.Attribute.Component<'content.field-mapping', true> &
      Schema.Attribute.Required;
    properties: Schema.Attribute.Component<'content.key-value', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsServiceList extends Struct.ComponentSchema {
  collectionName: 'components_components_service_lists';
  info: {
    description: '';
    displayName: 'Service List';
  };
  attributes: {
    detailsLabel: Schema.Attribute.String;
    detailsURL: Schema.Attribute.String;
    fields: Schema.Attribute.Component<'content.field-mapping', true> &
      Schema.Attribute.Required;
    filters: Schema.Attribute.Component<'content.filters', false>;
    noResults: Schema.Attribute.Component<'content.banner', false> &
      Schema.Attribute.Required;
    pagination: Schema.Attribute.Component<'content.pagination', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSurveyJsComponent extends Struct.ComponentSchema {
  collectionName: 'components_components_survey_js_components';
  info: {
    displayName: 'SurveyJS Component';
  };
  attributes: {
    survey_js_form: Schema.Attribute.Relation<
      'oneToOne',
      'api::survey-js-form.survey-js-form'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTicketDetails extends Struct.ComponentSchema {
  collectionName: 'components_components_ticket_details';
  info: {
    description: '';
    displayName: 'Ticket Details';
  };
  attributes: {
    attachmentsTitle: Schema.Attribute.String;
    commentsTitle: Schema.Attribute.String;
    fields: Schema.Attribute.Component<'content.field-mapping', true> &
      Schema.Attribute.Required;
    properties: Schema.Attribute.Component<'content.key-value', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTicketList extends Struct.ComponentSchema {
  collectionName: 'components_components_ticket_lists';
  info: {
    description: '';
    displayName: 'Ticket List';
  };
  attributes: {
    detailsURL: Schema.Attribute.String;
    fields: Schema.Attribute.Component<'content.field-mapping', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    filters: Schema.Attribute.Component<'content.filters', false>;
    forms: Schema.Attribute.Component<'content.link', true>;
    noResults: Schema.Attribute.Component<'content.banner', false> &
      Schema.Attribute.Required;
    pagination: Schema.Attribute.Component<'content.pagination', false>;
    subtitle: Schema.Attribute.String;
    table: Schema.Attribute.Component<'content.table', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTicketRecent extends Struct.ComponentSchema {
  collectionName: 'components_components_ticket_recents';
  info: {
    description: '';
    displayName: 'Ticket Recent';
  };
  attributes: {
    commentsTitle: Schema.Attribute.String;
    detailsUrl: Schema.Attribute.String & Schema.Attribute.Required;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<3>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsUserAccount extends Struct.ComponentSchema {
  collectionName: 'components_components_user_accounts';
  info: {
    description: '';
    displayName: 'User Account';
  };
  attributes: {
    basicInformationDescription: Schema.Attribute.RichText &
      Schema.Attribute.Required;
    basicInformationTitle: Schema.Attribute.String & Schema.Attribute.Required;
    inputs: Schema.Attribute.Component<'content.form-field', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ContentAlertBox extends Struct.ComponentSchema {
  collectionName: 'components_content_alert_boxes';
  info: {
    description: '';
    displayName: 'AlertBox';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentArticleSection extends Struct.ComponentSchema {
  collectionName: 'components_content_article_sections';
  info: {
    displayName: 'Article section';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ContentBanner extends Struct.ComponentSchema {
  collectionName: 'components_content_banners';
  info: {
    description: '';
    displayName: 'Text Box with Link';
  };
  attributes: {
    altDescription: Schema.Attribute.RichText;
    button: Schema.Attribute.Component<'content.link', false>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentChartDateRange extends Struct.ComponentSchema {
  collectionName: 'components_content_chart_date_ranges';
  info: {
    displayName: 'Chart Date Range';
  };
  attributes: {
    default: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['month', 'day']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'month'>;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ContentErrorMessage extends Struct.ComponentSchema {
  collectionName: 'components_content_error_messages';
  info: {
    displayName: 'Error Message';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['required', 'min', 'max', 'matches']> &
      Schema.Attribute.Required;
  };
}

export interface ContentFieldMapping extends Struct.ComponentSchema {
  collectionName: 'components_content_field_mappings';
  info: {
    displayName: 'Field Mapping';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    values: Schema.Attribute.Component<'content.key-value', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ContentFilterDateRange extends Struct.ComponentSchema {
  collectionName: 'components_content_filter_date_ranges';
  info: {
    description: '';
    displayName: 'Filter > Date Range';
  };
  attributes: {
    field: Schema.Attribute.String & Schema.Attribute.Required;
    from: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    to: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFilterSelect extends Struct.ComponentSchema {
  collectionName: 'components_content_filter_selects';
  info: {
    displayName: 'Filter > Select';
  };
  attributes: {
    field: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'content.key-value', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    multiple: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ContentFilters extends Struct.ComponentSchema {
  collectionName: 'components_content_filters';
  info: {
    description: '';
    displayName: 'Filters';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String & Schema.Attribute.Required;
    clearLabel: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    items: Schema.Attribute.Relation<
      'oneToMany',
      'api::filter-item.filter-item'
    >;
    removeFiltersLabel: Schema.Attribute.String;
    submitLabel: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFormField extends Struct.ComponentSchema {
  collectionName: 'components_content_form_fields';
  info: {
    description: '';
    displayName: 'Form Field';
  };
  attributes: {
    description: Schema.Attribute.String;
    errorMessages: Schema.Attribute.Component<'content.error-message', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
  };
}

export interface ContentFormFieldWithRegex extends Struct.ComponentSchema {
  collectionName: 'components_content_form_field_with_regexes';
  info: {
    description: '';
    displayName: 'Form Field With Regex';
  };
  attributes: {
    description: Schema.Attribute.String;
    errorMessages: Schema.Attribute.Component<'content.error-message', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    regexValidations: Schema.Attribute.Component<
      'content.regex-validation',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface ContentFormSelectField extends Struct.ComponentSchema {
  collectionName: 'components_content_form_select_fields';
  info: {
    description: '';
    displayName: 'Form Select Field';
  };
  attributes: {
    description: Schema.Attribute.String;
    errorMessages: Schema.Attribute.Component<'content.error-message', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'content.key-value', true> &
      Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
  };
}

export interface ContentIconWithText extends Struct.ComponentSchema {
  collectionName: 'components_content_icon_with_texts';
  info: {
    displayName: 'Icon With Text';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ContentInformationCard extends Struct.ComponentSchema {
  collectionName: 'components_content_information_cards';
  info: {
    description: '';
    displayName: 'Information Card';
  };
  attributes: {
    altMessage: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.Component<'content.link', false>;
    message: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentKeyValue extends Struct.ComponentSchema {
  collectionName: 'components_content_key_values';
  info: {
    displayName: 'Key Value';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentKeyword extends Struct.ComponentSchema {
  collectionName: 'components_content_keywords';
  info: {
    displayName: 'Keyword';
  };
  attributes: {
    keyword: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentLink extends Struct.ComponentSchema {
  collectionName: 'components_content_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    url: Schema.Attribute.String;
  };
}

export interface ContentListWithIcons extends Struct.ComponentSchema {
  collectionName: 'components_content_list_with_icons';
  info: {
    description: '';
    displayName: 'List With Icons';
  };
  attributes: {
    icons: Schema.Attribute.Component<'content.icon-with-text', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ContentMessage extends Struct.ComponentSchema {
  collectionName: 'components_content_messages';
  info: {
    description: '';
    displayName: 'Message';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentMessageSimple extends Struct.ComponentSchema {
  collectionName: 'components_content_message_simples';
  info: {
    description: '';
    displayName: 'Message Simple';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentNavigationColumn extends Struct.ComponentSchema {
  collectionName: 'components_content_navigation_columns';
  info: {
    description: '';
    displayName: 'Navigation Column';
  };
  attributes: {
    items: Schema.Attribute.Component<'content.navigation-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentNavigationGroup extends Struct.ComponentSchema {
  collectionName: 'components_content_navigation_groups';
  info: {
    description: '';
    displayName: 'Navigation Group';
  };
  attributes: {
    items: Schema.Attribute.Component<'content.navigation-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_content_navigation_items';
  info: {
    description: '';
    displayName: 'Navigation Item';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    url: Schema.Attribute.String;
  };
}

export interface ContentPagination extends Struct.ComponentSchema {
  collectionName: 'components_content_paginations';
  info: {
    description: '';
    displayName: 'Pagination';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    nextLabel: Schema.Attribute.String & Schema.Attribute.Required;
    perPage: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    previousLabel: Schema.Attribute.String & Schema.Attribute.Required;
    selectPageLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentRegexValidation extends Struct.ComponentSchema {
  collectionName: 'components_content_regex_validations';
  info: {
    description: '';
    displayName: 'Regex Validation';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    regex: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentRichTextWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_content_rich_text_with_titles';
  info: {
    description: '';
    displayName: 'rich text with title';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentTable extends Struct.ComponentSchema {
  collectionName: 'components_content_tables';
  info: {
    displayName: 'Table';
  };
  attributes: {
    actionsLabel: Schema.Attribute.String;
    actionsTitle: Schema.Attribute.String;
    columns: Schema.Attribute.Component<'content.table-column', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ContentTableColumn extends Struct.ComponentSchema {
  collectionName: 'components_content_table_columns';
  info: {
    displayName: 'Table column';
  };
  attributes: {
    field: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LabelsActions extends Struct.ComponentSchema {
  collectionName: 'components_labels_actions';
  info: {
    description: '';
    displayName: 'Actions';
  };
  attributes: {
    apply: Schema.Attribute.String & Schema.Attribute.Required;
    cancel: Schema.Attribute.String & Schema.Attribute.Required;
    clear: Schema.Attribute.String & Schema.Attribute.Required;
    clickToSelect: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<' '>;
    close: Schema.Attribute.String & Schema.Attribute.Required;
    delete: Schema.Attribute.String & Schema.Attribute.Required;
    details: Schema.Attribute.String & Schema.Attribute.Required;
    edit: Schema.Attribute.String & Schema.Attribute.Required;
    hide: Schema.Attribute.String & Schema.Attribute.Required;
    logIn: Schema.Attribute.String & Schema.Attribute.Required;
    logOut: Schema.Attribute.String & Schema.Attribute.Required;
    off: Schema.Attribute.String & Schema.Attribute.Required;
    on: Schema.Attribute.String & Schema.Attribute.Required;
    payOnline: Schema.Attribute.String & Schema.Attribute.Required;
    renew: Schema.Attribute.String & Schema.Attribute.Required;
    reorder: Schema.Attribute.String & Schema.Attribute.Required;
    save: Schema.Attribute.String & Schema.Attribute.Required;
    settings: Schema.Attribute.String & Schema.Attribute.Required;
    show: Schema.Attribute.String & Schema.Attribute.Required;
    showAllArticles: Schema.Attribute.String & Schema.Attribute.Required;
    showLess: Schema.Attribute.String & Schema.Attribute.Required;
    showMore: Schema.Attribute.String & Schema.Attribute.Required;
    trackOrder: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LabelsDates extends Struct.ComponentSchema {
  collectionName: 'components_labels_dates';
  info: {
    description: '';
    displayName: 'dates';
  };
  attributes: {
    today: Schema.Attribute.String & Schema.Attribute.Required;
    yesterday: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LabelsErrors extends Struct.ComponentSchema {
  collectionName: 'components_labels_errors';
  info: {
    description: '';
    displayName: 'Errors';
  };
  attributes: {
    requestError: Schema.Attribute.Component<'content.message-simple', false> &
      Schema.Attribute.Required;
  };
}

export interface LabelsValidation extends Struct.ComponentSchema {
  collectionName: 'components_labels_validations';
  info: {
    description: '';
    displayName: 'validation';
  };
  attributes: {
    isOptional: Schema.Attribute.String & Schema.Attribute.Required;
    isRequired: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'metadata';
  };
  attributes: {
    date: Schema.Attribute.DateTime;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keywords: Schema.Attribute.Component<'content.keyword', true>;
    noFollow: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    noIndex: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoUserRoles extends Struct.ComponentSchema {
  collectionName: 'components_seo_user_roles';
  info: {
    description: '';
    displayName: 'User roles';
  };
  attributes: {
    roles: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['user', 'admin']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
  };
}

export interface TemplatesOneColumn extends Struct.ComponentSchema {
  collectionName: 'components_templates_one_columns';
  info: {
    description: '';
    displayName: 'One column';
    icon: 'apps';
  };
  attributes: {
    mainSlot: Schema.Attribute.Relation<
      'oneToMany',
      'api::component.component'
    >;
  };
}

export interface TemplatesTwoColumn extends Struct.ComponentSchema {
  collectionName: 'components_templates_two_columns';
  info: {
    description: '';
    displayName: 'Two column';
    icon: 'apps';
  };
  attributes: {
    bottomSlot: Schema.Attribute.Relation<
      'oneToMany',
      'api::component.component'
    >;
    leftSlot: Schema.Attribute.Relation<
      'oneToMany',
      'api::component.component'
    >;
    rightSlot: Schema.Attribute.Relation<
      'oneToMany',
      'api::component.component'
    >;
    topSlot: Schema.Attribute.Relation<'oneToMany', 'api::component.component'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.article': ComponentsArticle;
      'components.article-list': ComponentsArticleList;
      'components.article-search': ComponentsArticleSearch;
      'components.category': ComponentsCategory;
      'components.category-list': ComponentsCategoryList;
      'components.faq': ComponentsFaq;
      'components.featured-service-list': ComponentsFeaturedServiceList;
      'components.invoice-list': ComponentsInvoiceList;
      'components.notification-details': ComponentsNotificationDetails;
      'components.notification-list': ComponentsNotificationList;
      'components.order-details': ComponentsOrderDetails;
      'components.order-list': ComponentsOrderList;
      'components.orders-summary': ComponentsOrdersSummary;
      'components.payments-history': ComponentsPaymentsHistory;
      'components.payments-summary': ComponentsPaymentsSummary;
      'components.quick-links': ComponentsQuickLinks;
      'components.service-details': ComponentsServiceDetails;
      'components.service-list': ComponentsServiceList;
      'components.survey-js-component': ComponentsSurveyJsComponent;
      'components.ticket-details': ComponentsTicketDetails;
      'components.ticket-list': ComponentsTicketList;
      'components.ticket-recent': ComponentsTicketRecent;
      'components.user-account': ComponentsUserAccount;
      'content.alert-box': ContentAlertBox;
      'content.article-section': ContentArticleSection;
      'content.banner': ContentBanner;
      'content.chart-date-range': ContentChartDateRange;
      'content.error-message': ContentErrorMessage;
      'content.field-mapping': ContentFieldMapping;
      'content.filter-date-range': ContentFilterDateRange;
      'content.filter-select': ContentFilterSelect;
      'content.filters': ContentFilters;
      'content.form-field': ContentFormField;
      'content.form-field-with-regex': ContentFormFieldWithRegex;
      'content.form-select-field': ContentFormSelectField;
      'content.icon-with-text': ContentIconWithText;
      'content.information-card': ContentInformationCard;
      'content.key-value': ContentKeyValue;
      'content.keyword': ContentKeyword;
      'content.link': ContentLink;
      'content.list-with-icons': ContentListWithIcons;
      'content.message': ContentMessage;
      'content.message-simple': ContentMessageSimple;
      'content.navigation-column': ContentNavigationColumn;
      'content.navigation-group': ContentNavigationGroup;
      'content.navigation-item': ContentNavigationItem;
      'content.pagination': ContentPagination;
      'content.regex-validation': ContentRegexValidation;
      'content.rich-text-with-title': ContentRichTextWithTitle;
      'content.table': ContentTable;
      'content.table-column': ContentTableColumn;
      'labels.actions': LabelsActions;
      'labels.dates': LabelsDates;
      'labels.errors': LabelsErrors;
      'labels.validation': LabelsValidation;
      'seo.metadata': SeoMetadata;
      'seo.seo': SeoSeo;
      'seo.user-roles': SeoUserRoles;
      'templates.one-column': TemplatesOneColumn;
      'templates.two-column': TemplatesTwoColumn;
    }
  }
}
