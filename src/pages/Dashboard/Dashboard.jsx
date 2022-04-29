import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space, Table } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

function Dashboard() {
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={new Array(11).fill(null).map((_, index) => {
        const key = index + 1;
        return {
          key,
          label: `${key}`,
        };
      })}
    />
  );

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'User Email',
      dataIndex: 'email',
      sorter: {
        compare: (a, b) => a.email - b.email,
        multiple: 3,
      },
    },
    {
      title: 'Car',
      dataIndex: 'car',
      sorter: {
        compare: (a, b) => a.car - b.car,
        multiple: 2,
      },
    },
    {
      title: 'Start Rent',
      dataIndex: 'startRent',
      sorter: {
        compare: (a, b) => a.startRent - b.startRent,
        multiple: 1,
      },
    },
    {
      title: 'Finish Rent',
      dataIndex: 'finishRent',
      sorter: {
        compare: (a, b) => a.finishRent - b.finishRent,
        multiple: 1,
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 1,
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: {
        compare: (a, b) => a.status - b.status,
        multiple: 1,
      },
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'abcd@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'bcde@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 'asdad@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '4',
      name: 'Jim Red',
      email: 'gdfgsaf@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '5',
      name: 'Jim Red',
      email: 'gdfgsaf@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '6',
      name: 'Jim Red',
      email: 'gdfgsaf@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '7',
      name: 'Jim Red',
      email: 'gdfgsaf@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '8',
      name: 'Jim Red',
      email: 'gdfgsaf@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '9',
      name: 'Jim Red',
      email: 'gdfgsaf@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '10',
      name: 'Jim Red',
      email: 'gdfgsaf@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
    {
      key: '11',
      name: 'Jim Red',
      email: 'gdfgsaf@user.com',
      car: 'Car',
      startRent: 'Start Rent',
      finishRent: 'Finish Rent',
      price: 'Price',
      status: 'Status',
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('login');
    }
  }, []);

  return (
    <>
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <div style={{ display: 'flex' }}>
        <div style={{ paddingRight: '20px' }}>
          <p>Limit</p>
          <Dropdown overlay={menu}>
            <Button>
              <Space>
                3
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <div style={{ paddingRight: '20px' }}>
          <p>Jump to page</p>
          <Dropdown overlay={menu}>
            <Button>
              <Space>
                1
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
