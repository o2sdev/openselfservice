---
sidebar_position: 200
---

# Installation

The best way to get started with Open Self Service is to create an application using one of our **App starters**. These provide pre-configured templates with all the necessary components, integrations, and best practices to accelerate your development.

## App starters (Recommended)

We offer two starter templates to choose from: **O2S Customer Portal** and **DXP Frontend Starter**.

To create a new project, run:

```shell
npx create-o2s-app
```

The CLI will prompt you to choose between `o2s`, `dxp` starters or a fully custom configuration, and then automatically scaffold the project with the matching blocks and integrations.

:::info
**Recommended approach**: Start with one of our App starters. They provide the fastest path to a working application and include all the best practices and configurations you need.
:::

For detailed information about each starter, see our [App starters](../app-starters/overview.md) section.

---

## Advanced: Cloning the repository

You can also clone the main repository to have access to every package that is not part of the starters (like docs or integrations):

```shell
git clone https://github.com/o2sdev/openselfservice.git
```

After that, all you need to do is to install the dependencies for each package:

```shell
npm install
```

:::info
Cloning the repository is a more advanced way of starting with O2S, and is suggested only when you need to modify the core functionalities of the framework.
:::
