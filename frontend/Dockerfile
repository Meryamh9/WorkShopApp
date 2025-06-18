# frontend/Dockerfile
FROM node:22 as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --output-path=dist

# Phase de prod : servir l'app avec nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
