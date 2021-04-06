import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyC2pJR3_tQNJb5yljfpF-gJpf-8st3aJP0",
  authDomain: "test-01-f126d.firebaseapp.com",
  projectId: "test-01-f126d",
  storageBucket: "test-01-f126d.appspot.com",
  messagingSenderId: "351676519244",
  appId: "1:351676519244:web:bf492cac5f0a01233f35e9",
  measurementId: "G-DKZJGJ94MX"
});

const db = firebaseApp.firestore();

export {db, firebaseApp};