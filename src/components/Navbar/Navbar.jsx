import React, { useState } from 'react';
import { Avatar, Button, Dropdown, Input, Layout, Menu, Space } from 'antd';
import { MenuFoldOutlined, MenuOutlined, HomeOutlined, CarOutlined, DownOutlined } from '@ant-design/icons';
import './navbar.css';
import { Outlet, useNavigate } from 'react-router-dom';

function Navbar() {
  const { Header, Sider, Content } = Layout;
  const { Search } = Input;
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate('login', { replace: true });
  }

  const menu = (
    <Menu
      items={[
        {
          label: <Button onClick={() => handleLogout()}>Logout</Button>,
        },
      ]}
    />
  );
  const [state, setState] = useState(false);
  const toggle = () => {
    state ? setState(false) : setState(true);
  };

  return (
    <Layout>
      <Sider className="sider" style={{ height: '100vh' }} trigger={null} collapsible collapsed={state}>
        <div className="logo" />
        <Menu
          className="sidermenu"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Dashboard',
              onClick: () => navigate('dashboard'),
            },
            {
              key: '2',
              icon: <CarOutlined />,
              label: 'Cars',
              onClick: () => navigate('cars'),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="trigger" onClick={toggle}>
            {setState ? <MenuOutlined /> : <MenuFoldOutlined />}
          </div>
          <div className="user">
            <Search placeholder="input search text" allowClear enterButton="Search" size="large" style={{ maxWidth: '300px', marginRight: '20px' }} />
            <Avatar style={{ color: '#151515', backgroundColor: '#CFD4ED', marginRight: '7px' }}>U</Avatar>
            <Dropdown overlay={menu} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {localStorage.getItem('role')}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          className="site-layout-background-content"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Navbar;
