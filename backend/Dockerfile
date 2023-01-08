FROM node:10

COPY package.json /appDir/

WORKDIR /appDir

RUN npm install
COPY . .

CMD ["npm", "start"]