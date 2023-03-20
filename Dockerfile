
# # Base image
# FROM node:18-alpine

# # Set the working directory to /app
# WORKDIR /api

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Set NODE_ENV to production
# ENV NODE_ENV=production

# # Expose port 3000 for the Node.js server
# EXPOSE 3000

# # Start the Node.js server
# CMD ["npm", "start"]
# # RUN npm start

# # Iniciar NGINX en primer plano
# # CMD ["nginx", "-g", "daemon off;"]


# # Base image
# FROM node:18-alpine

# # Set the working directory to /app
# WORKDIR /api

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Set NODE_ENV to production
# ENV NODE_ENV=production

# ARG DB_HOST
# ARG DB_PORT
# ARG DB_USER
# ARG DB_NAME
# ARG DB_PASS
# ARG DB_SYNC
# ARG NODE_ENV
# ARG W_PORT

# ENV DB_HOST=${DB_HOST}
# ENV DB_PORT=${DB_PORT}
# ENV DB_USER=${DB_USER}
# ENV DB_NAME=${DB_NAME}
# ENV DB_PASS=${DB_PASS}
# ENV DB_SYNC=${DB_SYNC}
# ENV NODE_ENV=${NODE_ENV}
# ENV W_PORT=${W_PORT}

# # Expose port 3000 for the Node.js server
# EXPOSE 3000

# # Start the Node.js server
# CMD ["npm", "start"]





# # Primera etapa: construir la aplicación Node.js
# FROM node:18-alpine as build
# LABEL stage=build

# ARG DB_HOST
# ARG DB_PORT
# ARG DB_USER
# ARG DB_NAME
# ARG DB_PASS
# ARG DB_SYNC
# ARG NODE_ENV
# ARG W_PORT

# ENV DB_HOST=${DB_HOST}
# ENV DB_PORT=${DB_PORT}
# ENV DB_USER=${DB_USER}
# ENV DB_NAME=${DB_NAME}
# ENV DB_PASS=${DB_PASS}
# ENV DB_SYNC=${DB_SYNC}
# ENV NODE_ENV=${NODE_ENV}
# ENV W_PORT=${W_PORT}

# # Configurar el directorio de trabajo
# WORKDIR /api

# # Copiar los archivos del proyecto
# COPY package*.json ./
# COPY . .

# # Instalar las dependencias
# RUN npm install
# RUN npm run build

# # Segunda etapa: crear la imagen de producción
# FROM nginx:1.19.0-alpine as deploy

# # Copiar los archivos de configuración de Nginx
# COPY nginx.conf /etc/nginx/nginx.conf

# # Copiar los archivos de la aplicación compilada de la primera etapa
# COPY --from=build /app/build /usr/share/nginx/html

# # Exponer el puerto 80 de Nginx
# EXPOSE 80

# # Iniciar Nginx en primer plano
# CMD ["nginx", "-g", "daemon off;"]




# # Etapa de instalación
# FROM node:16 as install
# LABEL stage=install

# ARG PROYECTO
# ARG DB_HOST
# ARG DB_NAME
# ARG DB_PORT
# ARG DB_USER
# ARG DB_PASS
# ARG NEST_PORT

# ENV PROYECTO=${PROYECTO}
# ENV DB_HOST=${DB_HOST}
# ENV DB_NAME=${DB_NAME}
# ENV DB_PORT=${DB_PORT}
# ENV DB_USERNAME=${DB_USER}
# ENV DB_PASSWORD=${DB_PASS}
# ENV NEST_PORT=${NEST_PORT}

# WORKDIR /app
# COPY ./api_nest/package.json .
# COPY ./api_nest/yarn.lock .
# RUN yarn install --force --ignore-scripts
# RUN npm rebuild bcrypt --build-from-source

# COPY ./api_nest .

# RUN yarn build
# RUN yarn config set network-timeout 60000

# # Etapa de despliegue
# FROM nginx:1.19.0-alpine as deploy
# LABEL stage=deploy

# COPY --from=install /app/dist/main.js /usr/share/nginx/html/index.js
# EXPOSE 80

# CMD [ "nginx", "-g", "daemon off;" ]




#APP

# Selecciona la versión de Node.js que deseas utilizar
FROM node:16-alpine as build

# Crea y establece el directorio de trabajo de la aplicación
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY ./app_nest/package*.json ./

# Instala las dependencias de la aplicación
RUN yarn install --production=true --frozen-lockfile --ignore-scripts

# Copia todos los archivos de la aplicación al contenedor
COPY ./app_nest .

# Compila la aplicación para producción
RUN yarn build

# Etapa de producción
FROM nginx:1.19.0-alpine

# Copia la configuración de Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copia la aplicación compilada al contenedor de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para que la aplicación sea accesible desde el exterior
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]






