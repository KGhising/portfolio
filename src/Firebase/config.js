import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDtppSN4X--o8NGLAbbJ9z7snpC_1BOXw8",
    authDomain: "portfolio-kishor-ghising.firebaseapp.com",
    projectId: "portfolio-kishor-ghising",
    storageBucket: "portfolio-kishor-ghising.appspot.com",
    messagingSenderId: "426950231003",
    appId: "1:426950231003:web:4db3c64c89561c38361dfe",
    measurementId: "G-XVRVGRM0TG"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore }
