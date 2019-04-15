import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ReflectionController} from "./controllers/reflectionController";
import {MirrorRepository} from "./repositories/mirrorRepository";
import {ConcaveMirrorService} from "./services/concaveMirrorService";
import {RefractionController} from "./controllers/refractionController";
import {RefractionService} from "./services/refractionService";

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<ReflectionController>(ReflectionController).toSelf();
DIContainer.bind<RefractionController>(RefractionController).toSelf();
DIContainer.bind<Router>(Router).toSelf();
DIContainer.bind<MirrorRepository>(MirrorRepository).toSelf();
DIContainer.bind<ConcaveMirrorService>(ConcaveMirrorService).toSelf();
DIContainer.bind<RefractionService>(RefractionService).toSelf();

export default DIContainer;
