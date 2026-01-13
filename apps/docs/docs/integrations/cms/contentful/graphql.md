---
sidebar_position: 400
---

# GraphQL integration

The Contentful integration uses GraphQL as the primary API for fetching content. This approach provides type safety, reduces over-fetching, and allows for complex nested queries in a single request.

## Code generation

TypeScript types and SDK methods are automatically generated from GraphQL queries and the Contentful schema using [graphql-codegen](https://the-guild.dev/graphql/codegen).

### Running code generation

You can generate code from GraphQL queries by running:

```shell
npm run generate
```

:::info
This command requires that the `CF_SPACE_ID`, `CF_ENV`, and `CF_TOKEN` environment variables are set in order to retrieve the GraphQL schema from Contentful.
:::

This will generate the `./generated/contentful.ts` file that contains:

- TypeScript types for all Contentful content models
- Strongly typed SDK methods for executing GraphQL operations
- Type-safe query and fragment types

### Codegen configuration

The code generation is configured in `codegen.ts`:

```typescript
const config: CodegenConfig = {
    schema: `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}/environments/${process.env.CF_ENV}?access_token=${process.env.CF_TOKEN}`,
    documents: './src/**/*.graphql',
    generates: {
        'generated/contentful.ts': {
            plugins: [
                'typescript',
                'typescript-resolvers',
                'typescript-operations',
                'typescript-graphql-request',
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
```

**TypeScript plugins used:**
- `typescript` - Generates base TypeScript types from the GraphQL schema
- `typescript-resolvers` - Generates resolver types
- `typescript-operations` - Generates types for queries, mutations, and fragments
- `typescript-graphql-request` - Generates SDK methods for graphql-request

The generated SDK is then used within the `GraphqlService`:

```typescript
import { Sdk, getSdk } from '@/generated/contentful';

this.deliverySdk = getSdk(this.deliveryClient);
this.previewSdk = getSdk(this.previewClient);
```

which then allows calling the methods generated from GraphQL queries using the SDK:

```typescript
public getPage(params: GetPageQueryVariables) {
    return this.getSdk(params.preview).getPage(params);
}
```

## GraphQL operations

The `GraphqlService` offers several methods that can be used to retrieve data from the CMS:

- `getPage` - retrieves the full definition of a single page (with SEO metadata, used templates, and all referenced blocks) based on a given slug and locale
- `getPages` - retrieves all pages for a given locale
- `getComponent` - retrieves a single component (block) with a given ID and locale
- `getHeader` - retrieves the header configuration
- `getFooter` - retrieves the footer configuration
- `getAppConfig` - retrieves the application configuration

All methods support an optional `preview` parameter to fetch draft/unpublished content.

## Writing queries

GraphQL queries should be placed in the `./src/modules/cms/graphql/` folder, with additional divisions for:

### Queries

`./queries/` folder for final [queries](https://graphql.org/learn/queries/) that will be translated to TypeScript methods:

```graphql title="./src/modules/cms/graphql/queries/getPage.graphql"
query getPage($slug: String!, $locale: String!, $preview: Boolean) {
    pageCollection(locale: $locale, where: { slug: $slug }, limit: 1, preview: $preview) {
        items {
            ...Page
        }
    }
}
```

### Fragments

`./fragments/` folder for reusable [fragments](https://graphql.org/learn/queries/#fragments), divided further into:

#### Block fragments

`./fragments/blocks/` - block-specific fragments that map to blocks within the frontend app:

```graphql title="./src/modules/cms/graphql/fragments/blocks/Faq.graphql"
fragment FaqComponent on BlockFaq {
    __typename
    sys {
        ...Sys
    }
    title
    subtitle
    itemsCollection {
        items {
            sys {
                ...Sys
            }
            title
            content
        }
    }
    banner {
        ... on ComponentBanner {
            ...Banner
        }
    }
}
```

#### Content fragments

`./fragments/content/` - content fragments for reusable content components:

- `Banner.graphql` - Banner component
- `Category.graphql` - Category component
- `Fields.graphql` - Field mapping component
- `Link.graphql` - Link component
- `Media.graphql` - Media component
- `NavigationGroup.graphql` - Navigation group
- `NavigationItem.graphql` - Navigation item
- `Pagination.graphql` - Pagination component
- `Seo.graphql` - SEO metadata
- `Table.graphql` - Table configuration

#### Layout fragments

`./fragments/layout/` - layout fragments:

- `LayoutSection.graphql` - Layout section configuration

#### Template fragments

`./fragments/templates/` - template fragments that map to templates within the frontend app:

```graphql title="./src/modules/cms/graphql/fragments/templates/TwoColumnTemplate.graphql"
fragment TwoColumnTemplate on PageTwoColumnTemplate {
    __typename
    topSlotCollection {
        items {
            __typename
            ... on Block {
                ...ComponentBase
            }
        }
    }
    leftSlotCollection {
        items {
            __typename
            ... on Block {
                ...ComponentBase
            }
        }
    }
    rightSlotCollection {
        items {
            __typename
            ... on Block {
                ...ComponentBase
            }
        }
    }
    bottomSlotCollection {
        items {
            __typename
            ... on Block {
                ...ComponentBase
            }
        }
    }
}
```

#### Base fragments

Base fragments used across the application:

- `Component.graphql` - Base component fragment with content type discrimination
- `ComponentBase.graphql` - Base component fields (sys, layout section)
- `Page.graphql` - Page fragment with template and SEO
- `Sys.graphql` - System metadata fragment
- `AppConfig.graphql` - Application configuration
- `Header.graphql` - Header configuration
- `Footer.graphql` - Footer configuration

## Dual SDK approach

The integration uses a dual SDK approach to handle both published and draft content:

### Delivery SDK

The Delivery SDK is used for fetching published content. It uses the `CF_TOKEN` (Content Delivery API token) and only returns published entries.

### Preview SDK

The Preview SDK is used for fetching draft/unpublished content. It uses the `CF_PREVIEW_TOKEN` (Content Preview API token) and can return both published and draft entries.

### Automatic switching

The `GraphqlService` automatically switches between SDKs based on the `preview` parameter:

```typescript
private getSdk(preview?: boolean | null): Sdk {
    return preview === true ? this.previewSdk : this.deliverySdk;
}

public getPage(params: GetPageQueryVariables) {
    return this.getSdk(params.preview).getPage(params);
}
```

When `preview` is `true`, the Preview SDK is used, allowing access to draft content. When `preview` is `false` or `undefined`, the Delivery SDK is used, returning only published content.

This approach enables seamless switching between published and draft content without requiring separate API calls or manual SDK selection.

## Example usage

Here's a complete example of how a query is defined and used:

**1. Define the query:**

```graphql title="./src/modules/cms/graphql/queries/getPage.graphql"
query getPage($slug: String!, $locale: String!, $preview: Boolean) {
    pageCollection(locale: $locale, where: { slug: $slug }, limit: 1, preview: $preview) {
        items {
            ...Page
        }
    }
}
```

**2. Code generation creates TypeScript types:**

```typescript
export type GetPageQueryVariables = {
    slug: string;
    locale: string;
    preview?: boolean | null;
};

export type GetPageQuery = {
    pageCollection?: {
        items: Array<PageFragment | null> | null;
    } | null;
};
```

**3. Use the generated SDK:**

```typescript
const result = await this.graphqlService.getPage({
    slug: '/home',
    locale: 'en',
    preview: false,
});
```

The result is fully typed, providing autocomplete and type checking for all fields.

