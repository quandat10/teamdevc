import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAY3Zjy8T7F7FgzbCi9itBHhh4KnAJKIlM",
  authDomain: "devcteam01.firebaseapp.com",
  databaseURL: "https://devcteam01.firebaseio.com",
  projectId: "devcteam01",
  storageBucket: "devcteam01.appspot.com",
  messagingSenderId: "194064267167",
  appId: "1:194064267167:web:92bea8306a4498041e6faa",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
