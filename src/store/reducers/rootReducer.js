import authReducer from './authReducer';
import announcementReducer from './announceReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    announcement: announcementReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;