import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';

 
const firebaseConfig = {
    apiKey: "AIzaSyBqesge9HlOKdoqy81Q2roGRmAThS9O2rk",
    authDomain: "clone-56439.firebaseapp.com",
    projectId: "clone-56439",
    storageBucket: "clone-56439.appspot.com",
    messagingSenderId: "114616615530",
    appId: "1:114616615530:web:a82fe528dd536fb57d0013",
    measurementId: "G-76F15XR07Q"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  // const db = firebaseApp.firestore();
 
  
  
