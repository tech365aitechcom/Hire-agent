# =========================
# Build stage
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Environment flags
ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false

# Build Vite app
RUN npm run build


# =========================
# Production stage
# =========================
FROM nginx:alpine

# Copy Vite output (IMPORTANT: dist, not build)
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx config
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    gzip on; \
    gzip_min_length 1000; \
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ { \
        expires 30d; \
        add_header Cache-Control "public, no-transform"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
