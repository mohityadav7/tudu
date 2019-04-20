export const createAnnouncement = ({announcement, courseCode}) => {
    return (dispatch, getStore, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('announcements').doc('it').collection('sem6').doc(courseCode).collection('announcements').add(announcement).then((docRef) => {
            firestore.collection('combinedAnnouncements').doc(docRef.id).set(announcement).then(() => {
                dispatch({ type: 'CREATE_ANNOUNCEMENT', announcement: announcement });
            }).catch(err => {
                dispatch({type: 'CREATE_ANNOUNCEMENT_ERR', err})
            })
        }).catch((err) => {
            dispatch({type: 'CREATE_ANNOUNCEMENT_ERR', err})
        })
    }
}