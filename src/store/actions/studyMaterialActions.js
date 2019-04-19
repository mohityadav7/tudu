export const uploadFile = ({file, addedAt}) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'UPLOAD_START' })
        const firebase = getFirebase();
        const firestore = getFirestore();

		//create a storage reference
        var storageRef = firebase.storage().ref("btech/it/sem6/" + file.name);

		// upload file
		var uploadTask = storageRef.put(file);

		// update progress bar
		uploadTask.on(
			"state_changed",
			snapshot => {
				// Observe state change events such as progress, pause, and resume
				var progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                dispatch({type: 'UPLOAD_PROGRESS', progress: Math.round(progress)})
                    console.log("Upload is " + progress + "% done");
				switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        dispatch({type: 'UPLOAD_PAUSED'})
						console.log("Upload is paused");
						break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        dispatch({type: 'UPLOAD_RUNNING'})
						console.log("Upload is running");
						break;
					default:
						console.log("default case, should never be reached!");
				}
			},
			err => {
                // Handle unsuccessful uploads
                dispatch({type: 'UPLOAD_ERROR'}, err);
			},
			() => {
                // Handle successful uploads on complete
                dispatch({ type: 'UPLOAD_SUCCESS' })
				uploadTask.snapshot.ref
					.getDownloadURL()
					.then(function(downloadURL) {
                        console.log("File available at", downloadURL);
                        return firestore.collection('cloudComputing').doc(file.name).set({
                            name: file.name,
                            downloadURL,
                            addedAt
                        })
                    })
                    .then(() => {
                        console.log('added record to firestore');
                    }).catch((err) => {
                        console.log('error adding record in firestore');
                    })
			}
		);

		console.log("file uploaded");
	};
};
