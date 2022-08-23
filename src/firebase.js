
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA4yAH6jdEqymDwGXbDN5z_YxJDmUgpaiA",
  authDomain: "reactfinal-36831.firebaseapp.com",
  databaseURL: "https://reactfinal-36831-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactfinal-36831",
  storageBucket: "reactfinal-36831.appspot.com",
  messagingSenderId: "289159953765",
  appId: "1:289159953765:web:89e7515e3993dbacf2358c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)