// firebase/authState.js
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

export function watchAuth(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback({
        loggedIn: true,
        uid: user.uid,
        isAnonymous: user.isAnonymous,
        email: user.email || null
      });
    } else {
      callback({
        loggedIn: false
      });
    }
  });
}
