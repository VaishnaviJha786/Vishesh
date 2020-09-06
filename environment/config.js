import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEES4N532X16Pavv0Ig10BBkgnJRuK9XM",
    authDomain: "vishesh-d0ab3.firebaseapp.com",
    databaseURL: "https://vishesh-d0ab3.firebaseio.com",
    projectId: "vishesh-d0ab3",
    storageBucket: "vishesh-d0ab3.appspot.com",
    messagingSenderId: "890196523302",
    appId: "1:890196523302:web:a81b5a14cc05e1283569e7",
    measurementId: "G-8BLM38XHZF"   
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();