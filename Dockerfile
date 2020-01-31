FROM node:10-alpine AS build
WORKDIR /opt/expressciboilerplate
COPY package*.json ./
# install dep modules
RUN npm install

# Bundle app source
FROM node:10-alpine
WORKDIR /opt/expressciboilerplate
ARG SHA
ENV SHA=${SHA}
COPY --from=build /opt/expressciboilerplate .
COPY . .
EXPOSE 8080

CMD ["node", "src/app.js"]

