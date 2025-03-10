import {db} from "./firebase";
import {collection, getCountFromServer, getDocs, query, where} from "firebase/firestore";

const CARDS_IN_PLAY = [];

/**
 * Returns a random base meal
 * @return {Promise<*[]>}
 */
export const getRandomMeals = async () => {
    const keys = ['stuffed', 'not_stuffed'];
    const key = keys[getRandom(keys.length)]; // either get's stuffed or not stuffed

    return await getDataDocs(collection(db, 'base_meals', 'categories', key), key);
}

export const getRandomIngredients = async () => {
    const beforeKeys = ['stuffed', 'topped'];
    const afterKeys = ['drinks', 'topped', 'sides', 'extras'];

    const randomBeforeKeys = [getRandom(beforeKeys.length), getRandom(beforeKeys.length)];
    const randomAfterKey = [getRandom(afterKeys.length), getRandom(afterKeys.length)];

    // before the base meal
    const beforeIngredients = [await getIngredients('Card_1', beforeKeys[randomBeforeKeys[0]]), await getIngredients('Card_1', beforeKeys[randomBeforeKeys[1]])];

    // after the base meal
    const afterIngredients = [await getIngredients('Card_2', afterKeys[randomAfterKey[0]]), await getIngredients('Card_2', afterKeys[randomAfterKey[1]])];

    return [beforeIngredients, afterIngredients];
}


const getIngredients = async (card, key) => {
    // let filter = CARDS_IN_PLAY.length > 0 ? where('id', 'not-in', CARDS_IN_PLAY) : undefined; // TODO maybe
    let filter = undefined;

    return await getDataDocs(query(collection(db, "ingredients", card, key), filter), key);
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

/**
 *
 * @param {CollectionReference<DocumentData, DocumentData>|Query<DocumentData,DocumentData>} collection
 * @param {string} key
 * @return {Promise<*[]>}
 */
const getDataDocs = async (collection, key) => {
    const docs = await getDocs(collection);
    // const length = docs.docs;

    const randoms = randomDocs(docs.docs);
    const data = [];


    randoms.forEach((random) => {
        let temp = random.data();
        temp.key = key;
        temp.id = random.id;
        temp.rotate = getRotate();
        data.push(temp);
    });

    return data;
};

const getRotate = () => {
    const rotateArray = [0, 1];
    return rotateArray[getRandom(rotateArray.length)];
}

const randomDocs = (docs) => {
    let length = docs.length;
    const result = [];

    for(let i = 0, value; i < 2; i++) {
        do {
            let i = getRandom(length);
            value = docs.splice(i, 1)[0];

            // fixme this isn't perfect yet - value should never be null
        } while(!value || CARDS_IN_PLAY.includes(value.id));
        CARDS_IN_PLAY.push(value.id);

        length--;
        result.push(value);
    }

    return result;
};

const getRandom = (length) => {
    return Math.floor(Math.random() * length);
};
