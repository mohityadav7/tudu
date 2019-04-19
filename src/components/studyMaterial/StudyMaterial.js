import React from 'react';
import { Card } from 'antd';
import moment from 'moment';

const Announcement = ({item}) => {
    return (
        <Card 
            size="small"
            title={ item.name }
            style={{ width: '100%', margin: '12px 0', backgroundColor: '#ffffff' }}
        >
            <p>Added { moment(item.addedAt.toDate()).calendar() }</p>
        </Card>
    )
}

export default Announcement;