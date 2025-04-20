import {Card} from "./card";

export class IngredientCard implements Card {

  public readonly category: string;
  public doRotate: boolean = false;

  constructor(
    public readonly ingredient: string,
    public readonly attribute: string,
    public readonly attributeOrder: {ingredient: number, attribute: number} = {
      ingredient: 0,
      attribute: 0
    },
    public readonly uuid: string
  ) {

  }

  get order(): number {
    return this.attributeOrder[this.getTopAttribute()];
  }

  private getTopAttribute(): 'ingredient'|'attribute' {
    return !this.doRotate ? 'ingredient' : 'attribute';
  }
}
