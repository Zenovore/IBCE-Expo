import firebase from "firebase";
import { ref, onMounted } from "vue";

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

const db = firebaseApp.firestore();
const guestbookCollection = db.collection("guest-book");

export const createGuest = (guest) => {
  return guestbookCollection.add(guest);
};
