# Agent Guidelines

This file contains guidelines and conventions for working with the Open Self Service (O2S) codebase. These instructions help maintain consistency and ensure proper development practices across the project.

This is a living document that will be expanded over time as the project evolves.

## Conventions

<!-- TODO: Add naming conventions, code style basics -->

## Project Structure

O2S is organized within a monorepo setup. This section explains how different packages and applications interact, how Turborepo is used for managing dependencies, and how external integrations fit into the system.

### Monorepo

This project relies upon Turborepo to manage the apps and internal packages within the monorepo. O2S leverages Turborepo by simplifying the process of running, building and linting every sub-package - this can easily be done by running scripts from the root-level package.json.

### Packages

The packages can be either:

- **Internal ones** (used only within the monorepo)
- **Publishable** (for cases when you want them to be accessible to other projects)

Currently, when using the `create-o2s-app` starter, there is one package created:

- `packages/ui` - the UI library of React components, offering a range of building blocks that can be used when implementing more complex components. Currently, this is an internal package used only within the frontend app.

### Apps

The apps are a type of packages that need to be built and run (either locally or remotely).

When using `create-o2s-app` there are two apps created:

- `apps/api-harmonization` - the API Harmonization server built on Nest.js, responsible for aggregations of data from different integrations
- `apps/frontend` - the Next.js frontend app, responsible for rendering the views in the browser
    - dependent on `packages/ui` for base UI components
    - dependent on `apps/api-harmonization` for harmonized data model for components that aggregate data from integrations

### External Packages

While not part of the starter created when using `create-o2s-app`, there are still a few packages that are used within O2S. They are maintained in the main GitHub repository, and are published as NPM packages.

- `@o2s/framework` - Defines the base modules that can be plugged into the api-harmonization application, as well as provides the normalized data model which can be used when implementing new integrations. It also provides the SDK that can be used to communicate with the API Harmonization server.

- `@o2s/integrations.*` - Under this category falls every integration that is provided by O2S. These integrations are published as NPM packages and are ready to be installed into the api-harmonization application and then used as data sources for the apps.

## Blocks

<!-- TODO: Add block structure and conventions -->

## API Harmonization

- **Never use Tailwind classes in api-harmonization part**: Avoid using Tailwind classes in api-harmonization part - it makes it tightly coupled with the current approach to styling on the frontend, and will break if we ever migrate away from Tailwind.

<!-- TODO: Add server-side patterns (NestJS) -->

### Decoupling from Frontend Styling

## Frontend

- Use responsive variants (sm:, md:, lg:, etc.) for adaptive designs
- Leverage state variants (hover:, focus:, active:, etc.) for interactive elements

### Frontend Mappings

- **Create mapping helpers to translate semantic variants to UI styling**: When the API harmonization layer provides semantic variants (e.g., `'CRITICAL'`, `'HIGH'`, `'PENDING'`, `'COMPLETED'`), create mapping helpers in `packages/utils/frontend/src/mappings/` to translate these variants to actual styling classes or UI component variants.

## Integrations

<!-- TODO: Add integration patterns -->

## Code Style

- Use descriptive variable names; avoid single-letter identifiers.
- Write code that clearly explains itself, rather than relying on in-line comments.
- Expose only necessary, well-typed exports from each module.
- Do not use `any` type; instead, apply specific types and use union narrowing where appropriate. If unsure, extract and share common types rather than defaulting to `any`.
- Opt for compact, reusable utilities and libraries that introduce minimal or no extra dependencies wherever practical.
- Prioritize functional programming principles, such as pure functions and data-first utilities, instead of using class-based approaches.
- When code comments are required for clarity, always write them in English.

## Security

- After making changes, always check that the project compiles successfully and immediately address any build issues.

## Testing

<!-- TODO: Add testing conventions -->

## Documentation

<!-- TODO: Add documentation standards -->
