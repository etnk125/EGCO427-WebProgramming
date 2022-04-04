import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

let app;
let auth;

const firebaseConfig = {
  apiKey: "AIzaSyAgnHVlahseMEn6OGY9DIXXgejJMF_9SGw",
  authDomain: "egco427-87095.firebaseapp.com",
  projectId: "egco427-87095",
  storageBucket: "egco427-87095.appspot.com",
  messagingSenderId: "769301935178",
  appId: "1:769301935178:web:6bcc7e065aac94423e62b3",
};

initializeApp(firebaseConfig);
auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
