import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
import Constants from 'expo-constants';

//Configration for firebase

const firebaseConfig = {

    apiKey: "AIzaSyBfnQrEbYCeSzqlGepnGZiTfNZIrb9fl4s",
    authDomian: Constants.manifest.extra.authDomian,
    projectId: Constants.manifest.extra.projectId,
    storageBuket: Constants.manifest.extra.storageBuket,
    messagingsenderId: Constants.manifest.extra.messagingsenderId,
    appId: Constants.manifest.extra.appId,
    databaseURL: Constants.manifest.extra.databaseURL,

};
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();