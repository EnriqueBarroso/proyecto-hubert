FROM node:18

WORKDIR /app

COPY backend ./backend

WORKDIR /app/backend

RUN npm install

EXPOSE 4000

CMD ["node", "app.js"]
