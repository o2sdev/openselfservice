---
sidebar_position: 100
---

# Strapi CMS

This integration provides a full integration with [Strapi CMS](https://strapi.io/).

## Requirements

To use it, you must install it into the API Harmonization server by running:

```shell
npm install @o2s/integrations.strapi-cms --workspace=@o2s/api
```

This integration relies upon the following environmental variables:

| name                | type   | description                                            |
|---------------------|--------|--------------------------------------------------------|
| CMS_STRAPI_BASE_URL | string | the base URL pointing to the domain hosting Strapi CMS |

## Supported modules

This integration handles following base modules from the framework:

- cms

## Dependencies

This integration relies on the following base modules from the framework:

- cache

## GraphQL integration

To connect with Strapi, the [GraphQL API](https://docs.strapi.io/dev-docs/api/graphql) is used. For this purpose, a dedicated [GraphqlService](https://github.com/o2sdev/openselfservice/blob/main/packages/api/integrations/strapi-cms/src/modules/graphql/graphql.service.ts) is used that relies on:

- [graphql-request](https://www.npmjs.com/package/graphql-request) package as a GraphQL client,
- [graphql-codegen](https://the-guild.dev/graphql/codegen) for TypeScript code generation, based on GraphQL schema and queries.

### GraphQL operations

The `GraphqlService` offers a few methods that can be used to retrieve data from the CMS:

- `getPage` that retrieves the full definition of a single page (with SEO metadata, used layouts, and shared elements like header and footer) based on a given slug and locale,
- `getPages` that retrieves all pages for a given locale,
- `getLoginPage` to fetch the content for the [login page](../../main-components/frontend-app/routing.md#authentication),
- `getComponent` that retrieves a single component with a given ID and locale.

### Code generation

You can generate code from GraphQL queries by running:

```shell
npm run generate
```

:::info
This command also requires that the `CMS_STRAPI_BASE_URL` environment variable to be set in order to retrieve the GraphQL schema from Strapi.
:::

This will generate the `./generated/strapi.ts` file, that is then used within the `GraphqlService`:

```typescript
import { Sdk, getSdk } from '@/generated/strapi';
...
this.sdk = getSdk(this._client);
```

which then allows to call the methods generated from GrapQL queries using the `sdk` property:

```typescript
public getComponent(params: GetComponentQueryVariables) {
    return this.sdk.getComponent(params);
}
```

:::info
Check the `./codegen.ts` file for more details about used codegen config, including used TypeScript plugins.
:::

### Writing queries

GraphQL queries should be placed in the `./src/cms/graphql` folder, with additional divisions for:

- `./queries` for final [queries](https://graphql.org/learn/queries/) that will be translated to TypeScript methods:
    ```graphql title="./src/cms/graphql/queries/getComponent.graphql"
    query getComponent($id: ID!, $locale: I18NLocaleCode!) {
        component(documentId: $id, locale: $locale) {
            name
            content {
                __typename
                ... on ComponentComponentsFaq {
                    ...FaqComponent
                }
            }
        }
    }
    ```
- `./fragments` for reusable [fragments](https://graphql.org/learn/queries/#fragments), divided further into:

    - `./fragments/components` that map to components within the frontend app:

        ```graphql title="./src/cms/graphql/fragments/components/Faq.graphql"
        fragment FaqComponent on ComponentComponentsFaq {
            __typename
            id
            title
            subtitle
            items {
                title
                description
            }
        }
        ```

    - `./fragments/templates` that map to templates within the frontend app:

        ```graphql title="./src/cms/graphql/fragments/templates/TwoColumnTemplate.graphql"
        fragment TwoColumnTemplate on ComponentTemplatesTwoColumn {
            topSlot {
                ...Component
            }
            leftSlot {
                ...Component
            }
            rightSlot {
                ...Component
            }
            bottomSlot {
                ...Component
            }
        }
        ```

## Strapi integration

### Resolving pages

To resolve a single page to an entry within the CMS, the following process happens:

1. All pages are fetched for a given locale
2. From those pages, a single one is found with a `slug` that matches the requested slug; this match is found using Regex to allow pages with a slug like `/tickets/{.+}` to be defined in Strapi for dynamic pages with some dynamic IDs.

### Content model

Coming soon!

### Importing sample content

Coming soon!

## Cache integration

In order to allow further optimizations, the `cache` module is used for caching retrieved CMS entries (as long as caching is enabled globally).

Cached entries are [stringified](https://www.npmjs.com/package/flatted) and saved using the `{id}-{locale}` key to make them fully unique within the caching service.
