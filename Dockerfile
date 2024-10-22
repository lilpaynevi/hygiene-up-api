FROM node:18
# ENV PNPM_HOME="/pnpm"
WORKDIR /server
# RUN npm install -g pnpm
# RUN npm install -g @nestjs/cli

COPY package.json ./

RUN npm install

RUN npx primsa migrate dev

COPY . .

CMD [ "npm", "run", "start:dev" ]