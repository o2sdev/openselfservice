---
sidebar_position: 200
---

# Features

This document provides an overview of features supported by the Medusa.js integration.

## Overview

| Feature                                          | Status | Notes                                           |
|--------------------------------------------------|--------|-------------------------------------------------|
| [Order Management](#order-management)            | ✅     | Complete order history and details              |
| [Product Catalog](#product-catalog)              | ✅     | Product browsing with variants                  |
| [Product Recommendations](#product-recommendations) | ✅  | Related products ([requires plugin](#plugin-architecture))    |
| [Asset Management](#asset-management)            | ✅     | Customer assets with warranty tracking ([requires plugin](#plugin-architecture)) |
| [Service Subscriptions](#service-subscriptions)  | ✅     | Service contracts and billing ([requires plugin](#plugin-architecture)) |
| [Service Discovery](#service-discovery)          | ✅     | Compatible and featured services ([requires plugin](#plugin-architecture)) |
| [Multi-currency Support](#multi-currency-support)| ✅     | Configurable currency handling                  |
| [Customer Authentication](#customer-authentication) | ✅  | JWT-based customer context                      |
| [Pagination](#pagination)                        | ✅     | Consistent pagination across all lists          |
| [Admin API Integration](#admin-api-integration)  | ✅     | Uses Medusa Admin API for extended capabilities |
| [Plugin Architecture](#plugin-architecture)      | ✅     | Extensible via custom Medusa plugins            |
| [Purchase/Activation](#purchaseactivation)       | ❌     | Not implemented                                 |

## Feature Details

### Order Management {#order-management}

The integration provides comprehensive order management capabilities for customer self-service portals:

- View complete order history with filtering by status and date range
- Access detailed order information including items, quantities, and pricing
- Track order lifecycle through multiple statuses (pending, completed, archived, cancelled)
- Monitor payment status (awaiting, captured, refunded, etc.)
- View shipping and billing addresses
- See shipping methods and associated costs
- Support for sorting orders by various criteria

Orders are displayed on the **Orders** screen in the frontend app, allowing customers to review their purchase history and track current orders.

### Product Catalog {#product-catalog}

Browse and display products from your Medusa commerce platform:

- List products with pagination support
- Display product details including title, description, and images
- Support for product variants with individual pricing
- Category-based product organization
- Product type classification (physical vs. virtual products)
- Thumbnail and image display

The product catalog powers the **Products** module in the frontend, enabling product listing pages and detailed product views.

### Product Recommendations {#product-recommendations}

Display related products to enhance product discovery:

- Show products related to the currently viewed item
- Support for different reference types (cross-sell, up-sell, accessories)
- Enhance customer experience with relevant suggestions

### Asset Management {#asset-management}

Manage customer-owned assets and equipment for after-sales service scenarios:

- View all assets belonging to the authenticated customer
- Track asset details: model, serial number, description
- Monitor warranty status and end-of-warranty dates
- Store installation/location addresses for each asset
- Link assets to original products for reference

This feature enables the **Assets** screen in the frontend, supporting use cases like equipment management, warranty tracking, and service scheduling.

### Service Subscriptions {#service-subscriptions}

Manage service contracts and subscriptions for customers:

- View active and historical service instances
- Track contract details: status, start date, end date
- Support for various payment periods (one-time, monthly, yearly)
- Display pricing information with currency
- Link services to associated assets
- Monitor service lifecycle and renewal dates

This powers the **Services** screen in the frontend, enabling customers to manage their subscriptions and service agreements.

### Service Discovery {#service-discovery}

Help customers discover relevant services for their assets:

- **Compatible Services** - Show services that can be purchased for a specific asset
- **Featured Services** - Highlight promoted or recommended service offerings

These features enable upselling and cross-selling opportunities within the self-service portal.

### Multi-currency Support {#multi-currency-support}

Handle multiple currencies for international commerce:

- Configure default currency via environment variable
- Display prices in customer's preferred currency when available
- Automatic fallback to default currency
- Support for common currencies: EUR, USD, PLN, and others

### Customer Authentication {#customer-authentication}

Secure customer identification for personalized experiences:

- JWT-based authentication through the Auth module
- Customer ID extraction from authorization tokens
- Automatic filtering of data by customer context
- Secure access to customer-specific orders, assets, and services

### Pagination {#pagination}

Consistent pagination support across all list operations:

- Configurable page size (limit)
- Offset-based navigation
- Total count for UI pagination controls
- Applied to orders, products, assets, and services

### Admin API Integration {#admin-api-integration}

The integration leverages Medusa's Admin API for extended capabilities:

- Access to comprehensive order data including financial details
- Extended product information with variants and pricing
- Admin-level operations for resource management
- Secure authentication via API keys

This approach provides richer data access compared to the storefront API, enabling full-featured self-service portals.

### Plugin Architecture {#plugin-architecture}

The integration supports extensibility through Medusa's plugin system:

- **Core features** (Orders, Products) work with standard Medusa installation
- **Extended features** (Assets, Services) require the O2S custom plugin
- Plugin adds new entities and API endpoints to Medusa
- Seamless integration with Medusa Admin Panel for content management

The [medusa-plugin-assets-services](https://github.com/o2sdev/medusa-plugin-assets-services) plugin extends Medusa with:
- Asset entity for tracking customer equipment
- Service Instance entity for subscription management
- Product reference relationships
- Compatible and featured services configuration

### Purchase/Activation {#purchaseactivation}

Resource and service purchase/activation operations are not currently implemented. The integration focuses on read operations for self-service scenarios. Future versions may add support for:

- Direct service activation from the portal
- Asset registration workflows
- Service renewal and upgrades
