import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ExampleController} from "./controllers/example.controller";

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<ExampleController>(ExampleController).toSelf();
DIContainer.bind<Router>(Router).toSelf();

export default DIContainer;
