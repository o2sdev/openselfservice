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

The CLI will prompt you to choose between `o2s`, `dxp` starters or a `fully custom configuration`, and then automatically scaffold the project with the matching blocks and integrations.

You can also specify a template directly:

```shell
npx create-o2s-app my-project --template o2s
npx create-o2s-app my-project --template dxp
npx create-o2s-app my-project --template custom
```

The `custom` template launches an **interactive CLI wizard** that lets you pick blocks, integrations, and configure environment variables step by step. Use it when neither the `o2s` nor `dxp` preset fully matches your use case — for example, when you only need a subset of blocks, want to swap integrations, or are building something custom. You start from a blank slate and hand-pick exactly what goes into your project.

### CLI options

| Option                        | Description                                                                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `--template dxp\|o2s\|custom` | Select a template: `o2s` (Customer Portal blocks), `dxp` (DXP blocks), or `custom` (interactive wizard to hand-pick blocks and integrations) |
| `--blocks <list>`             | Comma-separated block names to skip the block selection prompt                                                                               |
| `--integrations <list>`       | Comma-separated integration names to skip the integration selection prompt                                                                   |
| `--skip-install`              | Skip the `npm install` step                                                                                                                  |

**Non-interactive example:**

```shell
npx create-o2s-app my-portal \
  --template o2s \
  --blocks ticket-list,invoice-list \
  --integrations zendesk,strapi-cms \
  --skip-install
```

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

### Updating dependencies

O2S is developed on Windows, macOS and Linux, while CI runs on Linux. A few dependencies ship their compiled native code as separate per-platform packages (for example `@tailwindcss/oxide`), and npm has a [long-standing bug](https://github.com/npm/cli/issues/4828) where `npm install` records in the lockfile only the binaries for the OS it ran on and prunes the rest. A lockfile written that way installs fine on the machine that created it but breaks `npm ci` on other platforms — including CI.

Day-to-day work is unaffected: `npm ci`, building, running and testing never rewrite `package-lock.json`. This only matters when you **change a dependency** — `npm install <pkg>`, or an edit to any `package.json`. After doing so, restore the full cross-platform set of native binaries:

```shell
npm run lockfile:fix
```

:::tip
This runs automatically on commit (via a pre-commit hook), and CI rejects any pull request whose lockfile is missing platform binaries — so you normally don't have to think about it. You can run it manually at any time, and verify the current state with `npm run lockfile:check`.
:::
