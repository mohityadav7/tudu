import authReducer from './authReducer';
import announcementReducer from './announceReducer';
import studyMaterialReducer from './studyMaterialReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    announcement: announcementReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    studyMaterial: studyMaterialReducer
});

export default rootReducer;