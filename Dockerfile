FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./
# install dep modules
RUN npm install

# Bundle app source
COPY . .
EXPOSE 8080


CMD ["npm", "run", "start"]

