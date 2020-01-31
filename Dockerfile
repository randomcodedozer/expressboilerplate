FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm build

# Bundle app source
COPY . .
EXPOSE 8080


CMD ["npm", "run", "start"]

