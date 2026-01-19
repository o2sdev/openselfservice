---
sidebar_position: 100
---

# API Harmonization server

The **API Harmonization server** is the backend layer of O2S, responsible for aggregating, normalizing, and orchestrating
data from multiple APIs. Instead of integrating various services directly into the frontend, the server acts as an
**intermediary** component, ensuring that data is structured in a consistent, API-agnostic format before being consumed by the frontend.

This approach **decouples the frontend from backend dependencies**, enabling flexibility in swapping or modifying integrations
without affecting the UI layer. The server is built using **NestJS** and provides a modular structure for managing integrations efficiently.

## Learn more

- **[Module structure](./module-structure.md)** – how we define different parts of the Harmonization server and how they are organized
- **[Authentication](./authentication.md)** – role and permission-based access control for pages and blocks
- **[Normalized data model](./normalized-data-model)** – documentation of entities in the normalized data model, including types and available methods for interacting with it
