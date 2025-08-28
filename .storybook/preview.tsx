import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import type { Preview } from '@storybook/nextjs';
import { createRouter } from '@storybook/nextjs/router.mock';
import { createNavigation } from '@storybook/nextjs/navigation.mock';
import { withThemeByClassName } from '@storybook/addon-themes';

import { GlobalProvider } from '@o2s/ui/providers/GlobalProvider';
import { AppSpinner } from '@o2s/ui/components/AppSpinner';
import { Toaster } from '@o2s/ui/elements/toaster';
import { TooltipProvider } from '@o2s/ui/elements/tooltip';

import { globalProviderConfig, globalProviderLabels } from './data';

import '../apps/frontend/src/styles/global.css';
import messages from '../apps/frontend/src/i18n/messages/en.json'

createRouter({});
createNavigation({});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
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
        (Story) => {
            return(
                <NextIntlClientProvider locale="en" messages={{
                    "general": {
                        "comingSoon": "This feature is coming soon!"
                    }
                }}>
                    <GlobalProvider config={globalProviderConfig} labels={globalProviderLabels} locale="en">
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
