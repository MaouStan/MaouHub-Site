# Use the official Node.js image as a parent image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Clone the repository (no cache)
ARG CACHEBUST=1
RUN echo "CACHEBUST: $(date +%s)"
RUN git clone https://github.com/MaouStan/MaouHub-Site.git .

# Install dependencies
RUN npm install

# Build the Astro project
RUN npm run build

# Use an Nginx image to serve the static files
FROM nginx:alpine

# Copy the build files to the Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
