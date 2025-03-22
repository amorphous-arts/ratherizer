import {Card} from "../Entity/card";

export interface CardCollection<T extends Card> {

  readonly group: string;

  getIngredient(key: string): Promise<T>;

}
