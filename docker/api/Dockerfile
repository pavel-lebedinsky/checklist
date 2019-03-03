FROM node:8-alpine

RUN npm i -g nodemon

WORKDIR /home/node/app

COPY ./ /home/node/app

EXPOSE 3000

CMD [ "nodemon", "src/bin/www" ]
