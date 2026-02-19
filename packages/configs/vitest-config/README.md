# @o2s/vitest-config

Shared Vitest configuration for O2S packages, supporting block and API test configurations.

## Installation

```bash
npm install -D @o2s/vitest-config
```

## Usage

### Block Configuration

For frontend block packages:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import blockConfig from '@o2s/vitest-config/block';

export default defineConfig({
    ...blockConfig,
    // Your custom config
});
```

### API Configuration

For API harmonization packages:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import apiConfig from '@o2s/vitest-config/api';

export default defineConfig({
    ...apiConfig,
    // Your custom config
});
```

## Features

- TypeScript support
- Coverage reporting
- Test environment setup
- Path aliases support

## Related Packages

- `@o2s/typescript-config` - TypeScript configuration
- `vitest` - Vitest test framework
