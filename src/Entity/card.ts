
export interface Card {

  doRotate: boolean;
  category: string;
  uuid: string;

  get order(): number;

}
