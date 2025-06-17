"use client";

import React, { useState } from 'react';
import { Table, Input, Button, DatePicker, Tag, Space, Select, Avatar } from 'antd';
import { SearchOutlined, MoreOutlined, CalendarOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface Doctor {
    key: string;
    name: string;
    id: string;
    specialization: string;
    clinic: string;
    phone: string;
    registeredOn: string;
    status: string;
    avatar: string;
}

const DoctorList = () => {
    const [searchText, setSearchText] = useState('');

    const doctors: Doctor[] = [
        {
            key: '1',
            name: 'Dr. Sarah Johnson',
            id: 'DOC001',
            specialization: 'Cardiology',
            clinic: 'Heart Care Center',
            phone: '+1 234 567 8901',
            registeredOn: 'Jan 15, 2024',
            status: 'Active',
            avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face'
        },
        {
            key: '2',
            name: 'Dr. Michael Chen',
            id: 'DOC002',
            specialization: 'Neurology',
            clinic: 'Brain Health Institute',
            phone: '+1 234 567 8902',
            registeredOn: 'Feb 20, 2024',
            status: 'Active',
            avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=40&h=40&fit=crop&crop=face'
        },
        {
            key: '3',
            name: 'Dr. Emily Rodriguez',
            id: 'DOC003',
            specialization: 'Pediatrics',
            clinic: 'Children\'s Medical Center',
            phone: '+1 234 567 8903',
            registeredOn: 'Mar 10, 2024',
            status: 'Inactive',
            avatar: 'https://images.unsplash.com/photo-1594824587317-9f13e6d6c0e4?w=40&h=40&fit=crop&crop=face'
        },
        {
            key: '4',
            name: 'Dr. James Wilson',
            id: 'DOC004',
            specialization: 'Orthopedics',
            clinic: 'Bone & Joint Clinic',
            phone: '+1 234 567 8904',
            registeredOn: 'Apr 5, 2024',
            status: 'Active',
            avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=40&h=40&fit=crop&crop=face'
        },
        {
            key: '5',
            name: 'Dr. Lisa Thompson',
            id: 'DOC005',
            specialization: 'Dermatology',
            clinic: 'Skin Care Specialists',
            phone: '+1 234 567 8905',
            registeredOn: 'May 12, 2024',
            status: 'Active',
            avatar: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=40&h=40&fit=crop&crop=face'
        },
    ];

    const columns = [
        {
            title: 'Doctor',
            dataIndex: 'name',
            key: 'name',
            render: (text: string, record: Doctor) => (
                <Space>
                    <Avatar 
                        size={40} 
                        src={record.avatar}
                        style={{ flexShrink: 0 }}
                    />
                    <span style={{ fontWeight: 500 }}>{text}</span>
                </Space>
            ),
        },
        {
            title: 'Doctor ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Specialization',
            dataIndex: 'specialization',
            key: 'specialization',
        },
        {
            title: 'Clinic Name',
            dataIndex: 'clinic',
            key: 'clinic',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Registered On',
            dataIndex: 'registeredOn',
            key: 'registeredOn',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag 
                    color={status === 'Active' ? 'success' : 'error'}
                    style={{ 
                        borderRadius: '4px',
                        fontWeight: 500,
                        border: 'none'
                    }}
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <Button 
                    type="text" 
                    icon={<MoreOutlined />} 
                    style={{ color: '#8c8c8c' }}
                />
            ),
        },
    ];

    return (
        <div style={{ 
            padding: '24px', 
            backgroundColor: '#fafafa', 
            minHeight: '100vh' 
        }}>
            <div style={{ 
                backgroundColor: 'white', 
                padding: '24px', 
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                {/* Header */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '24px'
                }}>
                    <h2 style={{ 
                        margin: 0, 
                        fontSize: '20px', 
                        fontWeight: 600,
                        color: '#262626'
                    }}>
                        Doctor List
                    </h2>
                    <Input
                        placeholder="Search by name, ID, or specialization"
                        prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        style={{ 
                            width: 300,
                            borderRadius: '6px'
                        }}
                    />
                </div>

                {/* Filters */}
                <div style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    marginBottom: '20px',
                    alignItems: 'center'
                }}>
                    <Select
                        placeholder="Select"
                        style={{ width: 120 }}
                        suffixIcon={null}
                    >
                        <Option value="all">All</Option>
                        <Option value="active">Active</Option>
                        <Option value="inactive">Inactive</Option>
                    </Select>
                    
                    <Select
                        placeholder="Select"
                        style={{ width: 120 }}
                        suffixIcon={null}
                    >
                        <Option value="all">All Specializations</Option>
                        <Option value="cardiology">Cardiology</Option>
                        <Option value="neurology">Neurology</Option>
                    </Select>

                    <RangePicker 
                        placeholder={['mm/dd/yyyy', 'mm/dd/yyyy']}
                        suffixIcon={<CalendarOutlined />}
                        style={{ borderRadius: '6px' }}
                    />
                </div>

                {/* Table */}
                <Table
                    columns={columns}
                    dataSource={doctors}
                    pagination={{
                        current: 1,
                        pageSize: 5,
                        total: doctors.length,
                        showSizeChanger: false,
                        showQuickJumper: false,
                        style: { marginTop: '20px' }
                    }}
                    style={{
                        backgroundColor: 'white'
                    }}
                    scroll={{ x: true }}
                />

                {/* Footer */}
                <div style={{ 
                    marginTop: '16px', 
                    color: '#8c8c8c', 
                    fontSize: '14px' 
                }}>
                    Showing 1 to 5 of 25 results
                </div>
            </div>
        </div>
    );
};

export default DoctorList;