import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ReflectionController} from "./controllers/reflectionController";
import {MeasurementRepository} from "./repositories/measurement.repository";
import {MeasurementService} from "./services/measurement.service";

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<ReflectionController>(ReflectionController).toSelf();
DIContainer.bind<Router>(Router).toSelf();
DIContainer.bind<MeasurementRepository>(MeasurementRepository).toSelf();
DIContainer.bind<MeasurementService>(MeasurementService).toSelf();

export default DIContainer;
