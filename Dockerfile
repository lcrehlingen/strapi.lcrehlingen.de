FROM strapi/base

WORKDIR /lcr

COPY ./package.json ./

RUN npm install

COPY . .

ARG PRODUCTION_URL
ENV PRODUCTION_URL=${PRODUCTION_URL}
ENV NODE_ENV production
ENV STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE de
RUN apt-get update && apt-get install --force-yes -yy \
  libjemalloc1 \
  && rm -rf /var/lib/apt/lists/*

# Change memory allocator to avoid leaks
ENV LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libjemalloc.so.1

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
