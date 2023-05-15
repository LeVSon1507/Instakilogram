FROM node:16.17.1

WORKDIR /app

COPY package.json  .

RUN npm install --force

COPY . .

EXPOSE 3002

CMD ["npm","start"]
