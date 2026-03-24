---
sidebar_position: 200
---

# Using generators

To make the process of adding new components we have prepared several generators using [Turborepo code generation features](https://turbo.build/repo/docs/guides/generating-code).

You can launch these generators by running

```shell
npm run generate
```

at the root level of the project, after which you will be asked which generator you want to use.

---

## Block

You can create a new block within the `api-harmonization` app by using `block` generator. It will:

1. Ask you for the block name.
2. Ask you for the block domain (`content`, `marketing`, `services`, `commerce`, `billing`, `support`, `notifications`, `account`, `navigation`, `forms`).
3. Ask which project templates should include this block (`o2s`, `dxp`, or leave empty for custom-only). This sets the `o2sTemplate` field in `package.json`, used by the `create-o2s-app` CLI wizard to determine which blocks belong to each template.
4. Create a new package in the `packages/blocks/<domain>/<block-name>` directory.
5. Inside this new folder, it will create all the necessary files that compose a block:
    1. API Harmonization part with
        - module,
        - controller,
        - service,
        - mapper,
        - model and request.
    2. Frontend app part with
        - server component,
        - client component,
        - renderer,
        - typings,
        - API methods,
    3. SDK part.

---

## UI

To create a new container within the `ui` package, you can choose the `ui-component` generator. It will:

1. Create a new file in the `packages/ui/src/components` directory.

---

## Integrations

You can also create a whole new integration by using the `integration` generator, which will:

1. Ask you which modules you want included in the integration.
2. Ask which project templates should include this integration (`o2s`, `dxp`, or leave empty for custom-only). This sets the `o2sTemplate` field in `package.json`, used by the `create-o2s-app` CLI wizard.
3. Create a new folder in the `packages/integrations` directory.
4. Initialize a new project for this new integration, with all the necessary files (like `package.json`, linter and prettier configs, and so on).
5. For each module you chose, it will create appropriate folder within the `packages/api/integrations/src/module` directory.
6. Inside those folders it will create the necessary files that compose a module:
    - controller,
    - service,
    - mapper.

---

## Custom Module

To create a new custom module (a module beyond the core framework modules), use the `custom-module` generator. It will:

1. Ask you for the module name (e.g. `documents`, `reports`, `warranties`).
2. Create a new package at `packages/modules/<module-name>/` with:
    - abstract service class (the DI token),
    - normalized data model,
    - REST controller,
    - barrel export,
    - package configuration files (tsconfig, eslint, prettier).

For a full walkthrough, see the [Extending framework modules](./integrations/extending-framework-modules.md) guide.
