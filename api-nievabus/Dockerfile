
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






# Esta es la imagen base que se utilizará para la aplicación
FROM node:18-alpine

#Declaramos las variables de entorno pque se van a utilizar para construir la imagen de docker.

ARG DB_HOST
ARG DB_PORT
ARG DB_USER
ARG DB_NAME
ARG DB_PASS
ARG DB_SYNC
ARG NODE_ENV
ARG W_PORT

ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_USER=${DB_USER}
ENV DB_NAME=${DB_NAME}
ENV DB_PASS=${DB_PASS}
ENV DB_SYNC=${DB_SYNC}
ENV NODE_ENV=${NODE_ENV}
ENV W_PORT=${W_PORT}


# Establecemos el directorio de trabajo de la aplicacion
WORKDIR /api

# Copiamos el archivo package.json.
COPY package*.json ./

# Se ejecuta el comando npm install para instalar las dependencias de la aplicación
RUN npm install

#  Se copia en el directorio de trabajo.
COPY . .

# Se establece el entorno de ejecución de la aplicación a producción 
ENV NODE_ENV=production

# Expone el puerto 3000 para el servidor Node.js
EXPOSE 3000

# iniciar el servidor Node.js
CMD ["npm", "start"]



