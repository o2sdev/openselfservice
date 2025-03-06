import createBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
// @ts-expect-error missing types for this library
import withPlugins from 'next-compose-plugins';
import createNextIntlPlugin from 'next-intl/plugin';
import withPwa from 'next-pwa';

const withBundleAnalyzer = createBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const withPWA = withPwa({
    dest: 'public',
});

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'www.w3schools.com',
            },
            {
                protocol: 'https',
                hostname: 'strapi-oss.dev.hycom.pl',
            },
        ],
    },
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
        // dynamicIO: true,
        // cacheLife: {
        //     render: {
        //         stale: 1,
        //         revalidate: 5,
        //         expire: 5,
        //     },
        // },
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default withPlugins([withPWA, withBundleAnalyzer, withNextIntl], nextConfig);
