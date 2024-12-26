# Base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
