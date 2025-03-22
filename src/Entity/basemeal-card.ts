import {Card} from "./card";

export class BasemealCard implements Card {

  public readonly category: string;
  public _doRotate: boolean = false;


  set doRotate(value: boolean) {
  }

  get doRotate(): boolean {
    return this._doRotate;
  }

  constructor(
    public readonly descriptor: string,
    public readonly uuid: string
  ) {
  }

  get order(): number {
    return 0;
  }

}
