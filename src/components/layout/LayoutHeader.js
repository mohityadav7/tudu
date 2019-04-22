import React from 'react';
import { Icon, Layout } from 'antd';
import NotificationMenu from './NotificationMenu';

const { Header } = Layout;

const LayoutHeader = (props) => {
    return (
        <Header id="navMenu" style={{ background: '#fff', padding: 0, position: 'fixed', zIndex: 1, width: '100%' }} >
            <div>
                {/* left header menu - for mobile site */}
                <div style={{ float: 'left' }}>
                    <Icon onClick={props.showDrawer} 
                        type="menu-unfold"
                        style={{ 
                            padding: '22px 16px 22px 32px',
                            fontSize: '20px',
                        }}
                    />
                </div> {/* /left header menu - for mobile site */}
                {/* right header menu - for mobile site */}
                <div style={{ float: 'right' }}>
                    <NotificationMenu />
                </div> {/* /right header menu - for mobile site */}
            </div>
        </Header>
    )
}

export default LayoutHeader;