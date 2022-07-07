FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
# RUN npm install -g npm@8.13.2
# RUN npm cache clear --force && npm config set fetch-retry-maxtimeout 120000 && npm config set fetch-retry-maxtimeout 120000
RUN npm install
RUN npm audit fix --force

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "start"

