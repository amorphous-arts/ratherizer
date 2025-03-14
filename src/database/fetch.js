import {db} from "./firebase.js";
import {collection, getCountFromServer, getDocs, query, where} from "firebase/firestore";
import CardManager from "../manager/card-manager.js";

const CARDS_IN_PLAY = [];

/**
 * Returns a random base meal
 * @return {Promise<*[]>}
 */
export const getRandomMeals = async () => {
    return (new CardManager('real_base_meals', 'categories')).getIngredients();
}

export const getRandomIngredients = async () => {
    const beforeIngredientManager = new CardManager('real_ingredients', 'Card_1');
    const afterIngredientManager = new CardManager('real_ingredients', 'Card_2');

    // do it in sets so we don't get the same ingredients
    const set1 = await Promise.all([beforeIngredientManager.getIngredients(), afterIngredientManager.getIngredients()]);
    const set2 = await Promise.all([beforeIngredientManager.getIngredients(), afterIngredientManager.getIngredients()]);

    return [
      [set1[0], set2[0]],
      [set1[1], set2[1]]
    ];
}

export const searchStats = async (meal) => {
    const getRelatedMeals = await getCountFromServer(query(
        collection(db, "stats"),
        where("firstIng", "==", meal.firstIng),
        where("fourthIng", "==", meal.fourthIng),
        where("meal", "==", meal.meal),
        where("secondIng", "==", meal.secondIng),
        where("secondToken", "==", meal.secondToken),
        where("thirdIng", "==", meal.thirdIng)
    ));
    return getRelatedMeals.data().count;
}

export const getStatsCount = async () => {
    const stats =  await getCountFromServer(collection(db, "stats"));
    return stats.data().count;
}
