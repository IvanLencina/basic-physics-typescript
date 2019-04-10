import {MirrorTypes} from "../enumerations/mirror-types";

export class Mirror {

  private type: MirrorTypes;

  constructor(type: MirrorTypes) {
    this.type = type;
  }
}