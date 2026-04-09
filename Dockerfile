# 使用官方 Node 镜像，避免 Zeabur 默认构建里 `npm update -g npm` 报错
FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 8080

CMD ["npm", "start"]
