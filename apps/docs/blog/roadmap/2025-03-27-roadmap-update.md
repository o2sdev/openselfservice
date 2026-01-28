---
slug: roadmap-update-2025-03
title: Update on our roadmap and current development status
date: 2025-03-27T12:00
tags: [releases]
authors: [jan.jagoda, marcin.krasowski]
toc_max_heading_level: 2
---

# What’s next for Open Self Service? A look at our roadmap

Open Self Service (O2S) was launched a few weeks ago and we’ve already started working on the next set of improvements, new features, and fixes to make it better.

In this post, we’re sharing what we’ve shipped so far, what’s currently in progress, and what’s next on the roadmap. Whether you’re exploring O2S or already building with it, this is a quick look at where we’re heading.

<!--truncate-->

## What we've delivered so far

After release, we’ve focused on early stability, initial fixes, and kicked off development of upcoming core features. You can track all updates on our [GitHub Releases page](https://github.com/o2sdev/openselfservice/releases).

**Recent updates include:**

- Initial bugfixes in UI
- Technical improvements to frontend app, its UX, harmonization server app, integrations and SDK
- Preparations for new features that are coming in the next weeks

## What we’re working on now

We're moving fast with some new features and improvements that will roll out over the next few weeks:

### A new look and feel

Our UX/UI team has redesigned the frontend app with a cleaner, more professional look. If you’re one of those who “eat with their eyes 😉” this will be worth checking out. Below is a sneak peek:
![new-design-preview](/img/blog/o2s-features-8-min.jpg)

### Services management pages

The frontend app will soon include views related to managing services – including service overviews & detail pages.
![services-preview](/img/blog/o2s-features-6-min.jpg)

### Knowledge base (with search)

We're laying the foundations for an intelligent knowledge base:

- Strapi content models have been defined
- Algolia integration is complete and will power the search
- Frontend pages for browsing and searching articles are in development

![kb-preview](/img/blog/o2s-features-7-min.jpg)

### SurveyJS integration

We’ve integrated SurveyJS to handle custom form flows, which will first be used for **case submission** (e.g., submitting support tickets).

## Coming soon

Here's what we plan to ship in the next phase:

### Context switching

We're working on a **user/company context switcher** to support multi-org setups – a must-have for B2B portals.

### Predefined Strapi models

We’ll publish our Strapi content models and example content so that you can bootstrap your CMS easily or replicate the structure.

### Feature modularization

The frontend app will become even more flexible:

- Features will be modularized so you can **disable** or **include only the ones you need**
- Improved scalability and maintainability for custom setups

### Expanded user account area

Additional features are coming to the **User Account** section – user data editing screen.

### Storybook for UI documentation

A **Storybook** instance is in the works to document and preview all reusable UI components from our `ui` package.

## More integrations

We're currently reviewing a list of potential integrations – some will be selected and added to the roadmap soon. These may include:

- Commerce APIs
- CRM systems
- AI assistants
- Other common customer service backends

## Article on Strapi integration

We’re also preparing an in-depth technical guide covering how we built the Strapi CMS integration with O2S – including content modeling, connecting to the Harmonization server, and managing layouts with headless CMS principles.

## We’d love your feedback

Open Self Service is an open-source framework for building MACH-based, modern frontend apps, focused on customer service & support. If you’re using O2S, thinking about contributing, or just exploring what's possible, don’t hesitate to reach out or create an issue.

Contact us at [contact@openselfservice.com](mailto:contact@openselfservice.com)
or share feedback via GitHub [Issues](https://github.com/o2sdev/openselfservice/issues) or [Discussions](https://github.com/o2sdev/openselfservice/discussions).
