FROM node:14.17.0-alpine as base

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV HOST=0.0.0.0
ENV PORT=3333


FROM base AS dev
ENV NODE_ENV=development


CMD ["node", "ace", "serve", "--watch"]