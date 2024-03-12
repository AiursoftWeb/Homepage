# ============================
# Prepare Build Environment
FROM hub.aiursoft.cn/node:21-alpine as npm-env
WORKDIR /src
COPY . .
RUN yarn
RUN yarn build

# ============================
# Prepare Runtime Environment
FROM hub.aiursoft.cn/aiursoft/static
COPY --from=npm-env /src/build /data