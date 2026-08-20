---
'@o2s/integrations.strapi-cms': minor
---

Add Strapi Live Preview with edit-in-place. Draft content is fetched over GraphQL (`status: DRAFT`) and Content Source Maps are encoded on the API Harmonization server after mapping, so editors can click text in the Strapi admin preview to edit it in place. Covers the FAQ, QuickLinks, TicketList, CategoryList and ArticleList blocks, and adds a per-block "Edit block" affordance plus a single-component preview route to handle the page-to-component document boundary. Requires Strapi Enterprise (version 5.12 or later).
