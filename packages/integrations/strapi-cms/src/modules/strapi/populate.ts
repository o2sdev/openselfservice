import { API } from '@strapi/client';

export const POPULATE_BLOCKS: API.BaseQueryParams['populate'] = {
    content: {
        on: {
            'components.article-list': {
                populate: {
                    pages: { populate: '*' },
                    category: { populate: '*' },
                    parent: { populate: '*' },
                },
            },
            'components.article-search': {
                populate: {
                    noResults: { populate: '*' },
                },
            },
            'components.category': {
                populate: {
                    category: {
                        populate: {
                            components: { populate: '*' },
                        },
                    },
                    parent: { populate: '*' },
                },
            },
            'components.category-list': {
                populate: {
                    categories: { populate: '*' },
                    parent: { populate: '*' },
                },
            },
            'components.faq': {
                populate: {
                    items: { populate: '*' },
                    banner: { populate: '*' },
                },
            },
            'components.featured-service-list': {
                populate: {
                    pagination: { populate: '*' },
                    noResults: { populate: '*' },
                },
            },
            'components.invoice-list': {
                populate: {
                    fields: { populate: '*' },
                    table: { populate: '*' },
                    pagination: { populate: '*' },
                    filters: {
                        populate: {
                            items: {
                                populate: {
                                    field: {
                                        on: {
                                            'content.filter-select': {
                                                populate: ['items'],
                                            },
                                            'content.filter-date-range': {
                                                populate: '*',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    noResults: { populate: '*' },
                },
            },
            'components.notification-details': {
                populate: {
                    fields: { populate: '*' },
                    properties: { populate: '*' },
                },
            },
            'components.notification-list': {
                populate: {
                    fields: { populate: '*' },
                    table: { populate: '*' },
                    pagination: { populate: '*' },
                    filters: {
                        populate: {
                            items: {
                                populate: {
                                    field: {
                                        on: {
                                            'content.filter-select': {
                                                populate: ['items'],
                                            },
                                            'content.filter-date-range': {
                                                populate: '*',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    noResults: { populate: '*' },
                },
            },
            'components.order-details': {
                populate: {
                    fields: { populate: '*' },
                    table: { populate: '*' },
                    pagination: { populate: '*' },
                    filters: {
                        populate: {
                            items: {
                                populate: {
                                    field: {
                                        on: {
                                            'content.filter-select': {
                                                populate: ['items'],
                                            },
                                            'content.filter-date-range': {
                                                populate: '*',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    noResults: { populate: '*' },
                    totalValue: { populate: '*' },
                    createdOrderAt: { populate: '*' },
                    paymentDueDate: { populate: '*' },
                    overdue: { populate: '*' },
                    orderStatus: { populate: '*' },
                    customerComment: { populate: '*' },
                },
            },
            'components.order-list': {
                populate: {
                    fields: { populate: '*' },
                    table: { populate: '*' },
                    pagination: { populate: '*' },
                    filters: {
                        populate: {
                            items: {
                                populate: {
                                    field: {
                                        on: {
                                            'content.filter-select': {
                                                populate: ['items'],
                                            },
                                            'content.filter-date-range': {
                                                populate: '*',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    noResults: { populate: '*' },
                },
            },
            'components.orders-summary': {
                populate: {
                    ranges: { populate: '*' },
                    noResults: { populate: '*' },
                    totalValue: { populate: '*' },
                    averageValue: { populate: '*' },
                    averageNumber: { populate: '*' },
                },
            },
            'components.payments-history': {
                populate: '*',
            },
            'components.payments-summary': {
                populate: {
                    overdue: { populate: '*' },
                    toBePaid: { populate: '*' },
                },
            },
            'components.quick-links': {
                populate: {
                    items: {
                        populate: {
                            page: {
                                populate: ['SEO'],
                            },
                        },
                    },
                },
            },
            'components.service-details': {
                populate: {
                    fields: { populate: '*' },
                    properties: { populate: '*' },
                },
            },
            'components.service-list': {
                populate: {
                    fields: { populate: '*' },
                    pagination: { populate: '*' },
                    filters: {
                        populate: {
                            items: {
                                populate: {
                                    field: {
                                        on: {
                                            'content.filter-select': {
                                                populate: ['items'],
                                            },
                                            'content.filter-date-range': {
                                                populate: '*',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    noResults: { populate: '*' },
                },
            },
            'components.survey-js-component': {
                populate: {
                    survey_js_form: { populate: '*' },
                },
            },
            'components.ticket-details': {
                populate: {
                    fields: { populate: '*' },
                    properties: { populate: '*' },
                },
            },
            'components.ticket-list': {
                populate: {
                    fields: { populate: '*' },
                    table: { populate: '*' },
                    filters: {
                        populate: {
                            items: {
                                populate: {
                                    field: {
                                        on: {
                                            'content.filter-select': {
                                                populate: ['items'],
                                            },
                                            'content.filter-date-range': {
                                                populate: '*',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    noResults: { populate: '*' },
                    forms: {
                        populate: {
                            page: {
                                populate: ['SEO'],
                            },
                        },
                    },
                },
            },
            'components.ticket-recent': {
                populate: '*',
            },
            'components.user-account': {
                populate: {
                    inputs: { populate: '*' },
                },
            },
        },
    },
};
