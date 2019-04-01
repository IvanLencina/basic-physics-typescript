import * as express from 'express';
import {inject, injectable} from "inversify";
import {MeasurementRepository} from "../repositories/measurement.repository";
import {MeasurementService} from "../services/measurement.service";

@injectable()
export class ErrorsController {

  private measurementRepository: MeasurementRepository;
  private measurementService: MeasurementService;

  constructor(
    @inject(MeasurementRepository) measurementRepository: MeasurementRepository,
    @inject(MeasurementService) measurementService: MeasurementService
  ) {
    this.measurementRepository = measurementRepository;
    this.measurementService = measurementService
  }

  getStandardError (request: express.Request, response: express.Response) {
    const measurements = this.measurementRepository.getAll();

    const standardError = this.measurementService.calculateStandardError(measurements);

    response.send(standardError);
  };
}