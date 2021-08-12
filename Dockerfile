FROM node:14-alpine

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY src ./src 
COPY .editorconfig .env .babelrc  index.js start.js cluster.js ./

CMD ["npm", "start"]