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
                <Card 
                    size="small"
                    style={{ width: '100%', margin: '12px 0' }}
                >
                    <Icon type="loading" />
                    <p>Loading...</p>
                </Card>
             }
        </div>
    );
}

export default AnnouncementList;