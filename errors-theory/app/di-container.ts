import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ErrorsController} from "./controllers/errors.controller";
import {MeasurementRepository} from "./repositories/measurement.repository";
import {MeasurementService} from "./services/measurement.service";

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<ErrorsController>(ErrorsController).toSelf();
DIContainer.bind<Router>(Router).toSelf();
DIContainer.bind<MeasurementRepository>(MeasurementRepository).toSelf();
DIContainer.bind<MeasurementService>(MeasurementService).toSelf();

export default DIContainer;
