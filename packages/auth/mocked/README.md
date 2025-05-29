# Database Setup

This project uses Prisma (by default with SQLite). Here's how to set up and manage the database:

### Initial Setup

1. Set up your database URL in `.env`:

```env
AUTH_DATABASE_URL="file:./dev.db"  # For SQLite
```

2. Initialize the database:

```bash
npm run init
```

> **_NOTE:_** This should happen automatically after initializing the project, but can be run manually as well.

## Development Workflow

### Making Database Changes

1. Edit `prisma/schema.prisma`
2. Generate a migration:

```bash
npx prisma migrate dev --name describe_your_change
```

This will:

- Create a migration file
- Apply the migration
- Regenerate Prisma Client

#### Working with Existing Database

- View database: `npx prisma studio`
- Reset database: `npx prisma migrate reset`
- Update client after schema changes: `npx prisma generate`

## Database URL Format

The `AUTH_DATABASE_URL` can be configured for different environments:

```env
# SQLite (Development)
AUTH_DATABASE_URL="file:./dev.db"

# PostgreSQL (Production example)
AUTH_DATABASE_URL="postgresql://user:password@host:port/database"
```

## Common Commands

```bash
# Generate Prisma Client
npx prisma generate

# Create a migration
npx prisma migrate dev

# Apply migrations
npx prisma migrate deploy

# Reset database
npx prisma migrate reset

# Seed database
npx prisma db seed

# Open Prisma Studio
npx prisma studio
```
