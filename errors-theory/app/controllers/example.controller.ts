import * as express from 'express';
import {IExample} from "../interfaces/example.interface";
import {injectable} from "inversify";

@injectable()
export class ExampleController {

  private examples: IExample[] = [
    { name: 'This is one example.' },
    { name: 'This is another one.' },
    { name: 'And one more example.'}
  ];

  constructor() {}

  public getAll(request: express.Request, response: express.Response) {
    response.send(this.examples);
  };

  public create(request: express.Request, response: express.Response) {
    const example: IExample = request.body;

    this.examples.push(example);

    response.send(example);
  };
}