import { Markdown, Title, useOf } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs-vite';
import { createNavigation } from '@storybook/nextjs-vite/navigation.mock';
import { createRouter } from '@storybook/nextjs-vite/router.mock';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import { GlobalProvider } from '@o2s/ui/providers/GlobalProvider';

import { AppSpinner } from '@o2s/ui/components/feedback/AppSpinner';

import { Toaster } from '@o2s/ui/elements/toaster';
import { TooltipProvider } from '@o2s/ui/elements/tooltip';

import messages from '../apps/frontend/src/i18n/messages/en.json';
import '../apps/frontend/src/styles/global.css';

import { globalProviderConfig, globalProviderCurrentTheme, globalProviderLabels, globalProviderThemes } from './data';

createRouter({});
createNavigation({});

const ReadmeDocsPage = () => {
    const { story } = useOf('story', ['story']);
    const { preparedMeta } = useOf('meta', ['meta']);
    const readme = story.parameters?.readme ?? preparedMeta.parameters?.readme;

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Title, null),
        typeof readme === 'string' ? React.createElement(Markdown, null, readme) : null,
    );
};

const preview: Preview = {
    parameters: {
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
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },
    },
    decorators: [
        withThemeByClassName({
            themes: {
                default: 'theme-default',
                dark: 'theme-dark',
            },
            defaultTheme: 'default',
        }),
        (Story) =>
            React.createElement(
                NextIntlClientProvider,
                { locale: 'en', messages },
                React.createElement(
                    GlobalProvider,
                    {
                        config: globalProviderConfig,
                        labels: globalProviderLabels,
                        themes: globalProviderThemes,
                        currentTheme: globalProviderCurrentTheme,
                        locale: 'en',
                    },
                    React.createElement(
                        TooltipProvider,
                        null,
                        React.createElement(Story, null),
                        React.createElement(Toaster, null),
                        React.createElement(AppSpinner, null),
                    ),
                ),
            ),
    ],
};

export default preview;
