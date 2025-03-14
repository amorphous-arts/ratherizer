// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, persistentLocalCache, disableNetwork} from "firebase/firestore";
import  config from '../config.js';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = config.firebase;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const db = initializeFirestore(app, {localCache: persistentLocalCache({})});
//
// await disableNetwork(db);

export {db};
