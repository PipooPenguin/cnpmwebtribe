FROM node:23.4-alpine
WORKDIR /etc/www/app
RUN chown -R node:node .
COPY --chown=node:node package*.json ./
RUN npm install -g nodemon
USER node
RUN npm install

COPY --chown=node:node . .
EXPOSE 3000
CMD ["nodemon","index.js"]
