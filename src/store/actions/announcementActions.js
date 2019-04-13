export const createAnnouncement = (announcement) => {
    return (dispatch, getStore, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('announcements').add({
            ...announcement,
            authorFirstName: 'Mohit',
            authorLastName: 'Yadav',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ANNOUNCEMENT', announcement: announcement });
        }).catch((err) => {
            dispatch({type: 'CREATE_ANNOUNCEMENT_ERR', err})
        })
    }
}