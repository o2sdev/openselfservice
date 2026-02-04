---
sidebar_position: 100
---

# Zendesk

This integration provides the integration with [Zendesk Help Center API](https://developer.zendesk.com/api-reference/help_center/help-center-api/introduction/), allowing users to browse knowledge base articles, categories, and search for content within your application.

## In this section

- [How to set up](./how-to-setup.md) - Step-by-step guide for setting up the Zendesk Help Center integration
- [Features](./features.md) - Overview of features and capabilities provided by the integration
- [Usage](./usage.md) - Examples and API reference for using Zendesk articles

## What is Zendesk Help Center?

Zendesk Help Center is a self-service knowledge base that provides:

- Article management and publishing
- Category and section organization
- Multi-language support
- Search functionality
- User-facing knowledge base

This integration connects your Open Self Service application with Zendesk Help Center, enabling users to browse and search knowledge base articles directly within your application.

## Supported modules

This integration handles the following base module from the framework:

- **articles** - Provides article and category management functionality, allowing users to browse, view, and search knowledge base content

## Quick start

1. Install the package (see [How to set up](./how-to-setup.md))
2. Configure environment variables
3. Set up Zendesk API credentials
4. Start browsing articles!

For detailed instructions, see the [How to set up](./how-to-setup.md) guide.

## Requirements

- A Zendesk account with Help Center enabled
- Zendesk API token generated in the admin interface
- Node.js environment with API Harmonization server
- Help Center articles and categories configured in Zendesk

The integration uses the official Zendesk Help Center API and automatically generates TypeScript types from the Zendesk OpenAPI specification.
