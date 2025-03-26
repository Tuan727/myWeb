import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCLIC7LdTwsmYohW2qsx3pBpIG8eb6s52o",
    authDomain: "myweb-734f8.firebaseapp.com",
    projectId: "myweb-734f8",
    storageBucket: "myweb-734f8.firebasestorage.app",
    messagingSenderId: "154406395281",
    appId: "1:154406395281:web:12fd844f95ef9f36ab8e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const home = getAuth(app);
const db = getFirestore(app);

let text=document.getElementById("click");
let a = 0;
let img = document.getElementById("bnn");
function hi() {
    a+=1;
    if (a==2000000000) {
        alert("Congratulation! You have wasted your time! Now enjoy clicking back");
        a=0;
    }
    text.innerHTML=a;
}

onAuthStateChanged(home, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const name = user.displayName;
        console.log(uid);
        console.log(name);
        console.log(user.score);
        // ...
    } else {
        console.log('User is signed out');
        window.location = 'login.html';
    }
});