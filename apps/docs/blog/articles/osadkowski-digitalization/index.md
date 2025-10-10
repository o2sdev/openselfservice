---
slug: osadkowski-digitalization
title: "Osadkowski's digital transformation with Composable Architecture"
description: 'TODO'
keywords: ['TODO']
date: 2025-10-15
tags: [tech, integrations]
authors: [marcin.krasowski]
toc_max_heading_level: 3
hide_table_of_contents: false
---

# Osadkowski's digital transformation with Composable Architecture

## Executive Summary

Osadkowski sp. z o.o., a prominent Polish distributor of agricultural supplies since 1990, successfully transformed their traditional business model through a comprehensive digital transformation initiative. Partnering with Hycom, the company implemented a composable architecture solution that resulted in a 130% increase in platform traffic and 20% customer adoption of self-service features within just three months.

## The Challenge: Adapting to Market Changes

### Business Context

Operating in the rapidly evolving agricultural market, Osadkowski faced significant challenges in maintaining their competitive edge. The company needed to modernize their sales and customer service channels while adapting to changing customer expectations and market dynamics.

### Key Objectives

The digital transformation initiative was driven by three primary objectives:

1. **Customer Experience Enhancement**: Deliver superior service to enable farmers to focus on production and farm development rather than administrative tasks.

2. **Operational Efficiency**: Optimize costs and improve financial outcomes by transitioning sales representatives from traditional sales roles to advisory positions, emphasizing high-value products and services.

3. **Business Flexibility**: Develop the capability to swiftly respond to market opportunities and threats through a scalable and flexible omnichannel eCommerce environment.

### Market Pressures

The agricultural industry was experiencing rapid digitalization, fundamentally changing how farmers and agricultural businesses operated. Customers were increasingly demanding 24/7 access to information and services, expecting the same level of digital convenience they experienced in other industries. This shift required agricultural suppliers like Osadkowski to provide self-service capabilities for order tracking and document management, while maintaining seamless integration between online and offline experiences.

The digital transformation wasn't just about adding online capabilities—it was about creating a unified experience that allowed customers to access real-time product information, pricing, and inventory data whenever they needed it. This expectation of instant access and transparency became a competitive necessity rather than a nice-to-have feature.

## The Solution: Composable Architecture Implementation

### Architectural Approach

To address these challenges, Osadkowski adopted a composable architecture based on the MACH (Microservices, API-first, Cloud-native, and Headless) paradigm. This approach ensured high scalability, flexibility, and adaptability to changing market demands.

### Core Technology Stack

The solution was built on a carefully selected technology stack that prioritized flexibility, scalability, and integration capabilities. The platform selection process was methodical and comprehensive, following Hycom's "one step earlier" approach that analyzed business needs before technology decisions.

### OroCommerce Platform Selection and Integration

The selection of OroCommerce as the core eCommerce platform was the result of a rigorous evaluation process that analyzed 10 different platforms against specific criteria. This decision was based on a deep analysis of Osadkowski's business needs and expectations, ensuring the chosen technology would support their strategic goals.

**Platform Selection Criteria:**
- Deployment model compatibility (SaaS/PaaS vs On-Premise)
- Availability of community and enterprise versions
- B2B-specific functionality and features
- Platform maturity and extension ecosystem
- Technology stack and programming language compatibility
- Annual maintenance costs
- Position in Gartner's B2B 2022 platform rankings

**Key Advantages of OroCommerce:**
- **B2B-Focused Design**: Built specifically for B2B commerce with advanced account management and complex pricing structures
- **Flexibility**: Extensive customization capabilities for complex B2B purchasing processes
- **Advanced Account Management**: Sophisticated tools for managing customer accounts and price lists, supporting complex organizational structures and purchasing approval processes
- **ERP/CRM Integration**: Seamless integration capabilities with existing enterprise systems
- **Personalization Tools**: Built-in optimization and personalization features for B2B sales
- **MACH Compliance**: Full alignment with Microservices, API-first, Cloud-native, and Headless principles

The headless OroCommerce platform served as the foundation, providing a robust eCommerce system that could seamlessly integrate with internal Product Information Management (PIM) and Enterprise Resource Planning (ERP) systems. This API-first architecture enabled flexible frontend development while maintaining strong backend capabilities.

### Prosperer Storefront Integration

For the user interface, Hycom developed the Prosperer Storefront, a proprietary frontend accelerator specifically designed for composable architecture. This solution was built as a Progressive Web Application (PWA) and proved to be the perfect fit for the OroCommerce integration, combining flexibility with development efficiency.

**Key Components of Prosperer Storefront:**

**PWA Storefront**: The "face" of the system, offering users an attractive, responsive, accessible, and high-performance interface designed with a mobile-first approach to meet the needs of farmers working in the field.

**UI Component Library**: A collection of reusable interface components that enables rapid development of new features and ensures visual consistency throughout the system. This tool significantly speeds up the process of developing new client-facing applications.

**API Composition Service/Middleware**: Acting as the "neck" of the system, this component combines all backend services into a single, consistent business logic, making it easy to access from the frontend. It also enables easy integration with new services in the future.

**Technical Implementation:**
The frontend layer utilized popular and powerful tools including Next.js, React, XState, and NestJS, ensuring efficiency and excellent results. The composition API integrates with services like StrapiCMS, Keycloak, and the Loyalty Function API, while the "head" of the system remains OroCommerce with its custom extensions, providing a full spectrum of eCommerce functionality.

This architecture enabled the team to implement two major upgrades to the site in just two months, providing significant benefits and flexibility from the first weeks of use, as noted by Wojciech Osadkowski, President of the Management Board.

The cloud infrastructure leveraged both Microsoft Azure and Google Cloud Platform, utilizing:
- Azure Kubernetes for microservices management
- Azure Service Bus for asynchronous communication
- Azure Functions for data import processes
- Azure Cognitive Search for data indexing and search capabilities

### Key Platform Functionalities

The OroCommerce integration enabled a comprehensive set of B2B eCommerce functionalities specifically designed for the agricultural industry:

**Advanced Browsing and Purchasing Capabilities**: The platform offers extensive options for browsing and purchasing agricultural supplies, with advanced filtering and searching capabilities. Users can select products based on precise criteria such as agrophage, product composition, soil requirements, or grain types, providing both convenience and precision in selecting necessary inputs for specific farm requirements.

**Real-Time Availability and Delivery Information**: The platform provides up-to-the-minute information on product availability and expected delivery times, with 24-hour delivery options for most product ranges. This functionality is crucial for an industry where timing is often a critical factor in agricultural operations.

**Integrated Discount and Loyalty Program**: A unique discount/loyalty program dynamically recalculates order values based on current and previous purchases, encouraging long-term partnerships and rewarding customer loyalty. This system was tested and integrated from day one of the store's operation.

**Online Payment and Order Tracking**: The service enables online payment processing and comprehensive order status tracking, providing standard eCommerce functionality with added importance in the agricultural context where purchases are often large and require careful planning.

**Documentation and Invoice Management**: Users have access to comprehensive order document and invoice management, making it easier to handle finances and logistics at the farm level, addressing the administrative needs of agricultural businesses.

**Flexible Delivery Options**: The service offers various delivery forms including parcel machines, courier services, and in-house delivery by Osadkowski, responding to diverse customer needs and preferences while emphasizing a personalized approach to each order.

### System Integrations

The success of the digital transformation relied heavily on seamless integration with existing enterprise systems. The solution included comprehensive integrations with Comarch ERP XL for core business process management, ensuring that the new digital platform could leverage existing business logic and data. Microsoft Dynamics 365 CRM integration provided robust customer relationship management capabilities, while a centralized Product Information Management (PIM) system ensured consistent product data across all channels.

A critical aspect of the implementation was the 24/7 monitoring system, which provided continuous availability and rapid issue response capabilities. This monitoring infrastructure was essential for maintaining the high availability standards expected by customers who relied on the platform for their daily operations.

## Implementation Process

### Phase 1: Customer Journey Mapping and Discovery
The transformation began with a comprehensive analysis using Customer Journey Mapping methodology to understand the expectations and needs of Osadkowski's key customer segments. This research-driven approach involved mapping customer experiences, needs, and frustrations, identifying aspects of the relationship that brought the most satisfaction. The analysis revealed that professional advice and easily accessible contact with sales representatives were highly valued by customers, leading to the inclusion of a "Knowledge" section in the final solution.

**Key Discoveries:**
- Professional advice was highly valued by customers
- Easy access to sales representatives was crucial
- Information architecture optimization was needed for product categories and navigation
- Customer self-service was identified as the priority area for initial development

### Phase 2: Self-Service Portal Development
The first tangible result was a self-service portal that responded to the customer journey mapping conclusions. This portal not only increased customer satisfaction and engagement but also paved the way for further digitization of the company's processes. The success of this phase encouraged Osadkowski to proceed with the full eCommerce implementation.

### Phase 3: Prototyping and Testing
Taking an interactive approach, early prototypes of the future eCommerce solution were subjected to testing with existing and potential customers. This process allowed potential problems to be identified and resolved before actual development began, significantly reducing the risk of costly changes. Testing included functionality, usability, and interface language optimization to best suit user needs.

**Testing Components:**
- Purchase path testing including discount program integration
- Usability testing across different user segments
- Interface language optimization for agricultural professionals
- Integration testing with loyalty systems

### Phase 4: Full eCommerce Platform Development
Building on the self-service foundation and prototype testing, the team developed a complete omnichannel eCommerce solution with integrated backend systems. The implementation followed a sprint-based approach, with three sprints completed, each delivering planned features on time.

### Team Structure and Methodology
An interdisciplinary project team, including designers, analysts, developers, and Osadkowski representatives, worked in partnership throughout the implementation. This collaborative approach fostered creativity and constructiveness, with all team members focusing on delivering value regardless of their specialization. Regular meetings and the lack of traditional client-supplier divisions enabled optimal solution development.

## Results and Impact

### Immediate Results (First 3 Months)

The first three months of the platform launch exceeded expectations in terms of customer adoption and engagement. The solution was implemented in just 9 months, and within 3 months of launch, it served approximately 90,000 users, demonstrating rapid adoption and scalability. Over 20% of customers consistently used self-service features for delivery tracking and document access, showing the immediate value of the digital transformation.

The round-the-clock availability of these services significantly improved customer convenience, allowing farmers to access critical information and services at any time, regardless of their location or working hours. From a platform performance perspective, the results were equally impressive, with the platform experiencing a nearly 130% increase in traffic compared to the previous year, indicating strong user adoption and engagement.

The responsive, mobile-first interface delivered high performance that met the demanding requirements of agricultural professionals who needed reliable access to information in various field conditions. The platform's ability to handle the specific needs of agricultural businesses, from complex product filtering to real-time availability information, proved essential for customer satisfaction and business success.

### Operational Benefits

#### Cost Optimization

The self-service features significantly reduced the administrative burden on staff, allowing employees to focus on higher-value activities rather than routine customer service tasks. This shift enabled sales representatives to transition from traditional sales roles to advisory positions, where they could provide more strategic guidance to customers about high-value products and services. The streamlined processes and automated workflows created operational efficiency that translated directly into cost savings and improved customer service quality.

#### Business Agility

The flexible architecture enabled Osadkowski to respond quickly to market changes and customer demands. The cloud-native approach provided scalable infrastructure that could support business growth without requiring major architectural changes. By implementing MACH principles, the company ensured long-term viability and future-readiness, positioning itself to adapt to emerging technologies and market opportunities.

### Long-term Strategic Impact

The composable architecture positioned Osadkowski as a modern, agile, and customer-centric organization in the agricultural industry. The enhanced customer experience provided a significant competitive advantage, differentiating the company from competitors who were still operating with traditional business models. The ability to quickly adapt to changing market conditions through the flexible architecture gave Osadkowski a strategic advantage in responding to industry trends and customer needs. Most importantly, the scalable platform created a solid technology foundation for future digital initiatives, ensuring the company could continue to innovate and grow.

## Technical Architecture Deep Dive

### MACH Principles Implementation

#### Microservices

The microservices architecture implemented each business capability as a separate, independent service. This approach provided individual scalability, allowing each service to scale based on specific demand patterns rather than scaling the entire system. The fault isolation benefits meant that service failures wouldn't impact the entire system, ensuring high availability and reliability for critical business functions.

#### API-First

The API-first approach utilized RESTful APIs for standardized communication between services, enabling easy integration with external systems and third-party applications. This architecture provided frontend flexibility, allowing multiple frontend applications to consume the same APIs while maintaining consistency in business logic and data access.

#### Cloud-Native

The cloud-native implementation leveraged containerization through Kubernetes-based deployment and management, providing auto-scaling capabilities with dynamic resource allocation based on demand. The multi-region deployment strategy ensured high availability and reliability, critical for agricultural businesses that operate across different geographic regions.

#### Headless

The headless architecture provided complete separation between frontend and backend systems, enabling omnichannel support where the same backend could serve multiple channels. This technology flexibility allowed the frontend to use any technology stack while maintaining consistent backend functionality and data access.

### Security and Compliance

The solution implemented comprehensive enterprise-grade security measures to protect sensitive agricultural and business data. End-to-end encryption ensured that sensitive data remained secure throughout the entire system, while role-based access control provided appropriate data access for different user types, from field workers to management. The system maintained adherence to industry standards and regulations, with comprehensive logging and monitoring providing real-time visibility into security events and potential threats.

## Lessons Learned

### Success Factors

The project's success was driven by several key factors that could serve as a blueprint for similar digital transformations. Starting with a customer-centric approach through comprehensive customer journey mapping ensured the solution addressed real business needs rather than technology-driven assumptions. The phased implementation strategy reduced risk and allowed for continuous learning and adaptation throughout the project.

Interdisciplinary teams proved crucial for success, as the alignment between business and technical teams ensured that solutions met both functional requirements and technical constraints. The cloud-native architecture provided the scalability and reliability needed to support the business's growth and changing demands.

### Key Challenges Overcome

The implementation successfully navigated several significant challenges that are common in digital transformation projects. Legacy system integration required careful planning and execution to seamlessly connect with existing ERP and CRM systems without disrupting ongoing operations. User adoption was achieved through an intuitive user experience that minimized the learning curve for agricultural professionals who may not be familiar with digital platforms.

The performance requirements were particularly demanding, as agricultural professionals needed reliable access to information in various field conditions. The solution delivered high performance that met these expectations. Finally, comprehensive change management through training and support ensured smooth organizational transition to the new digital platform.

## Future Roadmap

The composable architecture provides a solid foundation for continued innovation and growth. Osadkowski has outlined specific future development directions that build on the successful OroCommerce integration:

**Innovations in the Purchasing Process**: The company plans to introduce new features to make the purchasing process easier for customers, including the ability to make deferred payment transactions and purchase fertilizer and grain with whole-car delivery options. The expansion of loyalty program support aims to further strengthen customer relationships and provide greater benefits from long-term cooperation.

**Continuous Service Development**: The development follows a sprint-based approach, with three sprints already completed, each delivering planned features on time. This rhythm of continuous value delivery underscores the commitment to continuous improvement of the platform throughout 2024 and beyond.

**Advanced Analytics and AI Integration**: The platform architecture supports enhanced business intelligence and reporting capabilities, enabling deeper insights into customer behavior and market trends. Future AI integration through machine learning will create more personalized customer experiences tailored to agricultural business needs.

**Mobile and International Expansion**: Native mobile applications will provide enhanced user experience for field workers and agricultural professionals, while the scalable platform architecture positions Osadkowski for international expansion, providing the technical foundation needed for global market entry while maintaining flexibility to adapt to different regional requirements and regulations.

The successful implementation has demonstrated that the OroCommerce platform, combined with the Prosperer Storefront and composable architecture, provides the flexibility and scalability needed to respond quickly to market changes, customer expectations, and competitive movements, as confirmed by the company's leadership.

## Conclusion

Osadkowski's digital transformation demonstrates the power of composable architecture in enabling business agility and customer-centric innovation. By implementing MACH principles and partnering with experienced technology providers, the company achieved significant business outcomes while positioning itself for future growth.

The case study exemplifies how traditional businesses can successfully navigate digital transformation through:
- Strategic technology choices
- Customer-focused solution design
- Phased implementation approach
- Strong business-technology partnership

This transformation has positioned Osadkowski as a leader in digital agriculture, ready to meet the evolving needs of farmers and agricultural businesses in the digital age.
