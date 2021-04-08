FROM strapi/base

WORKDIR /lcr

COPY ./package.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
