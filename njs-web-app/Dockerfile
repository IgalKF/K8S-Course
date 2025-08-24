FROM node:alpine

WORKDIR /usr/app

COPY package*.json .
RUN npm install
COPY ./src/* ./src/*

VOLUME ["/usr/app/src"]

EXPOSE 80

CMD ["npm", "start"]