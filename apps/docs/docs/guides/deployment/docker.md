---
title: Deploy with Docker
description: Build and run Open Self Service using Docker and Docker Compose.
---

This project ships with production-ready Dockerfiles for both apps and a `docker-compose.yml` at the repository root.

Prerequisites:

- Docker 24+
- Docker Compose v2+

Recommended approach: use the provided `docker-compose.yml` to run both services together.

Create a shared network (first time only):

```bash
docker network create app_network
```

Start both services:

```bash
docker compose up -d --build
```

This will:

- Build `apps/frontend/Dockerfile` and expose it on `http://localhost:3000`
- Build `apps/api-harmonization/Dockerfile` and expose it on `http://localhost:3001`

## Environment variables

The `docker-compose.yml` includes sane defaults. Adjust as needed (especially external API keys).

- Frontend (Next.js):
  - `NEXT_PUBLIC_BASE_URL` (e.g. `http://localhost:3000`)
  - `NEXT_PUBLIC_API_URL` (public API URL, e.g. `http://localhost:3001/api`)
  - `NEXT_PUBLIC_API_URL_INTERNAL` (internal container URL, e.g. `http://api-harmonization:3001/api`)
  - `NEXT_PUBLIC_DEFAULT_LOCALE`, `NEXT_PUBLIC_SUPPORTED_LOCALES`
  - Optional logging: `NEXT_PUBLIC_LOG_LEVEL`, `NEXT_PUBLIC_LOG_FORMAT`, `NEXT_PUBLIC_LOG_COLORS_ENABLED`
  - Auth (optional): `AUTH_SECRET`, `AUTH_TRUST_HOST`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_DATABASE_URL`, `AUTH_DEFAULT_USER_ROLE`

- API (NestJS):
  - `PORT` (e.g. `3001`)
  - `API_PREFIX` (e.g. `api`)
  - `FRONT_BASE_URLS` (comma-separated, e.g. `http://localhost:3000`)
  - Optional logging: `LOG_LEVEL`, `LOG_FORMAT`, `LOG_COLORS_ENABLED`
  - Integrations: see `/docs/integrations` for provider-specific variables (e.g. `CMS_STRAPI_BASE_URL`, `ALGOLIA_*`, `MEDUSAJS_*`, `CACHE_*`, etc.)

## Useful commands

```bash
# View logs
docker compose logs -f frontend
docker compose logs -f api-harmonization

# Rebuild after changes
docker compose build --no-cache frontend api-harmonization

# Stop
docker compose down
```

Build images manually (optional)

```bash
# from repo root
docker build -t o2s-frontend -f apps/frontend/Dockerfile .
docker build -t o2s-api -f apps/api-harmonization/Dockerfile .

docker run --rm -p 3000:3000 --network app_network \
  -e NEXT_PUBLIC_BASE_URL=http://localhost:3000 \
  -e NEXT_PUBLIC_API_URL=http://localhost:3001/api \
  -e NEXT_PUBLIC_API_URL_INTERNAL=http://api-harmonization:3001/api \
  o2s-frontend

docker run --rm -p 3001:3001 --network app_network \
  -e PORT=3001 -e API_PREFIX=api -e FRONT_BASE_URLS=http://localhost:3000 \
  o2s-api
```

**Note:** The Dockerfiles use Turborepo's `turbo prune` with `@dxp/frontend` and `@dxp/api-harmonization` package names internally. This is handled automatically by the build process.

## Example Dockerfiles

See the repository for maintained examples:

- `apps/frontend/Dockerfile`
- `apps/api-harmonization/Dockerfile`


