const firebaseConfig = {
    apiKey: "AIzaSyAgiYo-dNzZExA37_6gPHXaDt8F6_66JN4",
    authDomain: "postpartum-momma.firebaseapp.com",
    projectId: "postpartum-momma",
    storageBucket: "postpartum-momma.appspot.com",
    messagingSenderId: "539374547347",
    appId: "1:539374547347:web:15646187825cc4c6b83866"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db= firebase.firestore()
