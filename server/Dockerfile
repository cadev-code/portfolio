FROM node:20.12.1-alpine3.18

WORKDIR /app

# Dependencias (node_modules)
COPY package*.json .
RUN npm install

# Generar prisma
COPY prisma ./prisma
RUN npm run generate

COPY . .

EXPOSE 8082

CMD ["npm", "run", "dev"]