
import 'firebase/compat/firestore';
import {CardCollection} from "../collection/card-collection";
import {Card} from "../Entity/card";
import Random from "../util/random.js";

export default class CardManager<T extends Card> {

  /**
   *
   * @param collection
   */
  constructor(private readonly collection: CardCollection<T>) {
  }

  getIngredients = async (): Promise<T[]> => {
    const ingredient1 = await this.collection.getIngredient();
    ingredient1.doRotate = Random.randomInclusive(0, 1) === 1;

    return [
      ingredient1,
      await this.collection.getIngredient(),
    ].sort((a, b) => a.order - b.order);
  }
}
