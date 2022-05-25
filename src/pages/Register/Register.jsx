import { Button, Col, Input, message, Row } from 'antd';
import React, { useState } from 'react';
import './register.css';
import carImage from './img/img-mobil.png';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    role: 'user',
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://rent-car-appx.herokuapp.com/admin/auth/register',
        data: registerData,
      });

      console.log(res.status);

      if (res.status === 201) {
        setTimeout(() => {
          message.success('Register Success!');
        }, 2000);
        navigate('login');
      }
    } catch (error) {
      setTimeout(() => {
        message.error('Register Failed! Email Already Exist!');
      }, 2000);
    }
  };

  return (
    <>
      <Row>
        <Col lg={{ span: 16 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <img className="car-img" src={carImage} alt="" />
        </Col>
        <Col lg={{ span: 8 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <div className="logo" />
            <h1>Create New Account</h1>
            <p>Email</p>
            <Input
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  email: e.target.value,
                })
              }
              type="email"
              style={{ width: '100%', marginBottom: '0.625rem' }}
              placeholder="Email"
              required
            ></Input>
            <p>Password</p>
            <Input.Password
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  password: e.target.value,
                })
              }
              style={{ marginBottom: '1rem' }}
              placeholder="Password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              required
            />
            <Button
              onClick={() => {
                handleSubmit();
              }}
              type="primary"
              block
              style={{ marginBottom: '0.625rem' }}
            >
              Sign Up
            </Button>
            <p style={{ textAlign: 'center' }}>
              Already have an account? <a href="login">Sign in here</a>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Register;
