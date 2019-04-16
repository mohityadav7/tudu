const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('Login error');
            return {
                ...state,
                authError: action.err.message
            };
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        case 'CODE_SENT_SUCCESS':
            console.log('verification code sent via SMS');
            return state;
        case 'CODE_SENT_ERROR':
            console.log(action.err.message);
            return state;
        default:
            return state;
    }
}

export default authReducer;