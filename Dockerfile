FROM node
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000 80 443
CMD ["npm", "start"]
