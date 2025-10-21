---
sidebar_position: 000
slug: "/guides/create-new-block"
---

# Create a new block

This section will guide you through the entire process of creating a completely new block that includes:

- adding new harmonizing block, that aggregates data from existing base modules,
- creating new frontend block that renders the content,
- extending an integration.

For the purpose of this guide, let's assume you want to create a **new block that shows the summary of user's tickets**, called `TicketsSummary`, with:

- the number of open tickets,
- the number of closed tickets,
- the latest ticket summary.

The required steps are described in the subchapters:

1. [Extending the CMS integration](./integrations.md) (so that the CMS could hold new block's definition and configuration - static texts, etc.)
2. [Creating the harmonizing block](./api-harmonization-server.md) (that will provide data to the frontend block).
3. [Creating the frontend block](./frontend-app.md) (which will render everything in the frontend app).
