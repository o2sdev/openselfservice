---
'@o2s/integrations.contentful-cms': patch
'@o2s/integrations.strapi-cms': patch
'@o2s/integrations.mocked': patch
---

fix(integrations): emit live-preview components as .js so npm consumers can resolve them

The shared API tsconfig inherited `"jsx": "preserve"` from the base config, so
every `.tsx` file in these packages compiled to a `.jsx` file — even the ones
that contain no JSX syntax at all, since the extension alone is enough. Their
live-preview barrels then shipped `require('./BlockEditAffordance')` next to a
`BlockEditAffordance.jsx`, and Node's CJS resolution inside `node_modules` only
tries `.js`, `.json` and `.node`. Any project installing these packages from npm
fails to build with `Module not found: Can't resolve './BlockEditAffordance'`.

This never showed up here because our own apps import the workspace source
rather than `dist`; it only breaks external consumers, which is why it survived
a release.

The API tsconfig now sets `"jsx": "react-jsx"`, so these files emit `.js`. No
behaviour changes: none of the affected components use JSX syntax — the one
that renders markup already calls `React.createElement` directly — so nothing
new is pulled in at runtime, and React is already a peer dependency of all
three packages.
