FROM --platform=linux/amd64 node:17

ENV CN_WORK_DIR="/opt/pwa-pep"

RUN mkdir -p $CN_WORK_DIR

WORKDIR $CN_WORK_DIR

COPY package.json yarn.lock ./

COPY . .

RUN yarn install

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "run", "start"]
