import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'antd'
import Announcement from './Announcement'

const AnnouncementList = (props) => {

    const { announcements } = props;

    return (
        <div className="courses-list section">
            <Link to='/dashboard/newAnnouncement'>
                <Button><Icon type="plus" /> Create New Announcement</Button>
            </Link>
            { announcements && announcements.map(announcement => {
                return (
                    <Announcement announcement={announcement} key={announcement.id} />
                )
            })}
        </div>
    );
}

export default AnnouncementList;