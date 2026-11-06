FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM deps AS build
ENV NODE_ENV=production
COPY . .
RUN pnpm run build

FROM base
RUN apt-get update && apt-get install -y --no-install-recommends \
  libjemalloc2 \
  && ln -s /usr/lib/*-linux-gnu/libjemalloc.so.2 /usr/local/lib/libjemalloc.so.2 \
  && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV LD_PRELOAD=/usr/local/lib/libjemalloc.so.2
ENV MALLOC_ARENA_MAX=2

COPY . /app
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build

EXPOSE 1337
CMD [ "pnpm", "start" ]