FROM node:18-alpine AS base

RUN npm install -g pnpm

WORKDIR /app/frontend

COPY . .

RUN pnpm install

# TODO: Replace this with a "real" http server (nginx) before prod!
EXPOSE 5173

CMD [ "pnpm", "dev"]

