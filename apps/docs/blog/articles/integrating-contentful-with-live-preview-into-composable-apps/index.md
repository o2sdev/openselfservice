---
slug: integrating-contentful-with-live-preview-into-composable-apps
title: 'Integrating Contentful with Live Preview into composable apps'
description: 'How we implemented a flexible Contentful integration with Live Preview support in our composable architecture'
keywords:
    [
        'contentful',
        'live preview',
        'cms',
        'graphql',
        'composable architecture',
        'content modeling',
        'headless cms',
        'api harmonization',
        'nextjs',
        'react',
    ]
date: 2025-11-26
tags: [tech, contentful]
authors: [marcin.krasowski]
toc_max_heading_level: 3
hide_table_of_contents: false
---

In the world of modern web development, composable architectures are becoming increasingly popular. These architectures allow developers to build applications by combining independent services rather than relying on monolithic solutions. One key component in many composable architectures is a headless CMS, which provides content management capabilities without dictating how that content is presented.

![contentful in composable apps](contentful-intro.png)

<!--truncate-->

At [**Open Self Service**](https://www.openselfservice.com/), we've integrated Contentful as our next headless CMS, following our successful [**implementation with Strapi**](../building-composable-frontends-with-strapi-and-nextjs/index.md). This transition highlights key strength of composable architecture, and the data normalization approach that Open Self Service is built on. Replacing API services (which a headless CMS essentially is) becomes a relatively straightforward process that requires no changes to the frontend application, though it requires some upfront work in terms of creating a module that integrates that new service. This decoupling between the frontend and backend services is a fundamental principle of our architecture.


We'll explore here how we implemented the Contentful integration, with a particular focus on the Live Preview feature, which allows content editors to see their changes in real-time.

## GraphQL Implementation

When integrating with Contentful, we chose to use their GraphQL API rather than the REST API. GraphQL offers several advantages for our use case:

1. We can request exactly the data we need, reducing over-fetching and improving performance.
2. The GraphQL schema provides clear documentation of available data and helps catch errors at build time with TypeScript data models.
3. We can fetch complex, nested data structures in a single request.

We use GraphQL code generation (via [graphql-codegen](https://the-guild.dev/graphql/codegen)) to create type-safe queries and a strongly typed SDK. This approach ensures that our queries are valid and that we get proper TypeScript types for the responses:

```typescript
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: `https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}/environments/${process.env.CF_ENV}?access_token=${process.env.CF_TOKEN}`,
    documents: './src/**/*.graphql',
    generates: {
        'generated/contentful.ts': {
            plugins: ['typescript', 'typescript-resolvers', 'typescript-operations', 'typescript-graphql-request'],
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};

export default config;
```

This configuration:

1. Fetches the schema directly from Contentful's GraphQL API and saves it locally for IDE/tooling support.
2. Looks for GraphQL documents (queries, mutations, fragments) in all `.graphql` files.
3. Generates TypeScript data model and an SDK in `generated/contentful.ts`.

The generated code includes types for all Contentful content models, as well as SDK methods for executing GraphQL operations:

```typescript
// Example of a GraphQL query defined in a .graphql file
query getPage($slug: String!, $locale: String!, $preview: Boolean) {
    pageCollection(locale: $locale, where: { slug: $slug }, limit: 1, preview: $preview) {
        items {
            ...Page
        }
    }
}

// This query is transformed by graphql-codegen into TypeScript code:
export const GetPageDocument = gql`
    query GetPage($slug: String!, $locale: String!, $preview: Boolean) {
        pageCollection(
            where: { slug: $slug }
            locale: $locale
            preview: $preview
            limit: 1
        ) {
            items {
                ...Page
            }
        }
    }
    ${PageFragmentDoc}
`;

// Along with strongly typed variables and return types:
export type GetPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetPageQuery = {
  pageCollection?: {
    items: Array<{
      slug?: string | null;
      // ... other page fields
    } | null> | null
  } | null
};
```

The SDK uses these code fragments to provide strongly typed functions for executing the queries, while using [graphql-request library](https://www.npmjs.com/package/graphql-request) to create GraphQL client.

```typescript
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        getPage(variables: GetPageQueryVariables, requestHeaders?: RequestInit['headers']): Promise<GetPageQuery> {
            return withWrapper((wrappedRequestHeaders) =>
                client.request<GetPageQuery>(GetPageDocument, variables, {
                    ...wrappedRequestHeaders,
                    ...requestHeaders,
                }),
            );
        },
        // ... other SDK methods
    };
}
```

In our application, we use this generated SDK to create a [NestJS](https://nestjs.com/) service that uses both the Contentful Delivery API (for published content) and Preview API (for draft content).:

```typescript
@Injectable()
export class GraphqlService {
    private readonly deliveryClient: GraphQLClient;
    private readonly previewClient: GraphQLClient;
    private readonly deliverySdk: Sdk;
    private readonly previewSdk: Sdk;

    constructor(private readonly config: ConfigService) {
        // Initialize clients for both delivery (published) and preview (draft) content
        this.deliveryClient = new GraphQLClient(baseUrl, {
            headers: { Authorization: `Bearer ${process.env.CF_TOKEN}` },
        });
        this.previewClient = new GraphQLClient(baseUrl, {
            headers: { Authorization: `Bearer ${process.env.CF_PREVIEW_TOKEN}` },
        });

        // Create SDK instances for both clients
        this.deliverySdk = getSdk(this.deliveryClient);
        this.previewSdk = getSdk(this.previewClient);
    }

    // Helper method to get the appropriate SDK based on preview flag
    private getSdk(preview?: boolean | null): Sdk {
        return preview === true ? this.previewSdk : this.deliverySdk;
    }

    // Type-safe methods for fetching content
    public getPage(params: GetPageQueryVariables) {
        return this.getSdk(params.preview).getPage(params);
    }
}
```

By combining GraphQL with code generation, we've created a robust and developer-friendly data fetching system. The generated TypeScript data model ensures complete type safety throughout our application, eliminating runtime errors related to data structure mismatches.

This implementation also provides compile-time validation of our GraphQL operations, catching potential errors before they reach production, together with IDE code completion both when writing queries:

![IDE code completion](ide-code-completion-1.png)

and also when using generated types directly in the code:

![IDE code completion](ide-code-completion-2.png)

Perhaps most importantly for content editors, our implementation enables seamless switching between published and draft content, creating a smooth workflow between content creation and preview.

## Content Type Modeling

Our approach to content type modeling in Contentful is centered around flexibility and reusability. We've designed our content types to be composable, allowing content editors to build pages by combining different components.

The core of our content model is the Page content type, which represents a single page in our application. Each page has a template, which defines the layout of the page, and slots, which contain the components that make up the page content.

![page content type in contentful](page-content-type.png)

Here's how we map a Contentful page to our application's data model:

```typescript
export function mapPage(entryPage: PageFragment): CMS.Model.Page.Page {
    if (!entryPage) {
        throw new NotFoundException();
    }

    return {
        id: entryPage.sys.id,
        slug: entryPage.slug,
        title: entryPage.title,
        description: entryPage.description,
        template: mapTemplate(entryPage.template),
        seo: mapSeo(entryPage.seo),
    };
}
```

We have also prepared mappers for specific content blocks, such as FAQs, which transform Contentful data into our application's data model. These mappers use the generated fragment types to ensure type safety:

```typescript
// First, we define the GraphQL fragment for the FAQ component
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
}

// graphql-codegen generates a TypeScript type for this fragment:
export type FaqComponentFragment = {
    __typename: 'BlockFaq',
    sys: { id: string },
    title?: string | null,
    subtitle?: string | null,
    itemsCollection?: {
        items: Array<{
            sys: { id: string },
            title?: string | null,
            content?: string | null
        } | null> | null
    } | null,
};
```

Then we use this generated type in our mapper:

```typescript
export const mapFaqBlock = ({
    isPreview,
    ...data
}: FaqComponentFragment & { isPreview?: boolean }): CMS.Model.FaqBlock.FaqBlock => {
    switch (data.__typename) {
        case 'BlockFaq':
            return {
                id: data.sys.id,
                title: data.title,
                subtitle: data.subtitle,
                items: data.itemsCollection?.items.map(
                    (item): CMS.Model.FaqBlock.FaqItem => ({
                        title: item.title!,
                        content: item.content!,
                    }),
                ),
            };
    }

    throw new NotFoundException();
};
```

This approach allows us to have a clean separation between our content model in Contentful and our application's data model, making it easier to evolve each independently.

## Live Preview Integration

One of the most powerful features of Contentful is Live Preview, which allows content editors to see their changes in real-time as they edit content. Implementing Live Preview in a composable architecture presents some unique challenges:

1. Our architecture includes an API composition layer that aggregates and transforms data from various sources, including Contentful. This layer adds complexity to the Live Preview implementation because changes made in Contentful need to flow through this layer before they can be displayed in the preview.

2. We designed our architecture to be CMS-agnostic, allowing us to potentially switch to a different CMS in the future. However, Live Preview implementations are typically CMS-specific, making it challenging to create a generic solution.

3. Our mappers transform Contentful data into our application's data model, which can make it difficult to map changes back to the original Contentful fields for Live Preview.

To address these challenges, we've added metadata to our mapped data structures, including Contentful entry IDs and field names, to enable the Live Preview SDK to map changes back to the original Contentful fields. This metadata is only included in the response while the app is run in preview/draft mode so that there would be no unnecessary data for regular users.

![live preview in Contentful](live-preview-1.png)

We've also created a wrapper around the Contentful Live Preview SDK that abstracts away Contentful-specific details, making it easier to potentially support other CMSs in the future.

### Live Preview approaches across headless CMSes

It's important to note that live preview functionality varies significantly between different headless CMSes. This makes building a CMS-agnostic architecture a bit more challenging, as each system may require a different integration approach.

Some CMSes, like Contentful, use an approach with explicit connection between the app and the CMS editor. In this model, the CMS provides an SDK that adds special data attributes to DOM elements. These attributes create a connection between rendered content and the corresponding content in the CMS. When a content editor clicks on an element in the preview, the SDK uses these attributes to identify which field to edit in the CMS interface. Changes made in the CMS are pushed to the preview in real-time through WebSockets or similar technologies.

Besides Contentful, other CMSes that use variations of this approach include:

- **Prismic** uses data attributes for its preview functionality with its Slice Machine
- **Kontent.ai** which uses a similar approach with its Web Spotlight feature
- **DatoCMS** with its Visual Editor that uses data attributes for field highlighting

Other CMSes take a different approach using content [source maps with steganography](https://www.sanity.io/docs/visual-editing/stega#fad3406bd530). Content source maps are metadata that map rendered content back to its source in the CMS, similar to how source maps work in JavaScript. Stega (steganography) embeds invisible metadata within the content itself, often using techniques like invisible Unicode characters or subtle CSS variations.

Examples of CMSes using these approaches include:

- **Sanity.io** offers both approaches: traditional data attributes with its "Presentation Tool" and a newer stega-based approach with its "Visual Editing" feature
- **Storyblok** uses a source mapping approach for its Visual Editor
- **Builder.io** embeds metadata in the content for its visual editing experience
- **Strapi** uses content source maps for its preview functionality as documented in their official documentation

Each approach has its trade-offs. Data attributes are more explicit but can add DOM clutter, while stega approaches are more elegant but potentially more fragile. Understanding these differences is crucial when designing a CMS-agnostic architecture that needs to support live preview across multiple systems.

While content source maps and stega approaches offer elegant solutions for direct integrations, they present significant challenges for architectures with API composition layers like ours. The transformation process in our composition layer can corrupt or disconnect the embedded metadata that stega relies on, as our normalization restructures content and breaks the carefully crafted patterns of invisible characters.

Our architecture requires mapping between our normalized data model and the CMS's original structure, whereas content source maps typically assume a more direct relationship without an intermediate transformation layer. Additionally, our data aggregation and transformation process, which often combines multiple API calls, conflicts with stega's assumption of a direct, synchronous relationship between CMS and rendered content.

This led us to favor Contentful's explicit data attributes approach, which proved more resilient with our API composition layer and made it easier to maintain connections between transformed data and original Contentful entries.

### Metadata

The metadata is a crucial part of our Live Preview implementation. It serves as a bridge between our application's data model and Contentful's content structure, enabling real-time editing and inspection of content directly from the frontend. It serves several important functions:

1. It maps our internal property names back to the original Contentful field names, allowing the Live Preview SDK to know which fields to update when content is changed in the Contentful editor.

2. It includes Contentful entry IDs, which are necessary to identify specific content entries in the Contentful system.

3. For complex components with nested content (like FAQ items), the metadata maintains the hierarchical structure, ensuring that edits to nested content are properly tracked.

The metadata is only included when the application is in preview mode, ensuring that regular users don't receive unnecessary data.

Here's how we add metadata to our mapped data structures:

```typescript
export const mapFaqBlock = ({
    isPreview,
    ...data
}: FaqComponentFragment & { isPreview?: boolean }): CMS.Model.FaqBlock.FaqBlock => {
    switch (data.__typename) {
        case 'BlockFaq':
            return {
                // other field mapping as before
                id: data.sys.id,
                // mapping Contentful field names into our internal properties
                meta: isPreview
                    ? {
                          __id: data.sys.id,
                          title: 'title',
                          subtitle: 'subtitle',
                          items: data.itemsCollection?.items.map((item) => ({
                              __id: item.sys.id,
                              title: 'title',
                              content: 'content',
                          })),
                      }
                    : undefined,
            };
    }

    throw new NotFoundException();
};
```

Here's an example of what the metadata object looks like for a FAQ component at runtime:

```javascript
{
  // The Contentful entry ID for this FAQ block
  __id: "6JhYyIcNVMrBnvQRpz9ItW",

  // Maps our 'title' property to Contentful's 'heading' field
  title: "heading",

  // Maps our 'subtitle' property to Contentful's 'subheading' field
  subtitle: "subheading",

  // Nested metadata for FAQ items
  items: [
    {
      // The Contentful entry ID for this FAQ item
      __id: "1xF7kLmPqS3TvR8zWj2YuB",

      // Maps our 'title' property to Contentful's 'heading' field
      title: "heading",

      // Maps our 'content' property to Contentful's 'content' field
      content: "content"
    },
    {
      __id: "9cD4hGbN2pQ7vE5xZm1KuL",
      title: "heading",
      content: "content"
    }
  ]
}
```

### Client SDKs

Our Live Preview implementation uses Contentful's Live Preview SDK, which provides React components and hooks for enabling Live Preview in our application:

```tsx
import { ContentfulLivePreviewInitConfig } from '@contentful/live-preview';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import React, { ReactNode } from 'react';

interface LivePreviewProviderProps extends Omit<ContentfulLivePreviewInitConfig, 'children'> {
    children: ReactNode;
}

export function LivePreviewProvider({ children, ...props }: LivePreviewProviderProps) {
    return <ContentfulLivePreviewProvider {...props}>{children}</ContentfulLivePreviewProvider>
}
```

We also created a custom hook to make it easier to use the Live Preview inspector mode in our components. It uses the metadata to create HTML attributes that the Contentful Live Preview SDK can use to highlight and edit the content. When a content editor clicks on the title in the preview, they're taken directly to the corresponding field in the Contentful editor.

```typescript
import { useContentfulInspectorMode } from '@contentful/live-preview/react';

export const useInspector = () => {
    const inspectorProps = useContentfulInspectorMode();

    return <T>(data: Props<T> | undefined, name: keyof Props<T>): DataAttribute => {
        if (!data) return {};

        const attributes = inspectorProps({
            entryId: data.__id,
            fieldId: data[name],
        });

        return attributes;
    };
};
```

When a content editor uses Live Preview and clicks on a component in the preview, our `useInspector` hook uses this metadata to generate the necessary attributes for the Live Preview inspector:

```jsx
const FaqItem = ({ item, meta }) => {
    const inspector = useInspector();

    return (
        <div className="faq-item">
            <h3 {...inspector(meta, 'title')}>{item.title}</h3>
            <div {...inspector(meta, 'content')}>{item.content}</div>
        </div>
    );
};
```

## Conclusion

The most significant innovation in our implementation was the metadata pattern we developed to bridge our normalized data model with Contentful's structure. This pattern was essential for Live Preview functionality to work with our composable architecture, maintaining context about the origin of data while enabling real-time content editing.

We faced a fundamental challenge: how to leverage Contentful's powerful Live Preview capabilities while maintaining our CMS-agnostic architecture. Our thin abstraction layers combined with the metadata pattern showed us that pragmatic integration sometimes outweighs architectural purity.

Our API layer transforms Contentful's raw data into a normalized format that our frontend components expect. For Live Preview to work, we needed to maintain bidirectional mapping between these transformed structures and their original Contentful counterparts, which required careful tracking of entry IDs and field names throughout the transformation process.

The composition layer processes data asynchronously, potentially combining multiple API calls. This created timing challenges for Live Preview, which expects near-instantaneous updates. We had to implement optimistic UI updates and sophisticated caching strategies to maintain a responsive editing experience.

For features providing significant value to content editors, like Live Preview, we found that direct integration with careful abstraction boundaries was the right approach. The key was making these decisions consciously rather than strictly adhering to architectural principles.

If you're implementing Contentful or another headless CMS in a composable architecture, we hope these insights provide valuable guidance for your own integration journey.

Hit us on [**Discord**](https://discord.gg/4R568nZgsT) if you have any questions or would like to get some more details. If you're interested in our project, visit [**our website**](https://www.openselfservice.com) where you can find more info about Open Self Service.
