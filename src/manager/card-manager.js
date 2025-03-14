import {db} from "../database/firebase.js";
import {collection, getDocs, query, where} from "firebase/firestore";
import MathUtil from "../util/math-util.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Card_1 = before the base meal
// Card_2 = after the base meal
const keys = {
  'categories': ['stuffed', 'not_stuffed'],
  'Card_1': ['stuffed', 'topped'],
  'Card_2': ['drinks', 'topped', 'sides', 'extras']
}

export default class CardManager {
  /** @param {'Card_1'|'Card_2'|'categories'} #path */
  #path;
  #collectionPath;
  #CARDS_IN_PLAY = [];
  #key;
  #index = 0;

  /**
   *
   * @param {string} collectionPath
   * @param {'Card_1'|'Card_2'|'categories'} path
   */
  constructor(collectionPath, path) {
    this.#path = path;
    this.#collectionPath = collectionPath;
    this.#key = this.getRandomKey();
  }

  getIngredients = async () => {
    return  [
      await this.getIngredient(),
      await this.getIngredient(),
    ].sort((a, b) => a.order - b.order);
  }

  getIngredient = async () => {
    let filter = undefined;
    if(this.#CARDS_IN_PLAY.length > 0) {
      filter = where(firebase.firestore.FieldPath.documentId(), 'not-in', this.#CARDS_IN_PLAY);
    }


    const docs = (await getDocs(query(collection(db, this.#collectionPath, this.#path, this.#key), filter))).docs;
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
