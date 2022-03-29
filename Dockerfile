#docker image from docker hub that contains NODE
FROM node:17.8.0-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]