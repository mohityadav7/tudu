import React from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Announcement = (props) => {
    let { announcement } = props;
    
    if(announcement){
        announcement = announcement[0];
        return (
            <div style={{ margin: '16px' }}>
                <Card 
                    size="small"
                    title={ announcement.title }
                    style={{ width: '100%', margin: '12px 0' }}
                >
                    <p>{ announcement.description }</p>
                    <div style={{ padding: '8px', backgroundColor: '#f5f5f5' }}>
                    <p style={{ color: '#999' }}>Posted by { announcement.authorFirstName + ' ' + announcement.authorLastName } <br/>
                    { moment(announcement.createdAt.toDate()).calendar() } </p>
                    </div>
                </Card>
            </div>
        )
    } else {
        return (
            <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        announcement: state.firestore.ordered.announcement
    }
}

const firestoreConnectQueriesConfig = (props) => {
    const id = props.match.params.id;
    const course = props.match.params.course;

    console.log('course', course);
    console.log('id', id);

    let out = [{
        collection: 'announcements',
        doc: 'it',
        subcollections: [{
            collection: 'sem6',
            doc: course,
            subcollections: [{
                collection: 'announcements',
                doc: id
            }]
        }],
        storeAs: 'announcement'
    }]

    return out;
}

export default compose(
    firestoreConnect(firestoreConnectQueriesConfig),
    connect(mapStateToProps)
)(withRouter(Announcement));