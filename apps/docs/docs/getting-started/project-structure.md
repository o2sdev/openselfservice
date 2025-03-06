---
sidebar_position: 500
---

# Project structure

Here we provide an overview of how O2S is organized within a **monorepo** setup. It explains how different packages and applications interact, how Turborepo is used for managing dependencies, and how external integrations fit into the system.

This section covers:
- **Monorepo architecture** and how O2S leverages Turborepo.
- **Core packages** including the UI library and API modules.
- **Applications** such as the Next.js frontend and API Harmonization server.
- **External packages** that provide O2S with SDKs and integrations.

Understanding this structure will help you navigate and customize O2S efficiently.

---

## Monorepo

This project relies upon [Turborepo](https://turbo.build/repo/docs) to manage the apps and internal packages within the monorepo.

:::tip
Check the [official documentation](https://turbo.build/repo/docs/crafting-your-repository/structuring-a-repository) to find out more about Turborepo project structure.
:::

O2S leverages Turborepo by simplifying the process of running, building and linting every sub-package - this can easily be done by running scripts form the root-level `package.json`.

:::tip
- You can find out more about running tasks in the [official docs](https://turbo.build/repo/docs/crafting-your-repository/running-tasks)
- To lean how O2S can be run, check the [Running the project chapter](./running-locally.md)
:::

### Packages

The packages can be either:
- internal ones (used only within the monorepo),
- publishable, for cases when you want them to be accessible to other projects.

Currently, there is only one package that is set up when using the `create-o2s-app` starter:

- `packages/ui` - the UI library of React components, offering a range of building blocks that can be used when implementing more complex components. Currently, this is an internal package used only within the `frontend` app.

### Apps

The apps are a type of packages that need to be built and ran (either locally or remotely).

When using the `create-o2s-app` there are two apps created:

- `apps/api-harmonization` - the API Harmonization server built on Nest.js, responsible for aggregations of data from different integrations,
- `apps/frontend` - the Next.js frontend app, responsible for rendering the views in the browser
  - dependent on `packages/ui` for base UI components,
  - dependent on `apps/api-harmonization` for harmonized data model for components that aggregate data from integrations.

:::tip
You can learn more about each of these packages by checking the [Main components chapter](../main-components/overview.md).
:::

## External packages

While not part of the starter created when using `create-o2s-app`, there are still a few packages that are used within the O2S. They are maintained in the main GitHub repository, and are published as NPM packages.

### @o2s/framework

Defines the base modules that can be plugged into the `api-harmonization` application, as well as provides the normalized data model which can be used when implementing new integrations. It also provides the SDK that can be used to communicate with the API Harmonization server.

:::tip
You can learn more about SDK in the [dedicated chapter](../guides/sdk.md).
:::


### @o2s/integrations.\*

Under this category falls every integration that is provided by O2S. These integrations are published as NPM packages and are ready to be installed into the `api-harmonization` application and then used as data sources for the apps.

:::tip
You can learn more about integrations in the [dedicated chapter](../integrations/overview.md).
:::
