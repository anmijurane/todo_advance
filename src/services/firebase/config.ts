
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Service By Firebase
const auth = getAuth( app );
const firestore = getFirestore( app );

export {
  auth,
  firestore
}

