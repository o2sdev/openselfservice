---
slug: rethinking-frontend-architecture-for-composable
title: How we rethought frontend architecture for large customer-facing solutions and built something you can use too
date: 2025-09-12
tags: [tech, frontend]
authors: [jan.jagoda]
---

Over the past few years, we’ve worked on many large-scale digital platforms.
E-commerce applications, customer support portals, B2B service hubs - all combining content, integrations (PIM, search, e-commerce, ERP, custom APIs) and user-facing functionality.

Many of those platforms were built on top of enterprise products. These provided headless backend APIs and, in some cases, their own frontend layer as well.

Usually in practice, the frontend quality was rarely good enough.

<!--truncate-->

What we kept seeing was:

* limited modularity, which slowed down development
* no proper UI library, which made consistent design hard to achieve
* performance bottlenecks, especially on content-heavy pages
* poor accessibility, often falling short of WCAG requirements
* no standard way to integrate with multiple backend APIs, leading to complete vendor lock-in

This often led to complex and fragile frontends, hard to maintain and scale.
Eventually, the cost of keeping the enterprise platform running (and usually huge licensing costs) became so high that clients started asking — **can we migrate, without disrupting the end-user experience?**

That’s not a simple question.

How to build something without introducing the same problems?
How do you avoid rebuilding the same UI over and over again or at least do it to a lesser extent?
How do you design something that is fully decoupled from the backend and more resilient to its changes?

We started asking ourselves those questions project after project.
And as we looked for better ways to approach frontend in composable architecture, we gradually built a solution - improving it along the way.

## The DXP  and customer portal starters with Open Self Service&#x20;

The result of all that experience is **Open Self Service** — an open-source framework we’ve been building to support modern frontend applications based on composable architecture. It brings together best practices around modularity, performance, and accessibility, and introduces a consistent way to integrate with multiple backend APIs. O2S makes it easier to migrate or replace backend systems without disrupting the frontend layer, helping teams avoid vendor lock-in and stay in control of their architecture.&#x20;

As part of O2S, we recently released a new starter designed for **large-scale digital experience platforms**.

We call it the **DXP Frontend Starter**.

It’s meant for projects where content, support, identity, integrations or even commerce meet in one unified frontend.
It provides a foundation for teams that want to build **structured, scalable and modular frontends**, while staying flexible enough to grow.

What’s included:

* layout system fully integrated with CMS models (e.g. Strapi)
* modular frontend blocks mapped to reusable components
* backend integration layer (NestJS-based) for plugging in APIs like identity, search, commerce, or customer services
* performance-first and accessibility-aware architecture
* a growing set of prebuilt integrations from the O2S ecosystem.&#x20;

This is just the beginning, we continue to develop the project, adding new features and integrations, improving documentation and dev loper experience on an ongoing basis.

---

In our own projects, this approach has already made a difference.
We can build faster, adapt to backend changes more easily, and deliver better user experience.

And since it’s open-source, you can use it too.

If you’re working on digital platforms, esspecially those that offer customer self-service features,  and wonder whether the **composable architecture** ideas from commerce could also work in your world — maybe this is a good starting point.

---

**DXP frontend starter**
[https://www.openselfservice.com/dxp](https://www.openselfservice.com/dxp)

**Open Self Service Docs**
[https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

**GitHub (DXP Starter)**
[https://github.com/o2sdev/dxp-starter](https://github.com/o2sdev/dxp-starter)
