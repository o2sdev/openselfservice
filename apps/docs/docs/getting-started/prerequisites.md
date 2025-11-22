---
sidebar_position: 100
---

# Pre-requisites

The main requirements for the O2S are:
- Node.js v24+
- npm v10+

To check which versions you are using, you can run the following commands:
```shell
node -v
npm -v
```

To ensure you are using the correct versions, we recommend to use NVM to easily manage Node.js installations:
- [nvm](https://github.com/nvm-sh/nvm)
- [nvm for windows](https://github.com/coreybutler/nvm-windows)

:::info
In order to make quick set-up as easy as possible, there are no other requirements in terms of external applications, services or databases.

When you install the starter using the `create-o2s-app` a pre-defined integrations is used, where every piece of [data is mocked](../integrations/mocked/mocked.md), and a local SQLite database is used for [authentication purposes](../main-components/frontend-app/authentication.md).
:::
