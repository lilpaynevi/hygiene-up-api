
FROM node:18 AS base
WORKDIR /server
COPY package.json ./
RUN npm install
COPY . .

# Development stage
FROM base AS development
CMD ["npm", "run", "start:dev"]

# Production stage
FROM base AS production
RUN npm install --only=production
CMD ["npm", "run", "start:prod"]
