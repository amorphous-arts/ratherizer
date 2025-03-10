import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore"
import { searchStats, getStatsCount } from "./fetch"

// const insertAnalytics = () => {



// }


// export const addIng = async () => {
//     for (const category in jsonData) {
//         const key = category;
//         for(const item in jsonData[key]) {
//             jsonData[key][item].forEach(async (child) => {
//               const data = await addDoc(collection(db, "ingredients", key, item), {
//                 ing: child.ing,
//                 attr: child.attr
//               })
//             })
//         }
//     };
// }

// const meals = {
//   "stuffed": [
//     "Stuffed Shells",
//     "Wellington",
//     "Ravioli",
//     "Dumplings",
//     "Hot Dog",
//     "Calzone",
//     "Empanadas",
//     "Spanikopita",
//     "Enchiladas",
//     "Spring Rolls",
//     "Gyro",
//     "Souvlaki",
//     "Croquettes",
//     "Burrito",
//     "Falafel",
//     "Haggis"
//   ],
//   "not_stuffed": [
//     "Top Ramen",
//     "Rotisserie",
//     "Salad",
//     "Shepard's Pie",
//     "Souffle",
//     "Soup",
//     "Steak",
//     "Stew",
//     "Stir Fry",
//     "Stuffing",
//     "Sushi",
//     "Tacos",
//     "Curry",
//     "Pho",
//     "Pizza",
//     "Pudding",
//     "Quiche",
//     "Filet",
//     "Ice Cream",
//     "Lasagne",
//     "Parfait",
//     "Pie",
//     "Aspic",
//     "Burger",
//     "Cake",
//     "Casserole",
//     "Chili",
//     "Club Sandwich",
//     "Goulash",
//     "Shish Kebab",
//     "Century Egg",
//     "Peking Duck",
//     "Gelato",
//     "Pad Thai",
//     "Tres Leches",
//     "Fajitas",
//     "Couscous",
//     "Matzoh Ball Soup",
//     "Poutine",
//     "Beaver Tail",
//     "Borscht",
//     "Laverbread",
//     "Waffles",
//     "Frikadeller",
//     "Sausages",
//     "Bibimbap",
//     "Fermented Shark",
//     "Bread",
//     "Nachos",
//     "Croissants",
//     "Escargot",
//     "Frog's Legs",
//     "Paella"
//   ]
// }

// export const addMeals = async () => {
//   for (const category in meals) {
//     const key = category;
//     meals[key].forEach(async (item) => {
//       const data = await addDoc(collection(db, "base_meals", 'categories', key), {
//         name: item,
//       })
//     })
//   };
// }

export const addStats = async (meal) => {
  const mealCount = await searchStats(meal);
  const totalCount = await getStatsCount();
  
  Object.keys(meal).forEach(key => {
    meal[key] = meal[key].hasOwnProperty('id') ? meal[key].id : meal[key];
  });
  
  await addDoc(collection(db, 'stats'), meal);
  
  return mealCount / totalCount * 100;
}