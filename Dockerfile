FROM strapi/base

WORKDIR /lcr

COPY ./package.json ./

RUN npm install

COPY . .

ENV NODE_ENV production
ENV STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE de

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
