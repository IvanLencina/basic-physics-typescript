import * as express from 'express';
import {inject, injectable} from "inversify";
import {MeasurementRepository} from "../repositories/measurement.repository";

@injectable()
export class ErrorsController {

  private measurementRepository: MeasurementRepository;

  constructor(@inject(MeasurementRepository) measurementRepository: MeasurementRepository) {
    this.measurementRepository = measurementRepository;
  }

  getStandardError (request: express.Request, response: express.Response) {
    const measurements = this.measurementRepository.getAll();
    response.send(measurements);
  };
}