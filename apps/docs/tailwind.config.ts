import type { Config } from 'tailwindcss';

import uiConfig from '@o2s/ui/tailwind.config';

const config = {
    ...uiConfig,
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        container: {
            screens: {
                '2xl': '1080',
            },
        },
        colors: {
            highlighted: '#21d99a',
            white: '#ffffff',
            violet: '#4c5ce5',
            celadon: '#21d99a',
        },
        extend: {
            lineHeight: {
                '110': '110%',
                '120': '120%',
                '150': '150%',
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    presets: [uiConfig],
} satisfies Config;

export default config;
