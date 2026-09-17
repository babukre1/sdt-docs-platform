FROM node:20-alpine AS build
WORKDIR /app

COPY package.json ./
COPY web/package.json ./web/package.json
COPY docs/package.json ./docs/package.json

RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY deployment/nginx/site.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/web/dist /usr/share/nginx/html

EXPOSE 80
