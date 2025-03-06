import type { Config } from 'tailwindcss';

import uiConfig from '@o2s/ui/tailwind.config';

const config = {
    ...uiConfig,
    presets: [uiConfig],
} satisfies Config;

export default config;
