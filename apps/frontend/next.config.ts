import createBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
// @ts-expect-error missing types for this library
import withPlugins from 'next-compose-plugins';
import createNextIntlPlugin from 'next-intl/plugin';

const withBundleAnalyzer = createBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com',
            },
        ],
    },
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    experimental: {
        // dynamicIO: true,
        // cacheLife: {
        //     render: {
        //         stale: 1,
        //         revalidate: 5,
        //         expire: 5,
        //     },
        // },
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default withPlugins([withBundleAnalyzer, withNextIntl], nextConfig);
