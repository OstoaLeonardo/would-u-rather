import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-_Mg2d8xHZhC09g2svOnG4_eFOkv8dE4",
    authDomain: "would-u-rather-game.firebaseapp.com",
    projectId: "would-u-rather-game",
    storageBucket: "would-u-rather-game.appspot.com",
    messagingSenderId: "420403987",
    appId: "1:420403987:web:bef9a50d682cf675f1d8e6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
export { db };