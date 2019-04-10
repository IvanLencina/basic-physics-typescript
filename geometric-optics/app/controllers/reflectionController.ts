import * as express from 'express';
import {inject, injectable} from "inversify";
import {MirrorRepository} from "../repositories/mirrorRepository";
import {ConcaveMirrorService} from "../services/concaveMirrorService";
import {MirrorTypes} from "../enumerations/mirror-types";
import {ReflectiveRay} from "../entities/reflective-ray";

@injectable()
export class ReflectionController {

  private mirrorRepository: MirrorRepository;
  private concaveMirrorService: ConcaveMirrorService;

  constructor(
    @inject(MirrorRepository) mirrorRepository: MirrorRepository,
    @inject(ConcaveMirrorService) concaveMirrorService: ConcaveMirrorService
  ) {
    this.mirrorRepository = mirrorRepository;
    this.concaveMirrorService = concaveMirrorService
  }

  getResults (request: express.Request, response: express.Response) {
    const concaveMirror = this.mirrorRepository.getMirror(MirrorTypes.Concave, 4);
    const reflectiveRay = new ReflectiveRay(10, 2);
    const concaveMirrorResults = this.concaveMirrorService.calculateResult(concaveMirror, reflectiveRay);

    response.send(`
      <strong>Concave mirror</strong><br>
      <p>${concaveMirrorResults.problem}</p>
        <strong>Results:</strong><br>
        Distance of the image: ${concaveMirrorResults.results.distanceOfImage}cm<br>
        Image height: ${concaveMirrorResults.results.imageHeight}cm<br>
        Image Analysis: ${concaveMirrorResults.results.imageAnalysis}
    `);
  };
}