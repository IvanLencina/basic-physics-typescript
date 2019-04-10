import {injectable} from "inversify";
import {Mirror} from "../entities/mirror";
import {ReflectiveRay} from "../entities/reflective-ray";

@injectable()
export class ConcaveMirrorService {
  constructor(){}

  public calculateResult(mirror: Mirror, reflectiveRay: ReflectiveRay) {
    const distanceOfImage = this.getDistanceOfImage(mirror, reflectiveRay);
    const imageHeight = this.getImageHeight(reflectiveRay, distanceOfImage);

    return {
      problem: `
        A concave mirror has a radius of curvature of 4cm. An object is placed 2cm high at a distance of 10cm from the vertex of the mirror. <br>
        1 - Find the distance of the image. <br>
        2 - Find the height of the image. <br>
        3 - Is the image real or virtual? Right or inverted? Ground the answer.
      `,
      results: {
        distanceOfImage: distanceOfImage,
        imageHeight: imageHeight,
        imageAnalysis: this.analyzeImage(reflectiveRay, distanceOfImage)
      }
    }
  }

  private getDistanceOfImage(mirror: Mirror, reflectiveRay: ReflectiveRay): number {
    // We have that: 1/S + 1/S' = 2/F
    // So clearing the equation: S' = 1/((2/f) - (1/S))
    return 1/((2/mirror.getRadiusOfCurvature()) - (1/reflectiveRay.getMirrorVertexDistance()));
  }

  private getImageHeight(reflectiveRay: ReflectiveRay, distanceOfImage: number): number {
    // We have that the lateral increase of the image is:  m = y'/y = -s'/s
    // clearing: y' = (-s'/s) * y
    // @ts-ignore
    return (-distanceOfImage/reflectiveRay.getMirrorVertexDistance()) * reflectiveRay.getHeight();
  }

  private analyzeImage(reflectiveRay: ReflectiveRay, distanceOfImage: number): string {
    const imageDirection =
      reflectiveRay.getMirrorVertexDistance() > 0 && distanceOfImage < 0 ?
        'right':
        'inverted';

    return `Image direction: ${imageDirection}`
  }
}