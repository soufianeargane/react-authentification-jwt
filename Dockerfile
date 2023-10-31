# Use an official Node.js runtime as a parent image
FROM node:14

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

# Command to start the application
CMD ["npm", "start"]
