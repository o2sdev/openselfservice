---
sidebar_position: 000
---

# Blocks

Blocks are designed to provide a modular and efficient approach to building feature-rich applications with minimal effort. Essentially, a block is a reusable, self-contained unit of functionality that combines harmonizing and frontend components into a single package.

At their core, blocks are standalone modules that contain everything required to add a specific feature or functionality to your app. Each block is independently packaged as an NPM module and includes three primary parts:

1. **API Harmonization Module:** Handles data aggregation, normalization, and exposes an API for that block.
2. **Frontend Components:** React-based implementations that render the block's UI, including server and client components.
3. **SDK Methods:** Simplified access to the block's API, designed for use internally within the block or externally by developers.

Each block is a self-contained unit consolidating the logic for both data fetching and rendering, allowing independent development, maintenance, and upgrades.

## Purpose of blocks

The primary purpose of blocks is to enhance **developer productivity** and **consistency** across applications by creating reusable building blocks for key functionalities. Here’s how blocks fulfill this purpose:

- **Modularity:** Each block is a fully isolated unit, allowing developers to quickly add or remove functionality without impacting other components of the application.
- **Reusability:** Blocks are designed to work independently, making it easy to reuse them across multiple projects that are based on O2S.
- **Ease of Customization:** Blocks can be easily customized to fit the needs of a specific project while keeping the base package upgradable.
- **Scalability:** By decoupling concerns and encapsulating logic, blocks simplify scaling and adding features to applications.

## How can blocks help you

Blocks bring several advantages for developers, simplifying and accelerating the app development process:

1. **Streamlined Development**

    Blocks encapsulate both frontend and backend code for a feature. You can simply install and integrate pre-built blocks to their app, avoiding the need to write these functionalities from scratch.

2. **Ease of Integration**

    Blocks can be installed with a single command as NPM packages and then easily imported into both the API Harmonization server and Frontend app.

3. **Customization Support**

    You can customize blocks to match your app's requirements while retaining the ability to receive updates from the base package.

4. **Consistency Across Projects**

    Using block-based architecture encourages consistent code patterns and practices across teams and projects.

5. **Focus on Business Logic**

    With most of the repetitive work taken care of by blocks, you can focus more on solving business-related problems instead of spending time implementing boilerplate functionality.

6. **Encourages Collaboration**

    Blocks allow you to work on individual pieces of functionality without interfering with or breaking other parts of the application.

## How blocks fit into your app

Each block provides both API handling and UI and rendering logic functionalities. Once installed:

- **API Harmonization** ensures the block's necessary APIs are exposed and available in the API Harmonization server.
- **Frontend** renders the block in the application's interface, fetching any required data and managing its internal logic.

For example:

- If you add an "FAQ" block, its frontend renderer displays a list of FAQs in your app, while its backend handles fetching the content.
- You can easily extend this block to fit their design or content needs while utilizing the same robust base implementation.

## What’s inside?

- **[Structure](./structure.md)** – Learn how the blocks are structured in the monorepo.
- **[Usage](./usage.md)** – Understand how to work with blocks and how to add a new one.
- **[Customizing](./customizing.md)** – Find out how you can customize an existing block in your own project and how the upgrades work.
