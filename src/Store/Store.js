import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// reducers

import NotifyReducer from "../Reducers/NotifyReducer"




const firebaseConfig = {
    apiKey: "AIzaSyCQH1kZa0Oifttsmbqwu9vxDgbSI6RfS7g",
    authDomain: "clientpanel-c0b87.firebaseapp.com",
    databaseURL: "https://clientpanel-c0b87.firebaseio.com",
    projectId: "clientpanel-c0b87",
    storageBucket: "clientpanel-c0b87.appspot.com",
    messagingSenderId: "204699668708",
    appId: "1:204699668708:web:6ff0578044c4e4f5f8dcf1",
    measurementId: "G-CQ9L6HVCMG"
  };

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true

   // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  nofity: NotifyReducer
});

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;