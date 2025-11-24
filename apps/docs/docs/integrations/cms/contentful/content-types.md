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

## Component types

### ComponentArticle

Represents article content with sections.

**Fields:**
- `sections` (Reference, Many) - References to ComponentArticleSection

### ComponentArticleSection

Represents a section within an article.

**Fields:**
- `title` (Text) - Section title
- `content` (Rich Text) - Section content

### ComponentBanner

Represents a banner component with call-to-action.

**Fields:**
- `title` (Text) - Banner title
- `description` (Text) - Banner description
- `link` (Reference, One) - Reference to ComponentLink

### ComponentCategory

Represents a category display.

**Fields:**
- `name` (Text) - Category name
- `description` (Text) - Category description

### ComponentFaqItem

Represents a single FAQ item.

**Fields:**
- `title` (Text) - Question title
- `content` (Text) - Answer content

### ComponentFieldMapping

Maps API field values to user-friendly labels.

**Fields:**
- `fields` (Reference, Many) - References to ComponentKeyValue pairs

### ComponentKeyValue

Represents a key-value pair for field mapping.

**Fields:**
- `key` (Text) - The API field value
- `value` (Text) - The user-friendly label

### ComponentLink

Represents a link or navigation item.

**Fields:**
- `label` (Text) - Link label
- `url` (Text) - Link URL
- `target` (Text) - Link target (_self, _blank, etc.)

### ComponentMedia

Represents media assets (images, videos).

**Fields:**
- `asset` (Reference, One) - Reference to Contentful Asset
- `alt` (Text) - Alt text for accessibility
- `title` (Text) - Media title

### ComponentNavigationGroup

Represents a group of navigation items.

**Fields:**
- `title` (Text) - Group title
- `items` (Reference, Many) - References to ComponentNavigationItem

### ComponentNavigationItem

Represents a single navigation item.

**Fields:**
- `label` (Text) - Item label
- `link` (Reference, One) - Reference to ComponentLink

### ComponentPagination

Represents pagination configuration.

**Fields:**
- `itemsPerPage` (Integer) - Number of items per page
- `showPagination` (Boolean) - Whether to show pagination controls

### ComponentSeo

Represents SEO metadata.

**Fields:**
- `title` (Text) - SEO title
- `description` (Text) - SEO description
- `keywords` (Text, List) - SEO keywords
- `ogImage` (Reference, One) - Open Graph image reference

### ComponentTable

Represents table configuration for data display.

**Fields:**
- `columns` (Reference, Many) - References to table column definitions
- `sortable` (Boolean) - Whether columns are sortable
- `filterable` (Boolean) - Whether table is filterable

## Configuration content types

### AppConfig

Represents application-wide configuration.

**Fields:**
- `name` (Text) - Application name
- `logo` (Reference, One) - Reference to ComponentMedia for logo
- `theme` (Text) - Theme configuration

### Header

Represents the site header configuration.

**Fields:**
- `logo` (Reference, One) - Reference to ComponentMedia for logo
- `navigation` (Reference, Many) - References to ComponentNavigationGroup
- `actions` (Reference, Many) - References to ComponentLink for header actions

### Footer

Represents the site footer configuration.

**Fields:**
- `navigation` (Reference, Many) - References to ComponentNavigationGroup
- `copyright` (Text) - Copyright text
- `links` (Reference, Many) - References to ComponentLink for footer links

## Relationships

The content types are interconnected through reference fields:

- **Pages** reference **Templates** and **ComponentSeo**
- **Templates** reference **Blocks** in their slots
- **Blocks** reference various **Component** types based on their variant
- **Components** can reference other components (e.g., ComponentBanner references ComponentLink)
- **Articles** reference **ComponentArticle** and can be linked to **Pages**

This reference-based structure allows for flexible content composition while maintaining clear relationships between content pieces.

