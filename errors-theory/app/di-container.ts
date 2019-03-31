import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ErrorsController} from "./controllers/errors.controller";

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<ErrorsController>(ErrorsController).toSelf();
DIContainer.bind<Router>(Router).toSelf();

export default DIContainer;
