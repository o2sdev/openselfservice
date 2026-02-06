---
sidebar_position: 400
---

# Running the project

See how to start and manage Open Self Service locally.

This section covers:

- **Running everything with a single command** using Turborepo.
- **Running individual packages separately** for more granular control.
- **How to access the frontend and API applications** once they are up and running.

Follow these instructions to set up your development environment and start working with O2S

---

## Using the root-level scripts

There are two main ways of working with O2S - either running every package with one command, or running each package separately.

To quickly get started, it is recommended to run two separate commands (ideally in separate terminal windows):

1. **Watch dependencies** – Automatically rebuilds internal packages when they change:
    ```sh
    npm run watch:deps
    ```
2. **Watch applications** – Starts the main applications with hot-reloading:
    ```sh
    npm run watch:apps
    ```

:::important
The `npm run dev` script is now **deprecated** and will be removed in future versions. Please use the granular `watch:deps` and `watch:apps` scripts instead.
:::

This will leverage [Turborepo task runners](https://turbo.build/repo/docs/crafting-your-repository/running-tasks) and ensure that both your applications and their internal dependencies are correctly watched and rebuilt during development.

---

## Using package-level scripts

You can also run each package separately by running the `dev` command in each of them:

```shell
cd apps/api-harmonization
npm run dev
```

```shell
cd apps/frontend
npm run dev
```

Keep in mind that running only those two apps will **not** listen for changes in their dependencies. E.g. if you've added a new integration package that is plugged into the `api-harmonization` app and then make some changes to it, the `api-harmonization` will not notice those changes until you:

1. Rebuild the integration packages manually.
2. Restart the `api-harmonization` app manually.

:::info
This way is recommended for more advanced cases, like when you need to run one of the apps in the production mode for testing, or when you need to restart only one of the apps often during development of new features.
:::

---

## Accessing the apps

Whatever way of running the packages you choose, at the end you will be able to access the applications in the same way:

- `frontend` app under http://localhost:3000
- `api-harmonization` app under http://localhost:3001/api

## Authentication

The pre-configured authentication includes several users with different roles and organizations. To sign in you can use any of them, but the most "default" one, with the most permissions, is:

```shell
username: jane@example.com
password: admin
```

:::tip
To get credentials for other users, check the [prisma seed file](https://github.com/o2sdev/openselfservice/blob/main/apps/frontend/prisma/seed.ts) where the users are defined.
:::
