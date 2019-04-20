import React from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const Announcement = (props) => {
    const id = props.match.params.id;
    const { announcement } = props;
    
    if(announcement){
        return (
            <div style={{ margin: '16px' }}>
                <Card 
                    size="small"
                    title={ announcement.title }
                    style={{ width: '100%', margin: '12px 0' }}
                >
                    <p>{ announcement.description }</p>
                    <div style={{ padding: '8px', backgroundColor: '#f5f5f5' }}>
                    <p style={{ color: '#999' }}>Posted by { announcement.authorFirstName + ' ' + announcement.authorLastName } <br/>
                    { moment(announcement.createdAt.toDate()).calendar() } </p>
                    </div>
                </Card>
            </div>
        )
    } else {
        return (
            <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
        )
    }
}

export default withRouter(Announcement);