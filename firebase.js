// firebase.js

// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase config
 const firebaseConfig = {
    apiKey: "AIzaSyDvlC2uDSyY3A21hVb-1K-nRl3YVd0Hc6Y",
    authDomain: "loginpage-86377.firebaseapp.com",
    databaseURL: "https://loginpage-86377-default-rtdb.firebaseio.com",
    projectId: "loginpage-86377",
    storageBucket: "loginpage-86377.firebasestorage.app",
    messagingSenderId: "894633941593",
    appId: "1:894633941593:web:5616e9a6c93d1b1d71af48"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Handle auth logic
window.handleAuth = async function () {
  const isSignup = document.getElementById('submitBtn').innerText.includes('UP');
  const email = document.getElementById('emailField').value.trim();
  const password = document.getElementById('passwordField').value.trim();
  const name = document.getElementById('nameField').value.trim();

  if (!email || !password || (isSignup && !name)) {
    alert("Please fill all fields");
    return;
  }

  try {
    if (isSignup) {
      // Create account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save username to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: name,
        email: email,
        createdAt: new Date()
      });

      Toastify({
        text: "Signed up and logged in successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
      }).showToast();

    } else {
      // Log in
      await signInWithEmailAndPassword(auth, email, password);

      Toastify({
        text: "Logged in successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
      }).showToast();
    }

    document.getElementById("authModal").style.display = "none";

  } catch (error) {
    console.error("Auth Error:", error.message);
    alert(error.message);
  }
};

// Display user's name from Firestore
onAuthStateChanged(auth, async (user) => {
  const userInitialEl = document.getElementById("userInitial");

  if (user) {
    try {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        userInitialEl.innerText = userData.username || user.email.split("@")[0];
      } else {
        userInitialEl.innerText = user.email.split("@")[0];
      }
    } catch (e) {
      console.error("Error fetching username:", e.message);
      userInitialEl.innerText = user.email.split("@")[0];
    }
  } else {
    userInitialEl.innerText = "Login";
  }
});
