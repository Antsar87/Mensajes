import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBYpF-vZBPEMgJEaXkxtQiPyusyFRM-HAc',
  authDomain: 'yare-yare-6338b.firebaseapp.com',
  projectId: 'yare-yare-6338b',
  storageBucket: 'yare-yare-6338b.appspot.com',
  messagingSenderId: '706418838962',
  appId: '1:706418838962:web:9dd083930c34da4dd3e8ab',
};

firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
