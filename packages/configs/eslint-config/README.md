# @o2s/eslint-config

Shared ESLint configuration for O2S packages, supporting base, frontend, API, and UI configurations.

## Installation

```bash
npm install -D @o2s/eslint-config
```

## Usage

### Base Configuration

For general TypeScript packages:

```javascript
// eslint.config.js
import baseConfig from '@o2s/eslint-config/base';

export default baseConfig;
```

### Frontend Configuration

For Next.js/React frontend applications:

```javascript
// eslint.config.js
import frontendConfig from '@o2s/eslint-config/frontend';

export default frontendConfig;
```

### Frontend Block Configuration

For frontend block packages:

```javascript
// eslint.config.js
import frontendBlockConfig from '@o2s/eslint-config/frontend-block';

export default frontendBlockConfig;
```

### API Configuration

For NestJS API harmonization packages:

```javascript
// eslint.config.js
import apiConfig from '@o2s/eslint-config/api';

export default apiConfig;
```

### UI Configuration

For UI component packages:

```javascript
// eslint.config.js
import uiConfig from '@o2s/eslint-config/ui';

export default uiConfig;
```

## Features

- TypeScript support
- React/Next.js rules
- NestJS rules
- Prettier integration
- Zero warnings policy

## Related Packages

- `@o2s/prettier-config` - Prettier configuration
- `@o2s/typescript-config` - TypeScript configuration
