import React from 'react';
import { Avatar, Tag } from 'antd';
import { connect } from 'react-redux';

const SidebarProfileCard = (props) => {
  console.log(props);
  return (
    <div>
      {/* profile card on top of sidebar */}
      <div className="profile-card" style={{ display: 'block', padding: '24px' }} >
            <div className="profile-card-info-container" >
                <Avatar size={64} icon="user" style={{ margin: 'auto', display: 'block' }} />
                <span style={{ textAlign: 'center', 'display': 'block', paddingTop: '12px' }}>Hi, Mohit</span>
                { props.profile.isTeacher ? (
                  <span style={{ textAlign: 'center', 'display': 'block', paddingTop: '12px' }}><Tag color="cyan">Teacher</Tag></span>
                ) : null }
            </div>
        </div> {/* /profile card on top of sidebar */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(SidebarProfileCard);