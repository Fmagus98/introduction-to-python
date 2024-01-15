import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkh7YmeYQPtkWlXyDpqCIXXumETkvO96Y",
    authDomain: "python-6a1c4.firebaseapp.com",
    projectId: "python-6a1c4",
    storageBucket: "python-6a1c4.appspot.com",
    messagingSenderId: "533628017318",
    appId: "1:533628017318:web:02d6d0b245f7127a0e3267"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);