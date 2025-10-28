# ============================
# Prepare Build Environment
FROM hub.aiursoft.com/node:21-alpine AS npm-env
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

# ============================
# Prepare Runtime Environment
FROM hub.aiursoft.com/aiursoft/static
COPY --from=npm-env /src/build /data