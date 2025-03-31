import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/components/**/*.{ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                tertiary: {
                    DEFAULT: 'hsl(var(--tertiary))',
                    foreground: 'hsl(var(--tertiary-foreground))',
                    border: 'hsl(var(--tertiary-border))',
                    hover: 'hsl(var(--tertiary-hover))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                info: {
                    DEFAULT: 'hsl(var(--info))',
                    foreground: 'hsl(var(--info-foreground))',
                    hover: 'hsl(var(--info-hover))',
                    'foreground-hover': 'hsl(var(--info-foreground-hover))',
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))',
                    hover: 'hsl(var(--success-hover))',
                    'foreground-hover': 'hsl(var(--success-foreground-hover))',
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))',
                    hover: 'hsl(var(--warning-hover))',
                    'foreground-hover': 'hsl(var(--warning-foreground-hover))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                navbar: {
                    foreground: 'hsl(var(--navbar-foreground))',
                    background: 'hsl(var(--navbar-background))',
                    muted: 'hsl(var(--navbar-muted))',
                    border: 'hsl(var(--navbar-border))',
                    primary: {
                        DEFAULT: 'hsl(var(--navbar-primary))',
                        foreground: 'hsl(var(--navbar-primary-foreground))',
                    },
                    accent: {
                        background: 'hsl(var(--navbar-accent-background))',
                        foreground: 'hsl(var(--navbar-accent-foreground))',
                    },
                    sub: {
                        background: 'hsl(var(--navbar-sub-background))',
                        foreground: 'hsl(var(--navbar-sub-foreground))',
                        accent: 'hsl(var(--navbar-sub-accent))',
                        muted: 'hsl(var(--navbar-sub-muted))',
                    },
                },
                footer: {
                    background: 'hsl(var(--footer-background))',
                    foreground: 'hsl(var(--footer-foreground))',
                    muted: 'hsl(var(--footer-muted))',
                    border: 'hsl(var(--footer-border))',
                },
                badge: {
                    default: {
                        background: 'hsl(var(--badge-default-background))',
                        foreground: 'hsl(var(--badge-default-foreground))',
                    },
                    secondary: {
                        background: 'hsl(var(--badge-secondary-background))',
                        foreground: 'hsl(var(--badge-secondary-foreground))',
                    },
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
                'collapsible-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-collapsible-content-height)',
                    },
                },
                'collapsible-up': {
                    from: {
                        height: 'var(--radix-collapsible-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'collapsible-down': 'collapsible-down 0.2s ease-out',
                'collapsible-up': 'collapsible-up 0.2s ease-out',
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
