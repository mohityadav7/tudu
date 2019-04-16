export const createAnnouncement = (announcement) => {
    return (dispatch, getStore, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('announcements').add(announcement).then(() => {
            dispatch({ type: 'CREATE_ANNOUNCEMENT', announcement: announcement });
        }).catch((err) => {
            dispatch({type: 'CREATE_ANNOUNCEMENT_ERR', err})
        })
    }
}