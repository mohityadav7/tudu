import React from 'react';
import { Card } from 'antd';

const Announcement = ({announcement}) => {
    return (
        <Card 
            size="small"
            title={announcement.title}
            style={{ width: '100%', margin: '12px 0' }}
        >
            <p>{ announcement.content }</p>
            <p className="grey-text">Posted by Mohit <br/>
                on 5th April, 2019</p>
        </Card>
    )
}

export default Announcement;