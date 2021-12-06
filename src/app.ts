import 'dotenv/config';
import express from 'express';
import MongoConnection from '@mongoConnection';
// import router from '@routes';

export default class App {
  public app: express.Application;

  public conn : MongoConnection;

  public constructor() {
    this.conn = new MongoConnection();

    this.app = express();

    this.middlewares();

    // this.routes();
  }

  private middlewares() : void {
    this.app.use(express.json());

    this.app.use(express.urlencoded({ extended: false }));
  }

  // private routes(): void {
  //   this.app.use(router);
  // }
}
