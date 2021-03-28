import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBv9mfm3qMXcdwZlE-pTflJhk12RVldAJQ',
  authDomain: 'crwn-db-6e4ee.firebaseapp.com',
  projectId: 'crwn-db-6e4ee',
  storageBucket: 'crwn-db-6e4ee.appspot.com',
  messagingSenderId: '757077876158',
  appId: '1:757077876158:web:ff10389da8ddf1857bedef',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
