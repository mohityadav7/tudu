import React from 'react';
import { Tabs } from 'antd';
import { withRouter } from 'react-router-dom';
import AnnouncementList from '../announcements/AnnouncementList';
import StudyMaterialList from '../studyMaterial/StudyMaterialList';

const TabPane = Tabs.TabPane;

const CourseHome = (props) => {
    
    return (
        <div style={{ padding: '24px' }}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Announcements" key="1">
                    <AnnouncementList announcements={props.announcements} />
                </TabPane>
                <TabPane tab="Study Material" key="2">
                    <StudyMaterialList />
                </TabPane>
                <TabPane tab="Assignments" key="3">Assignments (TODO)</TabPane>
                <TabPane tab="Others" key="4">Others (TODO)</TabPane>
            </Tabs>
        </div>
    )
}

export default withRouter(CourseHome);