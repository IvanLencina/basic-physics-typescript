import * as express from 'express';
import bodyParser from "body-parser";
import {App} from "./app";
import {inject, injectable} from "inversify";
import {IRouter} from "./interfaces/router.interface";
import {ErrorsController} from "./controllers/errors.controller";

@injectable()
export class Router implements IRouter {
  private appInstance = express.application;
  private errorsController: ErrorsController;

  constructor(@inject(ErrorsController) errorsController: ErrorsController) {
    this.errorsController = errorsController;
  }

  public init(app: App) {
    this.appInstance = app.getAppInstance();

    this.initializeMiddlewares();
    this.intializeRoutes();
  }

  private initializeMiddlewares() {
    this.appInstance.use(bodyParser.urlencoded({extended: true}));
    this.appInstance.use(bodyParser.json());
  }

  private intializeRoutes() {
    this.appInstance.route('/')
      .get(this.errorsController.getStandardError.bind(this.errorsController))
  }
}