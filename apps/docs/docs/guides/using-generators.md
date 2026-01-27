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

1. Create a new package in the `packages/blocks` directory.
2. Inside this new folder, it will create all the necessary files that compose a block:
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
2. Create a new folder in the `packages/integrations` directory.
3. Initialize a new project for this new integration, with all the necessary files (like `package.json`, linter and prettier configs, and so on).
4. For each module you chose, it will create appropriate folder within the `packages/api/integrations/src/module` directory.
5. Inside those folders it will create the necessary files that compose a module:
    - controller,
    - service,
    - mapper.
