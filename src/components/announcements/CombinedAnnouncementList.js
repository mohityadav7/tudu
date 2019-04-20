import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import AnnouncementSummary from './AnnouncementSummary'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';

const CombinedAnnouncementList = (props) => {

    const { combinedAnnouncements } = props;
    const style={
        padding: '0 16px',
        border: '1px solid #e8e8e8',
        backgroundColor: '#ffffff',
    }

    return (
        <div style={style}>

            {/* if combinedAnnouncements exist */}
            { combinedAnnouncements ? (
                // if combinedAnnouncements is empty
                combinedAnnouncements.length === 0 ? (
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }}>
                        No announcements yet
                    </Card>
                ) :
                // else if announcements are present
                combinedAnnouncements.map((announcement, index) => {
                    return (
                        <AnnouncementSummary announcement={announcement} key={index} />
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
        combinedAnnouncements: state.firestore.ordered.combinedAnnouncements
    }
}

const firestoreConnectQueriesConfig = props => {
    let out = [{
        collection: 'combinedAnnouncements',
        storeAs: 'combinedAnnouncements',
        orderBy: ['createdAt', 'desc'],
        limit: 10
    }];

    return out;
}

export default compose(
    firestoreConnect(firestoreConnectQueriesConfig),
    connect(mapStateToProps)
)(CombinedAnnouncementList);