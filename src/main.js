import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./styles.css"
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCRbo02vJMPCFVeUlECnb02WI5vf2xdEno",

  authDomain: "my-portfolio-9a79a.firebaseapp.com",

  projectId: "my-portfolio-9a79a",

  storageBucket: "my-portfolio-9a79a.appspot.com",

  messagingSenderId: "467393306204",

  appId: "1:467393306204:web:3f641c7ab659016b2dd099"

};


// Initialize Firebase

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
