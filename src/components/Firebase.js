import * as firebase from "firebase";
import { FirebaseConfig } from "../FirebaseConfig";

firebase.initializeApp(FirebaseConfig);

export const authRef = firebase.auth();
export const dbRef = firebase.firestore();
export const storageRef = firebase.storage().ref();