FROM node:6.9.5-alpine
MAINTAINER sampahcoding anasyarifah@gmail.com

# Create app directory
RUN mkdir -p /reactweb
WORKDIR /reactweb

RUN apk add --no-cache bash
EXPOSE 3000

RUN npm install

CMD [ "npm", "start" ]
