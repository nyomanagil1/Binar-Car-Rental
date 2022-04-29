import { AutoComplete, Button, Col, Input, Row } from 'antd';
import React from 'react';
import './register.css';
import carImage from './img/img-mobil.png';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Register() {
  return (
    <>
      <Row>
        <Col span={16}>
          <img src={carImage} alt="" />
        </Col>
        <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <div className="logo" />
            <h1>Create New Account</h1>
            <p>Email</p>
            <AutoComplete style={{ width: '100%', marginBottom: '0.625rem' }} placeholder="Email" />
            <p>Password</p>
            <Input.Password style={{ marginBottom: '1rem' }} placeholder="input password" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            <Button type="primary" block style={{ marginBottom: '0.625rem' }}>
              Sign Up
            </Button>
            <a href="login">Already have an account? Login</a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Register;
