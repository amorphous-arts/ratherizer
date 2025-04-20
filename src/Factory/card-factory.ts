import {Card} from "../Entity/card";
import {IngredientCard} from "../Entity/ingredient-card";
import {BasemealCard} from "../Entity/basemeal-card";

export class CardFactory
{

  public static print<T extends Card>(data: object, type: string): T
  {
    const parent = type === 'base_meal' ? BasemealCard.prototype : IngredientCard.prototype;

    return Object.setPrototypeOf(data, parent);
  }

}
