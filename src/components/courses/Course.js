import React from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

const Course = (props) => {
    const id = props.match.params.id;
    const { announcements } = props;
    
    if(announcements){
        let announcement = null;
        for (var i=0; i < (announcements ? announcements.length : 0); i++) {
            if (announcements[i].id === id) {
                announcement = announcements[i];
            }
        }
        if(announcement){
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
                'Not found'
            )
        }
    } else {
        return (
            <Card style={{ width: '100%', marginTop: 16, marginBottom: 16 }} loading={true}></Card>
        )
    }
}

export default withRouter(Course);