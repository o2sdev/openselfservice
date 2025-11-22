# generate-pr-description

This command generates a pull request description by comparing the current branch with `main` and analyzing the changes to fill out the PR template.

## Core Rules

- **ALWAYS** compare the current branch with `main` branch
- **ALWAYS** analyze git diff to understand what changed
- **ALWAYS** generate concise, English descriptions
- **ALWAYS** follow the exact template format provided
- **ALWAYS** be specific about changes, avoiding generic descriptions
- **ALWAYS** identify the type of change (bugfix, feature, refactor, etc.)

## Workflow

When the user invokes `/generate-pr-description`, follow this workflow:

### 1. Get Current Branch Information

- Get the current branch name using git
- Verify that we're not on `main` branch (warn if we are)
- Get the base branch (default: `main`)

### 2. Analyze Git Diff

Use git commands to analyze changes:

**A) Get Changed Files:**

- List all files that differ between current branch and `main`
- Categorize changes: added, modified, deleted, renamed

**B) Get Diff Statistics:**

- Count lines added/removed
- Identify which parts of the codebase are affected (apps, packages, blocks, etc.)

**C) Analyze Commit Messages:**

- Review commit messages in the branch (if available)
- Extract key information about the purpose of changes

**D) Examine File Changes:**

- For modified files, understand the nature of changes:
    - New features added
    - Bug fixes
    - Refactoring
    - Documentation updates
    - Configuration changes
    - Dependencies updates

### 3. Determine PR Type

Based on the analysis, determine what type of PR this is:

- **Bugfix** - Fixes a bug or issue
- **Feature** - Adds new functionality
- **Enhancement** - Improves existing functionality
- **Refactor** - Code restructuring without changing behavior
- **Documentation** - Documentation updates
- **Configuration** - Config or dependency changes

### 4. Generate PR Description

Fill out the template with analyzed information:

```markdown
**What does this PR do?**

- [x] {PR Type} - {Brief one-line description}

**Related Ticket(s)**

- {Extract ticket reference from commits or branch name, or use "Notion Ticket" if not found}

**Key Changes**

- {High-level description of what was done to address the issue}
    - Focus on the main changes and their purpose
    - Be specific about which files/modules were affected
    - Mention any architectural changes or patterns introduced
- {Side effects and related changes}
    - List 1-3 related changes that were necessary
    - If more than 3 side effects, note that this might indicate too many changes in one PR

**How to test**

**Setup:**

- {List any setup requirements: migrations, installations, environment variables, etc.}
- {Mention if no special setup is needed}

**Testing Steps:**

1. {Step-by-step instructions to test the changes}
2. {Continue with numbered steps}
3. {Include specific test scenarios based on the changes}
```

### 5. Analysis Guidelines

**For Key Changes Section:**

- Start with the main purpose: "This PR {verb} {what} to {why}"
- List specific files/modules changed
- Mention any breaking changes or API modifications
- Note any new dependencies or configurations

**For Side Effects:**

- Only list changes that are directly related to the main change
- If there are many unrelated changes, note: "This PR contains multiple unrelated changes that should be split into separate PRs"
- Examples of valid side effects:
    - "Updated related types in framework module"
    - "Added missing tests for the new feature"
    - "Updated documentation to reflect changes"

**For Testing Section:**

- Be specific and actionable
- Include commands to run if needed
- Mention specific features to test
- Include edge cases if relevant
- If changes affect multiple areas, provide testing steps for each

### 6. File Analysis Patterns

**For Block Changes:**

- Note if block was added/modified
- Mention registration in `app.module.ts` and `renderBlocks.tsx`
- Check if SDK was updated

**For Integration Changes:**

- Note configuration changes in `app.config.ts`
- Mention any new integration adapters

**For Framework Changes:**

- Note API changes or new interfaces
- Mention any breaking changes to normalized models

**For Frontend Changes:**

- Note if pages, components, or containers were modified
- Mention any routing or i18n changes

**For Package Changes:**

- Note dependency updates
- Mention if new packages were added

### 7. Output Format

Generate the PR description and:

1. Display it in a code block for easy copying
2. Offer to save it to a file (e.g., `pr-description.md`)
3. Provide a summary of what was analyzed

## Error Handling

- **No changes found:** Inform user that current branch is identical to main
- **Cannot access git:** Provide instructions to ensure git is available
- **Branch not found:** Suggest checking branch name
- **Large number of changes:** Warn if PR contains too many unrelated changes

## Examples

### Example 1: Bugfix PR

**Analysis:**

- Modified: `packages/blocks/ticket-list/src/frontend/TicketList.tsx`
- Fixed: Incorrect date formatting in ticket list
- Related: Updated types in `packages/blocks/ticket-list/src/sdk/types.ts`

**Generated Description:**

```markdown
**What does this PR do?**

- [x] My bugfix

**Related Ticket(s)**

- Notion Ticket

**Key Changes**

- Fixed incorrect date formatting in ticket list component that was displaying dates in wrong timezone
- Updated ticket list types to ensure date fields are properly typed as Date objects
- Modified `TicketList.tsx` to use proper date formatting utility from `@o2s/utils/frontend`

**How to test**

**Setup:**

- No migrations or additional installations needed
- Ensure you have the latest dependencies: `npm install`

**Testing Steps:**

1. Navigate to a page that displays the ticket list block
2. Verify that ticket dates are displayed in the correct timezone
3. Check that dates are formatted consistently (e.g., "2 days ago" or "Jan 15, 2024")
4. Test with tickets from different time periods to ensure formatting works correctly
```

### Example 2: Feature PR

**Analysis:**

- Added: New block `packages/blocks/article-search/`
- Modified: `apps/api-harmonization/src/app.module.ts` (registration)
- Modified: `apps/frontend/src/blocks/renderBlocks.tsx` (renderer)
- New dependencies: None

**Generated Description:**

```markdown
**What does this PR do?**

- [x] My feature

**Related Ticket(s)**

- Notion Ticket

**Key Changes**

- Added new `article-search` block that allows users to search and filter articles using Algolia integration
- Implemented block in three parts: NestJS module/controller in `api-harmonization/`, React component in `frontend/`, and TypeScript SDK
- Registered block in `app.module.ts` and added renderer to `renderBlocks.tsx` following existing block patterns
- Block uses `@o2s/framework` Search module and `@o2s/integrations.algolia` for search functionality

**How to test**

**Setup:**

- Ensure Algolia integration is configured in `app.config.ts`
- Run `npm install` to install any new dependencies

**Testing Steps:**

1. Add the article-search block to a page via CMS
2. Verify that the search input renders correctly
3. Type a search query and verify results are displayed
4. Test filtering functionality (if implemented)
5. Verify that clicking on a result navigates to the article detail page
6. Test with empty search results to ensure proper "no results" message
```

## Notes

- Always be concise but specific
- Use present tense for descriptions ("Adds feature" not "Added feature")
- Focus on what changed and why, not implementation details
- If PR is too large or contains unrelated changes, suggest splitting it
- Reference specific files/modules when relevant
- Keep testing steps actionable and clear
