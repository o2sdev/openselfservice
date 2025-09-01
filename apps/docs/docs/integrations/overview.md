---
sidebar_position: 000
slug: '/integrations'
---

# Overview

This sections provides a list of all integrations that are a part of the open-source project.

For each integration we have prepared a description about:
- all the requirements that are needed to run it,
- a list of base modules that it supports,
- what data sources and libraries are used,
- what models and endpoints it extends (if any).

import DocLinkTiles from '@site/src/components/DocLinkTiles';

## Available integrations

<DocLinkTiles
    items={[
        { title: 'Strapi CMS', description: 'Headless CMS integration for content & page management.', href: '/docs/integrations/cms/strapi/overview' },
        { title: 'Redis Cache', description: 'High-performance caching with Redis to be used with our API Harmonization server.', href: '/docs/integrations/cache/redis' },
        { title: 'Medusa Commerce', description: 'Initial integration, currently provides basic product data.', href: '/docs/integrations/commerce/medusa-js' },
        { title: 'Algolia Search', description: 'The AI search platform, used for knowledge base search.', href: '/docs/integrations/search/algolia' },
        { title: 'SurveyJS Forms', description: 'Dynamic form creation and ticket submission. Used as a default engine for our ticket submission handling.', href: '/docs/integrations/forms/surveyjs' },
        { title: 'Mocked Data', description: 'Development and testing with mocked integrations - use it to quickly start developing without any external API.', href: '/docs/integrations/mocked' },
    ]}
/>

## Enterprise integrations (Contact us)

The following integrations are available as enterprise solutions and not part of the open-source project:

<DocLinkTiles
    items={[
        { title: 'Keycloak IAM', description: 'Enterprise identity and access management. Powers our advanced user login and registration flows.', href: 'mailto:contact@openselfservice.com' },
        { title: 'SAP S/4HANA ERP', description: 'Enterprise integration, provides product, order & billing related data.', href: 'mailto:contact@openselfservice.com' },
        { title: 'Contentful CMS', description: 'Content & page management with Contentful.', href: 'mailto:contact@openselfservice.com' },
    ]}
/>

---

:::tip
Check the guides for more information about:

- [how to switch one integration for another](../guides/integrations/switching-integrations.md),
- [how to add a completely new integration](../guides/integrations/adding-new-integrations.md),
- [how to extend and integration](../guides/integrations/extending-integrations.md).
  :::
