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
RUN turbo prune @o2s/api-harmonization --docker

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

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV AUTH_DATABASE_URL file:./dev.db

# Don't run production as root
RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
USER expressjs

COPY --from=installer /app .

CMD node apps/api-harmonization/dist/src/main.js
