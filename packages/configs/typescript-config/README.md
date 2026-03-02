# @o2s/typescript-config

Shared TypeScript configuration for O2S packages, including base, frontend, and API configurations.

## Installation

```bash
npm install -D @o2s/typescript-config
```

## Usage

### Base Configuration

For general TypeScript packages:

```jsonc
// tsconfig.json
{
    "extends": "@o2s/typescript-config/base.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src",
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"],
}
```

### Frontend Configuration

For React/Next.js packages:

```jsonc
// tsconfig.json
{
    "extends": "@o2s/typescript-config/frontend.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src",
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"],
}
```

### API Configuration

For NestJS API packages:

```jsonc
// tsconfig.json
{
    "extends": "@o2s/typescript-config/api.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src",
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"],
}
```

## Features

- Strict TypeScript mode
- Path aliases support
- Modern ES features
- React JSX support
- NestJS decorators support

## Related Packages

- `@o2s/eslint-config` - ESLint configuration
- `@o2s/prettier-config` - Prettier configuration
