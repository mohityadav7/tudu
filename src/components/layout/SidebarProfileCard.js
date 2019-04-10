import React from 'react';
import { Avatar } from 'antd';

export default function SidebarProfileCard() {
  return (
    <div>
      {/* profile card on top of sidebar */}
      <div className="profile-card" style={{ display: 'block', padding: '24px' }} >
            <div className="profile-card-info-container" >
                <Avatar size={64} icon="user" style={{ margin: 'auto', display: 'block' }} />
                <span style={{ textAlign: 'center', 'display': 'block', paddingTop: '12px' }}>Hi, Mohit</span>
            </div>
        </div> {/* /profile card on top of sidebar */}
    </div>
  )
}
