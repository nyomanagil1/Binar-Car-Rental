import { AutoComplete, Button, Col, Input, Row } from 'antd';
import React, { useState } from 'react';
import './login.css';
import carImage from './img/img-mobil.png';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        data: loginData,
      });

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row>
        <Col span={16}>
          <img src={carImage} alt="" />
        </Col>
        <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <div className="logo" />
            <h1>Welcome, Admin BCR</h1>
            <p>Email</p>
            <Input
              style={{ marginBottom: '1rem' }}
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
            />
            <p>Password</p>
            <Input.Password
              style={{ marginBottom: '1rem' }}
              placeholder="Password"
              value={loginData.password}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
            />
            <Button
              onClick={() => {
                handleData();
                handleSubmit();
              }}
              type="primary"
              block
              style={{ marginBottom: '0.625rem' }}
            >
              Sign In
            </Button>
            <a href="register">Doesn't have an account? Register</a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
