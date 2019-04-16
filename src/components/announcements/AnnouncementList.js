import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Card } from 'antd'
import AnnouncementSummary from './AnnouncementSummary'

const AnnouncementList = (props) => {

    const { announcements } = props;

    return (
        <div className="courses-list section">
            <Link to='/dashboard/newAnnouncement'>
                <Button><Icon type="plus" /> Create New Announcement</Button>
            </Link>
            { announcements ? announcements.map(announcement => {
                return (
                    <Link to={ '/dashboard/announcement/'+announcement.id } key={announcement.id}>
                        <AnnouncementSummary announcement={announcement} />
                    </Link>
                )
            }):
                <div>
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
                    <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
                </div>
             }
        </div>
    );
}

export default AnnouncementList;