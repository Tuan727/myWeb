  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

  // Add API
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

  const auth = getAuth(app);
  const reg = document.getElementById('reg');
  const log = document.getElementById('log');


  //Driver
  reg.addEventListener("click", function(event) {
    event.preventDefault();
    let mail = document.getElementById('mail-reg').value;
    let pass = document.getElementById('pass-reg').value;
    let pass2 = document.getElementById('repeat-password').value;
    if (pass.length < 8) {
        alert("Password must be at least 8 characters long");
    }
    else if (pass != pass2) {
        alert("Passwords do not match");
    }
    else {
        createUserWithEmailAndPassword(auth, mail, pass)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
            displayName: document.getElementById('user').value, score: 0
        }).then(() => {
            console.log("User profile updated");
        }).catch((error) => {
            console.log(error);
        });
        })
        //Error Handle
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorMessage) {
          case "Firebase: Error (auth/invalid-email).":
            alert("Invalid email");
            break;
          case "Firebase: Error (auth/email-already-in-use).":
            alert("Account already exists");
            break;
          default:
            alert(errorMessage);
        }
        // ..
        });
    }
});