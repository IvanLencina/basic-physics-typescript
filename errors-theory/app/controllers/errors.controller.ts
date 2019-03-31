import * as express from 'express';
import {injectable} from "inversify";

@injectable()
export class ErrorsController {

  constructor() {}

  public getAll(request: express.Request, response: express.Response) {
    response.send('');
  };
}