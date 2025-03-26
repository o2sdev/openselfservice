---
slug: roadmap-update-2025-03
title: Update on our roadmap and current development status
tags: [releases]
authors: [jan.jagoda, marcin.krasowski]
---

# What’s next for Open Self Service? A look at our roadmap

Since the launch of Open Self Service (O2S), we've received fantastic feedback and already started pushing improvements, features, and fixes to help you build better customer-facing portals faster.

<!--truncate-->

In this post, we want to share what’s been done, what we’re working on right now, and what’s coming soon. Whether you’re already using O2S or just keeping an eye on the project, here’s a peek into our current roadmap and future direction.

## What we've recently delivered

We’ve been actively addressing early feedback and fixing bugs. You can see a full list of updates and changelogs on our [GitHub Releases page](https://github.com/o2sdev/openselfservice/releases).

**Some highlights:**
- Small usability fixes across the UI
- SDK refinements
- Harmonization and integration tweaks

## What we’re working on now

We're moving fast with some new features and improvements that will roll out over the next few weeks:

### A new look and feel

Our UX/UI team has redesigned the frontend app with a cleaner, more professional look. If you’re one of those who “eat with their eyes 😉” this will be worth checking out. We’ll be sharing screenshots and live previews soon.

### Services management pages

The frontend app will soon include views related to managing services – including service overviews & detail pages.

### Knowledge base (with search)

We're laying the foundations for an intelligent knowledge base:

- Strapi content models have been defined
- Algolia integration is complete and will power the search
- Frontend pages for browsing and searching articles are in development

### SurveyJS integration

We’ve integrated SurveyJS to handle custom form flows, which will first be used for **case submission** (e.g., submitting support tickets).


## Coming soon

Here's what we plan to ship in the next phase:

### Predefined Strapi models

We’ll publish our Strapi content models and example content so that you can bootstrap your CMS easily or replicate the structure.

### Feature modularization

The frontend app will become even more flexible:

- Features will be modularized so you can **disable** or **include only the ones you need**
- Improved scalability and maintainability for custom setups

### Context switching

We're working on a **user/company context switcher** to support multi-org setups – a must-have for B2B portals.

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

## Coming soon: Article on Strapi integration

We’re also preparing an in-depth technical guide covering how we built the Strapi CMS integration with O2S – including content modeling, connecting to the Harmonization server, and managing layouts with headless CMS principles.

## We’d love your feedback

We're building Open Self Service in the open – and your feedback shapes the direction we take. If you’re using O2S, thinking about contributing, or just exploring what's possible, don’t hesitate to reach out or create an issue.

Contact us at [contact@openselfservice.com](mailto:contact@openselfservice.com)
or share feedback via GitHub [Issues](https://github.com/o2sdev/openselfservice/issues) or [Discussions](https://github.com/o2sdev/openselfservice/discussions).
