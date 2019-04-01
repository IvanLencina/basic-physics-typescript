import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ErrorsController} from "./controllers/errors.controller";
import {MeasurementRepository} from "./repositories/measurement.repository";

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<ErrorsController>(ErrorsController).toSelf();
DIContainer.bind<Router>(Router).toSelf();
DIContainer.bind<MeasurementRepository>(MeasurementRepository).toSelf();

export default DIContainer;
