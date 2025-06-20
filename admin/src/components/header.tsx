import React from 'react';
import { Layout, Avatar, Badge, Button, Dropdown, Space, Typography } from 'antd';
import { BellOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = () => {
    // Dropdown menu items for admin profile
    const adminMenuItems = [
        {
            key: '1',
            label: 'Profile',
        },
        {
            key: '2',
            label: 'Settings',
        },
        {
            key: '3',
            label: 'Logout',
        },
    ];

    const handleMenuClick = (e: { key: any }) => {
        console.log('Menu clicked:', e.key);
    };

    return (
        <Header
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
                background: '#fff',
                borderBottom: '1px solid #f0f0f0',
                height: '64px',
                zIndex: 1000,
                paddingTop: '12px', 
                paddingBottom: '12px',
            }}
        >
            {/* Left side - Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    style={{
                        width: '140px',
                        height: '140px',
                        borderRadius: '8px',
                        marginRight: '12px',
                    }}
                />
            </div>

            {/* Right side - Notifications and Admin */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: 'auto', marginRight: '44px' }}>
                {/* Notifications */}
                <Badge count={3} size="small">
                    <Button
                        type="text"
                        icon={<BellOutlined style={{ fontSize: '18px' }} />}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: 'none',
                            color: '#666',
                        }}
                    />
                </Badge>

                {/* Admin Profile Dropdown */}
                <Dropdown
                    menu={{
                        items: adminMenuItems,
                        onClick: handleMenuClick,
                    }}
                    trigger={['click']}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            transition: 'background-color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f5f5f5';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <Avatar
                            size={32}
                            style={{
                                backgroundColor: '#1890ff',
                                color: 'white',
                            }}
                            icon={<UserOutlined />}
                        />
                        <Text style={{ fontWeight: '500', color: '#000' }}>Admin</Text>
                        <DownOutlined style={{ fontSize: '12px', color: '#666' }} />
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default AppHeader;