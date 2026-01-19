---
sidebar_position: 100
---

# Code style

Each application and package within the O2S relies on popular linting and formatting tools to ensure high code quality. You can run those tools manually (or integrate them with your IDE), but they are also run automatically in some cases.

Each tool relies on shared configurations, that are stored as internal packages under `./packages/configs` folder, which helps to ensure consistency across the whole project.

## TypeScript

The base config for TypeScript is defined by `packages/configs/typescript-config/base.json` file, which is then extended by specific configs for each application.

## Linter

For linting, [eslint](https://eslint.org/) is used. Unlike TypeScript, it does not have a base config file, as applications or packages can rely on different rules (e.g. the Frontend app uses the [official Next.js config](https://nextjs.org/docs/app/api-reference/config/eslint)):

```js
module.exports = {
    extends: ['next/core-web-vitals', 'next/typescript'],
    ignorePatterns: ['dist/', '.next/', '.eslintrc.js', 'lint-staged.config.js'],
};
```

## Formatting

For formatting, [prettier](https://prettier.io/) is used to ensure code consistency. It uses a base config defined in `packages/configs/prettier-config/base.mjs` which is then extended by configs for each application or package.

It's worth to mention that [Prettier plugin sort imports](https://github.com/trivago/prettier-plugin-sort-imports) is used to make the order of imports both more consistent, and also more readable by sorting and grouping them together. For example, for the `ui` package the imports are sorted using the following rules:

```js
importOrder: [
    '@o2s/ui/lib',
    '@o2s/ui/utils',
    '@o2s/ui/hooks',
    '@o2s/ui/components',
    '^(\.\.\/)',
    '^(\.\/)',
],
```

## Git commit rules

To minimize the risk of pushing any code with errors, O2S introduces [husky](https://typicode.github.io/husky/) together with (lint-staged)[https://www.npmjs.com/package/lint-staged].

Through `husky`, a git pre-commit hook is configured to run the following script before you commit anything:

```shell title="./.husky/pre-commit"
npx lint-staged
```

This causes `lint-staged` to be run inside every app and package, as long as the `lint-staged.config.mjs` is placed there. For example, for the Frontend app it runs `prettier` and Next.js `lint` commands:

```js title="apps/api-harmonization/lint-staged.config.mjs"
const buildEslintCommand = (filenames) => `next lint --fix --file ${filenames.join(' --file ')}`;

export default {
    '*.{js,jsx,ts,tsx,css,scss}': ['prettier --write'],
    '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
```
