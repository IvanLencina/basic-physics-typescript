import {Medium} from "../interfaces/medium";

export class Air implements Medium {
  private refractiveIndex: number | undefined;

  constructor(refractiveIndex?: number) {
    this.refractiveIndex = refractiveIndex;
  }

  public getRefractiveIndex(): number | undefined {
    return this.refractiveIndex;
  }
}