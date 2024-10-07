FROM node:20-bookworm-slim

WORKDIR /lcr

COPY ./package.json ./

RUN yarn install

COPY . .

ENV PRODUCTION_URL=https://strapi.lcrehlingen.de
ENV NODE_ENV production
ENV STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE de

RUN yarn run build

EXPOSE 1337

CMD ["yarn", "start"]
