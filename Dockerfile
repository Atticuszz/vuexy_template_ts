# 构建阶段
FROM node:lts-alpine AS build-stage

WORKDIR /app

# 复制 package.json 和 yarn.lock 文件
COPY package.json yarn.lock ./
# 复制源代码
COPY  . .
# 安装依赖
RUN yarn install



# 构建应用
RUN yarn build

# 运行阶段
FROM nginx:stable-alpine AS production-stage

# 从构建阶段复制构建好的文件到 Nginx 文件夹
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 暴露 5050 端口
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
