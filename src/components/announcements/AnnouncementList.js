import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Card } from 'antd'
import AnnouncementSummary from './AnnouncementSummary'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';

const AnnouncementList = (props) => {

    const { courseAnnouncements, isTeacher, course } = props;
    const style={
        padding: '16px',
        border: '1px solid #e8e8e8',
        backgroundColor: '#ffffff',
    }

    return (
        <div style={style}>
            {/* show create new announcement button if user is a teacher */}
            {isTeacher ? 
                <Link to='/dashboard/newAnnouncement'>
                    <Button><Icon type="plus" /> Create New Announcement</Button>
                </Link>
                : null
            }
            {/* if courseAnnouncements exist */}
            { courseAnnouncements ? (
                // if courseAnnouncements is empty
                courseAnnouncements.length === 0 ? (
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }}>
                        No announcements yet
                    </Card>
                ) :
                // else if announcements are present
                courseAnnouncements.map((announcement, index) => {
                    return (
                        <Link to={ `/dashboard/announcements/${course}/${announcement.id}` } key={index}>
                            <AnnouncementSummary announcement={announcement} />
                        </Link>
                    )
                }))
                :
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

const firestoreConnectQueriesConfig = props => {
    let out = [{
        collection: 'announcements',
        doc: 'it',
        subcollections: [{
            collection: 'sem6'
        }],
        storeAs: 'oldCourseAnnouncements'
    }];

    if(props.course){
        out.push({
            collection: 'announcements',
            doc: 'it',
            subcollections: [{
                collection: 'sem6',
                doc: props.course,
                subcollections: [{
                    collection: 'announcements'
                }]
            }],
            orderBy: ['createdAt', 'desc'],
            storeAs: 'courseAnnouncements'
        })
    }

    return out;
}

export default compose(
    firestoreConnect(firestoreConnectQueriesConfig),
    connect(mapStateToProps)
)(AnnouncementList);