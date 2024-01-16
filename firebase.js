import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBsBXBXDGP69jiVTRsz2gsIhJkOBDGs_A",
  authDomain: "laundry-application-d9289.firebaseapp.com",
  projectId: "laundry-application-d9289",
  storageBucket: "laundry-application-d9289.appspot.com",
  messagingSenderId: "452701212397",
  appId: "1:452701212397:web:a2278b937ef676fedc46e4",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore();

export { auth, db, app as firebase };
