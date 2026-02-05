import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const o2sTheme = create({
    base: 'light',
    brandTitle: 'O2S',
    brandUrl: 'https://storybook-o2s.openselfservice.com/',
    brandImage: '/logo.svg',
    brandTarget: '_blank',
});

addons.setConfig({
    theme: o2sTheme,
    sidebar: {
        collapsedRoots: ['blocks', 'components', 'elements'],
    },
});
