import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const config = {
  apiKey: "AIzaSyCpO0ehOGIXYOmjFVw9YpmjJjR6iHy6Uog",
  authDomain: "egg-hunt-project-planner.firebaseapp.com",
  databaseURL: "https://egg-hunt-project-planner.firebaseio.com",
  projectId: "egg-hunt-project-planner",
  storageBucket: "egg-hunt-project-planner.appspot.com",
  messagingSenderId: "101402788983"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
