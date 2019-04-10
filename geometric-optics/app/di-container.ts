import {Container} from "inversify";
import {Router} from "./routes";
import {App} from "./app";
import {ReflectionController} from "./controllers/reflectionController";
import {MirrorRepository} from "./repositories/mirrorRepository";
import {ConcaveMirrorService} from "./services/concaveMirrorService";

const DIContainer = new Container();
DIContainer.bind<App>(App).toSelf();
DIContainer.bind<ReflectionController>(ReflectionController).toSelf();
DIContainer.bind<Router>(Router).toSelf();
DIContainer.bind<MirrorRepository>(MirrorRepository).toSelf();
DIContainer.bind<ConcaveMirrorService>(ConcaveMirrorService).toSelf();

export default DIContainer;
