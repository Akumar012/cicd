# 1. Base image
FROM node:18-alpine

# 2. Working directory
WORKDIR /app

# 3. Copy root package.json first
COPY package*.json ./

# 4. Copy backend & frontend package.json separately (cache optimization)
COPY backend/package*.json backend/
COPY frontend/package*.json frontend/

# 5. Install backend & frontend dependencies
RUN npm install --prefix backend \
 && npm install --prefix frontend

# 6. Copy full source code
COPY . .

# 7. Build frontend
RUN npm run build --prefix frontend

# 8. Expose backend port (example: 5000)
EXPOSE 3000

# 9. Start backend
CMD ["npm", "start"]
