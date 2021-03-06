import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    this.server.use(
      cors({
        origin: process.env.FRONT_URL,
      })
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
