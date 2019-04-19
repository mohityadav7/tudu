import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Card } from 'antd'
import AnnouncementSummary from './AnnouncementSummary'

const AnnouncementList = (props) => {

    const { announcements } = props;
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
            { announcements ? announcements.map(announcement => {
                return (
                    <Link to={ '/dashboard/announcements/'+announcement.id } key={announcement.id}>
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