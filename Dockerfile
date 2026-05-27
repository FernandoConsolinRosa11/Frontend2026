# Estágio 1: Build (O que você já tinha)
FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Produção (O que vai manter o container vivo)
FROM nginx:alpine
# Copia os arquivos gerados no Estágio 1 para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta interna clássica do Nginx
EXPOSE 80

# Comando que mantém o Nginx rodando em primeiro plano
CMD ["nginx", "-g", "daemon off;"]

