import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_LIST_COMPONENT: CMS.Model.ArticleListComponent.ArticleListComponent = {
    id: 'article-list-1',
    title: 'Articles Overview',
    subtitle: 'Your recent articles',
    table: {
        columns: [
            { id: 'title', title: 'Title' },
            { id: 'lead', title: 'Lead' },
            { id: 'createdAt', title: 'Date Created' },
            { id: 'updatedAt', title: 'Date Updated' },
        ],
        actions: {
            title: 'Actions',
            label: 'View details',
        },
    },
    pagination: {
        limit: 5,
        legend: 'Showing {from}-{to} of {total} articles',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filter',
        title: 'Filter articles',
        description: 'Use filters to find specific articles',
        submit: 'Apply filters',
        reset: 'Reset Filters',
        close: 'Close filters',
        items: [
            {
                __typename: 'FilterDateRange',
                id: 'createdAt',
                label: 'Date Created',
                from: {
                    label: 'From',
                },
                to: {
                    label: 'To',
                },
            },
        ],
    },
    noResults: {
        title: 'No articles found',
        description: 'There are no articles matching your criteria',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    detailsUrl: '/articles/:id',
};

export const mapArticleListComponent = (locale: string): CMS.Model.ArticleListComponent.ArticleListComponent => {
    const getDetailsUrl = () => {
        switch (locale) {
            case 'en':
                return `/articles/{id}`;
            case 'de':
                return `/artikel/{id}`;
            case 'pl':
                return `/artykuły/{id}`;
        }

        return '';
    };

    return {
        ...MOCK_ARTICLE_LIST_COMPONENT,
        detailsUrl: getDetailsUrl(),
    };
};
