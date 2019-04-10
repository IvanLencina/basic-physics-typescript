export class ReflectiveRay {
  private height: number | undefined;
  private mirrorVerticeDistance: number;

  constructor(mirrorVerticeDistance: number, height?: number) {
    this.height = height;
    this.mirrorVerticeDistance = mirrorVerticeDistance;
  }

  public getHeight(): number | undefined {
    return this.height;
  }

  public getMirrorVerticeDistance(): number {
    return this.mirrorVerticeDistance;
  }
}