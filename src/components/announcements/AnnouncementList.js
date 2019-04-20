import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Card } from 'antd'
import AnnouncementSummary from './AnnouncementSummary'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';

const AnnouncementList = (props) => {

    const { courseAnnouncements } = props;
    const style={
        padding: '20px',
        border: '1px solid #e8e8e8',
        backgroundColor: '#ffffff',
    }

    return (
        <div style={style}>
            <Link to='/dashboard/newAnnouncement'>
                <Button><Icon type="plus" /> Create New Announcement</Button>
            </Link>
            { courseAnnouncements && courseAnnouncements.length > 0 ? 
                (courseAnnouncements[0].hasOwnProperty('announcements') ? 
                    (courseAnnouncements[0].announcements.map((announcement, index) => {
                        return (
                            <Link to={ '/dashboard/announcements/'+announcement.id } key={index}>
                                <AnnouncementSummary announcement={announcement} />
                            </Link>
                        )
                    })) :
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }}>No announcements yet.</Card>                    
                ):
                <div>
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
                </div>
             }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        courseAnnouncements: state.firestore.ordered.courseAnnouncements
    }
}

export default compose(
    firestoreConnect(props => [{
        collection: 'announcements',
        doc: 'it',
        subcollections: [{
            collection: 'sem6',
            doc: props.course
        }],
        storeAs: 'courseAnnouncements'
    }]),
    connect(mapStateToProps)
)(AnnouncementList);