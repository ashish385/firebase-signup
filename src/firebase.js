import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyByxFJ4Be2Ab6NmJPuGUwll_tdYj-jAD5s",
  authDomain: "fir-signup-6c19c.firebaseapp.com",
  projectId: "fir-signup-6c19c",
  storageBucket: "fir-signup-6c19c.appspot.com",
  messagingSenderId: "543178249157",
  appId: "1:543178249157:web:0d9c01fd55d73ee823b1ac",
  databaseURL:"https://fir-signup-6c19c-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);