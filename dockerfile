# We started from a node layer.
FROM node:latest

# Create our working directory 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy our depencies and installe them. 
COPY ./app/package*.json ./
RUN npm install


# Copy the app in the working directory
COPY ./app .

# Expose the application's port
EXPOSE 3000

# run npm start in our working directory. 
CMD [ "npm", "start" ]
