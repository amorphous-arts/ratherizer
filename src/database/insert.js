import {db} from "./firebase.js"
import {collection, addDoc} from "firebase/firestore"
import {searchStats, getStatsCount} from "./fetch.js"

// const insertAnalytics = () => {


// }


const jsonData = {}


export const addIng = async() => {
  for(const category in jsonData) {
    const key = category;
    for(const item in jsonData[key]) {
      jsonData[key][item].forEach((child) => {
        addDoc(collection(db, "real_ingredients", key, item), child)
      });
    }
  }
}

const meals = {}

export const addMeals = async() => {
  for(const category in meals) {
    const key = category;
    meals[key].forEach(async(item) => {
      const data = await addDoc(collection(db, "real_base_meals", 'categories', key), {
        name: item,
      })
    })
  }
  ;
}

/**
 * Submit your meal stat to the server
 * Returns the percentage of how many times this meal has been made
 *
 * @param meal
 * @return {Promise<number>}
 */
export const addStats = async(meal) => {
  const [mealCount, totalCount] = await Promise.all([searchStats(meal), getStatsCount()]);

  Object.keys(meal).forEach(key => {
    meal[key] = meal[key].hasOwnProperty('id') ? meal[key].id : meal[key];
  });

  addDoc(collection(db, 'stats'), meal); // this can happen in the background

  return mealCount / totalCount * 100;
}
