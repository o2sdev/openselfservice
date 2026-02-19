# @o2s/typescript-config

Shared TypeScript configuration for O2S packages, including base, React, and API configurations.

## Installation

```bash
npm install -D @o2s/typescript-config
```

## Usage

### Base Configuration

For general TypeScript packages:

```json
// tsconfig.json
{
    "extends": "@o2s/typescript-config/base.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
}
```

### React Configuration

For React/Next.js packages:

```json
// tsconfig.json
{
    "extends": "@o2s/typescript-config/react.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
}
```

### API Configuration

For NestJS API packages:

```json
// tsconfig.json
{
    "extends": "@o2s/typescript-config/api.json",
    "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
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
