# syntax=docker/dockerfile:1

ARG RESOURCE_URL=https://resource.dalae37.com
ARG WEB_GAME_URL=

FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund

FROM node:22-alpine AS builder
WORKDIR /app
ARG RESOURCE_URL
ARG WEB_GAME_URL
ENV NEXT_TELEMETRY_DISABLED=1
ENV RESOURCE_URL=${RESOURCE_URL}
ENV WEB_GAME_URL=${WEB_GAME_URL}
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ARG RESOURCE_URL
ARG WEB_GAME_URL
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV RESOURCE_URL=${RESOURCE_URL}
ENV WEB_GAME_URL=${WEB_GAME_URL}

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
