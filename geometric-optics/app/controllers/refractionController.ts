import {inject, injectable} from "inversify";
import * as express from "express";
import {Glass} from "../entities/glass";
import {Air} from "../entities/air";
import {RefractionService} from "../services/refractionService";
import {Medium} from "../interfaces/medium";

@injectable()
export class RefractionController {

  private refractionService: RefractionService;

  constructor(@inject(RefractionService) refractionService: RefractionService) {
    this.refractionService = refractionService;
  }

  public getResults(request: express.Request, response: express.Response) {
    const glass: Medium = new Glass(1.5);
    const air: Medium = new Air(1);
    const angleOfIncidence: number = 60; //degrees

    const refractiveAngle: object = this.refractionService.getRefractionAngle(air, glass, angleOfIncidence);

    response.send({
      inputs: {
        airRefractiveIndex: air.getRefractiveIndex(),
        glassRefractiveIndex: glass.getRefractiveIndex(),
        angleOfIncidence: angleOfIncidence
      },
      outputs: {
        refractiveAngle: refractiveAngle
      }
    });
  }
}