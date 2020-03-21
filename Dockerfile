FROM node:10.15

WORKDIR /opt/myblog

RUN npm install -g yarn
RUN yarn global add gatsby-cli gatsby-dev-cli
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "serve"]
