import express from 'express';
import {injectable} from "inversify";

@injectable()
export class App {
  public app: express.Application;
  public port: number | undefined;

  constructor() {
    this.app = express();
  }

  public setPort(port: number) {
    this.port = port;
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Basic node + ts app listening on port ${this.port}`);
      console.log(`Ctrl + Click here: http://localhost:${this.port}`);
    });
  }

  public getAppInstance() {
    return this.app;
  }
}