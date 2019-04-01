import {injectable} from "inversify";

@injectable()
export class MeasurementRepository {

  private measurements: number[];

  constructor() {
    this.measurements = [6.3, 6.2, 6.4, 6.2];
  }

  public getAll(): number[] {
    return this.measurements;
  }
}