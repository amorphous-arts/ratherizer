import {CardCollection} from "./card-collection";
import * as meals from "../../data/meals.json"
import * as cards from "../../data/cards.json"
import Random from "../util/random";
import {Card} from "../Entity/card";
import {CardFactory} from "../Factory/card-factory";


const AVAILABLE_CARDS: {[key: string]: {[key: string]: Card[]}} = {
  "Card_1": cards.Card_1,
  "Card_2": cards.Card_2,
  "base_meal": meals
}

export class StaticCardCollection<T extends Card> implements CardCollection<T> {

  private cards: {[key: string]: Card[]};

  // (keyof typeof AVAILABLE_CARDS)
  constructor(public readonly group: string) {
    this.cards = AVAILABLE_CARDS[group];
  }

  public getIngredient(key: string): Promise<T> {
    const index = Random.randomInclusive(0, this.cards[key].length - 1);
    const newCard = this.cards[key].splice(index, 1)[0];
    const instance = CardFactory.print<T>(newCard, this.group as string);

    instance.doRotate = false;
    instance.category = key;

    return Promise.resolve(instance);
  }

}
