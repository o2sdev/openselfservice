---
sidebar_position: 000
slug: '/main-components'
---

# Main components

Open Self Service (O2S) consists of several core components, each designed to provide a **modular, scalable, and API-first** approach to building self-service applications. This section provides an overview of these components and how they work together.

---

## [Next.js frontend](./frontend-app/index.md)

A high-performance, modular frontend application built with **Next.js** and **shadcn/ui**. It includes pre-built pages and components that are fully customizable and can be extended to meet specific project needs.

### Learn more:

- **[Component structure](./frontend-app/component-structure.md)** – Understand how UI components are structured.
- **[Routing](./frontend-app/routing.md)** – Learn about the routing system and dynamic page handling.
- **[Internationalization](./frontend-app/internationalization.md)** – Enable multi-language support in your application.
- **[Authentication](./frontend-app/authentication.md)** – Manage user authentication with NextAuth and role-based access control.

## [API Harmonization server](./harmonization-app/index.md)

A **NestJS-based backend layer** that aggregates, normalizes, and orchestrates data from multiple headless APIs into a unified data model, ensuring consistency and simplifying integration.

### Learn more:

- **[Module structure](./harmonization-app/module-structure.md)** – Explore the modular design of the harmonization server.

## [UI library](./ui-library/index.md)

A collection of **pre-designed UI components** built with **shadcn/ui** and **Tailwind CSS**, offering reusable elements for a modern, cohesive frontend experience.

### Learn more:

- **[Theming](./ui-library/theming/index.md)** – Customize the appearance of UI components to match your brand.

## [SDK](./guides/sdk)

Simplifies data fetching and integration with the API Harmonization server for multiple touchpoints, including web, mobile, and other.

## [Integrations](./integrations)

Pre-built connectors for popular headless services like **StrapiCMS**, **NextAuth** (currently), with more planned, including **CRMs**, **_ERPs_** and **commerce APIs**. Easily extend and add new integrations as needed.
