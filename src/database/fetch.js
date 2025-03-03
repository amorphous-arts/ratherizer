import { db } from "./firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const getRandomMeals = async () => {
    return await getDataDocs(collection(db, 'base_meals'));
}


export const getRandomIngredients = async () => {
    const beforeKeys = ['stuffed', 'extras'];
    const afterKeys = ['drinks', 'topped', 'sides'];

    const randomBeforeKeys = [getRandom(beforeKeys.length), getRandom(beforeKeys.length)];
    const randomAfterKey = [getRandom(afterKeys.length), getRandom(afterKeys.length)];

    const beforeIngredients = [await getIngredients( beforeKeys[randomBeforeKeys[0]]), await getIngredients(beforeKeys[randomBeforeKeys[1]])];

    const afterIngredients = [await getIngredients( afterKeys[randomAfterKey[0]]), await getIngredients(afterKeys[randomAfterKey[1]])];

    return [beforeIngredients, afterIngredients];
}

const getIngredients = async (key) => {
    return await getDataDocs(collection(db, "ingredients", 'categories', key));
}


const getDataDocs = async (collection = '') => {
    const docs = await getDocs(collection);
    const length = docs.size;
    const randoms = randomKeysArray(length).sort();
    const data = [];
    let index = 0;
    docs.forEach((doc) => {
        if(index == randoms[0]) {
            data.push(doc.data());
            randoms.shift();
        }
        if(randoms.length == 0) {
            return;
        }
        index++;
    });
    return data;
};

const randomKeysArray = (length) => {
    let lastValue = '';
    const randomArray = [];
    for(let i =0; i< 2; i++) {
        lastValue = getRandom(length, lastValue);
        randomArray.push(lastValue);
    }
    return randomArray;
}
const getRandom = (length, lastValue) => {
    let value = Math.floor(Math.random() * length);
    if(value == lastValue) {
        return getRandom(length, lastValue);
    } else {
        return value;
    }
} 