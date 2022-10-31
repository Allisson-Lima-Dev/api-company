FROM node:17 as builder

# Working dir
WORKDIR /usr/src/app

# copia os arquivos 'package.json' e 'yarn.lock'
COPY package.json yarn.lock ./

COPY ./prisma prisma

# Copy SRC
COPY . .

# Install Files
RUN yarn install 

RUN yarn run build

# Open Port
EXPOSE 3333

# Docker Command to Start Service
CMD [ "yarn", "start" ]