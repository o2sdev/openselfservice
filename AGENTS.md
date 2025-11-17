# Agent Guidelines

This file provides guidance to AI coding assistants (including Claude Code, Cursor, Windsurf, and others) when working with code in this repository.

## Overview

Open Self Service (O2S) is an open-source framework for building composable customer self-service portals. It's an API-agnostic system that aggregates multiple headless APIs through an integration layer and provides a scalable Next.js frontend.

**Tech Stack:**

- Frontend: Next.js 15 (App Router), React 19, Tailwind CSS 4, next-intl, next-auth
- API Harmonization: NestJS 11, TypeScript
- Monorepo: Turborepo with npm workspaces
- Node: >=22 (specified in package.json engines)

## Development Commands

### Running the Project

```bash
# Start all services in development mode (with --no-cache flag)
npm run dev

# Run individual apps
cd apps/api-harmonization && npm run dev  # NestJS API server
cd apps/frontend && npm run dev            # Next.js frontend (with Turbopack)
cd apps/frontend && npm run dev:https      # Next.js with HTTPS
```

### Building

```bash
# Build all packages and apps
npm run build

# Build specific app
cd apps/api-harmonization && npm run build
cd apps/frontend && npm run build
```

### Testing

```bash
# Run tests across all packages
npm run test

# Run tests in specific app
cd apps/api-harmonization && npm test
```

### Linting & Formatting

```bash
# Lint all packages
npm run lint

# Format all packages
npm run format

# Lint specific app
cd apps/api-harmonization && npm run lint
cd apps/frontend && npm run lint
```

### Other Useful Commands

```bash
# Generate new components using Turbo generators
npm run generate

# Run Storybook (UI component library)
npm run storybook

# Update dependencies interactively
npm run update-deps

# Find missing dependencies
npm run find-missing-deps

# Clean all node_modules and build artifacts
npm run clean

# Eject a block (custom CLI tool)
npm run eject-block

# Run documentation site
npm run docs

# Changesets (for versioning)
npm run changeset
npm run version-packages
npm run release
```

## Architecture

### Monorepo Structure

O2S uses **Turborepo** to manage a monorepo with multiple apps and packages. The workspace structure includes:

```
/apps                           # Deployable applications
  /api-harmonization           # NestJS backend (integration layer)
  /frontend                    # Next.js frontend application
  /docs                        # Documentation site

/packages                       # Shared packages
  /blocks/*                    # Reusable UI blocks (25+ blocks)
  /framework                   # Core framework modules & SDK
  /integrations/*              # Integration adapters (Strapi, Redis, Algolia, Medusa, mocked)
  /modules/*                   # Feature modules (e.g., surveyjs)
  /ui                          # Base UI component library (shadcn/ui + Tailwind)
  /utils/*                     # Utility packages
  /configs/*                   # Shared configurations
  /cli/*                       # CLI tools
  /telemetry                   # Telemetry package
```

### Key Concepts

#### 1. API Harmonization Layer

The `apps/api-harmonization` NestJS application serves as an **integration layer** that:

- Aggregates data from multiple backend services (CMS, CRM, ERP, etc.)
- Normalizes data into a consistent data model
- Provides a unified API for the frontend
- Prevents vendor lock-in by abstracting backend implementations

**Module Registration Pattern:**
All framework modules and blocks are registered in `apps/api-harmonization/src/app.module.ts` using `.register(AppConfig)` pattern. The `AppConfig` (defined in `app.config.ts`) maps integration configurations to modules like Users, Organizations, Tickets, CMS, etc.

**Important:** Never use Tailwind classes in api-harmonization code. It should remain decoupled from frontend styling decisions.

#### 2. Framework Package

The `@o2s/framework` package is the core of O2S and provides:

- **Base modules** for common domains: Users, Organizations, Tickets, Notifications, Articles, CMS, Cache, Invoices, Orders, Products, BillingAccounts, Resources, Search, Auth
- **Normalized data models** that integrations must implement
- **SDK** for communicating with the API Harmonization server from frontend or other TypeScript apps
- Located at `packages/framework/src/`

Framework modules are dynamically registered with specific integration configs (see `app.config.ts` and `app.module.ts`).

#### 3. Blocks

Blocks are **self-contained, reusable UI components** that represent a specific feature or page section. Each block has three parts:

- `api-harmonization/` - NestJS module, controller, service, DTOs for backend logic
- `frontend/` - React component for rendering in Next.js
- `sdk/` - TypeScript SDK client for fetching block data

**Block naming:** `@o2s/blocks.<block-name>` (e.g., `@o2s/blocks.article`, `@o2s/blocks.ticket-list`)

Blocks are imported and registered in both:

- `apps/api-harmonization/src/app.module.ts` (backend module registration)
- `apps/frontend/src/blocks/` (frontend component usage)

#### 4. Integrations

Integrations are adapters that implement framework interfaces for specific backend services:

- `@o2s/integrations.strapi-cms` - Strapi CMS adapter
- `@o2s/integrations.redis` - Redis cache adapter
- `@o2s/integrations.algolia` - Algolia search adapter
- `@o2s/integrations.medusajs` - Medusa commerce adapter
- `@o2s/integrations.mocked` - Mock data for development

Integrations are configured in `@o2s/configs.integrations` and wired up via `AppConfig`.

#### 5. Frontend Application

The `apps/frontend` Next.js app uses:

- **App Router** architecture (Next.js 15)
- **Server Components** as default
- **next-intl** for internationalization (i18n)
- **next-auth** for authentication
- **@o2s/ui** for base UI components
- **Blocks** imported from `@o2s/blocks.*` packages

Frontend structure:

- `src/app/` - App Router pages and layouts
- `src/blocks/` - Block component integration
- `src/containers/` - Page-level container components
- `src/auth/` - Authentication configuration
- `src/actions/` - Server actions
- `src/api/` - API route handlers
- `src/i18n/` - Internationalization setup

#### 6. Semantic Variants & Mapping Helpers

When the API harmonization layer provides **semantic variants** (e.g., `'CRITICAL'`, `'HIGH'`, `'PENDING'`, `'COMPLETED'`), create **mapping helpers** in `packages/utils/frontend/src/mappings/` to translate these to UI styling classes or component variants. This maintains separation between backend semantics and frontend styling.

## Code Style & Conventions

**General:**

- Use descriptive variable names (no single-letter identifiers)
- Write self-documenting code
- Expose only necessary, well-typed exports
- **Never use `any` type** - use specific types with union narrowing
- Prefer functional programming over class-based approaches
- All comments must be in English

**TypeScript:**

- Strict type checking enabled
- No implicit any
- Extract and share common types rather than duplicating

**Imports:**

- Sorted using `@trivago/prettier-plugin-sort-imports`
- Use path aliases from `tsconfig.json`

**Tailwind (Frontend only):**

- Use responsive variants (sm:, md:, lg:, xl:)
- Use state variants (hover:, focus:, active:, disabled:)
- Leverage Tailwind CSS 4 features

## Contributing Workflow

This project follows **Conventional Commits** and uses **Changesets** for versioning.

### Before Creating a PR

1. Create a changeset to document your changes:

    ```bash
    npm run changeset
    ```

    This will prompt you to select packages, change type (major/minor/patch), and add a description.

2. Ensure code quality:
    ```bash
    npm run lint
    npm run build
    npm run test
    ```

### Branch Naming

Use descriptive branch names:

- `feature/your-feature-name`
- `fix/auth-bug`
- `docs/update-api-reference`

### Commit Messages

Follow Conventional Commits format:

```
feat: add new authentication flow
fix: resolve dashboard layout bug
docs: update API reference
fix(frontend): fixing styles for Y component
```

## Security & Build Verification

- After making changes, always verify the project compiles successfully
- Immediately address any build issues
- Check for security vulnerabilities in dependencies

## Important Files

- `turbo.json` - Turborepo pipeline configuration
- `package.json` (root) - Workspace configuration and root-level scripts
- `apps/api-harmonization/src/app.module.ts` - Main NestJS module with all registrations
- `apps/api-harmonization/src/app.config.ts` - Integration configuration mapping
- `apps/frontend/next.config.ts` - Next.js configuration
- `AGENTS.md` - Detailed agent guidelines and conventions (living document)
- `CONTRIBUTING.md` - Contribution guidelines

## Notes

- The project uses **npm workspaces** with `npm@11.6.2` as the package manager
- All packages use shared configs: `@o2s/typescript-config`, `@o2s/eslint-config`, `@o2s/prettier-config`
- The API Harmonization server uses **cookie-based authentication** (handled via middleware)
- Frontend uses **standalone output** mode for production deployments
- SVG files are handled via `@svgr/webpack` for both webpack and Turbopack
- Storybook is configured for UI component development
- Git hooks are managed with Husky and lint-staged
