import {MirrorTypes} from "../enumerations/mirror-types";

export class Mirror {

  private type: MirrorTypes;
  private radiusOfCurvature: number;

  constructor(type: MirrorTypes, radiusOfCurvature: number) {
    this.type = type;
    this.radiusOfCurvature = radiusOfCurvature;
  }

  public getType(): MirrorTypes {
    return this.type;
  }

  public getRadiusOfCurvature(): number {
    return this.radiusOfCurvature;
  }
}