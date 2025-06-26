---
sidebar_position: 200
---

# Installation

There are two ways to get started with O2S

- using the `create-o2s-app` script,
- cloning the main GitHub repository.

---

## create-o2s-app

To quickly set up the project, you can use the following command:

```shell
npx create-o2s-app@latest
```

which will automatically download the necessary source code, as well as install the dependencies and where necessary, initialize the packages.

:::info
This is the suggested way to get started, especially if you only need to use existing modules and integrations.
:::

---

## Cloning the repository

You can also clone the main repository to have access to every package that is not part of the starter (like docs or integrations):

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
