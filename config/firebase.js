import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  databaseURL: Constants.manifest.extra.databaseURL,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  measurementId: Constants.manifest.extra.measurementId,
  };
  
  // const firebaseConfig = {
  //   apiKey: "AIzaSyC4zzzkq2zPPyjwNWzefkRHJkVZCdTL02w",
  //   authDomain: "newdriver-87c95.firebaseapp.com",
  //   databaseURL: "https://newdriver-87c95-default-rtdb.europe-west1.firebasedatabase.app",
  //   projectId: "newdriver-87c95",
  //   storageBucket: "newdriver-87c95.appspot.com",
  //   messagingSenderId: "1057121439246",
  //   appId: "1:1057121439246:web:8e14f6a55a1d576c3af65f",
  //   measurementId: "G-SQ2M3ZTQXJ"
  // };



export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const database = getFirestore(app);
