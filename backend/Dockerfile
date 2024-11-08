# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock, then install dependencies
COPY package.json ./
RUN yarn install --verbose

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Run database migrations
CMD ["yarn", "sequelize-cli", "db:migrate"]

# Start the application
CMD ["yarn", "start"]
