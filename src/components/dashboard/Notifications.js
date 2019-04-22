import React from 'react';
import 'antd/dist/antd.css';
import { Card, List } from 'antd';
import './Notifications.css';

const notifications = [
  { title: 'Hi, Welcome to tudu' },
  { title: 'Hi, Welcome to tudu' },
  { title: 'Hi, Welcome to tudu' },
  { title: 'Hi, Welcome to tudu' }
]

const Notifications = () => {
    return (
        <div className="notifications-container">
            <Card
              size="small"
              title="Notifications"
              style={{ width: '100%' }}
            >
            <List
              style={{ margin: 0, padding: 0 }}
              size="small"
              dataSource={notifications}
              renderItem={
                item => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    />
                  </List.Item>
                )
              }
            />
            </Card>
        </div>
    )
}

export default Notifications;