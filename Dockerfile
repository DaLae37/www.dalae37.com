# syntax=docker/dockerfile:1

ARG RESOURCE_URL=https://resource.dalae37.com
ARG WEB_GAME_URL=

FROM node:22.23.2-alpine3.24@sha256:c610fcdfb1d5b4740dd70c284ed3cb16bb857e0f7166196e36a5501df7a3aa32 AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

FROM base AS builder
ARG RESOURCE_URL
ARG WEB_GAME_URL
ENV RESOURCE_URL=${RESOURCE_URL}
ENV WEB_GAME_URL=${WEB_GAME_URL}
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ARG RESOURCE_URL
ARG WEB_GAME_URL
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV RESOURCE_URL=${RESOURCE_URL}
ENV WEB_GAME_URL=${WEB_GAME_URL}

LABEL org.opencontainers.image.description="Next.js application for www.dalae37.com" \
      org.opencontainers.image.licenses="BSD-3-Clause" \
      org.opencontainers.image.source="https://github.com/DaLae37/www.dalae37.com"

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD ["wget", "-q", "-T", "2", "-O", "/dev/null", "http://127.0.0.1:3000/healthz"]
CMD ["node", "server.js"]
