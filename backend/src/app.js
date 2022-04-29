import express from 'express';
import cors from 'cors';
import routes from './router';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  cors() {
    this.server.use(cors());
  }
}

export default new App().server;
