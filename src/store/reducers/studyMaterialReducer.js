import { message } from 'antd';

const initState = {
    uploading: false,
    progress: 0
}

const studyMaterialReducer = (state = initState, action) => {

    switch(action.type){
        case 'UPLOAD_PROGRESS':
            console.log('UPLOAD_PROGRESS', action.progress);
            return {
                ...state,
                progress: action.progress
            };
        case 'UPLOAD_SUCCESS':
            console.log('File uploaded successfully!');
            message.success('File uploaded successfully!');
            return {
                ...state,
                uploading: false,
                progress: 0
            };
        case 'UPLOAD_START':
            return {
                ...state,
                uploading: true
            };
        case 'UPLOAD_PAUSED':
            console.log('UPLOAD_PAUSED');
            return state;
        case 'UPLOAD_RUNNING':
            console.log('UPLOAD_RUNNING');
            return state;
        case 'UPLOAD_ERROR':
            console.log('UPLOAD_ERROR');
            return state;
        default:
            return state;
    }
}

export default studyMaterialReducer;