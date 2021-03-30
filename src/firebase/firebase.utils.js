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

/*
 ** Create user profile in firestore if user doesn't exist already.
 ** Return the QueryReference for the user.
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user: ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

// Export these out to be used by different parts of the app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up sign in providers
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
