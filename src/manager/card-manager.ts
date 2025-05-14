
import 'firebase/compat/firestore';
import {CardCollection} from "../collection/card-collection";
import {Card} from "../Entity/card";
import Random from "../util/random.js";

// Card_1 = before the base meal
// Card_2 = after the base meal
const keys = {
  'base_meal': ['stuffed', 'not_stuffed'],
  'Card_1': ['extras', 'drinks', 'stuffed', 'topped'],
  'Card_2': ['drinks', 'topped', 'sides', 'extras']
}

export default class CardManager<T extends Card> {

  /**
   *
   * @param collection
   */
  constructor(private readonly collection: CardCollection<T>) {
  }

  getIngredients = async (): Promise<T[]> => {
    const ingredient1 = await this.collection.getIngredient<T>(this.getRandomKey());
    ingredient1.doRotate = Random.randomInclusive(0, 1) === 1;

    return [
      ingredient1,
      await this.collection.getIngredient<T>(this.getRandomKey()),
    ].sort((a, b) => a.order - b.order);
  }


  getRandomKey = () => {
    const target = keys[this.collection.group];

    return target[Random.randomInclusive(0, target.length - 1)];
  }
}
