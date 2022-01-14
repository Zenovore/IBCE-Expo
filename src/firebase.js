import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
// import { firebaseConfig } from "./firebase-config";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANlUt3O0DvPqHu-IXwkXuh5BF0vmHvCFY",
  authDomain: "ibce-database.firebaseapp.com",
  projectId: "ibce-database",
  storageBucket: "ibce-database.appspot.com",
  messagingSenderId: "96148820001",
  appId: "1:96148820001:web:107f27568b8a6364c21360",
  measurementId: "G-CFEV1XMBBS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(firebaseApp);

export const db = firebaseApp.firestore();
const guestbookCollection = db.collection("guest-book");

export const createGuest = (guest) => {
  return guestbookCollection.add(guest);
};
