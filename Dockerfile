FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM base AS development
COPY . . 
CMD ["npm","run","dev"]

FROM base AS production
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]
