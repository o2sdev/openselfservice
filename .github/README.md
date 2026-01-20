# GitHub Actions CI/CD Documentation

This directory contains GitHub Actions workflows and composite actions for the Open Self Service (O2S) project.

## Workflows

### `deploy-docs.yaml`
Deploys the docs app to Vercel production environment.

**Trigger:** Push tag matching `docs-v*.*.*` pattern (e.g., `docs-v1.2.3`)

**Jobs:**
- `parse-docs-tag`: Extracts version from tag
- `build`: Builds the project and uploads build artifacts (dist, build, .next directories)
- `lint`: Lints the code - depends on `build` job and downloads build artifacts
- `test`: Runs tests - depends on `build` job and downloads build artifacts
- `deploy-docs`: Builds and deploys docs app to Vercel production (only runs after all quality checks pass)

**Required Secrets:**
- `VERCEL_ACCESS_TOKEN`: Vercel API token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_DOCS_PROJECT_ID`: Vercel project ID for docs app

### `release.yaml`
Publishes npm packages to the registry using Changesets.

**Trigger:** Push to `main` branch

**Jobs:**
- `skip-duplicate-check`: Prevents duplicate workflow runs
- `build`: Builds the project and uploads build artifacts (dist, build, .next directories)
- `lint`: Lints the code - depends on `build` job and downloads build artifacts
- `test`: Runs tests - depends on `build` job and downloads build artifacts
- `publish-packages`: Publishes packages via Changesets (only runs after all quality checks pass)

**Required Secrets:**
- `NPM_TOKEN`: npm authentication token
- `GITHUB_TOKEN`: GitHub token (automatically provided)
- `TURBO_TOKEN`: Turborepo token (optional, for remote caching)
- `TURBO_TEAM`: Turborepo team name (optional, for remote caching)

**Required Variables:**
- `TURBO_TEAM`: Turborepo team name (if using remote caching)

### `pull-request.yaml`
Runs code quality checks (build, lint, test) on pull requests and optionally deploys docs preview.

**Trigger:** Pull request events (`opened`, `synchronize`)

**Jobs:**
- `skip-duplicate-check`: Prevents duplicate workflow runs
- `changed-packages`: Determines which packages changed (composite action)
- `build`: Builds the project and uploads build artifacts (dist, build, .next directories) - always runs on PRs
- `lint`: Lints the code - depends on `build` job and downloads build artifacts - always runs on PRs
- `test`: Runs tests - depends on `build` job and downloads build artifacts - always runs on PRs
- `deploy-docs-preview`: Deploys docs preview to Vercel if docs package changed (only runs after all quality checks pass)

**Required Secrets:**
- `VERCEL_ACCESS_TOKEN`: Vercel API token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_DOCS_PROJECT_ID`: Vercel project ID for docs app

### `changed-packages` (Action)
Composite action that determines which packages have changed using Turborepo.

**Inputs:**
- `event-name` (required): GitHub event name (`pull_request` or `push`)
- `base-sha` (optional): Base SHA for pull requests (default: empty)
- `fetch-depth` (optional): Git fetch depth for checkout (default: `0`)

**Outputs:**
- `package_changed`: JSON string containing changed packages information from turbo dry-run

**Usage:** Used as a step in workflows to determine which packages changed

## Composite Actions

### `setup-env`
Sets up Node.js environment, installs dependencies, and Playwright browsers.

**Inputs:**
- `repo-token` (required): GitHub token for repository access

**Features:**
- Node.js 24 setup with npm caching
- Dependency installation via `npm ci`
- Playwright browser installation

### `build`
Runs the build process: checkout, setup environment, build project, and upload build artifacts.

**Inputs:**
- `repo-token` (required): GitHub token for repository access
- `fetch-depth` (optional): Git fetch depth for checkout (default: `0`)

**Steps:**
- Checks out code
- Prepares environment (Node.js, dependencies, Playwright)
- Builds project: `npm run build`
- Uploads build artifacts (dist, build, .next directories)

### `lint`
Runs lint checks: checkout, setup environment, download build artifacts, and lint.

**Inputs:**
- `repo-token` (required): GitHub token for repository access
- `fetch-depth` (optional): Git fetch depth for checkout (default: `0`)

**Steps:**
- Checks out code
- Prepares environment (Node.js, dependencies, Playwright)
- Downloads build artifacts
- Lints code: `npm run lint`

### `test`
Runs tests: checkout, setup environment, download build artifacts, and test.

**Inputs:**
- `repo-token` (required): GitHub token for repository access
- `fetch-depth` (optional): Git fetch depth for checkout (default: `0`)

**Steps:**
- Checks out code
- Prepares environment (Node.js, dependencies, Playwright)
- Downloads build artifacts
- Runs tests: `npm run test`


### `changed-packages`
Determines which packages have changed using Turborepo.

**Inputs:**
- `event-name` (required): GitHub event name (`pull_request` or `push`)
- `base-sha` (optional): Base SHA for pull requests (default: empty)
- `fetch-depth` (optional): Git fetch depth for checkout (default: `0`)

**Outputs:**
- `package_changed`: JSON string containing changed packages information from turbo dry-run

**Steps:**
- Checks out code with full history
- Runs `turbo build --dry-run=json` to determine changed packages
- Outputs JSON result for use in workflow conditions

### `deploy-vercel`
Unified action for deploying to Vercel (supports both production and preview environments).

**Inputs:**
- `vercel-token` (required): Vercel API token
- `environment` (required): Vercel environment (`production` or `preview`)
- `build-args` (optional): Additional arguments for `vercel build` command (e.g., `--prod`)
- `deploy-args` (optional): Additional arguments for `vercel deploy` command (e.g., `--prod`)

**Steps:**
- Installs Vercel CLI
- Pulls environment variables from Vercel (based on environment)
- Builds project locally
- Deploys prebuilt project to Vercel

### `deploy-docs`
Complete workflow for deploying docs app: checkout, setup environment, and deploy to Vercel.

**Inputs:**
- `repo-token` (required): GitHub token for repository access
- `vercel-token` (required): Vercel API token
- `vercel-project-id` (required): Vercel project ID for docs app
- `environment` (required): Vercel environment (`production` or `preview`)
- `fetch-depth` (optional): Git fetch depth for checkout (`0` for full history, `1` for shallow, default: `1`)
- `build-args` (optional): Additional arguments for Vercel build command
- `deploy-args` (optional): Additional arguments for Vercel deploy command

**Steps:**
- Checks out code
- Prepares environment (Node.js, dependencies, Playwright)
- Deploys to Vercel using `deploy-vercel` action

**Note:** This action consolidates the common deployment workflow used by both production and preview deployments. Quality checks are run separately as dedicated jobs before deployment.

## Best Practices

### Caching
- npm dependencies are cached via `actions/setup-node@v6`
- Turbo cache is handled automatically by Turborepo
- Playwright browsers are cached by the Playwright installer

### Concurrency
- All workflows use concurrency groups to prevent duplicate runs
- Production deployments (`deploy-docs.yaml`) use `cancel-in-progress: false`
- Preview and package publishing workflows use `cancel-in-progress: true`

### Permissions
- All workflows follow the principle of least privilege
- Permissions are explicitly defined per workflow
- Only necessary permissions are granted

### Error Handling
- All bash scripts use `set -e` to exit on error
- Timeouts are set for long-running steps
- Quality checks must pass before deployments

## Troubleshooting

### Workflow not triggering
- Check that the trigger conditions are met (branch name, tag pattern, etc.)
- Verify that the workflow file is in `.github/workflows/` directory
- Check GitHub Actions tab for any error messages

### Deployment failures
- Verify all required secrets are set in repository settings
- Check Vercel project configuration matches the project ID in secrets
- Review workflow logs for specific error messages

### Package publishing issues
- Ensure Changesets are properly configured in the repository
- Verify `NPM_TOKEN` has publish permissions
- Check that package versions follow semantic versioning

## Related Documentation

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Changesets Documentation](https://github.com/changesets/changesets)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
