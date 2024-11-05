# Use an official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the React application
RUN npm run build

# Install the `serve` package to serve the built files
RUN npm install -g serve

# Expose port 3000 to be accessible from outside
EXPOSE 8080

# Use `serve` to serve the built files
CMD ["serve", "-s", "build", "-l", "8080"]
