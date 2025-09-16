# Open Self Service Development Guidelines

This document provides essential information for developers working on the Open Self Service project. It includes build/configuration instructions, testing information, and additional development details.

## Build/Configuration Instructions

### Prerequisites

- Node.js version 22 or higher
- npm version 11.4.0 or higher

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/openselfservice.git
   cd openselfservice
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Workflow

The project uses Turbo for build orchestration and task running:

- **Development mode**: Run the development server with hot reloading
  ```bash
  npm run dev
  ```

- **Build**: Build all packages and applications
  ```bash
  npm run build
  ```

- **Start**: Start the production server
  ```bash
  npm run start
  ```

- **Lint**: Run linting across all packages
  ```bash
  npm run lint
  ```

- **Format**: Format code using Prettier
  ```bash
  npm run format
  ```

- **Documentation**: Start the documentation server
  ```bash
  npm run docs
  ```

- **Storybook**: Start Storybook for UI component development
  ```bash
  npm run storybook
  ```

## Testing Information

### Testing Framework

The project uses Vitest as its testing framework. Vitest is a fast and lightweight testing framework that's compatible with the Jest API.

### Setting Up Tests

To add tests to a package:

1. Create a `vitest.config.ts` file in the package root:
   ```typescript
   import { defineConfig } from 'vitest/config';

   export default defineConfig({
     test: {
       globals: true,
       environment: 'node',
     },
   });
   ```

2. Add test scripts to the package's `package.json`:
   ```json
   {
     "scripts": {
       "test": "vitest run",
       "test:watch": "vitest"
     }
   }
   ```

3. Make sure Vitest is installed as a dev dependency:
   ```json
   {
     "devDependencies": {
       "vitest": "^3.2.4"
     }
   }
   ```

### Writing Tests

Tests should be placed in files with `.test.ts` or `.test.tsx` extensions, adjacent to the files they're testing.

Example test file:

```typescript
import { describe, it, expect } from 'vitest';
import { myFunction } from './myFile';

describe('myFunction', () => {
  it('should work correctly', () => {
    expect(myFunction()).toBe(true);
  });
});
```

### Running Tests

- Run tests once:
  ```bash
  npm test
  ```

- Run tests in watch mode (for development):
  ```bash
  npm run test:watch
  ```

- Run tests for a specific package:
  ```bash
  npm test --filter=@o2s/package-name
  ```

## Additional Development Information

### Project Structure

The project is organized as a monorepo using npm workspaces:

- `apps/`: Contains standalone applications
- `packages/`: Contains shared packages
  - `blocks/`: UI blocks for composable applications
  - `cli/`: Command-line tools
  - `configs/`: Shared configuration files
  - `framework/`: Core framework code
  - `integrations/`: Integration with external services
  - `modules/`: Feature modules
  - `telemetry/`: Telemetry and analytics
  - `ui/`: UI components
  - `utils/`: Utility functions

### Code Style

The project uses ESLint and Prettier for code formatting and linting:

- ESLint is configured with custom rules for TypeScript
- Prettier is used for consistent code formatting
- Husky is used for pre-commit hooks to ensure code quality

### Creating New Components

The project provides generators for creating new components:

```bash
npm run generate:component
```

For UI components based on shadcn:

```bash
npm run generate:component:shadcn
```

### Dependency Management

When adding new dependencies:

1. Use `npm install` with the appropriate scope
2. For shared dependencies, consider adding them to the root package.json
3. Use `npm run update-deps` to interactively update dependencies

### Versioning and Releases

The project uses Changesets for versioning and publishing:

1. Create a changeset: `npm run changeset`
2. Version packages: `npm run version-packages`
3. Publish packages: `npm run release`
