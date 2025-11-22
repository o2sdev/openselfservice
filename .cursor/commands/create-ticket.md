# create-ticket

This command helps developers create structured ticket descriptions by gathering requirements interactively and analyzing the codebase to provide comprehensive context for implementation.

## Core Rules

- **ALWAYS** load and reference AGENTS.md first
- **ALWAYS** gather information interactively through prompts
- **ALWAYS** analyze the codebase to find related files, similar implementations, and dependencies
- **ALWAYS** check for potential breaking changes
- **ALWAYS** follow naming conventions, models, modules, and structures defined in AGENTS.md
- **ALWAYS** provide actionable next steps based on project patterns

## Workflow

When the user invokes `/create-ticket`, follow this workflow:

### 1. Load AGENTS.md

First, confirm that AGENTS.md is loaded and will be used as the source of truth for:

- Project architecture
- Naming conventions
- Module structures
- Code style and conventions
- Block, integration, and module patterns

### 2. Interactive Information Gathering

Prompt the developer for the following information in order:

**A) Description:**

- Ask: "Please provide a brief description of what you want to do."
- Wait for user input
- Use this description to guide codebase analysis

**B) Ticket Type:**

- Ask: "What type of ticket is this?"
- Provide suggestions: `feature`, `bug`, `enhancement`, `refactor`, `documentation`
- Allow user to specify a custom type if needed

**C) Target Area:**

- Ask: "Which area of the project does this affect?"
- Provide suggestions based on AGENTS.md:
    - `blocks` - For work on reusable UI blocks (`packages/blocks/*`)
    - `integrations` - For integration adapters (`packages/integrations/*`)
    - `frontend` - For Next.js frontend app (`apps/frontend/`)
    - `api-harmonization` - For NestJS backend (`apps/api-harmonization/`)
    - `framework` - For core framework modules (`packages/framework/`)
    - `ui` - For base UI components (`packages/ui/`)
    - `docs` - For documentation (`apps/docs/`)
    - `other` - For other areas (prompt for specifics)

**D) Ticket Name:**

- Ask: "What should the ticket file be named? (e.g., 'add-user-profile-block', 'fix-auth-bug')"
- Validate that the name is suitable for a filename (no special characters, spaces replaced with hyphens)
- If a file with that name already exists, warn the user

### 3. Codebase Analysis

After gathering initial information, perform comprehensive codebase analysis:

**A) Find Related Files/Modules:**

- Use semantic search to find files related to the description and target area
- For blocks: Search in `packages/blocks/*` and check registration in `apps/api-harmonization/src/app.module.ts` and `apps/frontend/src/blocks/renderBlocks.tsx`
- For integrations: Search in `packages/integrations/*` and check configuration in `packages/configs/integrations/` and `apps/api-harmonization/src/app.config.ts`
- For framework: Search in `packages/framework/src/` for relevant modules
- For frontend: Search in `apps/frontend/src/` for related components, containers, or pages
- Identify all relevant files that might be affected or need modification

**B) Check for Similar Implementations:**

- Search for existing blocks, integrations, or modules that implement similar functionality
- Reference similar patterns (e.g., if creating a block, reference existing block structure)
- Identify conventions to follow based on existing code

**C) Identify Dependencies:**

- **Framework Dependencies:**
    - Check which `@o2s/framework` modules are needed
    - Identify required framework interfaces or models

- **Integration Dependencies:**
    - Determine if specific integrations are needed (Strapi, Redis, Algolia, Medusa, mocked)
    - Check integration configuration requirements

- **Package Dependencies:**
    - Identify required npm packages
    - Check peer dependencies for blocks (React, Next.js, NestJS, etc.)

- **Related Components:**
    - Find blocks, modules, or components that might be affected
    - Identify components that might need updates

**D) Check for Breaking Changes:**

- Analyze if changes might affect existing APIs or interfaces
- Check for potential impacts on:
    - Registered modules in `apps/api-harmonization/src/app.module.ts`
    - Integration configs in `apps/api-harmonization/src/app.config.ts`
    - Block types in `apps/api-harmonization/src/modules/page/page.model.ts`
    - Block renderers in `apps/frontend/src/blocks/renderBlocks.tsx`
- Identify files that might need updates due to the changes

### 4. Generate Implementation Steps

Based on the analysis and AGENTS.md patterns, suggest implementation steps:

- **For Blocks:**
    1. Create block package structure (api-harmonization, frontend, sdk)
    2. Register block in `app.module.ts`
    3. Add block type to `page.model.ts`
    4. Add block renderer to `renderBlocks.tsx`
    5. Follow block naming convention: `@o2s/blocks.<block-name>`

- **For Integrations:**
    1. Create integration package structure
    2. Implement framework module interfaces
    3. Export integration config
    4. Update `@o2s/configs.integrations`
    5. Wire up in `app.config.ts`

- **For Framework Modules:**
    1. Create module in `packages/framework/src/`
    2. Define normalized data models
    3. Export service and controller interfaces
    4. Update `ApiConfig` if needed

- **For Frontend:**
    1. Create components following App Router structure
    2. Use Server Components as default
    3. Follow next-intl patterns for i18n
    4. Use `@o2s/ui` components

### 5. Generate Markdown File

Create a markdown file in the project root with the following structure:

```markdown
# {Ticket Name}

## Description

{User-provided description}

## Ticket Type

{Selected ticket type}

## Target Area

{Selected target area}

## Requirements/Scope

{Extracted requirements from description and analysis}

## Related Files/Modules

{List of relevant files found in codebase with brief descriptions}

## Dependencies

### Framework Modules

- {List of required @o2s/framework modules}

### Integrations

- {List of required integrations}

### Packages

- {List of required npm packages}

### Related Components

- {List of related blocks/modules/components}

## Implementation Steps

{Step-by-step implementation guide based on project patterns}

## Breaking Changes

{Any potential breaking changes identified, or "None identified"}

## Additional Notes

{Context from codebase analysis, conventions to follow, references to AGENTS.md}
```

### 6. File Creation

- Create the file: `{ticket-name}.md` in the project root
- If file already exists, warn the user and ask if they want to overwrite
- Provide feedback: "Ticket created successfully at {ticket-name}.md"

### 7. Provide Summary

After creating the ticket, provide a brief summary:

- Confirm file location
- Highlight key findings from codebase analysis
- Mention any important considerations or next steps

## Error Handling

- **Invalid Target Area:** Suggest valid options from AGENTS.md
- **No Related Files Found:** Note in ticket: "No directly related files found. This may be a new feature."
- **File Name Conflicts:** Warn user and ask for confirmation before overwriting
- **Missing Information:** If description is too vague, ask for clarification before proceeding

## Examples

### Example 1: Creating a New Block

**User Input:**

- Description: "I want to create a new block that displays a list of user notifications"
- Ticket Type: "feature"
- Target Area: "blocks"
- Ticket Name: "notification-list-block"

**Command Behavior:**

1. Gathers information interactively
2. Searches for existing notification-related code
3. Finds `@o2s/blocks.notification-list` (if exists) or related notification blocks
4. Identifies framework dependencies: `@o2s/framework` Notifications module
5. Checks registration patterns in `app.module.ts` and `renderBlocks.tsx`
6. Generates ticket with implementation steps following block creation patterns

### Example 2: Adding a New Integration

**User Input:**

- Description: "I need to integrate with a new CMS system called Contentful"
- Ticket Type: "feature"
- Target Area: "integrations"
- Ticket Name: "contentful-cms-integration"

**Command Behavior:**

1. Gathers information interactively
2. Searches for existing CMS integrations (Strapi, mocked)
3. Identifies framework CMS module requirements
4. Checks integration configuration patterns
5. Generates ticket with steps for creating new integration following existing patterns

## Notes

- Commands are stored in `.cursor/commands/` directory
- Ticket files are created in the project root
- Always reference AGENTS.md for architecture and conventions
- Maintain consistency with existing project patterns
- Provide actionable, specific implementation steps
- Use semantic search to find relevant code, not just file names
