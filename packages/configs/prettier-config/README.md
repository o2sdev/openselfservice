# @o2s/prettier-config

Shared Prettier configuration for O2S packages to ensure consistent code formatting.

## Installation

```bash
npm install -D @o2s/prettier-config
```

## Usage

### Extend Configuration

```json
// package.json
{
    "prettier": "@o2s/prettier-config"
}
```

Or in `.prettierrc.mjs`:

```javascript
import config from '@o2s/prettier-config/base.mjs';

export default {
    ...config,
};
```

Available configurations: `base.mjs`, `frontend.mjs`, `api.mjs`, `ui.mjs`, `docs.mjs`.

### Format Script

Add a format script to your `package.json`:

```json
{
    "scripts": {
        "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,css,scss,json}\""
    }
}
```

## Features

- Consistent code formatting
- TypeScript support
- React/JSX support
- CSS/SCSS support
- JSON formatting

## Related Packages

- `@o2s/eslint-config` - ESLint configuration (includes Prettier integration)
- `@o2s/typescript-config` - TypeScript configuration
