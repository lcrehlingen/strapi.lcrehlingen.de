FROM node:20-bookworm-slim

WORKDIR /lcr

COPY ./package.json ./

RUN npm install

COPY . .

ARG PRODUCTION_URL
ENV PRODUCTION_URL=${PRODUCTION_URL}
ENV NODE_ENV production
ENV STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE de

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
