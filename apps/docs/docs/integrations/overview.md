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

## Installation commands

Most integration packages should be installed in `@o2s/configs.integrations`, because this workspace imports and exposes selected integration implementations for the rest of the app.

| Integration package                | Install command                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------ |
| `@o2s/integrations.strapi-cms`     | `npm install @o2s/integrations.strapi-cms --workspace=@o2s/configs.integrations`     |
| `@o2s/integrations.contentful-cms` | `npm install @o2s/integrations.contentful-cms --workspace=@o2s/configs.integrations` |
| `@o2s/integrations.zendesk`        | `npm install @o2s/integrations.zendesk --workspace=@o2s/configs.integrations`        |
| `@o2s/integrations.redis`          | `npm install @o2s/integrations.redis --workspace=@o2s/configs.integrations`          |
| `@o2s/integrations.medusajs`       | `npm install @o2s/integrations.medusajs --workspace=@o2s/configs.integrations`       |
| `@o2s/integrations.algolia`        | `npm install @o2s/integrations.algolia --workspace=@o2s/configs.integrations`        |
| `@o2s/integrations.mocked`         | `npm install @o2s/integrations.mocked --workspace=@o2s/configs.integrations`         |

`@o2s/modules.surveyjs` is a module package (not an integration package), so it has different installation requirements.

import DocLinkTiles from '@site/src/components/DocLinkTiles';

## Available integrations

<DocLinkTiles
items={[
{ title: 'Strapi CMS', description: 'Headless CMS integration for content & page management.', href: '/docs/integrations/cms/strapi/overview' },
{ title: 'Contentful CMS', description: 'CMS for multi-language content and marketing blocks.', href: '/docs/integrations/cms/contentful/overview' },
{ title: 'Redis Cache', description: 'High-performance caching with Redis to be used with our API Harmonization server.', href: '/docs/integrations/cache/redis/overview' },
{ title: 'Medusa Commerce', description: 'Initial integration, currently provides basic product data.', href: '/docs/integrations/commerce/medusa-js/overview' },
{ title: 'Algolia Search', description: 'The AI search platform, used for knowledge base search.', href: '/docs/integrations/search/algolia/overview' },
{ title: 'SurveyJS Forms', description: 'Dynamic form creation and ticket submission. Used as a default engine for our ticket submission handling.', href: '/docs/integrations/forms/surveyjs/overview' },
{ title: 'Zendesk', description: 'External ticketing and support knowledge base system.', href: '/docs/integrations/tickets/zendesk/overview' },
{ title: 'Auth.js', description: 'Authentication adapter supporting OAuth and custom providers.', href: '/docs/main-components/frontend-app/authentication' },
{ title: 'Mocked Data', description: 'Development and testing with mocked integrations - use it to quickly start developing without any external API.', href: '/docs/integrations/mocked' },
]}
/>

## Enterprise integrations (Contact us)

The following integrations are available as enterprise solutions and not part of the open-source project:

<DocLinkTiles
items={[
{ title: 'Keycloak IAM', description: 'Enterprise identity and access management. Powers our advanced user login and registration flows.', href: '/contact' },
{ title: 'SAP S/4HANA ERP', description: 'Enterprise integration, provides product, order & billing related data.', href: '/contact' },
{ title: 'Notification API', description: 'Our proprietary API for sending multi-channel notifications.', href: '/contact' },
]}
/>

---

:::tip
Check the guides for more information about:

- [how to switch one integration for another](../guides/integrations/switching-integrations.md),
- [how to add a completely new integration](../guides/integrations/adding-new-integrations.md),
- [how to extend and integration](../guides/integrations/extending-integrations.md).
  :::
