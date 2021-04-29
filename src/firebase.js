
  import firebase from "firebase";
  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCUXcIVtoXt9tlg7bBA0xrVA7xe78ZFVSc",
    authDomain: "todo-app-cp-70c72.firebaseapp.com",
    projectId: "todo-app-cp-70c72",
    storageBucket: "todo-app-cp-70c72.appspot.com",
    messagingSenderId: "693743291396",
    appId: "1:693743291396:web:2f2c983ee0a718d81eb951",
    measurementId: "G-R3WV2T95GW"

  });
  const db=firebaseApp.firestore();

  export default db;