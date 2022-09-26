import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAwB9cYW_Zj_A4TppTZPFwbAvU-zLGMeW8",
  authDomain: "uber-eats-clone-tabish.firebaseapp.com",
  projectId: "uber-eats-clone-tabish",
  storageBucket: "uber-eats-clone-tabish.appspot.com",
  messagingSenderId: "743671891720",
  appId: "1:743671891720:web:e28b013730f1e377abcebd",
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;