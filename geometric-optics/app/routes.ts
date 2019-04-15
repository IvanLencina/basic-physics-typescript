import * as express from 'express';
import bodyParser from "body-parser";
import {App} from "./app";
import {inject, injectable} from "inversify";
import {IRouter} from "./interfaces/router.interface";
import {ReflectionController} from "./controllers/reflectionController";
import {RefractionController} from "./controllers/refractionController";

@injectable()
export class Router implements IRouter {
  private appInstance = express.application;
  private reflectionController: ReflectionController;
  private refractionController: RefractionController;

  constructor(
    @inject(ReflectionController) reflectionController: ReflectionController,
    @inject(RefractionController) refractionController: RefractionController
  ) {
    this.reflectionController = reflectionController;
    this.refractionController = refractionController;
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
      .get((request: express.Request, response: express.Response) => {
        response.send(`
          Reflection example: <a href="/reflection">/reflection</a> <br> 
          Refraction example: <a href="/refraction">/refraction</a>`);
      });

    this.appInstance.route('/reflection')
      .get(this.reflectionController.getResults.bind(this.reflectionController));

    this.appInstance.route('/refraction')
      .get(this.refractionController.getResults.bind(this.refractionController));
  }
}