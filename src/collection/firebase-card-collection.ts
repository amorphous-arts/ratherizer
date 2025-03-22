
import {db} from "../database/firebase.js";
import {collection, getDocs, query, where} from "firebase/firestore";
import MathUtil from "../util/random.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {CardCollection} from "./card-collection";
import {Card} from "../Entity/card";

/**
 * @deprecated this hasn't been properly integrated and is mainly a left-over
 */
export default class FirebaseCardCollection implements CardCollection {
  private cardsInPlay: string[] = [];
  private _category: string;


  constructor(public readonly group: 'real_ingredients'|'real_attributes'|'base_meals') {
  }

  getIngredient = async (key: string): Promise<Card> => {
    let filter = undefined;
    if(this.cardsInPlay.length > 0) {
      filter = where(firebase.firestore.FieldPath.documentId(), 'not-in', this.cardsInPlay);
    }




    const docs = (await getDocs(query(collection(db, this.group, /*key*/, key), filter))).docs;
    const record = docs[MathUtil.randomInclusive(0, docs.length - 1)];
    const result = record.data();
    result.key = this.#key;
    result.id = record.id;
    result.rotate = ++this.#index % 2 === 0 ? 0 : MathUtil.randomInclusive(0, 1);

    result.order = !!result.order ? result.order[result.rotate ? 'attr' : 'ingredient'] : 0;

    this.#CARDS_IN_PLAY.push(record.id);

    return result;
  }

  getRandomKey = () => {
    const target = keys[this.#path];

    return target[MathUtil.randomInclusive(0, target.length - 1)];
  }
}
