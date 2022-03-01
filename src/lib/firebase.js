import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/auth';

// Here's where the seed file is imported

const config = {
  apiKey: 'AIzaSyAUrvpQivoFMyPuAeDNEkpdl9GJTFLG8xU',
  authDomain: 'instagram-clone-11910.firebaseapp.com',
  projectId: 'instagram-clone-11910',
  storageBucket: 'instagram-clone-11910.appspot.com',
  messagingSenderId: '229680245291',
  appId: '1:229680245291:web:28b513e011294db89a986e',
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// here is where seed file should be called (ONLY ONCE!!)
console.log('firebase', firebase);

export { firebase, FieldValue };
