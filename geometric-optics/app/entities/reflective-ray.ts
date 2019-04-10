export class ReflectiveRay {
  private height: number | undefined;
  private mirrorVertexDistance: number;

  constructor(mirrorVertexDistance: number, height?: number) {
    this.height = height;
    this.mirrorVertexDistance = mirrorVertexDistance;
  }

  public getHeight(): number | undefined {
    return this.height;
  }

  public getMirrorVertexDistance(): number {
    return this.mirrorVertexDistance;
  }
}