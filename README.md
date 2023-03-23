# CAT_ARCADE SETUP
(All commands are with respect to the root directory of the project)

> Clone repository
> Copy and configure .env file (cp backend/.env.example backend/.env)
> Install pnpm if it is not already (npm install -g pnpm)
> Install dependencies (cd backend/ && pnpm install)
> Start database (docker compose up postgres)
> Reset prior Typeorm setup (cd backend/ && pnpm typeorm:drop)
> Migrate database (cd backend/ && pnpm migration:run)
> Seed Database (cd backend/ && pnpm seed)
> Start backend (cd backend/ && pnpm dev)

> Install dependencies (cd frontend/ && pnpm install)
> Start frontend in another terminal (pnpm dev)
> Access page at localhost:5173