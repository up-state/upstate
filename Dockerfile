FROM node:12-alpine as build
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
RUN npm ci
RUN npm run build

FROM node:12-alpine

# make the node process respond to SIGINT https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#handling-kernel-signals
RUN apk add dumb-init

ENV NODE_ENV production
WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/dist /usr/src/app/dist
COPY --chown=node:node --from=build /usr/src/app/package.json /usr/src/app/package.json
COPY --chown=node:node --from=build /usr/src/app/package-lock.json /usr/src/app/package-lock.json

# Backend is compiled only and not bundled with dependencies so we need to include the node_modules
RUN npm ci --only=production

USER node
CMD ["dumb-init", "npm", "start"]