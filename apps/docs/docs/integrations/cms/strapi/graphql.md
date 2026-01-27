---
sidebar_position: 400
---

# GraphQL integration

The Strapi integration uses GraphQL as the primary API for fetching content. This approach provides type safety, reduces over-fetching, and allows for complex nested queries in a single request. The integration connects with Strapi using the [GraphQL API](https://docs.strapi.io/dev-docs/api/graphql).

## Code generation

TypeScript types and SDK methods are automatically generated from GraphQL queries and the Strapi schema using [graphql-codegen](https://the-guild.dev/graphql/codegen).

### Running code generation

You can generate code from GraphQL queries by running:

```shell
npm run generate
```

:::info
This command requires that the `CMS_STRAPI_BASE_URL` environment variable is set in order to retrieve the GraphQL schema from Strapi.
:::

This will generate the `./generated/strapi.ts` file that contains:

- TypeScript types for all Strapi content models
- Strongly typed SDK methods for executing GraphQL operations
- Type-safe query and fragment types

### Codegen configuration

The code generation is configured in `codegen.ts`:

```typescript
const config: CodegenConfig = {
    overwrite: true,
    schema: `${process.env.CMS_STRAPI_BASE_URL}/graphql`,
    documents: './src/**/*.graphql',
    verbose: true,
    generates: {
        'generated/strapi.ts': {
            plugins: ['typescript', 'typescript-resolvers', 'typescript-operations', 'typescript-graphql-request'],
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
import { Sdk, getSdk } from '@/generated/strapi';

this.client = new GraphQLClient(this.config.get('CMS_STRAPI_BASE_URL') + '/graphql');
this.sdk = getSdk(this.client);
```

which then allows calling the methods generated from GraphQL queries using the SDK:

```typescript
public getComponent(params: GetComponentQueryVariables) {
    return this.sdk.getComponent(params);
}
```

## GraphQL operations

The `GraphqlService` offers several methods that can be used to retrieve data from the CMS:

| Method                | Description                                   |
| --------------------- | --------------------------------------------- |
| `getAppConfig`        | Retrieves the application configuration       |
| `getLocales`          | Retrieves all available locales               |
| `getPage`             | Retrieves a single page by slug and locale    |
| `getPages`            | Retrieves all pages for a given locale        |
| `getLoginPage`        | Retrieves the login page content              |
| `getNotFoundPage`     | Retrieves the 404 page content                |
| `getHeader`           | Retrieves the header configuration            |
| `getFooter`           | Retrieves the footer configuration            |
| `getComponent`        | Retrieves a single component by ID and locale |
| `getOrganizationList` | Retrieves the organization list               |
| `getSurvey`           | Retrieves a survey by code                    |
| `getCategories`       | Retrieves categories for articles             |
| `getArticle`          | Retrieves a single article                    |
| `getArticles`         | Retrieves multiple articles                   |

## Resolving pages

To resolve a single page to an entry within the CMS, the following process happens:

1. All pages are fetched for a given locale using `getPages`
2. From those pages, a single one is found with a `slug` that matches the requested slug
3. The match is found using Regex to allow pages with a slug like `/tickets/{.+}` to be defined in Strapi for dynamic pages with some dynamic IDs

This approach enables flexible URL patterns for dynamic content while maintaining a simple content model.

## Writing queries

GraphQL queries should be placed in the `./src/modules/cms/graphql/` folder, with additional divisions for:

### Queries

`./queries/` folder for final [queries](https://graphql.org/learn/queries/) that will be translated to TypeScript methods:

```graphql title="./src/modules/cms/graphql/queries/getComponent.graphql"
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

### Fragments

`./fragments/` folder for reusable [fragments](https://graphql.org/learn/queries/#fragments), divided further into:

#### Block fragments

`./fragments/blocks/` - block-specific fragments that map to blocks within the frontend app:

```graphql title="./src/modules/cms/graphql/fragments/blocks/Faq.graphql"
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

#### Content fragments

`./fragments/content/` - content fragments for reusable content components:

- `Banner.graphql` - Banner component
- `ErrorMessage.graphql` - Error message component
- `Fields.graphql` - Field mapping component
- `Filters.graphql` - Filters component
- `FormField.graphql` - Form field component
- `InformationCard.graphql` - Information card component
- `Link.graphql` - Link component
- `Media.graphql` - Media component
- `NavigationGroup.graphql` - Navigation group
- `NavigationItem.graphql` - Navigation item
- `Pagination.graphql` - Pagination component
- `Seo.graphql` - SEO metadata
- `Table.graphql` - Table configuration

#### Template fragments

`./fragments/templates/` - template fragments that map to templates within the frontend app:

```graphql title="./src/modules/cms/graphql/fragments/templates/TwoColumnTemplate.graphql"
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

#### Base fragments

Base fragments used across the application:

- `Component.graphql` - Base component fragment with content type discrimination
- `Page.graphql` - Page fragment with template and SEO
- `Template.graphql` - Template fragment
- `Header.graphql` - Header configuration
- `Footer.graphql` - Footer configuration
- `AppConfig.graphql` - Application configuration
- `LoginPage.graphql` - Login page content
- `NotFoundPage.graphql` - 404 page content
- `OrganizationList.graphql` - Organization list
- `Roles.graphql` - User roles

## Example usage

Here's a complete example of how a query is defined and used:

**1. Define the query:**

```graphql title="./src/modules/cms/graphql/queries/getPage.graphql"
query getPage($slug: String!, $locale: I18NLocaleCode!) {
    pages(filters: { slug: { eq: $slug } }, locale: $locale) {
        documentId
        slug
        locale
        template {
            ...Template
        }
        seo {
            ...Seo
        }
    }
}
```

**2. Code generation creates TypeScript types:**

```typescript
export type GetPageQueryVariables = {
    slug: string;
    locale: string;
};

export type GetPageQuery = {
    pages: Array<PageFragment | null> | null;
};
```

**3. Use the generated SDK in the service:**

```typescript
public getPage(params: GetPageQueryVariables) {
    return this.sdk.getPage(params);
}
```

**4. Call from CmsService with caching:**

```typescript
getPage(options: CMS.Request.GetCmsPageParams) {
    const key = `page-${options.slug}-${options.locale}`;
    return this.getCachedBlock(key, () => {
        const pages = this.graphqlService.getPages({
            locale: options.locale,
        });

        return forkJoin([pages]).pipe(
            map(([pages]) => {
                const page = pages.data.pages.find((page) => {
                    const pattern = new RegExp(`^${page.slug}$`, 'i');
                    return pattern.test(options.slug);
                });
                return mapPage(page);
            }),
        );
    });
}
```

The result is fully typed, providing autocomplete and type checking for all fields.

## Type safety benefits

Using GraphQL with code generation provides several benefits:

1. **Compile-time validation** - TypeScript catches errors before runtime
2. **IDE autocomplete** - Full IntelliSense support for all queries and types
3. **Schema synchronization** - Types are always in sync with the Strapi schema
4. **Refactoring safety** - Renaming fields in Strapi will cause TypeScript errors, making it easy to find all usages

## Dependencies

The GraphQL integration relies on:

- [graphql-request](https://www.npmjs.com/package/graphql-request) - Minimal GraphQL client for making requests
- [graphql-codegen](https://the-guild.dev/graphql/codegen) - Code generation from GraphQL schema and queries
