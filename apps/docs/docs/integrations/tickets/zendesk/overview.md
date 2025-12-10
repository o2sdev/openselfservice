---
sidebar_position: 100
---

# Zendesk

This integration provides the integration with [Zendesk Ticketing module](https://developer.zendesk.com/api-reference/ticketing/introduction/), allowing users to view and manage their support tickets within your application.

## In this section

- [How to set up](./how-to-setup.md) - Step-by-step guide for setting up the Zendesk integration
- [Features](./features.md) - Overview of features and capabilities provided by the integration
- [Usage](./usage.md) - Examples and API reference for using Zendesk tickets

## What is Zendesk?

Zendesk is a customer service platform that provides:

- Ticket management and tracking
- Multi-channel support (email, chat, phone, social media)
- Knowledge base and self-service options
- Analytics and reporting
- Customizable workflows and automation

This integration connects your Open Self Service application with Zendesk, enabling users to view and manage their support tickets directly within your application.

## Supported modules

This integration handles the following base module from the framework:

- **tickets** - Provides ticket management functionality, allowing users to view and list their support tickets

## Quick start

1. Install the package (see [How to set up](./how-to-setup.md))
2. Configure environment variables
3. Set up Zendesk API credentials
4. Start managing tickets!

For detailed instructions, see the [How to set up](./how-to-setup.md) guide.

## Requirements

- A Zendesk account with API access
- Zendesk API token generated in the admin interface
- Node.js environment with API Harmonization server
- Users module configured (required for user authentication)

The integration uses the official Zendesk API v2 and automatically generates TypeScript types from the Zendesk OpenAPI specification.
