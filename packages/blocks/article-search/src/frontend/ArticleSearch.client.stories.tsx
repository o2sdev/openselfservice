import type { Meta, StoryObj } from '@storybook/nextjs';

import { ArticleSearchPure } from './ArticleSearch.client';

const meta = {
    title: 'Blocks/ArticleSearch',
    component: ArticleSearchPure,
} satisfies Meta<typeof ArticleSearchPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    play: async ({ canvas, userEvent }) => {
        // @ts-expect-error for some reason TS treats `canvas` as HTML canvas instead of Storybook's canvas
        const searchInput = canvas.getByRole('combobox', {
            selector: 'input',
        });

        const user = userEvent.setup({
            delay: 100,
        });
        await user.type(searchInput, 'power', {
            delay: 100,
        });
    },
    args: {
        id: 'article-search-1',
        __typename: 'ArticleSearchBlock',
        title: 'Search for topics',
        inputLabel: 'What are you searching for?',
        noResults: {
            title: 'No results found',
            description: 'No results found',
        },
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzA4Njc5fQ.G6C80jKDSGx1FlslKCANGx8xevVxnxc_WSmuXNYszUY',
        locale: 'en',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {
                '/login': {
                    en: '/sign-in',
                    de: '/einloggen',
                    pl: '/logowanie',
                },
            },
        },
    },
};
