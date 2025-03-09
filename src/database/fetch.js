import { db } from "./firebase";
import { collection, getDocs, query, where, getCountFromServer } from "firebase/firestore";

export const getRandomMeals = async () => {
    const keys = ['stuffed', 'not_stuffed'];
    const key = keys[getRandom(keys.length)];

    return await getDataDocs(collection(db, 'base_meals', 'categories', key), key);
}

export const getRandomIngredients = async () => {
    const beforeKeys = ['stuffed', 'topped'];
    const afterKeys = ['drinks', 'topped', 'sides', 'extras'];

    const randomBeforeKeys = [getRandom(beforeKeys.length), getRandom(beforeKeys.length)];
    const randomAfterKey = [getRandom(afterKeys.length), getRandom(afterKeys.length)];

    const beforeIngredients = [await getIngredients('Card_1', beforeKeys[randomBeforeKeys[0]]), await getIngredients('Card_1', beforeKeys[randomBeforeKeys[1]])];

    const afterIngredients = [await getIngredients('Card_2', afterKeys[randomAfterKey[0]]), await getIngredients('Card_2', afterKeys[randomAfterKey[1]])];

    return [beforeIngredients, afterIngredients];
}


const getIngredients = async (card, key) => {
    return await getDataDocs(collection(db, "ingredients", card, key), key);
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

const getDataDocs = async (collection = '', key = '') => {
    const docs = await getDocs(collection);
    const length = docs.docs.length - 1;
    const randoms = randomKeysArray(length);
    const data = [];
    randoms.forEach((random) => {
        let temp = docs.docs[random].data();
        temp.key = key;
        temp.id = docs.docs[random].id;
        temp.rotate = getRotate();
        data.push(temp);
    });
    return data;
};

const getRotate = () => {
    const rotateArray = [0, 1];
    return rotateArray[getRandom(rotateArray.length)];
}

const randomKeysArray = (length) => {
    let lastValue = '';
    const randomArray = [];
    for (let i = 0; i < 2; i++) {
        lastValue = getRandom(length, lastValue);
        randomArray.push(lastValue);
    }
    return randomArray;
}
const getRandom = (length, lastValue) => {
    return Math.floor(Math.random() * length);
    // if (value == lastValue) {
    //     return getRandom(length, lastValue);
    // } else {
    //     return value;
    // }
} 