import React from 'react';
import { Card, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const Announcement = (props) => {
    const id = props.match.params.id;
    const { announcements } = props;
    
    if(announcements){
        let announcement = null;
        for (var i=0; i < (announcements ? announcements.length : 0); i++) {
            if (announcements[i].id === id) {
                announcement = announcements[i];
            }
        }

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
    } else {
        return (
            <Card 
                size="small"
                style={{ width: '100%', margin: '12px 0' }}
            >   
                <Icon type="loading" />
                <p>Loading...</p>
            </Card>
        )
    }
}

export default withRouter(Announcement);