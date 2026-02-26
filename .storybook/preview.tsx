import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import type { Preview } from '@storybook/nextjs-vite';
import { createRouter } from '@storybook/nextjs-vite/router.mock';
import { createNavigation } from '@storybook/nextjs-vite/navigation.mock';
import { Markdown, Title, useOf } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';

import { GlobalProvider } from '@o2s/ui/providers/GlobalProvider';
import { AppSpinner } from '@o2s/ui/components/AppSpinner';
import { Toaster } from '@o2s/ui/elements/toaster';
import { TooltipProvider } from '@o2s/ui/elements/tooltip';

import { globalProviderConfig, globalProviderCurrentTheme, globalProviderLabels, globalProviderThemes } from './data';

import '../apps/frontend/src/styles/global.css';
import messages from '../apps/frontend/src/i18n/messages/en.json'

createRouter({});
createNavigation({});

const ReadmeDocsPage = () => {
    const { story } = useOf('story', ['story']);
    const { preparedMeta } = useOf('meta', ['meta']);
    const readme = story.parameters?.readme ?? preparedMeta.parameters?.readme;

    return (
        <>
            <Title />
            {typeof readme === 'string' ? <Markdown>{readme}</Markdown> : null}
        </>
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
          test: 'todo'
      }
  },
    decorators: [
        withThemeByClassName({
            themes: {
                default: 'theme-default',
                dark: 'theme-dark',
            },
            defaultTheme: 'default',
        }),
        (Story) => {
            return(
                <NextIntlClientProvider locale="en" messages={messages}>
                    <GlobalProvider config={globalProviderConfig} labels={globalProviderLabels} themes={globalProviderThemes} currentTheme={globalProviderCurrentTheme} locale="en">
                        <TooltipProvider>
                            <Story />

                            <Toaster />
                            <AppSpinner />
                        </TooltipProvider>
                    </GlobalProvider>
                </NextIntlClientProvider>
            )
        }
    ]
};

export default preview;
