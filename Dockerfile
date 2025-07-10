# Etapa 1: Construcción
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Servidor para producción
FROM node:18
WORKDIR /app

# Instala serve globalmente
RUN npm install -g serve

# Copia archivos de la etapa anterior
COPY --from=builder /app/dist /app/dist

# Expone el puerto 8080
EXPOSE 8080

# Comando para servir la app
CMD ["serve", "-s", "dist", "-l", "8080"]
