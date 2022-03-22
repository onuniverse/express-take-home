FROM node:16 as dependencies

WORKDIR /usr/src/app

COPY "package*.json" ./
RUN npm install --only=prod

FROM node:16-alpine

WORKDIR /usr/src/app

COPY --from=dependencies /usr/src/app/node_modules ./node_modules/

COPY package.json .
COPY index.js .
COPY src/ ./src/

USER node

EXPOSE 8080

CMD [ "npm", "start" ]
