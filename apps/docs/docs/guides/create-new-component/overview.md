---
sidebar_position: 000
slug: "/guides/create-new-component"
---

# Create new component

This section will guide you through the entire process of creating a completely new component that includes:

- adding new harmonizing component, that aggregates data from existing base modules,
- creating new frontend component that renders the content,
- extending an integration.

For the purpose of this guide, let's assume you want to create a **new component that shows the summary of user's tickets**, called `TicketsSummary`, with:

- the number of open tickets,
- the number of closed tickets,
- the latest ticket summary.

The required steps are described in the subchapters:

1. [Extending the CMS integration](./integrations.md) (so that the CMS could hold new component's definition and configuration - static texts, etc.)
2. [Creating the harmonizing component](./api-harmonization-server.md) (that will provide data to frontend component).
3. [Creating the frontend component](./frontend-app.md) (which will render everything in the frontend app).
