---
sidebar_position: 100
---

# Algolia

This integration provides a full integration with [Algolia](https://www.algolia.com/), the AI-powered search and discovery platform. It enables powerful search capabilities for your application, particularly for knowledge base articles.

## In this section

- [How to set up](./how-to-setup.md) - Step-by-step guide for setting up the Algolia integration
- [Features](./features.md) - Overview of features and capabilities provided by the integration
- [Usage](./usage.md) - Examples and API reference for using Algolia search

## What is Algolia?

Algolia is an AI-powered search and discovery platform that provides:

- Fast, typo-tolerant search
- Real-time indexing
- Advanced filtering and faceting
- Multi-language support
- Analytics and insights

This integration connects your Open Self Service application with Algolia, enabling powerful search functionality across your content, particularly for knowledge base articles.

## Supported modules

This integration handles the following base module from the framework:

- **search** - Provides search functionality across any type of data and specialized article search

## Quick start

1. Install the package (see [How to set up](./how-to-setup.md))
2. Configure environment variables
3. Set up your Algolia indexes
4. Start searching!

For detailed instructions, see the [How to set up](./how-to-setup.md) guide.

## Requirements

- An Algolia account ([sign up here](https://www.algolia.com/))
- Algolia indexes configured with your data
- Node.js environment with API Harmonization server

The integration uses the official [Algoliasearch](https://www.npmjs.com/package/algoliasearch) client version `^5.44.0`.


