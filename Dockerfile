FROM node:19.5.0-alpine

WORKDIR /app

COPY package*.json ./

#RUN npm install -g npm@latest

#RUN npm cache clean -f

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]
