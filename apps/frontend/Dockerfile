# https://turborepo.com/docs/guides/tools/docker
# https://github.com/vercel/turborepo/tree/main/examples/with-docker

FROM node:22-alpine AS base

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat openjdk11-jre
# Set working directory
WORKDIR /app
RUN npm i -g turbo
COPY . .
RUN turbo prune @o2s/frontend --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat openjdk11-jre
WORKDIR /app

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .

RUN npm i

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

ENV NODE_ENV production

# Public environment variables are bundled at build time
# https://nextjs.org/docs/app/guides/environment-variables#bundling-environment-variables-for-the-browser
ENV NEXT_PUBLIC_API_URL http://localhost:3001/api

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/.next/static ./apps/frontend/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/public ./apps/frontend/public

CMD node apps/frontend/server.js
