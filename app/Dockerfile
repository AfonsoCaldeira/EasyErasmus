FROM node:20.9.0-alpine3.18

WORKDIR /app

COPY . /app/

RUN npm install

# Expose port 8080
EXPOSE 8080


# Use dotenv to load environment variables from .env file
CMD ["sh", "-c", "npx dotenv npm run dev"]
