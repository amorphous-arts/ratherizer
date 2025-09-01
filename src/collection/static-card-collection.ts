import {CardCollection} from "./card-collection";
import { meals, ingredients } from "../../data/cards"
import Random from "../util/random";
import {Card} from "../Entity/card";
import {CardFactory} from "../Factory/card-factory";
import {BasemealCard} from "../Entity/basemeal-card";
import {IngredientCard} from "../Entity/ingredient-card";


const AVAILABLE_CARDS: {[key: string]: Card[]} = {
  "ingredients": ingredients as unknown as IngredientCard[],
  "base_meal": meals as unknown as BasemealCard[]
}

export class StaticCardCollection<T extends Card> implements CardCollection<T> {

  private cards: Card[];

  // (keyof typeof AVAILABLE_CARDS)
  constructor(public readonly group: string) {
    this.cards = AVAILABLE_CARDS[group];
  }

  public getIngredient(): Promise<T> {
    const index = Random.randomInclusive(0, this.cards.length - 1);
    const newCard = this.cards.splice(index, 1)[0]; // splice to ensure the card can't be reselected this game
    const instance = CardFactory.print<T>(newCard, this.group as string);

    instance.doRotate = false;

    return Promise.resolve(instance);
  }

}
