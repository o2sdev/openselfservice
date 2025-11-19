# create-command

This command helps create new Cursor project commands using information provided by the developer and project knowledge from AGENTS.md.

## Core Rules

- **ALWAYS** load and reference AGENTS.md first
- **ALWAYS** ask clarifying questions until requirements are 100% clear
- **NEVER** guess if information is missing — ask before drafting
- **ALWAYS** follow naming conventions, models, modules, and structures defined in AGENTS.md
- **ALWAYS** propose missing details when they logically follow from AGENTS.md
- Maintain strict consistency with existing commands and system architecture

## Workflow

When the user invokes `/create-command`, follow this workflow:

### 1. Load AGENTS.md

First, confirm that AGENTS.md is loaded and will be used as the source of truth for:
- Project architecture
- Naming conventions
- Module structures
- Code style and conventions
- Existing command patterns

### 2. Gather Initial Information

Ask the developer for:

- **The name or goal of the command** (e.g., "create-user", "deploy-staging", "sync-data")
- **The module or system it belongs to** (e.g., "blocks", "integrations", "frontend", "api-harmonization")

### 3. Propose Initial Context

Based on AGENTS.md, propose:

- Relevant models from `@o2s/framework`
- Relevant APIs or endpoints
- Similar commands that already exist (check `.cursor/commands/` directory)
- Related blocks, integrations, or modules

### 4. Ask Clarifying Questions

Ask questions in these five categories:

**A) Input Parameters:**
- What parameters does the command accept?
- Are parameters required or optional?
- What are the expected formats/types?
- Are there default values?

**B) Expected Logic and Behavior:**
- What should the command do step-by-step?
- Are there conditional branches?
- What happens on success vs. failure?
- Should it interact with the user (prompts, confirmations)?

**C) Dependencies:**
- Which APIs, modules, or external services are needed?
- Are there npm packages or CLI tools required?
- Does it depend on specific integrations (Strapi, Redis, Algolia, Medusa)?
- Does it need access to framework modules?

**D) Output Format and Expected Result:**
- What should the command output/return?
- Should it create files, modify existing files, or execute commands?
- What format should the output be in (JSON, text, files)?
- Should it provide feedback to the user?

**E) Security, Permissions, or Role Requirements:**
- Are there authentication requirements?
- Does it need specific permissions?
- Should it validate user roles?
- Are there security considerations?

### 5. Generate Draft Command

After gathering all information, generate a DRAFT command with this structure:

```markdown
# Draft Command

**Name:** [command-name]

**Purpose:** [brief description]

**Context:** [module/system it belongs to, related components]

**Input:** [parameters, formats, required/optional]

**Logic / Rules:** [step-by-step behavior, conditionals, error handling]

**Integrations:** [APIs, modules, external services]

**Output:** [what it produces/returns]

**Security:** [authentication, permissions, validation]

**Notes:** [additional considerations, edge cases]
```

### 6. Request Approval

Ask: **"Do you approve this draft?"**

- If **not approved** → iterate based on feedback until correct
- If **approved** → proceed to final version

### 7. Generate Final Command

Once approved, generate the FINAL version of the command file in the exact format:

- Create file: `.cursor/commands/[command-name].md`
- Follow the same structure as `create-block.md`
- Include:
  - Command name as title
  - Purpose/description
  - Usage instructions
  - Step-by-step behavior
  - Examples
  - Notes and references to AGENTS.md

### 8. Provide Additional Information

After creating the command file, provide:

- **Example command invocation:**
  ```
  /[command-name] [parameters]
  ```

- **Example input/output:**
  - Show what the user provides
  - Show what the command does
  - Show expected results

- **Proposed tests:**
  - **Unit tests:** What should be tested in isolation
  - **Integration tests:** How it interacts with other systems
  - **Edge cases:** Error scenarios, missing inputs, invalid data

### 9. Suggest AGENTS.md Update

Suggest a new section to append to AGENTS.md:

```markdown
## Cursor Command: {command-name}

- **Purpose:** [what it does]
- **Parameters:** [input parameters]
- **Output:** [what it produces]
- **Roles:** [if applicable]
- **Dependencies:** [required modules/APIs]
- **Notes:** [additional information]
```

## Interaction Rule

If the developer gives incomplete or conflicting information, **request clarification before generating the draft**. Never proceed with assumptions.

## Example Usage

**Developer:** `/create-command`

**Assistant:** 
1. Loads AGENTS.md
2. Asks: "Please provide the name or goal of the command you want to create."
3. Follows the workflow above

## Notes

- Commands are stored in `.cursor/commands/` directory
- Command files use markdown format
- Commands should be self-documenting and follow project conventions
- Reference AGENTS.md for architecture and conventions
- Maintain consistency with existing commands like `create-block.md`


