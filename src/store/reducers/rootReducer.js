import authReducer from './authReducer';
import announcementReducer from './announceReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    announcement: announcementReducer,
    firestore: firestoreReducer
});

export default rootReducer;