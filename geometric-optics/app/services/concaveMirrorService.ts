import {injectable} from "inversify";
import {Mirror} from "../entities/mirror";
import {ReflectiveRay} from "../entities/reflective-ray";

@injectable()
export class ConcaveMirrorService {
  constructor(){}

  public calculateResult(mirror: Mirror, reflectiveRay: ReflectiveRay) {
    return {
      problem: `
        A concave mirror has a radius of curvature of 4cm. An object is placed 2cm high at a distance of 10cm from the vertex of the mirror. <br>
        1 - Find the distance of the image. <br>
        2 - Find the height of the image. <br>
        3 - Is the image real or virtual? Right or inverted? Ground the answer.
      `
    }
  }
}