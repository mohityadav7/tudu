import React from 'react';
import { Card } from 'antd';
import moment from 'moment';

const Announcement = ({announcement}) => {
    return (
        <Card 
            size="small"
            title={ announcement.title }
            style={{ width: '100%', margin: '12px 0' }}
        >
            <p>{ announcement.description }</p>
            <p className="grey-text">Posted by { announcement.authorFirstName + ' ' + announcement.authorLastName } <br/>
                { moment(announcement.createdAt.toDate()).calendar() } </p>
        </Card>
    )
}

export default Announcement;