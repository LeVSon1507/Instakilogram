# pull base image
FROM node:16.17.1

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/mobile && chown node:node /opt/mobile
WORKDIR /opt/mobile
ENV PATH /opt/mobile/.bin:$PATH
USER node
COPY package.json package-lock.json yarn.lock ./
RUN npm install --force

# copy in our source code last, as it changes the most
WORKDIR /app
# for development, we bind mount volumes; comment out for production
# COPY ./mobile .

ENTRYPOINT ["npm", "start", "--", "--dev", "--minify", "false"]
