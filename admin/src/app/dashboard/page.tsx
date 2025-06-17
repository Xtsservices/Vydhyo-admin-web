'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Layout, 
  Menu, 
  Card, 
  Row, 
  Col, 
  Statistic, 
  Avatar, 
  List, 
  Button, 
  Badge, 
  Input,
  Space,
  Typography,
  theme,
  Table,
  Tag,
  DatePicker,
  Divider,
  Progress,
  Alert
} from 'antd';
import { 
  DashboardOutlined, 
  UserOutlined, 
  TeamOutlined, 
  ScheduleOutlined, 
  MoneyCollectOutlined, 
  FileTextOutlined, 
  SettingOutlined,
  BellOutlined,
  SearchOutlined,
  MedicineBoxOutlined,
  HeartOutlined,
  CalendarOutlined,
  DollarOutlined,
  EyeOutlined,
  UsergroupAddOutlined,
  BarChartOutlined,
  QuestionCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  HomeOutlined
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
const { useToken } = theme;

const MedicalDashboard = () => {
  const { token } = useToken();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);

  const menuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      onClick: () => router.push('/dashboard')
    },
    {
      key: 'doctors',
      icon: <TeamOutlined />,
      label: 'Doctors',
      onClick: () => router.push('/doctors')
    },
    {
      key: 'patients',
      icon: <UserOutlined />,
      label: 'Patients',
      onClick: () => router.push('/patients')
    },
    {
      key: 'clinics',
      icon: <HomeOutlined />,
      label: 'Clinics',
      onClick: () => router.push('/clinics')
    },
    {
      key: 'appointments',
      icon: <ScheduleOutlined />,
      label: 'Appointments',
      onClick: () => router.push('/appointments')
    },
    {
      key: 'billing',
      icon: <MoneyCollectOutlined />,
      label: 'Billing',
      onClick: () => router.push('/billing')
    },
    {
      key: 'reports',
      icon: <FileTextOutlined />,
      label: 'Reports',
      onClick: () => router.push('/reports')
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      onClick: () => router.push('/settings')
    }
  ];

  const statsData = [
    {
      title: 'Total Clinics',
      value: 128,
      change: '+12%',
      icon: <HomeOutlined />,
      color: '#1890ff',
      trend: 'up',
      route: '/clinics'
    },
    {
      title: 'Total Doctors',
      value: 456,
      change: '+8%',
      icon: <TeamOutlined />,
      color: '#52c41a',
      trend: 'up',
      route: '/doctors'
    },
    {
      title: 'Total Patients',
      value: 2847,
      change: '+24%',
      icon: <UserOutlined />,
      color: '#722ed1',
      trend: 'up',
      route: '/patients'
    },
    {
      title: 'Total Appointments',
      value: 1923,
      change: '-3%',
      icon: <CalendarOutlined />,
      color: '#fa8c16',
      trend: 'down',
      route: '/appointments'
    }
  ];

  const upcomingAppointments = [
    {
      key: '1',
      patient: 'Sarah Johnson',
      doctor: 'Dr. Smith',
      time: 'Today, 2:30 PM',
      clinic: 'Main Clinic',
      status: 'Confirmed',
      avatar: 'SJ'
    },
    {
      key: '2',
      patient: 'Mike Chen',
      doctor: 'Dr. Wilson',
      time: 'Tomorrow, 10:00 AM',
      clinic: 'North Branch',
      status: 'Pending',
      avatar: 'MC'
    },
    {
      key: '3',
      patient: 'Emma Davis',
      doctor: 'Dr. Brown',
      time: 'Dec 18, 3:15 PM',
      clinic: 'East Clinic',
      status: 'Cancelled',
      avatar: 'ED'
    }
  ];

  const revenueData = [
    { title: 'Consultation', amount: 24567 },
    { title: 'Pharmacy', amount: 8943 }
  ];

  const quickLinks = [
    { title: 'Manage Users', icon: <UsergroupAddOutlined />, color: '#722ed1' },
    { title: 'View Reports', icon: <BarChartOutlined />, color: '#52c41a' },
    { title: 'Settings', icon: <SettingOutlined />, color: '#1890ff' },
    { title: 'Support', icon: <QuestionCircleOutlined />, color: '#fa8c16' }
  ];

  const recentNotifications = [
    {
      id: 1,
      type: 'info',
      title: 'System maintenance scheduled',
      time: '2 hours ago',
      color: '#1890ff'
    },
    {
      id: 2,
      type: 'warning',
      title: 'New patient inquiry received',
      time: '4 hours ago',
      color: '#faad14'
    },
    {
      id: 3,
      type: 'success',
      title: 'Payment processed successfully',
      time: '6 hours ago',
      color: '#52c41a'
    }
  ];

  const appointmentColumns = [
    {
      title: 'Patient',
      dataIndex: 'patient',
      key: 'patient',
      render: (text: string, record: { avatar: string }) => (
        <Space>
          <Avatar size="small" style={{ backgroundColor: '#1890ff' }}>
            {record.avatar}
          </Avatar>
          <Text strong>{text}</Text>
        </Space>
      )
    },
    {
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: 'Time & Date',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Clinic',
      dataIndex: 'clinic',
      key: 'clinic',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: 'Confirmed' | 'Pending' | 'Cancelled') => {
        const colors: Record<'Confirmed' | 'Pending' | 'Cancelled', string> = {
          'Confirmed': '#52c41a',
          'Pending': '#faad14',
          'Cancelled': '#ff4d4f'
        };
        return <Tag color={colors[status]}>{status}</Tag>;
      }
    }
  ];

  return (
    <Layout className="min-h-screen">
      <Sider 
        width={200} 
        theme="light"
        style={{
          boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)',
          borderRight: '1px solid #f0f0f0'
        }}
      >
        <div style={{ padding: '20px 16px', borderBottom: '1px solid #f0f0f0' }}>
          <Space align="center" size="middle">
            <div style={{ 
              width: '32px', 
              height: '32px', 
              backgroundColor: '#1890ff', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <MedicineBoxOutlined style={{ color: 'white', fontSize: '18px' }} />
            </div>
            <Title level={4} style={{ margin: 0, color: token.colorTextHeading }}>
              VYDHYO
            </Title>
          </Space>
        </div>
        
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          items={menuItems}
          style={{ border: 'none' }}
        />
      </Sider>

      <Layout>
        <Header 
          style={{ 
            backgroundColor: token.colorBgContainer,
            borderBottom: `1px solid ${token.colorBorderSecondary}`,
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Title level={3} style={{ margin: 0, color: token.colorTextHeading }}>
            Dashboard
          </Title>
          
          <Space size="large">
            <Input
              placeholder="Search doctors, patients..."
              prefix={<SearchOutlined />}
              style={{ width: '300px' }}
            />
            
            <Badge dot>
              <Button 
                type="text" 
                icon={<BellOutlined />}
                size="large"
              />
            </Badge>
            
            <Space>
              <Avatar 
                size={32} 
                style={{ backgroundColor: '#1890ff' }}
              >
                A
              </Avatar>
              <Text strong>Admin</Text>
            </Space>
          </Space>
        </Header>

        <Content style={{ padding: '24px', backgroundColor: '#f5f5f5' }}>
          {/* Stats Cards */}
          <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
            {statsData.map((stat, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card 
                  hoverable
                  onClick={() => router.push(stat.route)}
                  style={{ 
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <Text type="secondary" style={{ fontSize: '14px' }}>
                        {stat.title}
                      </Text>
                      <div style={{ marginTop: '8px' }}>
                        <Title level={2} style={{ margin: 0, color: token.colorTextHeading }}>
                          {stat.value.toLocaleString()}
                        </Title>
                        <Space style={{ marginTop: '4px' }}>
                          {stat.trend === 'up' ? 
                            <ArrowUpOutlined style={{ color: '#52c41a', fontSize: '12px' }} /> :
                            <ArrowDownOutlined style={{ color: '#ff4d4f', fontSize: '12px' }} />
                          }
                          <Text style={{ 
                            color: stat.trend === 'up' ? '#52c41a' : '#ff4d4f',
                            fontSize: '12px'
                          }}>
                            {stat.change}
                          </Text>
                        </Space>
                      </div>
                    </div>
                    <Avatar 
                      size={48} 
                      style={{ 
                        backgroundColor: `${stat.color}20`,
                        border: `1px solid ${stat.color}30`
                      }}
                      icon={React.cloneElement(stat.icon, { 
                        style: { color: stat.color, fontSize: '24px' }
                      })}
                    />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <Row gutter={[16, 16]}>
            {/* Upcoming Appointments */}
            <Col xs={24} lg={14}>
              <Card 
                title={
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text strong>Upcoming Appointments</Text>
                    <Button type="link" size="small" onClick={() => router.push('/appointments')}>View All</Button>
                  </div>
                }
                style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                extra={
                  <DatePicker 
                    placeholder="mm/dd/yyyy"
                    style={{ width: '140px' }}
                    onChange={setSelectedDate}
                  />
                }
              >
                <Table 
                  columns={appointmentColumns}
                  dataSource={upcomingAppointments}
                  pagination={false}
                  size="small"
                />
              </Card>
            </Col>

            {/* Right Side Panel */}
            <Col xs={24} lg={10}>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {/* Revenue Summary */}
                <Card 
                  title="Revenue Summary"
                  style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                >
                  <Row gutter={16}>
                    {revenueData.map((item, index) => (
                      <Col span={12} key={index}>
                        <div style={{ textAlign: 'center' }}>
                          <Title level={3} style={{ margin: 0, color: token.colorTextHeading }}>
                            ${item.amount.toLocaleString()}
                          </Title>
                          <Text type="secondary">{item.title}</Text>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card>

                {/* Quick Links */}
                <Card 
                  title="Quick Links"
                  style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                >
                  <Row gutter={[8, 8]}>
                    {quickLinks.map((link, index) => (
                      <Col span={12} key={index}>
                        <Card 
                          size="small"
                          hoverable
                          onClick={() => {
                            if (link.title === 'Manage Users') router.push('/doctors');
                            if (link.title === 'View Reports') router.push('/reports');
                            if (link.title === 'Settings') router.push('/settings');
                            if (link.title === 'Support') router.push('/support');
                          }}
                          style={{ 
                            textAlign: 'center',
                            borderRadius: '6px',
                            border: `1px solid ${link.color}30`,
                            backgroundColor: `${link.color}05`,
                            cursor: 'pointer'
                          }}
                        >
                          <div style={{ padding: '8px 4px' }}>
                            {React.cloneElement(link.icon, { 
                              style: { 
                                color: link.color, 
                                fontSize: '24px',
                                marginBottom: '8px'
                              }
                            })}
                            <div>
                              <Text style={{ fontSize: '12px', fontWeight: 500 }}>
                                {link.title}
                              </Text>
                            </div>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card>

                {/* Recent Notifications */}
                <Card 
                  title="Recent Notifications"
                  style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                >
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    {recentNotifications.map((notification) => (
                      <div key={notification.id} style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: notification.color,
                          borderRadius: '50%',
                          marginTop: '6px',
                          marginRight: '12px',
                          flexShrink: 0
                        }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: '13px', lineHeight: '1.4' }}>
                              {notification.title}
                            </Text>
                            <Button type="link" size="small" style={{ padding: 0, height: 'auto', fontSize: '12px' }}>
                              View
                            </Button>
                          </div>
                          <Text type="secondary" style={{ fontSize: '11px' }}>
                            {notification.time}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MedicalDashboard;