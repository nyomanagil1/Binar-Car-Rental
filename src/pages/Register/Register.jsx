import { Button, Col, Input, Row } from 'antd';
import React from 'react';
import './register.css';
import carImage from './img/img-mobil.png';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Register() {
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
            <Input type="email" style={{ width: '100%', marginBottom: '0.625rem' }} placeholder="Email" required></Input>
            <p>Password</p>
            <Input.Password style={{ marginBottom: '1rem' }} placeholder="Password" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} required />
            <Button type="primary" block style={{ marginBottom: '0.625rem' }}>
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
