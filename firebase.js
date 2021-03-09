import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzitVUo1bKMhkXZhiajtigFm7DRvf0Psc",
  authDomain: "signal-clone-app-af412.firebaseapp.com",
  projectId: "signal-clone-app-af412",
  storageBucket: "signal-clone-app-af412.appspot.com",
  messagingSenderId: "161494915753",
  appId: "1:161494915753:web:ba44492f914ebf0862a7b8",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
