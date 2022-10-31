FROM node:17

# Working dir
WORKDIR /usr/src/app

# copia os arquivos 'package.json' e 'yarn.lock'
COPY package.json yarn.lock ./

# Install Files
RUN yarn install 
RUN yarn install db-migrate-pg

RUN git clone https://github.com/vishnubob/wait-for-it.git

# Copy SRC
COPY . .

# Open Port
EXPOSE 3000

# Docker Command to Start Service
CMD [ "yarn", "start" ]