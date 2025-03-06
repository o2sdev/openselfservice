import { CodegenConfig } from '@graphql-codegen/cli';

if (!process.env.CMS_STRAPI_BASE_URL) {
    throw new Error('CMS_STRAPI_BASE_URL environment variable is not set');
}

const config: CodegenConfig = {
    overwrite: true,
    schema: `${process.env.CMS_STRAPI_BASE_URL}/graphql`,
    documents: './src/**/*.graphql',
    verbose: true,
    generates: {
        'generated/strapi.ts': {
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
