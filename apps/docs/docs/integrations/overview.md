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
        { title: 'Strapi CMS', description: 'Headless CMS integration for content management.', href: '/docs/integrations/cms/strapi' },
        { title: 'Redis Cache', description: 'High-performance caching with Redis.', href: '/docs/integrations/cache/redis' },
        { title: 'Medusa Commerce', description: 'Headless commerce platform integration.', href: '/docs/integrations/commerce/medusa-js' },
        { title: 'Algolia Search', description: 'Powerful search and discovery platform.', href: '/docs/integrations/algolia' },
        { title: 'SurveyJS Forms', description: 'Dynamic form creation and ticket submission.', href: '/docs/integrations/surveyjs' },
        { title: 'Mocked Data', description: 'Development and testing with mocked integrations.', href: '/docs/integrations/mocked' },
    ]}
/>

## Enterprise integrations (Contact us)

The following integrations are available as enterprise solutions and not part of the open-source project:

<DocLinkTiles
    items={[
        { title: 'Keycloak IAM', description: 'Enterprise identity and access management.', href: 'mailto:contact@openselfservice.com' },
        { title: 'SAP S/4HANA ERP', description: 'Enterprise resource planning integration.', href: 'mailto:contact@openselfservice.com' },
        { title: 'Contentful CMS', description: 'Enterprise content management platform.', href: 'mailto:contact@openselfservice.com' },
    ]}
/>

---

:::tip
Check the guides for more information about:

- [how to switch one integration for another](../guides/integrations/switching-integrations.md),
- [how to add a completely new integration](../guides/integrations/adding-new-integrations.md),
- [how to extend and integration](../guides/integrations/extending-integrations.md).
  :::
