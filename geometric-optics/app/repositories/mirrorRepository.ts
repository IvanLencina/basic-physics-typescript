import {injectable} from "inversify";
import {Mirror} from "../entities/mirror";
import {MirrorTypes} from "../enumerations/mirror-types";

@injectable()
export class MirrorRepository {

  constructor() {}

  public getMirror(type: MirrorTypes, radiusOfCurvature: number): Mirror {
    return new Mirror(type, radiusOfCurvature);
  }
}