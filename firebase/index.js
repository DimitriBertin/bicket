const { initializeApp } = require('firebase-admin/app')

const firebaseConfig = {
  apiKey: "AIzaSyA2-7gWfxqgdIkK_b-YEmSW2V-G-f0dhfk",
  authDomain: "biket-720e4.firebaseapp.com",
  projectId: "biket-720e4",
  storageBucket: "biket-720e4.appspot.com",
  messagingSenderId: "677894593144",
  appId: "1:677894593144:web:afb267bdf39371c905eb8d",
  measurementId: "G-NDRXPDKJ32"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
