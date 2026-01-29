---
title: Deploy on Vercel
description: Configure a monorepo deployment of the Next.js frontend to Vercel.
---

This section covers deploying the Next.js `frontend` app to Vercel. The NestJS API is best deployed as a container (see [Deploy with Docker](./docker)).

## Project settings

1. Import the GitHub repository into Vercel.
2. In Project Settings → General:
    - Root Directory: `apps/frontend`
    - Framework Preset: Next.js
3. In Project Settings → Build & Development Settings:
    - Install Command: `npm ci` (Vercel default is OK)
    - Build Command (monorepo with Turborepo): `npx turbo run build --filter=frontend`
    - Output Directory: (handled by Next.js)

## Environment variables

Add these variables in Project Settings → Environment Variables for Preview and Production:

- `NEXT_PUBLIC_BASE_URL` → your Vercel domain, e.g. `https://your-app.vercel.app`
- `NEXT_PUBLIC_API_URL` → your public API URL, e.g. `https://api.your-domain.com/api`
- `NEXT_PUBLIC_API_URL_INTERNAL` → optional, for SSR-to-API traffic inside your network; for Vercel, use the same as `NEXT_PUBLIC_API_URL` unless you route via private networking
- `NEXT_PUBLIC_DEFAULT_LOCALE`, `NEXT_PUBLIC_SUPPORTED_LOCALES`
- Optional logging: `NEXT_PUBLIC_LOG_LEVEL`, `NEXT_PUBLIC_LOG_FORMAT`, `NEXT_PUBLIC_LOG_COLORS_ENABLED`
- Auth (optional): `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_SECRET`, `AUTH_DEFAULT_USER_ROLE`

## Notes

- API hosting: Historically, Vercel Serverless was not recommended for the NestJS API in this repository. However, Vercel has recently added improved backend support (including NestJS). For now we recommend deploying the API as a container (Docker on VM/Kubernetes/Fly.io/Render/etc.) and exposing a public URL consumed by the frontend, but this is under evaluation and may change. We plan to investigate first-class Vercel API hosting and update this guide accordingly.
- CORS: Ensure the API’s `FRONT_BASE_URLS` includes your Vercel domains (both Preview and Production), e.g. `https://your-app.vercel.app,https://your-branch-your-team.vercel.app`.
- Images and headers: If you use custom headers or remote images, configure them in `apps/frontend/next.config.ts`.

## Production checks

After the first deployment:

1. Visit the Vercel URL (`NEXT_PUBLIC_BASE_URL`) and confirm app loads.
2. Verify client→API requests target `NEXT_PUBLIC_API_URL` and succeed (200s).
3. Confirm i18n defaults via `NEXT_PUBLIC_DEFAULT_LOCALE` and `NEXT_PUBLIC_SUPPORTED_LOCALES`.
