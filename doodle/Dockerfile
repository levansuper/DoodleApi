FROM node:10
# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY . /app
RUN npm install

EXPOSE 8005
CMD [ "npm", "run","start:dev" ]