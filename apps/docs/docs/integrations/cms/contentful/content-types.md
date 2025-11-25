---
sidebar_position: 300
---

# Content types

This document provides a detailed reference of all Contentful content types used in the O2S integration.

## Core content types

### Page

The Page content type represents a single page in the frontend application.

**Fields:**
- `slug` (Text, localized) - The URL slug for the page
- `template` (Reference, One) - Reference to a Template content type
- `seo` (Reference, One) - Reference to ComponentSeo for SEO metadata
- `permissions` (Text, List) - Optional list of permission strings for access control
- `hasOwnTitle` (Boolean) - Whether the page has its own title

**Relationships:**
- References a Template content type
- References ComponentSeo for SEO metadata
- Can be linked to other Pages (parent-child relationships)

### Block

The Block content type represents a reusable piece of content that can be placed in page templates.

**Fields:**
- Content is determined by the specific block type (BlockFaq, BlockTicketList, etc.)

**Block variants:**
- `BlockFaq` - FAQ component
- `BlockTicketList` - Ticket list component
- `BlockQuickLinks` - Quick links component
- `BlockCategory` - Category display component
- `BlockCategoryList` - Category list component
- `BlockArticleList` - Article list component

### Template

The Template content type defines the layout structure for pages.

**Template variants:**
- `OneColumnTemplate` - Single column layout with slots:
  - `topSlot` (Reference, Many) - Top section blocks
  - `mainSlot` (Reference, Many) - Main content blocks
  - `bottomSlot` (Reference, Many) - Bottom section blocks

- `TwoColumnTemplate` - Two column layout with slots:
  - `topSlot` (Reference, Many) - Top section blocks
  - `leftSlot` (Reference, Many) - Left column blocks
  - `rightSlot` (Reference, Many) - Right column blocks
  - `bottomSlot` (Reference, Many) - Bottom section blocks

### Article

The Article content type represents blog posts or articles.

**Fields:**
- `slug` (Text, localized) - The URL slug for the article
- `content` (Reference, One) - Reference to ComponentArticle
- `seo` (Reference, One) - Reference to ComponentSeo for SEO metadata
- `parent` (Reference, One) - Optional reference to parent Page

## Relationships

The content types are interconnected through reference fields:

- **Pages** reference **Templates** and **ComponentSeo**
- **Templates** reference **Blocks** in their slots
- **Blocks** reference various **Component** types based on their variant
- **Components** can reference other components (e.g., ComponentBanner references ComponentLink)
- **Articles** reference **ComponentArticle** and can be linked to **Pages**

This reference-based structure allows for flexible content composition while maintaining clear relationships between content pieces.

