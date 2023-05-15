FROM node:16.17.1

WORKDIR /app

COPY package.json  package-lock.json ./

RUN  npm install --force

COPY . .

EXPOSE 3030

CMD ["npm","start"]
