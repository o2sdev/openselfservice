import { Controls, Description, Markdown, Primary, Stories, Title, useOf } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs-vite';
import { createNavigation } from '@storybook/nextjs-vite/navigation.mock';
import { createRouter } from '@storybook/nextjs-vite/router.mock';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import { Utils } from '@o2s/utils.frontend';

import { GlobalProvider } from '@o2s/ui/providers/GlobalProvider';

import { AppSpinner } from '@o2s/ui/components/Feedback/AppSpinner';

import { Toaster } from '@o2s/ui/elements/toaster';
import { TooltipProvider } from '@o2s/ui/elements/tooltip';

import messages from '../apps/frontend/src/i18n/messages/en.json';
import '../apps/frontend/src/styles/global.css';

import { globalProviderConfig, globalProviderCurrentTheme, globalProviderLabels, globalProviderThemes } from './data';
import { cartAndCheckoutHandlers } from './mocks/handlers/cart-handlers';

initialize();

createRouter({});
createNavigation({});

const ReadmeDocsPage = () => {
    const { story } = useOf('story', ['story']);
    const { preparedMeta } = useOf('meta', ['meta']);
    const readme = story.parameters?.readme ?? preparedMeta.parameters?.readme;

    if (typeof readme === 'string') {
        return (
            <>
                <Title />
                <Markdown>{readme}</Markdown>
            </>
        );
    }

    return (
        <>
            <Title />
            <Description />
            <Primary />
            <Controls />
            <Stories />
        </>
    );
};

const preview: Preview = {
    loaders: [mswLoader as () => void | Record<string, unknown> | Promise<void | Record<string, unknown>>],
    parameters: {
        msw: {
            handlers: cartAndCheckoutHandlers,
        },
        docs: {
            page: ReadmeDocsPage,
        },
        nextjs: {
            appDirectory: true,
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: 'todo',
        },
    },
    decorators: [
        (Story) => {
            // Set cartId for cart/checkout blocks - MSW handlers return mock data
            if (globalThis.window !== undefined) {
                Utils.CartStorage.setCartId('storybook-cart-1');
            }
            return <Story />;
        },
        withThemeByClassName({
            themes: {
                default: 'theme-default',
                dark: 'theme-dark',
            },
            defaultTheme: 'default',
        }),
        (Story) => {
            return (
                <NextIntlClientProvider locale="en" messages={messages}>
                    <GlobalProvider
                        config={globalProviderConfig}
                        labels={globalProviderLabels}
                        themes={globalProviderThemes}
                        currentTheme={globalProviderCurrentTheme}
                        locale="en"
                    >
                        <TooltipProvider>
                            <Story />

                            <Toaster />
                            <AppSpinner />
                        </TooltipProvider>
                    </GlobalProvider>
                </NextIntlClientProvider>
            );
        },
    ],
};

export default preview;
