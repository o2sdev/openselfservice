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
npx create-o2s-app [name]
```

Provide an optional project name, or omit it to be prompted.

### Options

- `--directory [directory]` - Specify the destination directory (default: `my-o2s-project`)

### Examples

```bash
# Create app with default directory name
npx create-o2s-app my-app

# Create app in a custom directory
npx create-o2s-app --directory my-custom-folder
```

## What It Creates

The CLI scaffolds a complete O2S application with:

- Next.js frontend application
- NestJS API harmonization backend
- TypeScript configuration
- ESLint and Prettier setup
- Basic project structure
- Example configuration files

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
