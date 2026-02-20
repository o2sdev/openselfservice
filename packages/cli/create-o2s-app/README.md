# create-o2s-app

CLI tool to scaffold new O2S applications with Next.js and NestJS setup.

## Installation

```bash
npm install -g create-o2s-app
```

Or use with npx:

```bash
npx create-o2s-app
```

## Usage

### Basic Usage

```bash
npx create-o2s-app my-app
```

### Options

- `--template <template>` - Specify template (default: `default`)
- `--package-manager <pm>` - Specify package manager (`npm`, `yarn`, `pnpm`)
- `--skip-install` - Skip installing dependencies
- `--skip-git` - Skip initializing git repository

### Examples

```bash
# Create app with specific template
npx create-o2s-app my-app --template default

# Use yarn as package manager
npx create-o2s-app my-app --package-manager yarn

# Skip installation
npx create-o2s-app my-app --skip-install
```

## What It Creates

The CLI scaffolds a complete O2S application with:

- Next.js frontend application
- NestJS API harmonization backend
- TypeScript configuration
- ESLint and Prettier setup
- Basic project structure
- Example configuration files
- Git repository initialization

## Project Structure

```
my-app/
├── apps/
│   ├── frontend/          # Next.js application
│   └── api-harmonization/ # NestJS backend
├── packages/              # Shared packages
├── package.json
├── turbo.json
└── README.md
```

## Related Packages

- `@o2s/framework` - Core framework
- `@o2s/telemetry` - Optional telemetry
