import React from 'react';
import { Card } from 'antd';
import moment from 'moment';

const Announcement = ({announcement}) => {
    return (
        <Card 
            size="small"
            title={ announcement.title }
            style={{ width: '100%', margin: '12px 0', backgroundColor: '#ffffff' }}
        >
            <p>{ (announcement.description.length < 100) ? (announcement.description) : (announcement.description.substring(0,100) + '...') }</p>
            <p style={{ color: '#999' }}>Posted by { announcement.authorFirstName + ' ' + announcement.authorLastName } <br/>
                { moment(announcement.createdAt.toDate()).calendar() } </p>
        </Card>
    )
}

export default Announcement;