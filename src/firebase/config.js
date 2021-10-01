import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAJf9787k64wCVGdTMJhqcVfAKTwxVh0D0",
  authDomain: "playlist-94814.firebaseapp.com",
  projectId: "playlist-94814",
  storageBucket: "playlist-94814.appspot.com",
  messagingSenderId: "782064844306",
  appId: "1:782064844306:web:b1ed8963d8c6840eac62cb"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

