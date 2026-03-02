# create-o2s-app

CLI tool to scaffold new O2S applications with an interactive setup wizard.

## Usage

```bash
npx create-o2s-app@latest my-app
```

## Interactive Wizard

When you run `create-o2s-app`, it launches an interactive wizard that guides you through the setup:

1. **Project name** — Name of the directory to create (can also be passed as a CLI argument)
2. **Template** — Choose between `o2s`, `dxp`, or `custom`
3. **Blocks** — Select which UI blocks to include in your project
4. **Integrations** — Select backend integrations (e.g. Strapi, Zendesk, Medusa)
5. **Environment variables** — Configure required env vars for selected integrations

At the end, the wizard scaffolds your project and installs dependencies.

## Templates

| Template | Description |
|----------|-------------|
| `o2s` | Full O2S Customer Portal — ticket management, invoices, notifications, orders and more |
| `dxp` | DXP Frontend Starter — knowledge base, marketing portal, Digital Experience Platform |
| `custom` | Start from scratch — choose only the blocks and integrations you need |

## Options

| Option | Description |
|--------|-------------|
| `--template <template>` | Template to use: `o2s`, `dxp`, or `custom` |
| `--blocks <blocks>` | Comma-separated list of block names (skips block selection prompt) |
| `--integrations <integrations>` | Comma-separated list of integration names (skips integration selection prompt) |
| `--skip-install` | Skip the `npm install` step |
| `--directory <dir>` | Destination directory (defaults to project name) |

## Non-Interactive Mode

Pass all required options as CLI flags to skip the interactive prompts:

```bash
# Create an O2S portal with specific blocks and integrations
npx create-o2s-app@latest my-portal \
  --template o2s \
  --blocks ticket-list,invoice-list \
  --integrations zendesk,strapi-cms

# Create a DXP starter, skip install
npx create-o2s-app@latest my-dxp \
  --template dxp \
  --skip-install

# Custom setup with only selected blocks
npx create-o2s-app@latest my-custom \
  --template custom \
  --blocks article-list,article-details \
  --integrations strapi-cms
```

## What It Creates

```
my-app/
├── apps/
│   ├── frontend/          # Next.js application
│   └── api-harmonization/ # NestJS API harmonization server
├── packages/
│   ├── blocks/            # Selected UI blocks
│   └── integrations/      # Selected backend integrations
├── package.json           # Workspace root with Turborepo
├── turbo.json
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .env.local             # Pre-configured env vars for selected integrations
└── README.md
```

The `.env.local` file is generated automatically with all required environment variables for your selected integrations. Fill in the values before starting development.

> **Note:** The scaffolded project does not have a git repository initialized. Run `git init` in the project directory to start tracking changes.

## Related

- [O2S Documentation](https://openselfservice.com/docs)
- `@o2s/framework` — Core framework types and services
- `@o2s/telemetry` — Anonymous usage telemetry
