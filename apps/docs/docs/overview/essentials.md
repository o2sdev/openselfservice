---
sidebar_position: 200
---

# Essentials

This section provides an overview of Open Self Service's core concepts, including its **composable frontend approach**,
**key components**, and **main benefits**. You'll also find details on what you can build with O2S and why
it’s a good solution for integrating multiple APIs in customer self-service applications.

---

## Composable frontend

The main purpose of O2S is to streamline integration of API-based services and to accelerate the launch of the frontend layer for a self-service portal.

Headless solutions usually do not come with a dedicated frontend layer, and it needs to be built from scratch so that it’s tailored to the requirements, while for the customers it's of course the most important user-facing area. It's expected that whatever APIs are used underneath, the frontend application should work seamlessly across the whole process.

One of the main problems is how to integrate many different independent backend components in order to provide a seamless user experience. In the composable world, rarely it is enough to use only one API to provide all necessary data and logic for the application, or even a single page. The data also comes in different formats from each API which makes integration even more difficult.

Open Self Service simplifies this process, allowing for a more plug-and-play approach where it comes to integrate various data source, without the necessity to rewrite the whole frontend application from scratch. It leverages headless architecture in order to truly separate fronted and backend layers by providing an intermediate **normalization layer** that transforms data from various backend services into an **API-agnostic format**. This enables the frontend app to work in a seamless way, without it being aware where that data actually comes from.

---

## Main components

:::info

- To see the overview of components that O2S consists of go to **[Main components](../main-components/overview.md)** page.
- Go to the **[architecture](./architecture)** chapter for detailed description of O2S's architecture.
  :::

---

## Key benefits

### Composable by design

Open Self Service is built on composable architecture principles, allowing you to integrate and orchestrate multiple APIs seamlessly. By decoupling frontend and backend, O2S ensures flexibility, scalability, and independence from vendor lock-in.

**Enabled by:**

- **API Harmonization Server**: Aggregates, normalizes, and orchestrates data from headless APIs into a unified model.
- **Next.js frontend**: Built with shadcn/ui, Tailwind, and managed via headless CMS for flexibility and customization.
- **SDK**: Simplifies data fetching across web, mobile, and chatbots, allowing you to connect any frontend to the harmonized APIs.

---

### Developer-friendly tools

With a modern stack of tools developers know and love, Open Self Service speeds up implementation and ensures a great developer experience.

**Enabled by:**

- **Modern tech stack**: Built with Next.js, React, TypeScript, and NestJS.
- **Pre-built integrations**: Includes connectors for CMS (e.g., Strapi), search engines, and authentication (NextAuth). Our key concept for O2S's roadmap is to add more integrations.
- **Customizable components**: Every component of the solution can be tailored or extended to fit specific project needs.

:::tip

- We have a separate chapter describing our [Tech stack](./tech-stack).
- You can read more on integrations [here](../integrations).
- Customization related stuff can be mainly found in the [Guides](../guides).
  :::

---

### Future-proof architecture

O2S is designed to evolve with your needs. Replace APIs, scale systems, and modernize your application without breaking frontend logic.

**Enabled by:**

- Decoupled architecture with a harmonized data layer.
- Modular design, allowing components and services to be added or replaced easily.

---

## What you can build with Open Self Service

Open Self Service empowers you to build a wide range of customer-facing applications, including:

### Customer portals

Allow users to manage their accounts, services, invoices, and more with a modular, API-driven frontend.

### Support dashboards

Integrate ticketing systems, notifications, and customer data from CRM and support APIs like Zendesk or Kustomer.

### Service request management

Let customers create, manage, and track cases or service requests effortlessly.

### Knowledge bases

Build searchable, category-based help centers integrated with a headless CMS like Strapi or Contentful.

### Multi-channel apps

Use the O2S SDK to extend your frontend capabilities to mobile apps, chatbots, and other touchpoints.

---

## Why choose Open Self Service

### Simplify complex integrations

O2S removes the burden of managing multiple APIs by harmonizing data and providing a unified API layer.

### Accelerate development

Get started quickly with our Next.js boilerplate app, modular UI components, and pre-built integrations.

### Build for the future

Decouple your frontend from backend systems to enable easy modernization, scalability, and flexibility.

---

Explore how Open Self Service can transform your customer service solutions. Ready to get started? Check out the [**Getting Started**](../getting-started/prerequisites) page to set up your project.
