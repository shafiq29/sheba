# Use an official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json  ./

# Install the dependencies
RUN yarn install --verbose
# Install the `serve` package to serve the built files
RUN yarn global add serve

# Copy the entire project into the container
COPY . .

# Build the React application
RUN yarn build

# Expose port 8080 to be accessible from outside
EXPOSE 8080

# Use `serve` to serve the built files
CMD ["serve", "-s", "build", "-l", "8080"]
