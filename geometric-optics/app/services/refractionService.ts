import {injectable} from "inversify";
import {Medium} from "../interfaces/medium";

@injectable()
export class RefractionService {
  constructor() {}

  public getRefractionAngle(firstMedium: Medium, secondMedium: Medium, angleOfIncidence: number): object {
    const angleOfIncidenceInRadian = this.convertDegreesToRadian(angleOfIncidence);

    // We have that n1.senθ1 = n2.senθ2
    // So clearing: (n1.senθ1)/n2 = senθ2
    // @ts-ignore
    const senTheta2: number = (firstMedium.getRefractiveIndex() * Math.sin(angleOfIncidenceInRadian)) / secondMedium.getRefractiveIndex();
    const arcsine: number = Math.asin(senTheta2);

    return {
      radians: arcsine,
      degrees: this.convertRadianToDegrees(arcsine)
    }
  }

  private convertDegreesToRadian(angle: number): number {
    return angle * (Math.PI / 180.0);
  }

  private convertRadianToDegrees(angle: number): number {
    return angle * (180.0 / Math.PI);
  }
}