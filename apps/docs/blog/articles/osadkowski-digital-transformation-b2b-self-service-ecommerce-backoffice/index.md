---
slug: osadkowski-composable-b2b-portal-self-service-commerce-lessons-learned
title: 'Osadkowski’s composable B2B portal: self-service, commerce and lessons learned'
date: 2025-12-03 09:00
tags: [case-studies]
authors: [jan.jagoda, lukasz.kurasinski]
toc_max_heading_level: 2
hide_table_of_contents: false
---

# Osadkowski’s composable B2B portal: self-service, commerce and lessons learned

Digital transformation in agriculture is rarely just about “putting a shop online”. Farms make large, time-sensitive purchases. Weather, regulations and market prices change quickly. Advisors and sales reps still play a critical role in everyday decisions.

Osadkowski, a leading Polish agricultural supplier, decided to treat this complexity as an opportunity. Instead of adding a simple online catalog next to existing channels, the team set out to transform everything, to build a composable digital platform that would connect three key applications:

- a B2B self-service portal (e-care),
- a B2B e-commerce storefront integrated with OroCommerce,
- and a backoffice application for administrators and internal teams.

From the beginning, the web applications were designed with future channels in mind. The frontend, BFF and integration contracts were shaped so they could later support additional ways of accessing the platform — including mobile — without duplicating business logic or rebuilding the entire stack.

The project started before our later work with Orange Energia, and the cooperation with Osadkowski continues to this day. Many of the patterns tested here later influenced how we think about composable frontends and how we designed Open Self Service as an open-source framework for this kind of solution.

This case study looks at the project as a whole: the business context, the architectural choices, the practical challenges and trade-offs we encountered, and the lessons that shaped later work — including Open Self Service. A separate, more technical deep dive will revisit these challenges in detail and illustrate the concrete conclusions we drew from them.
Not here for the business story? You can [skip directly to the technical architecture overview](#technical-architecture-overview).

## Why Osadkowski needed more than “just” an online store

Osadkowski has been active in the agricultural market since 1990, specializing in plant protection, seeds, crops and additives. It works closely with Polish farms, building its position on trust and expert advice. Long before the e-commerce journey started, customer conversations were already pointing towards a need for better self-service and customer support: a place where clients could see their data, documents and requests without calling or emailing every time.

As the market evolved, several needs started to dominate digital discussions:

- **Advanced browsing and purchasing capabilities**: growers need to find products by precise agronomic criteria such as pest type, product composition, soil requirements or grain types, not just by SKU or brand.
- **Reliable availability and delivery information**: in agriculture, timing is critical. The platform has to show up-to-date stock levels and realistic delivery times, including 24-hour delivery options where possible.
- **Integrated discount and loyalty program**: Osadkowski wanted a loyalty model that dynamically recalculates discounts based on current and past purchases, rewarding long-term relationships rather than individual orders.
- **Self-service and support flows in one place**: customers should be able to manage their relationship with Osadkowski — contracts, orders, documents, key requests — through a single, consistent digital experience.

At the same time, existing processes and systems were fragmented. ERP and CRM handled core operations, while a separate WordPress installation powered large chunks of marketing and knowledge content. Customers did not have a single, coherent place where they could browse products, handle everyday self-service tasks, interact with support and access expert knowledge.

## What the new platform delivers

### Key capabilities delivered to customers

From a customer’s perspective, the end result is a unified digital experience that reflects how agricultural business actually works. Among the most important capabilities are:

- **Advanced product discovery**: users can filter and search assortments based on agronomic criteria such as pest type, composition, soil requirements or grain category, not just by name or SKU.
- **Transparent availability and delivery times**: the platform shows current availability and expected delivery dates, including options for next-day delivery where logistics allow it.
- **Dynamic discount and loyalty program**: order values are automatically recalculated based on the customer’s current and historical purchases, reinforcing long-term cooperation instead of one-off transactions.
- **Online payments and order tracking**: standard e-commerce capabilities adapted to large, planned purchases typical for agriculture.
- **Access to documents and invoices**: users can view, download and manage order documents on their own, which simplifies financial and logistics processes on the farm side.
- **Flexible delivery options**: from parcel lockers and couriers to Osadkowski’s own delivery, tailored to different farm preferences and logistics realities.

These capabilities are implemented on top of a MACH-aligned architecture: microservices, API-first integration, cloud-native infrastructure and headless frontend. The frontend is built with Next.js and a component library that makes it easier to evolve the UI without rewriting core flows.

### Business outcomes and ongoing evolution

Results became visible quickly. Within less than nine months from the start of implementation, the new solution went live. After three months of operation it already served around 90,000 B2B users and saw nearly 130% traffic growth compared to the previous year, as highlighted in the original Hycom case study about Osadkowski’s digitalization.
👉 https://hycom.digital/insights/osadkowski-digitalization

Equally important, the new platform created a foundation for continuous evolution. Instead of a one-off launch, Osadkowski and Hycom have been iterating on the system in regular sprints, introducing new capabilities and optimizations while keeping the composable architecture intact.

## Technical architecture and lessons learned

### Technical architecture overview

Currently, on the technical side, the solution is built as a composable platform rather than a single monolith. The web frontends run on Next.js, behind them sits a backend-for-frontend (BFF) layer, and behind the BFF there is a landscape of several dozen microservices and external systems such as OroCommerce and ERP.

The platform evolved in stages originally. First came the e-care self-service portal, which introduced digital self-service and customer support flows that previously did not exist, becoming the starting point for Osadkowski’s broader transformation of customer experience and service operations. Based on that experience, the team designed the commerce application with a different approach to data modeling and BFF responsibilities, and complemented both with a backoffice for internal users. In a later phase, the team migrated the existing marketing content and knowledge base from WordPress into the new stack, consolidating all customer-facing experiences on the composable platform. The result is a set of focused applications that share the same foundation, which we will look at in more detail in the next section.

### Three applications, one composable platform

So at its core, this platform consists of three applications that share the same composable foundations: Next.js on the frontend, a backend-for-frontend (BFF) layer, and a set of microservices and external systems behind it. The same stack is now being extended to a hybrid mobile app that reuses the e-care and e-commerce frontend inside a WebView shell and talks to the BFF in exactly the same way as the browser-based clients.

#### B2B self-service portal (e-care)

The e-care application acts as a self-service hub for B2B customers. It allows users to:

- review their relationship with Osadkowski in one place,
- access documents and invoices,
- track orders and deliveries,
- manage selected account settings and preferences.

From an architectural point of view, the e-care BFF aggregates data from multiple backend systems and exposes them to the frontend through a single API. In this first generation, the BFF focuses on aggregation rather than full data normalization. This approach simplifies integration with many backend services and reduces over-fetching on the frontend, but it also means that some domain complexity and mapping logic remain closer to the client.

#### B2B e-commerce integrated with OroCommerce

The second application is a dedicated B2B e-commerce storefront built on top of OroCommerce. This part of the platform has to support:

- complex account structures and roles,
- customer-specific price lists and conditions,
- integration with discount and loyalty mechanisms,
- advanced product search and filtering for agricultural assortments, backed by Elasticsearch to keep queries and filtering responsive even for large product catalogs.

Here, the architectural approach evolved. Instead of only aggregating data, **the BFF layer also normalizes information coming from OroCommerce and other services into a more stable, domain-oriented model**. This reduces coupling to a single e-commerce engine and makes it easier to evolve the frontend without rewriting everything when backends change.

#### Backoffice for administrators and internal teams

The third application is a backoffice interface used by internal teams. It provides tools to:

- manage configurations and operational data related to self-service and e-commerce,
- support day-to-day work of service and sales teams,
- monitor the health of integrations and flows.

The backoffice does not manage content directly. Editorial content and the overall structure of the public-facing frontend live in Strapi CMS, which acts as the central place for pages, navigation and knowledge materials. The backoffice focuses on operational and administrative aspects rather than content management. Compared to the client-facing web and mobile applications, it plays a supporting role: essential for operations, but invisible to customers.

### Backend-for-frontend patterns: how normalization paid off

A key design decision in Osadkowski’s platform was how much responsibility to put into the BFF. In the first stage, the e-care BFF primarily aggregates responses from multiple backend systems and exposes them through a unified API. This aggregation-first approach simplifies integration with many backend services and reduces over-fetching on the frontend, but it also means that some domain complexity and mapping logic remain closer to the client.

As the commerce application was added, the team moved towards a stronger domain model in the BFF. Instead of only aggregating payloads from OroCommerce and other services, the commerce BFF **normalizes them into stable, domain-oriented structures for products, carts, orders and discounts**. This makes the frontend simpler, reduces coupling to any single e-commerce engine and makes it easier to reuse the same models across different channels, including the hybrid mobile app.

The practical impact of this difference became clear during real work. When the team upgraded Strapi in the e-commerce area, most changes were limited to a few adjustments in the BFF layer, because the normalized models shielded the frontend from low-level API details. In the earlier e-care implementation, a similar evolution would have required touching many places in the frontend that were still directly aware of backend shapes.

The contrast between these two approaches became an important lesson for later projects: thin, aggregating BFFs are a good fit for early stages, but long-lived platforms and multi-channel frontends benefit from a BFF that acts as a reusable domain layer. The same principle underlies how BFFs are designed in Open Self Service.

### Shared component library and frontend reuse

From the beginning, the team wanted to reuse UI components between e-care, commerce and other frontends. To achieve this, they introduced a shared component library, originally managed with Bit in an open-source setup. The idea was straightforward: versioned components, shared across applications, with a path towards a consistent design system.

In practice, this approach delivered clear benefits. Common building blocks for layout, navigation and domain-specific widgets could be implemented once and then consumed by multiple applications. Changes in shared components propagated in a controlled way thanks to explicit versioning, which is especially valuable in long-running projects with several frontends.

At the same time, running Bit in a non-commercial, OSS-oriented configuration introduced additional complexity. Configuring CI/CD, keeping builds stable & fast and maintaining the tooling itself required more effort than initially expected. These experiences later contributed to a preference for simpler monorepo patterns in other projects and in Open Self Service, where classic npm packages and a monorepo toolchain provide similar reuse and versioning benefits with a lower operational cost.

### From WordPress to Strapi: unifying content and experience

When the project started, Osadkowski already had a significant amount of marketing and knowledge content implemented on WordPress. That content played an important role in customer education and in supporting sales teams.

As the new composable platform took shape, maintaining a separate WordPress site for extensive content became a limitation:

- the user experience was fragmented between the new portal and the old content site,
- maintaining consistent navigation and design across systems was harder,
- some content could not be easily reused where it was needed most in the self-service and e-commerce flows.

The team decided to migrate this content into the new stack and manage it through Strapi CMS. Strapi became the system of record for:

- structured pages such as the “Knowledge” section,
- expert articles and educational materials,
- navigation elements that connect content with self-service and commerce journeys.

Strapi’s role goes beyond storing articles. It gives marketing and product teams a way to manage rich content, educational materials and parts of the frontend structure in one place. This makes it easier to run campaigns, introduce new sections and maintain a consistent experience across content and transactional parts of the portal, without requiring code changes for every adjustment. The same philosophy of CMS-driven structure appears in Open Self Service, which supports multiple headless CMS options behind a consistent integration layer.

This change did not just replace one CMS with another. It moved content closer to the core of the digital platform. With Strapi controlling both content and parts of the frontend configuration, it became much easier to:

- expose relevant knowledge exactly where customers make decisions,
- keep layouts and navigation consistent across applications,
- evolve the structure of the portal without changing backend code,
- serve the same content to multiple channels through APIs, without duplicating editorial work.

### Reliability, deployments and composable benefits

Composable architecture also changes how deployments and maintenance are handled. With Osadkowski’s platform, individual services and applications can be updated independently, using patterns such as rolling updates where appropriate. This makes it possible to evolve parts of the system without freezing all customer-facing functionality.

In practice, this means that selected areas of the portal can remain available even when specific components are being updated. For example, content sections and account views can stay accessible while deeper transactional capabilities are temporarily limited during planned maintenance. Having clear integration boundaries between frontend, BFF, OroCommerce and other backend systems makes these kinds of controlled changes easier to plan, communicate and execute.

The same mindset informs how Open Self Service is designed: integrations are explicit, failure modes are considered from the start, and frontends are built to degrade gracefully instead of failing completely when one dependency is being updated.

### Hybrid mobile app: extending one frontend to multiple channels

Although the primary entry point today is the web portal, Osadkowski is also planning to introduce a hybrid mobile application. Instead of building a separate native frontend, the team wraps the existing Next.js application in a WebView-based shell and connects it to the BFF. This approach reuses the same UI components, routing and domain models across browser, PWA and native mobile touchpoints.

From a user’s perspective, this means consistent journeys across devices: the same account, the same self-service and commerce flows, adapted to mobile form factors.

From a delivery perspective, the hybrid model is cost-efficient. Most changes are implemented once in the web frontend and automatically propagate to mobile, while the native shell focuses on platform-specific concerns such as app store distribution, navigation behaviour, update prompts or other native capabilities.

Under the hood, the application detects when it is running in the native shell (for example, through a tailored user-agent), adapts navigation to platform conventions and ensures that session handling behaves correctly inside WebViews. These are relatively small, isolated changes compared to building and maintaining a fully separate native codebase, and they align well with the composable principle of reusing stable contracts and components across channels.

While this mobile app is still ahead of Osadkowski, similar hybrid patterns have already been validated in other Hycom accelerators and projects. That experience reinforces one of the assumptions behind Open Self Service: a single composable frontend should be able to power multiple channels — browser, PWA and mobile — without duplicating business logic or integration work.

## What this project contributed to Open Self Service

The Osadkowski project started before the Orange Energia client portal, but both initiatives share a similar DNA: a composable frontend sitting on top of multiple backend systems, with a CMS coordinating both content and parts of the frontend configuration.

From a product and architecture perspective, Osadkowski influenced several ideas that later became more formalized in Open Self Service:

- the distinction between BFFs that only aggregate data and BFFs that also normalize it into reusable domain models,
- the importance of treating the CMS as a central tool for managing not just content, but also page structure and rendered blocks,
- patterns for integrating complex B2B commerce engines like OroCommerce into a frontend that must remain backend-agnostic over time.

Open Self Service packages these lessons into a reusable, open-source framework for building customer and partner portals, self-service applications and B2B e-commerce frontends. The composable patterns validated with Osadkowski help teams start with a sustainable architecture from day one, instead of recreating the same foundation from scratch on every project. They also reinforce several concrete design choices in O2S: domain-focused BFFs, a pragmatic monorepo approach to shared components, CMS-driven configuration of frontend structure, and an architecture that naturally extends to additional channels such as hybrid mobile apps.


