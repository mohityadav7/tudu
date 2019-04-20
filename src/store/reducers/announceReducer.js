const initState = {
    announcements: [
        {id: '1', title: 'No class on Monday', description: 'I am on leave on Monday, so I will not be able to take the class.', authorFirstName: 'Mohit', authorLastName: 'Yadav'},
        {id: '2', title: 'First assignment', description: 'Make an assignment on the first two topics of unit 3, due data: 18-4-19', authorFirstName: 'Mohit', authorLastName: 'Yadav'},
        {id: '3', title: 'Lectures exchanged', description: 'Your 3rd lecture of ACST is replaced with that of Cloud Computing.', authorFirstName: 'Mohit', authorLastName: 'Yadav'}
    ]
};

const announcementReducer = (state = initState, action) => {

    switch(action.type){
        case 'CREATE_ANNOUNCEMENT':
            console.log('created announcement', action.announcement);
            return state;
        case 'CREATE_ANNOUNCEMENT_ERR':
            console.log('CREATE_ANNOUNCEMENT_ERR', action.err);
            return state;
        default:
            return state;
    }
}

export default announcementReducer;