import {db} from "./firebase.js";
import {collection, getCountFromServer, query, where} from "firebase/firestore";
import CardManager from "../manager/card-manager.js";
import {StaticCardCollection} from "../collection/static-card-collection";
import {BasemealCard} from "../Entity/basemeal-card";
import {IngredientCard} from "../Entity/ingredient-card";

/**
 * Returns a random base meal
 * @return {Promise<*[]>}
 */
export const getRandomMeals = async (): Promise<BasemealCard[]> => {
    const manager = new CardManager<BasemealCard>(new StaticCardCollection('base_meal'));

    // bit of a dirty hack to get two different meals
    return [(await manager.getIngredients())[0], (await manager.getIngredients())[0]];
}

export const getRandomIngredients = async () => {
    const collection = new StaticCardCollection<IngredientCard>('ingredients');
    const ingredientManager = new CardManager<IngredientCard>(collection);

    // do it in sets so we don't get the same ingredients
    const set1 = await Promise.all([ingredientManager.getIngredients(), ingredientManager.getIngredients()]);
    const set2 = await Promise.all([ingredientManager.getIngredients(), ingredientManager.getIngredients()]);

    return [
      set1,
      set2,
    ];
}

/**
 * @deprecated Might return in a later version
 * @param meal
 */
export const searchStats = async (meal) => {
    return 0;

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

/**
 * @deprecated Might return in a later version
 */
export const getStatsCount = async () => {
    return 0;

    const stats =  await getCountFromServer(collection(db, "stats"));
    return stats.data().count;
}
