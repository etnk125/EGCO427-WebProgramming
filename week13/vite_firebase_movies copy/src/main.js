import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'


import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


let app
let auth


const firebaseConfig = {
//Add your api key
  }
  
// Initialize Firebase
initializeApp(firebaseConfig);
auth = getAuth()


onAuthStateChanged(auth, (user)=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})

