import { CodegenConfig } from '@graphql-codegen/cli';

if (!process.env.CF_SPACE_ID || !process.env.CF_ENV || !process.env.CF_TOKEN) {
    throw new Error('CF_SPACE_ID, CF_ENV, CF_TOKEN environment variables are not set');
}

const config: CodegenConfig = {
    overwrite: true,
    schema: `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}/environments/${process.env.CF_ENV}?access_token=${process.env.CF_TOKEN}`,
    documents: './src/**/*.graphql',
    verbose: true,
    generates: {
        'generated/contentful.ts': {
            plugins: [
                'typescript',
                'typescript-resolvers',
                'typescript-operations',
                'typescript-graphql-request',
                {
                    add: {
                        content: '/* eslint-disable */',
                    },
                },
            ],
            config: {
                skipTypename: true,
                rawRequest: true,
                maybeValue: 'T',
                avoidOptionals: false,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};

export default config;
