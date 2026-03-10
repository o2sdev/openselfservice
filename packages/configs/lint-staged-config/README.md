# @o2s/lint-staged-config

Shared lint-staged configuration for O2S packages to run linters on git staged files.

## Installation

```bash
npm install -D @o2s/lint-staged-config
```

## Usage

### Extend Configuration

```javascript
// lint-staged.config.js
import baseConfig from '@o2s/lint-staged-config/base';

export default {
    ...baseConfig,
    // Your custom config
};
```

Or in `package.json`:

```json
{
    "lint-staged": {
        "*.{ts,tsx}": [
            "eslint --fix",
            "prettier --write"
        ]
    }
}
```

## Features

- Run linters on staged files
- Auto-fix issues
- Format code with Prettier
- Type checking

## Related Packages

- `@o2s/eslint-config` - ESLint configuration
- `@o2s/prettier-config` - Prettier configuration
- `lint-staged` - Lint-staged tool
