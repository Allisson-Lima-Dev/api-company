FROM node:17

# Working dir
WORKDIR /usr/src/app

# copia os arquivos 'package.json' e 'yarn.lock'
COPY package.json yarn.lock ./

# Install Files
RUN yarn install 

# Copy SRC
COPY . .

# Open Port
EXPOSE 5432

# Docker Command to Start Service
CMD [ "yarn", "start" ]