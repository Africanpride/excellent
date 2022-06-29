FROM node:alpine

#copy source 
COPY . /app

# Install deps 
RUN cd /app &&  npm install 

# Build 
RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]