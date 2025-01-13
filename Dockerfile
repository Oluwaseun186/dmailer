# Use a lighter Node.js base image for production
FROM node:20-slim

WORKDIR /usr/src/app

# Copy only package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["node", "dragon.js"]
