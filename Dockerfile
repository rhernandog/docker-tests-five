# 
FROM node:12-alpine

# Set working folder
WORKDIR /usr/app

# Copy dependencies for NPM install
COPY ./package.json ./
# Install node dependencies
RUN npm install

# Copy app files
COPY ./ ./

# Start command
CMD [ "npm", "start" ]
