  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const auth = getAuth(app)
  const log = document.getElementById('log')

log.addEventListener("click", function(event) {
    event.preventDefault();
    let mail = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    signInWithEmailAndPassword(auth, mail, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = 'index.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("invalid email or password");
  });
  
});