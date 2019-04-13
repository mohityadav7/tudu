import authReducer from './authReducer';
import announcementReducer from './announceReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    announcement: announcementReducer
});

export default rootReducer;