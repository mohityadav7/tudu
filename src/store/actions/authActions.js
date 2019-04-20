// import firebase from '../../config/firebaseConfig';

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();        
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        }).catch((err) => {
            console.log('error logging out: ', err);
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                isTeacher: newUser.isTeacher,
                program: newUser.program,
                branch: newUser.branch,
                semester: newUser.semester
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export const sendVerificationCodeForPhoneSignIn = ({ phone, appVerifier }) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithPhoneNumber(phone, appVerifier)
            .then(confirmationResult => {
                dispatch({ type: 'CODE_SENT_SUCCESS' });
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
            }).catch(
                (err) => {
                    dispatch({ type: 'CODE_SENT_ERROR', err })
                    // Error; SMS not sent
                }
            );
    }
}

export const verifyVerificationCodeForPhoneSignIn = (code) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        window.confirmationResult.confirm(code).then(function (result) {
            dispatch({ type: 'LOGIN_SUCCESS' });
            // User signed in successfully.
            console.log('User signed in successfully');
            // var user = result.user;
            // ...
        }).catch(function (err) {
            dispatch({ type: 'LOGIN_ERROR', err });
            console.log("User couldn't sign in (bad verification code?)");
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }
}