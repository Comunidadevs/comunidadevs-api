FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

CMD [ "sh","-c" ,"yarn run start" ]
