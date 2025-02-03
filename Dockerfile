# Use the official Node.js image as a parent image
FROM node:18 AS build

# Set the working directory
WORKDIR /app


# Install git
# RUN apt-get update && apt-get install -y git
# Clone the repository (no cache)
# ARG CACHEBUST=02032025130156
# RUN git clone https://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@github.com/MaouStan/MaouHub-Site.git .

# Copy
COPY . .

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
