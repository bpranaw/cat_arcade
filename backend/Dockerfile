FROM node:18-alpine AS base


RUN npm install -g pnpm

WORKDIR /app/backend

COPY . .

RUN pnpm install
RUN pnpm typeorm:drop
RUN pnpm migration:run
RUN pnpm seed

EXPOSE 8080

CMD [ "pnpm", "dev"]

