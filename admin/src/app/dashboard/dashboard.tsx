// 'use client';

// import React, { useState, useEffect, JSX } from 'react';
// import { useRouter } from 'next/navigation';
// import { SideHeader } from '@/components/sideheader';
// import { 
//   Layout, 
//   Menu, 
//   Card, 
//   Row, 
//   Col, 
//   Statistic, 
//   Avatar, 
//   List, 
//   Button, 
//   Badge, 
//   Input,
//   Space,
//   Typography,
//   theme,
//   Table,
//   Tag,
//   DatePicker,
//   Divider,
//   Progress,
//   Alert,
//   message,
//   Calendar
// } from 'antd';
// import { 
//   DashboardOutlined, 
//   UserOutlined, 
//   TeamOutlined, 
//   ScheduleOutlined, 
//   MoneyCollectOutlined, 
//   FileTextOutlined, 
//   SettingOutlined,
//   BellOutlined,
//   SearchOutlined,
//   MedicineBoxOutlined,
//   HeartOutlined,
//   CalendarOutlined,
//   DollarOutlined,
//   EyeOutlined,
//   UsergroupAddOutlined,
//   BarChartOutlined,
//   QuestionCircleOutlined,
//   ArrowUpOutlined,
//   ArrowDownOutlined,
//   HomeOutlined,
//   StarOutlined,
//   EnvironmentOutlined
// } from '@ant-design/icons';
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   LineChart,
//   Line
// } from 'recharts';

// import AppHeader from '@/components/header';

// const { Header, Content, Sider } = Layout;
// const { Title, Text } = Typography;
// const { useToken } = theme;

// const MedicalDashboard = () => {
//   const { token } = useToken();
//   const router = useRouter();
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [doctors, setDoctors] = useState([]);
//   const [doctorsCount, setDoctorsCount] = useState(247);
//   const [loading, setLoading] = useState(false);

//   const menuItems = [
//     {
//       key: 'dashboard',
//       icon: <DashboardOutlined />,
//       label: 'Dashboard',
//       onClick: () => router.push('/dashboard')
//     },
//     {
//       key: 'admin-dashboard',
//       icon: <DashboardOutlined />,
//       label: 'Admin Dashboard',
//       onClick: () => router.push('/admin-dashboard')
//     },
//     {
//       key: 'doctor-dashboard',
//       icon: <TeamOutlined />,
//       label: 'Doctor Dashboard',
//       onClick: () => router.push('/doctor-dashboard')
//     },
//     {
//       key: 'patient-dashboard',
//       icon: <UserOutlined />,
//       label: 'Patient Dashboard',
//       onClick: () => router.push('/patient-dashboard')
//     },
//     {
//       key: 'application',
//       icon: <FileTextOutlined />,
//       label: 'Application',
//       children: [
//         {
//           key: 'layout',
//           label: 'Layout',
//         }
//       ]
//     },
//     {
//       key: 'cities',
//       icon: <EnvironmentOutlined />,
//       label: 'Cities',
//       onClick: () => router.push('/cities')
//     },
//     {
//       key: 'doctors',
//       icon: <TeamOutlined />,
//       label: 'Doctors',
//       onClick: () => router.push('/doctors')
//     },
//     {
//       key: 'patients',
//       icon: <UserOutlined />,
//       label: 'Patients',
//       onClick: () => router.push('/patients')
//     },
//     {
//       key: 'appointments',
//       icon: <ScheduleOutlined />,
//       label: 'Appointments',
//       onClick: () => router.push('/appointments')
//     },
//     {
//       key: 'locations',
//       icon: <EnvironmentOutlined />,
//       label: 'Locations',
//       onClick: () => router.push('/locations')
//     },
//     {
//       key: 'services',
//       icon: <MedicineBoxOutlined />,
//       label: 'Services',
//       onClick: () => router.push('/services')
//     },
//     {
//       key: 'specializations',
//       icon: <HeartOutlined />,
//       label: 'Specializations',
//       onClick: () => router.push('/specializations')
//     }
//   ];

//   const statsData = [
//     {
//       title: 'Doctors',
//       value: 247,
//       change: '+8.5%',
//       changeText: 'in last 7 days',
//       icon: <TeamOutlined />,
//       color: '#3b82f6',
//       trend: 'up',
//       route: '/doctors'
//     },
//     {
//       title: 'Patients',
//       value: 4178,
//       change: '+26%',
//       changeText: 'in last 7 days',
//       icon: <UserOutlined />,
//       color: '#ef4444',
//       trend: 'up',
//       route: '/patients'
//     },
//     {
//       title: 'Appointment',
//       value: 12178,
//       change: '+10%',
//       changeText: 'in last 7 days',
//       icon: <CalendarOutlined />,
//       color: '#3b82f6',
//       trend: 'up',
//       route: '/appointments'
//     },
//     {
//       title: 'Revenue',
//       value: '₹55,1240',
//       change: '+25%',
//       changeText: 'in last 7 days',
//       icon: <DollarOutlined />,
//       color: '#22c55e',
//       trend: 'up',
//       route: '/revenue'
//     }
//   ];

//   const appointmentStats = [
//     { title: 'All Appointments', value: 6314, color: '#3b82f6' },
//     { title: 'Cancelled', value: 456, color: '#ef4444' },
//     { title: 'Reschedule', value: 745, color: '#f59e0b' },
//     { title: 'Completed', value: 4578, color: '#22c55e' }
//   ];

//   const monthlyData = [
//     { month: 'Jan', completed: 2000, ongoing: 1500, rescheduled: 800 },
//     { month: 'Feb', completed: 2200, ongoing: 1800, rescheduled: 900 },
//     { month: 'Mar', completed: 1800, ongoing: 1200, rescheduled: 600 },
//     { month: 'Apr', completed: 2800, ongoing: 2000, rescheduled: 1200 },
//     { month: 'May', completed: 3200, ongoing: 2500, rescheduled: 1000 },
//     { month: 'Jun', completed: 2900, ongoing: 2200, rescheduled: 1100 },
//     { month: 'Jul', completed: 3100, ongoing: 2400, rescheduled: 1300 },
//     { month: 'Aug', completed: 3300, ongoing: 2600, rescheduled: 1200 },
//     { month: 'Sep', completed: 2700, ongoing: 2000, rescheduled: 900 },
//     { month: 'Oct', completed: 3000, ongoing: 2300, rescheduled: 1100 },
//     { month: 'Nov', completed: 3400, ongoing: 2700, rescheduled: 1400 },
//     { month: 'Dec', completed: 3200, ongoing: 2500, rescheduled: 1300 }
//   ];

//   const popularDoctors = [
//     {
//       name: 'Dr. Alex Morgan',
//       specialty: 'Cardiologist',
//       bookings: 258,
//       avatar: 'AM',
//       rating: 4.9
//     },
//     {
//       name: 'Dr. Emily Carter',
//       specialty: 'Pediatrician',
//       bookings: 125,
//       avatar: 'EC',
//       rating: 4.8
//     },
//     {
//       name: 'Dr. David Lee',
//       specialty: 'Gynecologist',
//       bookings: 115,
//       avatar: 'DL',
//       rating: 4.7
//     }
//   ];

//   const revenueSourceData = [
//     { name: 'Cardiology', value: 214, color: '#3b82f6' },
//     { name: 'Dental', value: 160, color: '#8b5cf6' },
//     { name: 'Neurology', value: 121, color: '#06b6d4' },
//     { name: 'Others', value: 143, color: '#f59e0b' }
//   ];

//   const incomeByCategory = [
//     { category: 'Cardiology', appointments: '4,556 Appointments', amount: '$5,985' },
//     { category: 'Radiology', appointments: '4,125 Appointments', amount: '$5,194' },
//     { category: 'Dental Surgery', appointments: '1,796 Appointments', amount: '$2,716' },
//     { category: 'Orthopedics', appointments: '3,827 Appointments', amount: '$4,682' },
//     { category: 'General Medicine', appointments: '8,694 Appointments', amount: '$9,450' }
//   ];

//   const topLocations = [
//     { city: 'Hyderabad', revenue: '$3,569', avatar: 'H' },
//     { city: 'Karimnagar', revenue: '$5,632', avatar: 'K' },
//     { city: 'Warangal', revenue: '$4,125', avatar: 'W' },
//     { city: 'Hyderabad', revenue: '$3,140', avatar: 'H' },
//     { city: 'Hyderabad', revenue: '$2,654', avatar: 'H' }
//   ];

//   const upcomingAppointments = [
//     {
//       key: '1',
//       type: 'General Visit',
//       time: 'Wed, 03 Apr 2024, 06:30 PM',
//       doctor: 'Dr. Smith',
//       status: 'scheduled'
//     },
//     {
//       key: '2',
//       type: 'General Visit',
//       time: 'Wed, 05 Apr 2024, 04:10 PM',
//       doctor: 'Dr. Wilson',
//       status: 'completed'
//     },
//     {
//       key: '3',
//       type: 'General Visit',
//       time: 'Wed, 05 Apr 2024, 10:00 AM',
//       doctor: 'Dr. Brown',
//       status: 'upcoming'
//     }
//   ];

//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem('accessToken');
//       if (!token) {
//         message.error('No authentication token found. Please login again.');
//         return;
//       }
      
//       const response = await fetch('http://216.10.251.239:3000/users/AllUsers?type=doctor&status=approved', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       setDoctors(data.data || []);
//       setDoctorsCount(data.data?.length || 247);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//       message.error('Failed to fetch doctors data');
//       setDoctorsCount(247);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const COLORS = ['#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b'];

//   return (
//     <>
//       <AppHeader />
//       <Layout className="min-h-screen">
//         <Sider 
//           width={280} 
//           theme="light"
//           style={{
//             boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)',
//             borderRight: '1px solid #f0f0f0'
//           }}
//         >
//           <div style={{ padding: '16px' }}>
//             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
//               <div style={{
//                 width: '40px',
//                 height: '40px',
//                 backgroundColor: '#3b82f6',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginRight: '12px'
//               }}>
//                 <Text style={{ color: 'white', fontWeight: 'bold' }}>TC</Text>
//               </div>
//               <div>
//                 <Text strong style={{ fontSize: '16px' }}>TrustCare Clinic</Text>
//                 <br />
//                 <Text type="secondary" style={{ fontSize: '12px' }}>SAAS/ERP</Text>
//               </div>
//             </div>
//           </div>
//           <Menu
//             theme="light"
//             mode="inline"
//             defaultSelectedKeys={['admin-dashboard']}
//             items={menuItems}
//             style={{ border: 'none' }}
//           />
//         </Sider>

//         <Layout>
//           <Header 
//             style={{ 
//               backgroundColor: token.colorBgContainer,
//               borderBottom: `-33px solid ${token.colorBorderSecondary}`,
//               padding: '89 23px',
//               marginBottom: '-33px',
//               height: '280px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between'
//             }}
//           >
//             <Title level={3} style={{ margin: 0, color: token.colorTextHeading }}>
//               Admin Dashboard
//             </Title>
            
//             <Space size="large">
//               <Input
//                 placeholder="Search"
//                 prefix={<SearchOutlined />}
//                 style={{ width: '300px' }}
//               />
//               <Button type="primary">New Appointment</Button>
//               <Button>Schedule Availability</Button>
//               <Avatar size="small" src="/api/placeholder/32/32" />
//             </Space>
//           </Header>

//           <Content style={{ padding: '24px', backgroundColor: '#f8fafc' }}>
//             {/* Stats Cards */}
//             <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
//               {statsData.map((stat, index) => (
//                 <Col xs={24} sm={12} lg={6} key={index}>
//                   <Card 
//                     style={{ 
//                       borderRadius: '12px',
//                       border: 'none',
//                       boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//                     }}
//                   >
//                     <div style={{ position: 'relative' }}>
//                       <div style={{
//                         position: 'absolute',
//                         top: 0,
//                         right: 0,
//                         background: stat.color,
//                         color: 'white',
//                         padding: '2px 8px',
//                         borderRadius: '4px',
//                         fontSize: '12px',
//                         fontWeight: 'bold'
//                       }}>
//                         {stat.change}
//                       </div>
                      
//                       <div style={{ marginTop: '20px' }}>
//                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                           <div style={{ flex: 1 }}>
//                             <Text type="secondary" style={{ fontSize: '14px' }}>
//                               {stat.title}
//                             </Text>
//                             <Title level={2} style={{ margin: '8px 0 4px 0', color: token.colorTextHeading }}>
//                               {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
//                             </Title>
//                             <Text type="secondary" style={{ fontSize: '12px' }}>
//                               {stat.changeText}
//                             </Text>
//                           </div>
//                           <div style={{ marginLeft: '16px' }}>
//                             <div style={{ 
//                               width: '60px', 
//                               height: '30px', 
//                               background: `linear-gradient(45deg, ${stat.color}20, ${stat.color}40)`,
//                               borderRadius: '4px',
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center'
//                             }}>
//                               <LineChart width={50} height={20} data={[{v:1},{v:2},{v:1.5},{v:3},{v:2.5},{v:4}]}>
//                                 <Line type="monotone" dataKey="v" stroke={stat.color} strokeWidth={2} dot={false} />
//                               </LineChart>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>

//             <Row gutter={[24, 24]}>
//               {/* Appointment Statistics */}
//               <Col xs={24} lg={16}>
//                 <Card 
//                   title="Appointment Statistics"
//                   extra={<Text type="secondary">Monthly</Text>}
//                   style={{ 
//                     borderRadius: '12px',
//                     border: 'none',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                     marginBottom: '24px'
//                   }}
//                 >
//                   <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
//                     {appointmentStats.map((stat, index) => (
//                       <Col span={6} key={index}>
//                         <div style={{ textAlign: 'center' }}>
//                           <Text type="secondary" style={{ fontSize: '12px' }}>
//                             {stat.title}
//                           </Text>
//                           <Title level={3} style={{ margin: '4px 0', color: stat.color }}>
//                             {stat.value.toLocaleString()}
//                           </Title>
//                         </div>
//                       </Col>
//                     ))}
//                   </Row>
                  
//                   <div style={{ height: '300px' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <BarChart data={monthlyData}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="month" />
//                         <YAxis />
//                         <Tooltip />
//                         <Bar dataKey="completed" fill="#3b82f6" />
//                         <Bar dataKey="ongoing" fill="#22c55e" />
//                         <Bar dataKey="rescheduled" fill="#f59e0b" />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </Card>

//                 {/* Popular Doctors */}
//                 <Card 
//                   title="Popular Doctors"
//                   extra={<Text type="secondary">Weekly</Text>}
//                   style={{ 
//                     borderRadius: '12px',
//                     border: 'none',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//                   }}
//                 >
//                   <Row gutter={[16, 16]}>
//                     {popularDoctors.map((doctor, index) => (
//                       <Col span={8} key={index}>
//                         <div style={{ textAlign: 'center', padding: '16px' }}>
//                           <Avatar size={64} style={{ backgroundColor: '#3b82f6', marginBottom: '12px' }}>
//                             {doctor.avatar}
//                           </Avatar>
//                           <Title level={5} style={{ margin: '8px 0 4px 0' }}>
//                             {doctor.name}
//                           </Title>
//                           <Text type="secondary" style={{ fontSize: '12px' }}>
//                             {doctor.specialty}
//                           </Text>
//                           <div style={{ marginTop: '8px' }}>
//                             <Text strong>{doctor.bookings} Bookings</Text>
//                           </div>
//                         </div>
//                       </Col>
//                     ))}
//                   </Row>
//                 </Card>
//               </Col>

//               {/* Right Side Panel */}
//               <Col xs={24} lg={8}>
//                 <Space direction="vertical" size="large" style={{ width: '100%' }}>
//                   {/* Appointments Calendar */}
//                   <Card 
//                     title="Appointments"
//                     extra={<Text type="secondary">All Type</Text>}
//                     style={{ 
//                       borderRadius: '12px',
//                       border: 'none',
//                       boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//                     }}
//                   >
//                     <Calendar 
//                       fullscreen={false}
//                       style={{ fontSize: '12px' }}
//                     />
                    
//                     <Divider />
                    
//                     <Space direction="vertical" size="middle" style={{ width: '100%' }}>
//                       {upcomingAppointments.map((appointment) => (
//                         <div key={appointment.key} style={{ 
//                           padding: '12px',
//                           backgroundColor: '#f8fafc',
//                           borderRadius: '8px',
//                           borderLeft: '4px solid #3b82f6'
//                         }}>
//                           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                             <div>
//                               <Text strong style={{ fontSize: '14px' }}>
//                                 {appointment.type}
//                               </Text>
//                               <br />
//                               <Text type="secondary" style={{ fontSize: '12px' }}>
//                                 {appointment.time}
//                               </Text>
//                             </div>
//                             <Avatar size="small" style={{ backgroundColor: '#3b82f6' }}>
//                               {appointment.doctor.charAt(3)}
//                             </Avatar>
//                           </div>
//                         </div>
//                       ))}
//                     </Space>
//                   </Card>
//                 </Space>
//               </Col>
//             </Row>

//             <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
//               {/* Top 3 Revenue Sources */}
//               <Col xs={24} lg={8}>
//                 <Card 
//                   title="Top 3 Revenue sources"
//                   style={{ 
//                     borderRadius: '12px',
//                     border: 'none',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//                   }}
//                 >
//                   <div style={{ height: '200px', position: 'relative' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <PieChart>
//                         <Pie
//                           data={revenueSourceData}
//                           cx="50%"
//                           cy="50%"
//                           innerRadius={40}
//                           outerRadius={80}
//                           paddingAngle={5}
//                           dataKey="value"
//                         >
//                           {revenueSourceData.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                           ))}
//                         </Pie>
//                         <Tooltip />
//                       </PieChart>
//                     </ResponsiveContainer>
//                     <div style={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       textAlign: 'center'
//                     }}>
//                       <Title level={4} style={{ margin: 0 }}>638</Title>
//                       <Text type="secondary" style={{ fontSize: '12px' }}>Total Patient</Text>
//                     </div>
//                   </div>
                  
//                   <Row gutter={16} style={{ marginTop: '16px' }}>
//                     <Col span={8}>
//                       <div style={{ textAlign: 'center' }}>
//                         <Text strong>214</Text>
//                         <br />
//                         <Text type="secondary" style={{ fontSize: '12px' }}>Cardiology</Text>
//                       </div>
//                     </Col>
//                     <Col span={8}>
//                       <div style={{ textAlign: 'center' }}>
//                         <Text strong>160</Text>
//                         <br />
//                         <Text type="secondary" style={{ fontSize: '12px' }}>Dental</Text>
//                       </div>
//                     </Col>
//                     <Col span={8}>
//                       <div style={{ textAlign: 'center' }}>
//                         <Text strong>121</Text>
//                         <br />
//                         <Text type="secondary" style={{ fontSize: '12px' }}>Neurology</Text>
//                       </div>
//                     </Col>
//                   </Row>
//                 </Card>
//               </Col>

//               {/* Income By Category */}
//               <Col xs={24} lg={8}>
//                 <Card 
//                   title="Income By Category"
//                   extra={<Text type="secondary">Weekly</Text>}
//                   style={{ 
//                     borderRadius: '12px',
//                     border: 'none',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//                   }}
//                 >
//                   <Space direction="vertical" size="middle" style={{ width: '100%' }}>
//                     {incomeByCategory.map((item, index) => (
//                       <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <div>
//                           <Text strong style={{ fontSize: '14px' }}>
//                             {item.category}
//                           </Text>
//                           <br />
//                           <Text type="secondary" style={{ fontSize: '12px' }}>
//                             {item.appointments}
//                           </Text>
//                         </div>
//                         <Text strong style={{ color: '#22c55e' }}>
//                           {item.amount}
//                         </Text>
//                       </div>
//                     ))}
//                   </Space>
//                 </Card>
//               </Col>

//               {/* Top 5 Locations */}
//               <Col xs={24} lg={8}>
//                 <Card 
//                   title="Top 5 Locations"
//                   extra={<Button type="link" size="small">View All</Button>}
//                   style={{ 
//                     borderRadius: '12px',
//                     border: 'none',
//                     boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//                   }}
//                 >
//                   <Space direction="vertical" size="middle" style={{ width: '100%' }}>
//                     {topLocations.map((location, index) => (
//                       <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <div style={{ display: 'flex', alignItems: 'center' }}>
//                           <Avatar size="small" style={{ backgroundColor: '#3b82f6', marginRight: '12px' }}>
//                             {location.avatar}
//                           </Avatar>
//                           <div>
//                             <Text strong style={{ fontSize: '14px' }}>
//                               {location.city}
//                             </Text>
//                             <br />
//                             <Text type="secondary" style={{ fontSize: '12px' }}>
//                               Total Paid: {location.revenue}
//                             </Text>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </Space>
//                 </Card>
//               </Col>
//             </Row>
//           </Content>
//         </Layout>
//       </Layout>
//     </>
//   );
// };

// export default MedicalDashboard;