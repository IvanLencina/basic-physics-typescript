import {injectable} from "inversify";

@injectable()
export class MeasurementService {
  constructor(){}

  public calculateStandardError(measurements: number[]) {
    const appreciation = 0.1; // Get from one measurement instead.
    const mostLikelyValue = this.getMostLikelyValue(measurements);
    const partialErrors = this.getPartialErrors(measurements, mostLikelyValue);
    const variance = this.getVariance(partialErrors);
    const standardDeviation = this.getStandardDeviation(variance);
    const standardError = this.getStandardError(standardDeviation, measurements.length);

    return {
      metadata: {
        measurements: measurements,
        mostLikelyValue: mostLikelyValue,
        variance: variance,
        standardDeviation: standardDeviation,
        standardError: standardError
      },
      representation: this.getRepresentation(appreciation, standardError, mostLikelyValue)
    }
  }

  private getMostLikelyValue(measurements: number[]): number {
    const measurementsSum = measurements.reduce((a,b) => a + b, 0);

    return measurementsSum / measurements.length;
  }

  private getPartialErrors(measurements: number[], mostLikelyValue: number): number[] {
    return measurements.map((measurement) => {
      return Math.pow(mostLikelyValue - measurement, 2);
    });
  }

  private getVariance(partialErrors: number[]): number {
    const partialErrorsSum: number = partialErrors.reduce((a, b) => a + b, 0);

    return partialErrorsSum / partialErrors.length;
  }

  private getStandardDeviation(variance: number): number {
    return Math.sqrt(variance);
  }

  private getStandardError(standardDeviation: number, n: number): number {
    return (standardDeviation / Math.sqrt(n));
  }

  private getRepresentation(appreciation: number, standardError: number, mostLikelyValue: number): string {
    if (standardError < appreciation) {
      return `${parseFloat(mostLikelyValue.toFixed(1))} +- ${appreciation}`;
    }

    return `${parseFloat(mostLikelyValue.toFixed(1))} +- ${standardError}`;
  }
}