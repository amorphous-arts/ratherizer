import {db} from "./firebase.js"
import {collection, addDoc} from "firebase/firestore"
import {Meal} from "../Entity/meal.js";


/**
 * Submit your meal stat to the server
 * Returns the percentage of how many times this meal has been made
 *
 * @param meal
 * @return {Promise<number>}
 */
export const addStats = async(meal: Meal) => {
  const stat = {
    firstIng: meal.mealDescriptions[0].uuid,
    secondIng: meal.mealDescriptions[1].uuid,
    meal: meal.basemeal.uuid,
    thirdIng: meal.sides[0].uuid,
    fourthIng: meal.sides[1].uuid,
    firstToken: meal.firstContextToken,
    secondToken: meal.secondContextToken,
    rotates: [meal.mealDescriptions[0].doRotate, false, meal.sides[0].doRotate, false],
    timestamp: new Date().toISOString(),
  };

  addDoc(collection(db, 'stats'), stat); // this can happen in the background

  if(typeof gtag === 'function') {
    gtag('event', 'meal_choice', {
      'event': 'meal_choice',
      'meal-id': 'meal1',
      'meal-name': meal.mealDescriptions[0].ingredient
    });
  }
}
