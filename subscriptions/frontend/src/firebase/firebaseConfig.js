import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyAV0X_zLAjr1eJVc56coo24oMRNcRz-ars",
    authDomain: "fir-supcription-stripe.firebaseapp.com",
    projectId: "fir-supcription-stripe",
    storageBucket: "fir-supcription-stripe.appspot.com",
    messagingSenderId: "1061612641099",
    appId: "1:1061612641099:web:9163c4b8b79b9cc257e6ce",
    measurementId: "G-7VWBTH0NJ6"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase