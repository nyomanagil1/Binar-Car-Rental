import { Button, Col, Input, message, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import './login.css';
import carImage from './img/img-mobil.png';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const responseGoogle = (response) => {
    localStorage.setItem('token', response.tokenObj.id_token);
    navigate('/', { replace: true });
  };

  const handleSubmit = async () => {
    try {
      if (!loginData.email || !loginData.password) {
        message.error('Please fill all the fields!');
      }
      const res = await axios({
        method: 'POST',
        url: 'https://rent-car-appx.herokuapp.com/admin/auth/login',
        data: loginData,
      });

      console.log(res.status);

      if (res.status === 201) {
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('role', res.data.role);
        if (res.data.role === 'admin') {
          navigate('/dashboard', { replace: true });
        }
        if (res.data.role === 'user') {
          navigate('/', { replace: true });
        }
      }
    } catch (error) {
      if (error.response.status === 404) {
        message.error('Login Failed!');
      }
      if (error.response.status === 400) {
        message.error('Login Failed! Wrong Password!');
      }
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '729006514227-ss4vubs0l5ttu2n9jmcca84o6nhlauqc.apps.googleusercontent.com',
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  return (
    <>
      <Row>
        <Col lg={{ span: 16 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <img className="car-img" src={carImage} alt="" />
        </Col>
        <Col lg={{ span: 8 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <div className="logo" />
            <h1>Welcome, Admin BCR</h1>
            <p>Email</p>
            <Input
              required
              style={{ marginBottom: '1rem' }}
              placeholder="admin@mail.com / user@user.com"
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
              required
              style={{ marginBottom: '1rem' }}
              placeholder="Password = 123456"
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
                handleSubmit();
              }}
              type="primary"
              block
              style={{ marginBottom: '0.625rem' }}
            >
              Sign In
            </Button>
            <div className="google-login">
              <GoogleLogin clientId="729006514227-ss4vubs0l5ttu2n9jmcca84o6nhlauqc.apps.googleusercontent.com" buttonText="Login with Google" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />
            </div>
            <p style={{ textAlign: 'center' }}>
              Don't have an account?<a href="register"> Sign Up for free</a>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
